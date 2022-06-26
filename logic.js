
// main and display1 are common for all 

let sol1 = document.getElementById('sol1');
let display1 = document.getElementById('display1');
let main = document.getElementById("main");
let sol1C = document.getElementById('sol1C');
sol1.addEventListener('click', function () {
    display1.style.visibility = 'visible';
    main.innerHTML = `
    #include &lt;iostream>
    using namespace std;
    int main()
    {
        int n;
        cin >> n;
        int j = 0;
        for (int i = 0; i <= n; i++)
        {
            j = j + i;
        }
        cout << j;
        return 0;
    }`;
});

sol1C.addEventListener('click', function () {
    display1.style.visibility = 'hidden';
});


let sol2 = document.getElementById('sol2');
let display2 = document.getElementById('display2');
let sol2C = document.getElementById('sol2C');
sol2.addEventListener('click', function () {
    display1.style.visibility = 'visible';
    main.innerHTML = `
    #include &lt;iostream>
    using namespace std;
    int main()
    {
        int n;
        cin >> n;
        int j = 1;
        for (int i = 1; i <= n; i++)
        {
            j = j * i;
        }
        cout << j;
        return 0;
    }`;
});

sol2C.addEventListener('click', function () {
    display1.style.visibility = 'hidden';
});