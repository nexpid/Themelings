// app/modules/chat/native/computeScrollData.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo, argBar) { // Original name: findMessageRowIndex
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            var _closure2_slot0 = michal;
            michal = zuuluu.findIndex;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.message;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00004_ip = 38; continue _fun00003 }
 17:
                    michal = michal.message;
                    zuuluu = michal.id;
                    michal = _closure2_slot0;
                    entity = zuuluu === michal;
 38:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            michal = -1;
            if(!(michal === entity)) { _fun00002_ip = 44; continue _fun00001 }
 40:
            michal = undefined;
            return michal;
 44:
            return entity;
        }
    };
    var _closure1_slot5 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.RowType;
    var _closure1_slot3 = option;
    report = report.SeparatorType;
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/chat/native/computeScrollData.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: computeScrollData
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            yankee = michal.rows;
            backup = michal.scrollToMessageId;
            romeon = michal.jumpTargetId;
            output = michal.jumpType;
            entity = michal.newlyLoaded;
            zuuluu = michal.animated;
            golfie = michal.scrollPosition;
            verify = michal.focusTargetId;
            if(!entity) { _fun00006_ip = 83; continue _fun00005 }
 54:
            entity = null;
            if(!(entity == romeon)) { _fun00006_ip = 83; continue _fun00005 }
 60:
            michal = function(argFoo) { // Original name: findUnreadSeperatorRowIndex
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.findIndex;
                    entity = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            zuuluu = argFoo;
                            tangon = zuuluu.type;
                            entity = _closure1_slot3;
                            entity = entity.SEPARATOR;
                            entity = tangon === entity;
                            if(!entity) { _fun00010_ip = 47; continue _fun00009 }
 28:
                            zuuluu = zuuluu.id;
                            michal = _closure1_slot4;
                            michal = michal.UNREAD;
                            entity = zuuluu === michal;
 47:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    michal = -1;
                    if(!(michal === entity)) { _fun00008_ip = 37; continue _fun00007 }
 33:
                    michal = undefined;
                    return michal;
 37:
                    return entity;
                }
            };
            tangon = undefined;
            oscard = michal.bind(tangon)(yankee);
            if(!(entity == oscard)) { _fun00006_ip = 357; continue _fun00005 }
 83:
            report = null;
            michal = report != backup;
            offset = undefined;
            entity = undefined;
            if(!michal) { _fun00006_ip = 272; continue _fun00005 }
 99:
            michal = _closure1_slot5;
            kiloes = michal.bind(offset)(yankee, backup);
            michal = report != kiloes;
            entity = undefined;
            if(!michal) { _fun00006_ip = 272; continue _fun00005 }
 124:
            michal = {};
            result = _closure1_slot0;
            sizing = _closure1_slot1;
            foxtra = 2;
            sizing = sizing[foxtra];
            sizing = result.bind(offset)(sizing);
            sizing = sizing.ChatScrollType;
            sizing = sizing.SCROLL;
            michal['type'] = sizing;
            michal['index'] = kiloes;
            kiloes = _closure1_slot2;
            kiloes = kiloes.useReducedMotion;
            kiloes = !kiloes;
            if(!kiloes) { _fun00006_ip = 218; continue _fun00005 }
 182:
            result = _closure1_slot0;
            echoed = _closure1_slot1;
            sizing = 3;
            sizing = echoed[sizing];
            sizing = result.bind(offset)(sizing);
            sizing = sizing.JumpTypes;
            sizing = sizing.INSTANT;
            kiloes = output !== sizing;
 218:
            michal['animate'] = kiloes;
            romeon = backup === romeon;
            michal['highlight'] = romeon;
            if(!(report == golfie)) { _fun00006_ip = 265; continue _fun00005 }
 236:
            romeon = _closure1_slot0;
            option = _closure1_slot1;
            option = option[foxtra];
            option = romeon.bind(offset)(option);
            option = option.ChatScrollPosition;
            golfie = option.TOP;
 265:
            michal['position'] = golfie;
            entity = michal;
 272:
            if(!(report == entity)) { _fun00006_ip = 355; continue _fun00005 }
 276:
            golfie = report != verify;
            michal = undefined;
            if(!golfie) { _fun00006_ip = 352; continue _fun00005 }
 285:
            golfie = _closure1_slot5;
            golfie = golfie.bind(offset)(yankee, verify);
            report = report != golfie;
            michal = undefined;
            if(!report) { _fun00006_ip = 352; continue _fun00005 }
 307:
            report = {};
            verify = _closure1_slot0;
            yankee = _closure1_slot1;
            option = 2;
            option = yankee[option];
            option = verify.bind(offset)(option);
            option = option.ChatScrollType;
            option = option.FOCUS_ONLY;
            report['type'] = option;
            report['index'] = golfie;
            michal = report;
 352:
            entity = michal;
 355:
            return entity;
 357:
            entity = {};
            option = _closure1_slot0;
            golfie = _closure1_slot1;
            report = 2;
            golfie = golfie[report];
            golfie = option.bind(tangon)(golfie);
            golfie = golfie.ChatScrollType;
            golfie = golfie.SCROLL;
            entity['type'] = golfie;
            entity['index'] = oscard;
            if(!zuuluu) { _fun00006_ip = 418; continue _fun00005 }
 405:
            oscard = _closure1_slot2;
            oscard = oscard.useReducedMotion;
            zuuluu = !oscard;
 418:
            entity['animate'] = zuuluu;
            zuuluu = false;
            entity['highlight'] = zuuluu;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[report];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ChatScrollPosition;
            michal = michal.TOP;
            entity['position'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['findMessageRowIndex'] = michal;
    return entity;
})();