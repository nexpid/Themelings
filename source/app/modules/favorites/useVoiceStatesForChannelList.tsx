// app/modules/favorites/useVoiceStatesForChannelList.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FAVORITES;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/favorites/useVoiceStatesForChannelList.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useVoiceStatesForChannelList
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        golfie = _closure1_slot3;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        golfie = _closure1_slot2;
        zuuluu[1] = golfie;
        michal = _closure1_slot4;
        zuuluu[2] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure2_slot0;
                zuuluu = _closure1_slot5;
                if(!(tangon === zuuluu)) { _fun00002_ip = 100; continue _fun00001 }
 18:
                tangon = _closure1_slot4;
                zuuluu = tangon.getFavoriteChannels;
                tangon = zuuluu.bind(tangon)();
                zuuluu = {};
                option = tangon;
                tangon = null;
                for(report in option)
 47:
                {
 56:
                    yankee = report;
                    romeon = _closure1_slot2;
                    offset = romeon.getChannel;
                    foxtra = offset.bind(romeon)(yankee);
                    if(tangon == foxtra) { _fun00002_ip = 47; continue _fun00001 }
 77:
                    romeon = _closure1_slot3;
                    offset = romeon.getVoiceStatesForChannel;
                    offset = offset.bind(romeon)(foxtra);
                    zuuluu[yankee] = offset;
                    _fun00002_ip = 47; continue _fun00001;
                }
 98:
                return zuuluu;
 100:
                zuuluu = _closure1_slot3;
                michal = zuuluu.getVoiceStates;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();