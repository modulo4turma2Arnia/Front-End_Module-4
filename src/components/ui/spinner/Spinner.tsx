import * as C from "./style/style"

export const Spinner: React.FC = () => {
    return(
        <C.FieldSpinner>
            <C.BoxSpinner></C.BoxSpinner>
        </C.FieldSpinner>
    )
}