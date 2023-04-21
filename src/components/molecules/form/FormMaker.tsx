import { Formik, Form } from 'formik';

import { type IFormMaker } from './form.interface';
import FormField from './Formfield';

const FormMaker: React.FunctionComponent<IFormMaker> = ({
  formfields = [],
  onSubmit = () => {},
  initialValues = {},
  validationSchema,
  isValidateOnBlur,
  isValidateOnChange,
  isValidateOnMount = true,
  buttonText,
  isSubmitting: isSubmitExecuting,
  onChange = () => {},
  onBlur = () => {},
  onValidate,
  formik,
  fieldData,
  isMixpanelTrackOn = false,
  mixPanelTrackScreenName,
}) => {
  return (
    <Formik
      initialValues={formik?.initialValues ?? initialValues}
      onSubmit={(e) => (formik ? formik.handleSubmit(e) : onSubmit(e))}
      validationSchema={validationSchema}
      validate={onValidate}
      validateOnMount={isValidateOnMount}
      validateOnBlur={isValidateOnBlur}
      validateOnChange={isValidateOnChange}
    >
      {({
        isValidating,
        isSubmitting,
        values,
        errors,
        touched,
        handleBlur: handleOnBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <Form onSubmit={handleSubmit}>
          {formfields?.map((field, index) => {
            return (
              <FormField
                key={index}
                onBlur={(e: any) => {
                  if (formik != null) {
                    formik?.handleBlur(e);
                  } else {
                    handleOnBlur(e);
                  }
                  onBlur(values);
                }}
                handleChange={(changesValue: any, updatedFieldName: string | undefined) => {
                  onChange({ ...values, ...changesValue }, updatedFieldName);
                }}
                value={
                  (formik != null)
                    ? formik?.values?.[field?.fieldName]
                    : values?.[field?.fieldName]
                }
                setFieldValue={formik?.setFieldValue ?? setFieldValue}
                errors={(formik != null) ? formik?.errors : errors}
                touched={(formik != null) ? formik?.touched : touched}
                buttonText={field?.buttonText ?? buttonText}
                isValidating={(formik != null) ? formik?.isValidating : isValidating}
                isSubmitting={(formik != null) ? formik?.isSubmitting : isSubmitting}
                isSubmitExecuting={isSubmitExecuting}
                startIcon={field?.startIcon}
                endIcon={field?.endIcon}
                description={field?.description}
                type={field?.type}
                placeholder={field?.placeholder}
                fieldName={field?.fieldName}
                label={field?.label}
                options={field?.options}
                disabled={field?.disabled}
                required={field?.required}
                isRow={field?.isRow}
                subtitle={field?.subtitle}
                title={field?.title}
                heading={field?.heading}
                textAreaMinRows={field?.textAreaMinRows}
                fieldData={fieldData}
                isdescriptiontooltip={field?.isdescriptiontooltip}
                component={field?.component}
                element={field?.element}
                maxdate={field?.maxdate}
                mindate={field?.mindate}
                allFieldValues={formik?.values ?? values}
                isMixpanelTrackOn={
                  isMixpanelTrackOn ?? !!((field?.isMixpanelTrackOn) ?? false)
                }
                mixPanelTrackScreenName={mixPanelTrackScreenName}
              />
            );
          })}
        </Form>
      )}
    </Formik>
  );
};

export default FormMaker;
