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
            zuuluu = function(argFoo) { // Original name: findUnreadSeperatorRow
                zuuluu = argFoo;
                michal = zuuluu.find;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = argFoo;
                        zuuluu = michal.type;
                        entity = _closure1_slot3;
                        entity = entity.SEPARATOR;
                        entity = zuuluu === entity;
                        if(!entity) { _fun00004_ip = 40; continue _fun00003 }
 28:
                        zuuluu = michal.scrollTo;
                        michal = null;
                        entity = michal != zuuluu;
 40:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(oscard);
            if(!(golfie == zuuluu)) { _fun00002_ip = 228; continue _fun00001 }
 77:
            golfie = null;
            if(!(golfie != offset)) { _fun00002_ip = 102; continue _fun00001 }
 83:
            entity = function(argFoo, argBar) { // Original name: findMessageRow
                zuuluu = argFoo;
                michal = argBar;
                var _closure3_slot0 = michal;
                michal = zuuluu.find;
                entity = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = argFoo;
                        zuuluu = michal.message;
                        entity = null;
                        entity = entity != zuuluu;
                        if(!entity) { _fun00006_ip = 38; continue _fun00005 }
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
                return entity;
            };
            option = undefined;
            oscard = entity.bind(option)(oscard, offset);
            if(!(golfie == oscard)) { _fun00002_ip = 106; continue _fun00001 }
 102:
            entity = undefined;
            return entity;
 106:
            entity = {};
            oscard = oscard.index;
            entity['index'] = oscard;
            yankee = _closure1_slot2;
            yankee = yankee.useReducedMotion;
            yankee = !yankee;
            if(!yankee) { _fun00002_ip = 172; continue _fun00001 }
 136:
            backup = _closure1_slot0;
            kiloes = _closure1_slot1;
            romeon = 3;
            romeon = kiloes[romeon];
            romeon = backup.bind(option)(romeon);
            romeon = romeon.JumpTypes;
            romeon = romeon.INSTANT;
            yankee = foxtra !== romeon;
 172:
            entity['animate'] = yankee;
            verify = offset === verify;
            entity['highlight'] = verify;
            if(!(golfie == report)) { _fun00002_ip = 222; continue _fun00001 }
 190:
            golfie = _closure1_slot0;
            verify = _closure1_slot1;
            oscard = 2;
            oscard = verify[oscard];
            oscard = golfie.bind(option)(oscard);
            oscard = oscard.ChatScrollPosition;
            report = oscard.TOP;
 222:
            entity['position'] = report;
            return entity;
 228:
            entity = {};
            zuuluu = zuuluu.index;
            entity['index'] = zuuluu;
            if(!michal) { _fun00002_ip = 258; continue _fun00001 }
 242:
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.useReducedMotion;
            michal = !zuuluu;
 258:
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