// app/modules/messages/getStickerDiscoverableGuild.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/getStickerDiscoverableGuild.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 1;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        tangon = michal.HTTP;
        zuuluu = tangon.get;
        michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        golfie = _closure1_slot2;
        oscard = golfie.STICKER_GUILD_DATA;
        report = argFoo;
        report = oscard.bind(golfie)(report);
        michal['url'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                entity = null;
                tangon = entity == michal;
                report = undefined;
                zuuluu = undefined;
                if(tangon) { _fun00002_ip = 21; continue _fun00001 }
 16:
                zuuluu = michal.body;
 21:
                zuuluu = entity != zuuluu;
                entity = null;
                if(!zuuluu) { _fun00002_ip = 69; continue _fun00001 }
 30:
                tangon = _closure1_slot0;
                oscard = _closure1_slot1;
                zuuluu = 2;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.makeDiscoverableGuild;
                michal = michal.body;
                entity = zuuluu.bind(tangon)(michal);
 69:
                return entity;
            }
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.catch;
        entity = function() {
            entity = null;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();