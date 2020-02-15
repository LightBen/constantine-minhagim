<template>
    <div id="loading">
        <div id="loading-content">
            <div id="loading-symbol">
                <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                   <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
            <div class="loading-text">
                <span class="lang-fr">Chargement, patienter</span>
                <span class="lang-he">טוען, אנא המתן</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    $offset: 187;
    $duration: 1.4s;

    $offset: 187;
    $duration: 1.4s;

    @keyframes rotator {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(270deg); }
    }

    @keyframes colors {
        0% { stroke: var(--logo-color-1); color: var(--logo-color-1); }
       50% { stroke: var(--logo-color-2); color: var(--logo-color-2); }
      100% { stroke: var(--logo-color-1); color: var(--logo-color-1); }
    }

    @keyframes dash {
        0%  { stroke-dashoffset: $offset; }
        50% {
            stroke-dashoffset: $offset/4;
            transform:rotate(135deg);
        }
        100% {
            stroke-dashoffset: $offset;
            transform:rotate(450deg);
        }
    }

    .spinner {
      animation: rotator $duration linear infinite;
    }

    .path {
        stroke-dasharray: $offset;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: dash $duration ease-in-out infinite, colors ($duration*4) ease-in-out infinite;
    }



    #loading { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; background-color: #ffffffdd; }
    #loading-content { display: flex; align-items: center; justify-content: center; flex-direction: column; }
    .loading-text { animation: colors ($duration*4) ease-in-out infinite; } 

    html[data-theme="dark"] {
        #loading { background-color: #000000dd; color: #fff; }
        .loading-text { animation: none; } 
        .path { animation: dash $duration ease-in-out infinite; stroke: #fff; }
    }

</style>

<script>
export default {
    name: 'Loading'
};
</script>
