// app/modules/chat/useTypingUsersIds.tsx
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
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat/useTypingUsersIds.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useTypingUserIds
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            oscard = arguments[1];
            var _closure2_slot0 = golfie;
            report = undefined;
            if(!(oscard === report)) { _fun00002_ip = 32; continue _fun00001 }
 18:
            michal = global;
            michal = michal.Number;
            oscard = michal.MAX_SAFE_INTEGER;
 32:
            var _closure2_slot1 = oscard;
            tangon = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 3;
            zuuluu = option[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.useStateFromStoresArray;
            option = _closure1_slot4;
            zuuluu = new Array(3);
            zuuluu[0] = option;
            option = _closure1_slot3;
            zuuluu[1] = option;
            michal = _closure1_slot2;
            zuuluu[2] = michal;
            michal = new Array(2);
            michal[0] = golfie;
            michal[1] = oscard;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot4;
                    entity = michal.getCurrentUser;
                    entity = entity.bind(michal)();
                    verify = null;
                    michal = verify == entity;
                    option = undefined;
                    if(michal) { _fun00004_ip = 32; continue _fun00003 }
 27:
                    option = entity.id;
 32:
                    zuuluu = _closure1_slot3;
                    michal = zuuluu.getTypingUsers;
                    entity = _closure2_slot0;
                    michal = michal.bind(zuuluu)(entity);
                    entity = new Array(0);
                    report = michal;
                    for(michal in report)
 69:
                    {
 78:
                        foxtra = michal;
                        romeon = entity.length;
                        yankee = _closure2_slot1;
                        if(!(!(romeon >= yankee))) { _fun00004_ip = 162; continue _fun00003 }
 94:
                        romeon = _closure1_slot4;
                        yankee = romeon.getUser;
                        yankee = yankee.bind(romeon)(foxtra);
                        if(verify == yankee) { _fun00004_ip = 69; continue _fun00003 }
 113:
                        romeon = yankee.id;
                        if(romeon === option) { _fun00004_ip = 69; continue _fun00003 }
 122:
                        backup = _closure1_slot2;
                        foxtra = backup.isBlockedOrIgnored;
                        romeon = yankee.id;
                        romeon = foxtra.bind(backup)(romeon);
                        if(romeon) { _fun00004_ip = 69; continue _fun00003 }
 145:
                        romeon = entity.push;
                        yankee = yankee.id;
                        yankee = romeon.bind(entity)(yankee);
                        _fun00004_ip = 69; continue _fun00003;
                    }
 162:
                    return entity;
                }
            };
            entity = tangon.bind(report)(zuuluu, entity, michal);
            return entity;
        }
    };
    zuuluu['useTypingUserIds'] = michal;
    return entity;
})();