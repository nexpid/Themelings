// app/modules/permissions/useManageResourcePermissions.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    option = argCor;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    var _closure1_slot7 = report;
    report = tangon.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS;
    var _closure1_slot8 = report;
    tangon = tangon.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot10 = tangon;
    tangon = {'canCreateExpressions': false, 'canCreateGuildEvent': false, 'canManageAllExpressions': false, 'canManageAllEvents': false};
    report = function() { // Original name: canManageGuildExpression
        entity = false;
        return entity;
    };
    tangon['canManageGuildExpression'] = report;
    report = function() { // Original name: canManageGuildEvent
        entity = false;
        return entity;
    };
    tangon['canManageGuildEvent'] = report;
    var _closure1_slot11 = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: canManageResource
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            tangon = argCor;
            golfie = null;
            entity = golfie != oscard;
            if(!entity) { _fun00002_ip = 181; continue _fun00001 }
 21:
            michal = argBaz;
            zuuluu = !michal;
            michal = !zuuluu;
            if(!zuuluu) { _fun00002_ip = 178; continue _fun00001 }
 36:
            zuuluu = 'creator_id';
            zuuluu = zuuluu in oscard;
            if(zuuluu) { _fun00002_ip = 147; continue _fun00001 }
 47:
            zuuluu = 'userId';
            zuuluu = zuuluu in oscard;
            if(zuuluu) { _fun00002_ip = 115; continue _fun00001 }
 58:
            zuuluu = 'user';
            zuuluu = zuuluu in oscard;
            if(!zuuluu) { _fun00002_ip = 113; continue _fun00001 }
 69:
            option = tangon;
            if(!tangon) { _fun00002_ip = 79; continue _fun00001 }
 75:
            option = golfie != report;
 79:
            if(!option) { _fun00002_ip = 110; continue _fun00001 }
 82:
            verify = oscard.user;
            yankee = golfie == verify;
            offset = undefined;
            if(yankee) { _fun00002_ip = 101; continue _fun00001 }
 96:
            offset = verify.id;
 101:
            verify = report.id;
            option = offset === verify;
 110:
            zuuluu = option;
 113:
            _fun00002_ip = 145; continue _fun00001;
 115:
            option = tangon;
            if(!tangon) { _fun00002_ip = 125; continue _fun00001 }
 121:
            option = golfie != report;
 125:
            if(!option) { _fun00002_ip = 142; continue _fun00001 }
 128:
            offset = oscard.userId;
            verify = report.id;
            option = offset === verify;
 142:
            zuuluu = option;
 145:
            _fun00002_ip = 175; continue _fun00001;
 147:
            if(!tangon) { _fun00002_ip = 154; continue _fun00001 }
 150:
            tangon = golfie != report;
 154:
            if(!tangon) { _fun00002_ip = 172; continue _fun00001 }
 157:
            oscard = oscard.creator_id;
            report = report.id;
            tangon = oscard === report;
 172:
            zuuluu = tangon;
 175:
            michal = zuuluu;
 178:
            entity = michal;
 181:
            return entity;
        }
    };
    var _closure1_slot12 = tangon;
    tangon = function(argFoo) { // Original name: attachChannelPermissions
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00004_ip = 140; continue _fun00003 }
 12:
            report = _closure1_slot7;
            michal = zuuluu.isGuildStageVoice;
            michal = michal.bind(zuuluu)();
            if(michal) { _fun00004_ip = 51; continue _fun00003 }
 32:
            michal = zuuluu.isGuildVoice;
            michal = michal.bind(zuuluu)();
            if(!michal) { _fun00004_ip = 55; continue _fun00003 }
 45:
            report = _closure1_slot9;
            _fun00004_ip = 55; continue _fun00003;
 51:
            report = _closure1_slot8;
 55:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 6;
            michal = golfie[zuuluu];
            tangon = undefined;
            verify = oscard.bind(tangon)(michal);
            option = verify.combine;
            michal = _closure1_slot10;
            entity = michal.CREATE_EVENTS;
            option = option.bind(verify)(report, entity);
            entity = new Array(2);
            entity[0] = option;
            zuuluu = golfie[zuuluu];
            tangon = oscard.bind(tangon)(zuuluu);
            zuuluu = tangon.combine;
            michal = michal.MANAGE_EVENTS;
            michal = zuuluu.bind(tangon)(report, michal);
            entity[1] = michal;
            return entity;
 140:
            michal = _closure1_slot10;
            zuuluu = michal.CREATE_EVENTS;
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = michal.MANAGE_EVENTS;
            entity[1] = michal;
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/permissions/useManageResourcePermissions.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['attachChannelPermissions'] = tangon;
    tangon = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argFoo;
            var _closure2_slot0 = verify;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 7;
            zuuluu = report[zuuluu];
            offset = undefined;
            tangon = tangon.bind(offset)(zuuluu);
            zuuluu = tangon.isGuildRecord;
            zuuluu = zuuluu.bind(tangon)(verify);
            if(zuuluu) { _fun00006_ip = 59; continue _fun00005 }
 48:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(offset)(verify);
            _fun00006_ip = 90; continue _fun00005;
 59:
            report = _closure1_slot10;
            oscard = report.CREATE_EVENTS;
            tangon = new Array(2);
            tangon[0] = oscard;
            report = report.MANAGE_EVENTS;
            tangon[1] = report;
            zuuluu = tangon;
 90:
            foxtra = _closure1_slot3;
            report = 2;
            zuuluu = foxtra.bind(offset)(zuuluu, report);
            golfie = 0;
            tangon = zuuluu[golfie];
            var _closure2_slot1 = tangon;
            oscard = 1;
            zuuluu = zuuluu[oscard];
            var _closure2_slot2 = zuuluu;
            tangon = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 8;
            option = yankee[zuuluu];
            kiloes = tangon.bind(offset)(option);
            backup = kiloes.useStateFromStoresArray;
            option = _closure1_slot5;
            romeon = new Array(1);
            romeon[0] = option;
            option = function() {
                report = _closure1_slot5;
                oscard = report.can;
                zuuluu = _closure1_slot10;
                entity = zuuluu.CREATE_GUILD_EXPRESSIONS;
                tangon = _closure2_slot0;
                oscard = oscard.bind(report)(entity, tangon);
                entity = new Array(4);
                entity[0] = oscard;
                oscard = report.can;
                zuuluu = zuuluu.MANAGE_GUILD_EXPRESSIONS;
                zuuluu = oscard.bind(report)(zuuluu, tangon);
                entity[1] = zuuluu;
                oscard = report.can;
                zuuluu = _closure2_slot1;
                zuuluu = oscard.bind(report)(zuuluu, tangon);
                entity[2] = zuuluu;
                zuuluu = report.can;
                michal = _closure2_slot2;
                michal = zuuluu.bind(report)(michal, tangon);
                entity[3] = michal;
                return entity;
            };
            romeon = backup.bind(kiloes)(romeon, option);
            option = 4;
            romeon = foxtra.bind(offset)(romeon, option);
            option = romeon[golfie];
            var _closure2_slot3 = option;
            oscard = romeon[oscard];
            var _closure2_slot4 = oscard;
            golfie = romeon[report];
            var _closure2_slot5 = golfie;
            report = 3;
            report = romeon[report];
            var _closure2_slot6 = report;
            zuuluu = yankee[zuuluu];
            yankee = tangon.bind(offset)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = _closure1_slot6;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot6;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            romeon = offset.bind(yankee)(tangon, zuuluu);
            var _closure2_slot7 = romeon;
            yankee = _closure1_slot4;
            offset = yankee.useCallback;
            tangon = new Array(3);
            tangon[0] = option;
            tangon[1] = oscard;
            tangon[2] = romeon;
            zuuluu = function(argFoo) {
                oscard = _closure1_slot12;
                verify = _closure2_slot7;
                option = _closure2_slot4;
                golfie = _closure2_slot3;
                yankee = undefined;
                offset = argFoo;
                entity = yankee[oscard](offset, verify, option, golfie, oscard);
                return entity;
            };
            tangon = offset.bind(yankee)(zuuluu, tangon);
            offset = yankee.useCallback;
            zuuluu = new Array(3);
            zuuluu[0] = report;
            zuuluu[1] = golfie;
            zuuluu[2] = romeon;
            entity = function(argFoo) {
                oscard = _closure1_slot12;
                verify = _closure2_slot7;
                option = _closure2_slot6;
                golfie = _closure2_slot5;
                yankee = undefined;
                offset = argFoo;
                entity = yankee[oscard](offset, verify, option, golfie, oscard);
                return entity;
            };
            zuuluu = offset.bind(yankee)(entity, zuuluu);
            entity = null;
            if(!(entity != verify)) { _fun00006_ip = 366; continue _fun00005 }
 332:
            entity = {};
            entity['canCreateExpressions'] = option;
            entity['canCreateGuildEvent'] = golfie;
            entity['canManageAllExpressions'] = oscard;
            entity['canManageAllEvents'] = report;
            entity['canManageGuildExpression'] = tangon;
            entity['canManageGuildEvent'] = zuuluu;
            _fun00006_ip = 370; continue _fun00005;
 366:
            entity = _closure1_slot11;
 370:
            return entity;
        }
    };
    zuuluu['useManageResourcePermissions'] = tangon;
    michal = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            option = argFoo;
            offset = arguments[1];
            verify = arguments[2];
            oscard = undefined;
            if(!(offset === oscard)) { _fun00008_ip = 24; continue _fun00007 }
 17:
            offset = _closure1_slot5;
 24:
            if(!(verify === oscard)) { _fun00008_ip = 35; continue _fun00007 }
 28:
            verify = _closure1_slot6;
 35:
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = oscard;
            var _closure2_slot2 = oscard;
            var _closure2_slot3 = oscard;
            var _closure2_slot4 = oscard;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 7;
            entity = report[entity];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.isGuildRecord;
            entity = entity.bind(tangon)(option);
            if(entity) { _fun00008_ip = 103; continue _fun00007 }
 92:
            entity = _closure1_slot13;
            report = entity.bind(oscard)(option);
            _fun00008_ip = 134; continue _fun00007;
 103:
            tangon = _closure1_slot10;
            golfie = tangon.CREATE_EVENTS;
            entity = new Array(2);
            entity[0] = golfie;
            tangon = tangon.MANAGE_EVENTS;
            entity[1] = tangon;
            report = entity;
 134:
            tangon = _closure1_slot3;
            entity = 2;
            tangon = tangon.bind(oscard)(report, entity);
            entity = 0;
            oscard = tangon[entity];
            entity = 1;
            tangon = tangon[entity];
            golfie = offset.can;
            entity = _closure1_slot10;
            report = entity.CREATE_GUILD_EXPRESSIONS;
            golfie = golfie.bind(offset)(report, option);
            _closure2_slot0 = golfie;
            report = offset.can;
            entity = entity.MANAGE_GUILD_EXPRESSIONS;
            report = report.bind(offset)(entity, option);
            _closure2_slot1 = report;
            entity = offset.can;
            oscard = entity.bind(offset)(oscard, option);
            _closure2_slot2 = oscard;
            entity = offset.can;
            tangon = entity.bind(offset)(tangon, option);
            _closure2_slot3 = tangon;
            entity = verify.getCurrentUser;
            entity = entity.bind(verify)();
            _closure2_slot4 = entity;
            entity = null;
            if(!(entity != option)) { _fun00008_ip = 303; continue _fun00007 }
 259:
            entity = {};
            entity['canCreateExpressions'] = golfie;
            entity['canCreateGuildEvent'] = oscard;
            entity['canManageAllExpressions'] = report;
            entity['canManageAllEvents'] = tangon;
            tangon = function(argFoo) { // Original name: canManageGuildExpression
                oscard = _closure1_slot12;
                verify = _closure2_slot4;
                option = _closure2_slot1;
                golfie = _closure2_slot0;
                yankee = undefined;
                offset = argFoo;
                entity = yankee[oscard](offset, verify, option, golfie, oscard);
                return entity;
            };
            entity['canManageGuildExpression'] = tangon;
            zuuluu = function(argFoo) { // Original name: canManageGuildEvent
                oscard = _closure1_slot12;
                verify = _closure2_slot4;
                option = _closure2_slot3;
                golfie = _closure2_slot2;
                yankee = undefined;
                offset = argFoo;
                entity = yankee[oscard](offset, verify, option, golfie, oscard);
                return entity;
            };
            entity['canManageGuildEvent'] = zuuluu;
            _fun00008_ip = 307; continue _fun00007;
 303:
            entity = _closure1_slot11;
 307:
            return entity;
        }
    };
    zuuluu['getManageResourcePermissions'] = michal;
    return entity;
})();