import './add_record_panel.css'

export default function AddRecordPanel (patientList) {

    const addPatients = () => {
        for (var i=0; i<patientList.length; i++) {
            let newOption = new Option(patientList[i], patientList[i])
            document.getElementsByID('patient-select').add(newOption)
        }
    }

    return (
        <div id='outer-box'>
            <div id='inner-box'>
                <form>
                    <div className="form-div">
                        <label className='input-label'>Patient</label>
                        <select id='patient-select'></select>
                    </div>
                    <div className="form-div">
                        <label className='input-label'>Subject</label>
                        <input type='text' id='subject-input'></input>
                    </div>
                    <div className="form-div">
                        <label className='input-label'>Log</label>
                        <input type='text' id='log-input'></input>
                    </div>
                </form>
                <div id='button-div'>
                    <button>Post</button>
                </div>
            </div>
        </div>
    )

} 