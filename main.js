function count(name){
    name = name.toLowerCase()
    let i =0;
    let count =0;
    while(name.length != i){
        if (name[i] == 'a'){
            count = count + 1;
        }
        else if (name[i] == 'b'){
            count = count + 2;
        }
        else if (name[i] == 'c'){
            count = count + 3;
        }
        else if (name[i] == 'd'){
            count = count + 4;
        }
        else if (name[i] == 'e'){
            count = count + 5;
        }
        else if (name[i] == 'f'){
            count = count + 6;
        }
        else if (name[i] == 'g'){
            count = count + 7;
        }
        else if (name[i] == 'h'){
            count = count + 8;
        }
        else if (name[i] == 'i'){
            count = count + 9;
        }
        else if (name[i] == 'j'){
            count = count + 10;
        }
        else if (name[i] == 'k'){
            count = count + 11;
        }
        else if (name[i] == 'l'){
            count = count + 12;
        }
        else if (name[i] == 'm'){
            count = count + 13;
        }
        else if (name[i] == 'n'){
            count = count + 14;
        }
        else if (name[i] == 'o'){
            count = count + 15;
        }
        else if (name[i] == 'p'){
            count = count + 16;
        }
        else if (name[i] == 'q'){
            count = count + 17;
        }
        else if (name[i] == 'r'){
            count = count + 18;
        }
        else if (name[i] == 's'){
            count = count + 19;
        }
        else if (name[i] == 't'){
            count = count + 20;
        }
        else if (name[i] == 'u'){
            count = count + 21;
        }
        else if (name[i] == 'v'){
            count = count + 22;
        }
        else if (name[i] == 'w'){
            count = count + 23;
        }
        else if (name[i] == 'x'){
            count = count + 24;
        }
        else if (name[i] == 'y'){
            count = count + 25;
        }
        else if (name[i] == 'z'){
            count = count + 26;
        }
        i++;
    }
    c = count + name.length;
    if(c > 100){
        return c/2;
    }else{
        return c;
    }
}

const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', ()=>{
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    n1 = count(name1);
    n2 = count(name2);
    output.innerText = (n1+n2)/2 + "%";
});
