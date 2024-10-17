'use strict';
window.onload = async function () {
    const urlParams = new URLSearchParams(window.location.search);
    Variables.ApiUrl = urlParams.get('api') || 'https://api.breathingworld.com';

    await Core.GetSettings();
    Socket.PrepareWebsocketCommunication();
    Core.PrepareMapWrap();
    AddDragMapEvent();
    Core.AddEvents();
    Core.PrepareCanvas();
    Core.PrepareImageSources();
}
window.onresize = function () {
    Core.DrawMap(true, false);
}