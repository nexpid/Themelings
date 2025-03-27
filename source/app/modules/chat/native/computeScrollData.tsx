// app/modules/chat/native/computeScrollData.tsx
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RowType;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat/native/computeScrollData.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: computeScrollData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = tangon.rows;
            offset = tangon.scrollToMessageId;
            verify = tangon.jumpTargetId;
            foxtra = tangon.jumpType;
            zuuluu = tangon.newlyLoaded;
            michal = tangon.animated;
            report = tangon.scrollPosition;
            if(!zuuluu) { _fun00002_ip = 77; continue _fun00001 }
 50:
            golfie = null;
            if(!(golfie == verify)) { _fun00002_ip = 77; continue _fun00001 }
 56:
            zuuluu = function(argFoo) { // Original name: findUnreadSeperatorRowIndex
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.findIndex;
                    entity = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            michal = argFoo;
                            zuuluu = michal.type;
                            entity = _closure1_slot3;
                            entity = entity.SEPARATOR;
                            entity = zuuluu === entity;
                            if(!entity) { _fun00006_ip = 40; continue _fun00005 }
 28:
                            zuuluu = michal.scrollTo;
                            michal = null;
                            entity = michal != zuuluu;
 40:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    michal = -1;
                    if(!(michal === entity)) { _fun00004_ip = 37; continue _fun00003 }
 33:
                    michal = undefined;
                    return michal;
 37:
                    return entity;
                }
            };
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(oscard);
            if(!(golfie == zuuluu)) { _fun00002_ip = 223; continue _fun00001 }
 77:
            golfie = null;
            if(!(golfie != offset)) { _fun00002_ip = 102; continue _fun00001 }
 83:
            entity = function(argFoo, argBar) { // Original name: findMessageRowIndex
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    michal = argBar;
                    var _closure3_slot0 = michal;
                    michal = zuuluu.findIndex;
                    entity = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            michal = argFoo;
                            zuuluu = michal.message;
                            entity = null;
                            entity = entity != zuuluu;
                            if(!entity) { _fun00010_ip = 38; continue _fun00009 }
 17:
                            michal = michal.message;
                            zuuluu = michal.id;
                            michal = _closure3_slot0;
                            entity = zuuluu === michal;
 38:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    michal = -1;
                    if(!(michal === entity)) { _fun00008_ip = 44; continue _fun00007 }
 40:
                    michal = undefined;
                    return michal;
 44:
                    return entity;
                }
            };
            option = undefined;
            oscard = entity.bind(option)(oscard, offset);
            if(!(golfie == oscard)) { _fun00002_ip = 106; continue _fun00001 }
 102:
            entity = undefined;
            return entity;
 106:
            entity = {};
            entity['index'] = oscard;
            yankee = _closure1_slot2;
            yankee = yankee.useReducedMotion;
            yankee = !yankee;
            if(!yankee) { _fun00002_ip = 167; continue _fun00001 }
 131:
            backup = _closure1_slot0;
            kiloes = _closure1_slot1;
            romeon = 3;
            romeon = kiloes[romeon];
            romeon = backup.bind(option)(romeon);
            romeon = romeon.JumpTypes;
            romeon = romeon.INSTANT;
            yankee = foxtra !== romeon;
 167:
            entity['animate'] = yankee;
            verify = offset === verify;
            entity['highlight'] = verify;
            if(!(golfie == report)) { _fun00002_ip = 217; continue _fun00001 }
 185:
            golfie = _closure1_slot0;
            verify = _closure1_slot1;
            oscard = 2;
            oscard = verify[oscard];
            oscard = golfie.bind(option)(oscard);
            oscard = oscard.ChatScrollPosition;
            report = oscard.TOP;
 217:
            entity['position'] = report;
            return entity;
 223:
            entity = {};
            entity['index'] = zuuluu;
            if(!michal) { _fun00002_ip = 248; continue _fun00001 }
 232:
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.useReducedMotion;
            michal = !zuuluu;
 248:
            entity['animate'] = michal;
            michal = false;
            entity['highlight'] = michal;
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 2;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ChatScrollPosition;
            michal = michal.TOP;
            entity['position'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();