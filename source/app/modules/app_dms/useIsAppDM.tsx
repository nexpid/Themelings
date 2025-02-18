// app/modules/app_dms/useIsAppDM.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_dms/useIsAppDM.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useISAppDM
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.context;
            report = undefined;
            var _closure2_slot0 = report;
            oscard = zuuluu.type;
            tangon = 'channel';
            michal = undefined;
            if(!(tangon === oscard)) { _fun00002_ip = 36; continue _fun00001 }
 31:
            michal = zuuluu.channel;
 36:
            _closure2_slot0 = michal;
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 1;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useStateFromStores;
            report = _closure1_slot2;
            michal = new Array(1);
            michal[0] = report;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot0;
                    zuuluu = null;
                    entity = zuuluu != entity;
                    if(!entity) { _fun00004_ip = 30; continue _fun00003 }
 16:
                    report = _closure2_slot0;
                    tangon = report.isDM;
                    entity = tangon.bind(report)();
 30:
                    if(!entity) { _fun00004_ip = 55; continue _fun00003 }
 33:
                    tangon = _closure2_slot0;
                    tangon = tangon.recipients;
                    report = tangon.length;
                    tangon = 1;
                    entity = tangon === report;
 55:
                    if(!entity) { _fun00004_ip = 113; continue _fun00003 }
 58:
                    report = _closure1_slot2;
                    tangon = report.getUser;
                    michal = _closure2_slot0;
                    oscard = michal.recipients;
                    michal = 0;
                    michal = oscard[michal];
                    michal = tangon.bind(report)(michal);
                    tangon = zuuluu == michal;
                    zuuluu = undefined;
                    if(tangon) { _fun00004_ip = 107; continue _fun00003 }
 101:
                    zuuluu = michal.bot;
 107:
                    michal = true;
                    entity = michal === zuuluu;
 113:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();