const hr = document.getElementById('hour')
const mn = document.getElementById('mins')
const sc = document.getElementById('secs')
const mill = document.getElementById('mil')
const st = document.getElementById('status')

function digitClock(){
    const h = new Date().getHours()
    const m = new Date().getMinutes()
    const s = new Date().getSeconds()
    const mm = new Date().getMilliseconds()

    hr.textContent = h > 12 ? h - 12 : h
    mn.textContent = m >= 10 ? m : '0' + m 
    sc.textContent = s >= 10 ? s : '0' + s  
    mill.textContent = mm
    st.textContent = h >= 12 ? 'pm' : 'am'

    setTimeout(()=>digitClock(), 100)
}

digitClock()