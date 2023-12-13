import { useNavigation} from "react-router-dom"

const SubmitBtn = ({ text, type }) => {
const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <button
      type={type}
      className="btn btn-primary w-full"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-dots loading-md">sending</span>
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
}

export default SubmitBtn;