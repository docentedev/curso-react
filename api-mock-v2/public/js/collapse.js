document.addEventListener("DOMContentLoaded", function(event) {
    (function() {
        const collapseList = {};
        const nodes = document.querySelectorAll('.collapse');

        const toggle = (event) => {
            const t = event.target;
            const k = t.dataset.key;
            const i = parseInt(t.dataset.index);
            const l = collapseList[k];
            l.forEach((e, currentI) => {
                const cn = e.className;
                if (currentI === i) {
                    if (cn === 'collapse open') {
                        e.className = 'collapse close';
                    }
                    if (cn === 'collapse close') {
                        e.className = 'collapse open';
                    }
                } else {
                    e.className = 'collapse close';
                }
            })
        };

        nodes.forEach((node, i) => {
            if (collapseList[node.dataset.key]) {
                collapseList[node.dataset.key].push(node);
            } else {
                collapseList[node.dataset.key] = [];
                collapseList[node.dataset.key].push(node);
            }

            const buttonTxt = document.createTextNode('Abrir/Cerrar');
            const button = document.createElement('button');
            button.appendChild(buttonTxt);

            button.dataset.key = node.dataset.key;
            button.dataset.index = collapseList[node.dataset.key].length - 1;
            button.className = 'collapse__button';
            button && button.addEventListener('click', toggle);

            const btn = node.appendChild(button);
        });
    })()
});