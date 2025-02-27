// app/modules/guild_settings/roles/GuildSettingsRolesUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot9;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot9;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    tangon = function(argFoo, argBar) { // Original name: useGuildMembers
        report = argFoo;
        golfie = argBar;
        var _closure2_slot0 = report;
        var _closure2_slot1 = golfie;
        oscard = _closure1_slot0;
        option = _closure1_slot2;
        zuuluu = 5;
        verify = option[zuuluu];
        tangon = undefined;
        romeon = oscard.bind(tangon)(verify);
        yankee = romeon.useStateFromStoresArray;
        verify = _closure1_slot4;
        offset = new Array(1);
        offset[0] = verify;
        verify = new Array(2);
        verify[0] = report;
        verify[1] = golfie;
        golfie = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure1_slot4;
                zuuluu = tangon.getMembers;
                entity = _closure2_slot0;
                tangon = zuuluu.bind(tangon)(entity);
                report = _closure2_slot1;
                zuuluu = null;
                entity = tangon;
                if(!(zuuluu != report)) { _fun00008_ip = 52; continue _fun00007 }
 38:
                zuuluu = tangon.filter;
                michal = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal);
 52:
                return entity;
            }
        };
        golfie = yankee.bind(romeon)(offset, golfie, verify);
        var _closure2_slot2 = golfie;
        zuuluu = option[zuuluu];
        verify = oscard.bind(tangon)(zuuluu);
        option = verify.useStateFromStoresObject;
        zuuluu = _closure1_slot5;
        oscard = new Array(1);
        oscard[0] = zuuluu;
        tangon = new Array(1);
        tangon[0] = golfie;
        zuuluu = function() {
            tangon = _closure2_slot2;
            zuuluu = tangon.reduce;
            michal = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    michal = argBar;
                    report = _closure1_slot5;
                    tangon = report.getUser;
                    zuuluu = michal.userId;
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00010_ip = 44; continue _fun00009 }
 35:
                    michal = michal.userId;
                    entity[michal] = zuuluu;
 44:
                    return entity;
                }
            };
            entity = {};
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        oscard = option.bind(verify)(oscard, zuuluu, tangon);
        var _closure2_slot3 = oscard;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = new Array(0);
                zuuluu = _closure1_slot8;
                michal = _closure2_slot2;
                verify = undefined;
                option = zuuluu.bind(verify)(michal);
                zuuluu = option.bind(verify)();
                michal = zuuluu.done;
                golfie = 6;
                oscard = 80;
                report = null;
                tangon = zuuluu;
                zuuluu = undefined;
                if(michal) { _fun00012_ip = 285; continue _fun00011 }
 53:
                kiloes = tangon.value;
                romeon = _closure2_slot3;
                michal = kiloes.userId;
                backup = romeon[michal];
                if(!(report != backup)) { _fun00012_ip = 267; continue _fun00011 }
 78:
                foxtra = entity.push;
                romeon = {};
                michal = kiloes.nick;
                sizing = michal;
                if(!(report == michal)) { _fun00012_ip = 126; continue _fun00011 }
 98:
                result = _closure1_slot1;
                output = _closure1_slot2;
                output = output[golfie];
                result = result.bind(verify)(output);
                output = result.getName;
                sizing = output.bind(result)(backup);
 126:
                romeon['name'] = sizing;
                output = _closure1_slot1;
                sizing = _closure1_slot2;
                sizing = sizing[golfie];
                output = output.bind(verify)(sizing);
                sizing = output.getUserTag;
                sizing = sizing.bind(output)(backup);
                romeon['userTag'] = sizing;
                sizing = kiloes.userId;
                romeon['id'] = sizing;
                sizing = backup.getAvatarSource;
                output = _closure2_slot0;
                sizing = sizing.bind(backup)(output);
                romeon['avatarSource'] = sizing;
                sizing = backup.getAvatarURL;
                sizing = sizing.bind(backup)(output, oscard);
                romeon['avatarURL'] = sizing;
                sizing = backup.bot;
                romeon['bot'] = sizing;
                sizing = backup.isVerifiedBot;
                sizing = sizing.bind(backup)();
                romeon['verifiedBot'] = sizing;
                sizing = kiloes.roles;
                romeon['roles'] = sizing;
                kiloes = kiloes.userId;
                romeon['key'] = kiloes;
                romeon['user'] = backup;
                romeon = foxtra.bind(entity)(romeon);
                zuuluu = michal;
 267:
                romeon = option.bind(verify)();
                michal = romeon.done;
                tangon = romeon;
                if(!michal) { _fun00012_ip = 53; continue _fun00011 }
 285:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.GuildSettingsRoleEditSections;
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot7 = report;
    report = 12;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_settings/roles/GuildSettingsRolesUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = 50;
    zuuluu['ADD_MEMBER_QUERY_LIMIT'] = report;
    report = 1000;
    zuuluu['MAX_PREFETCH_MEMBER_COUNT'] = report;
    zuuluu['useGuildMembers'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: useGuildRoleMembers
        tangon = argFoo;
        golfie = argBar;
        oscard = argBaz;
        var _closure2_slot0 = tangon;
        var _closure2_slot1 = golfie;
        var _closure2_slot2 = oscard;
        report = _closure1_slot3;
        zuuluu = report.useRef;
        zuuluu = zuuluu.bind(report)(oscard);
        var _closure2_slot3 = zuuluu;
        oscard = _closure1_slot3;
        report = oscard.useEffect;
        zuuluu = function() {
            michal = _closure2_slot3;
            entity = _closure2_slot2;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        zuuluu = report.bind(oscard)(zuuluu);
        option = _closure1_slot3;
        oscard = option.useEffect;
        report = new Array(2);
        report[0] = tangon;
        report[1] = golfie;
        zuuluu = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            oscard = zuuluu.bind(entity)(michal);
            report = oscard.requestMembersForRole;
            tangon = _closure2_slot0;
            zuuluu = _closure2_slot1;
            tangon = report.bind(oscard)(tangon, zuuluu);
            zuuluu = tangon.catch;
            michal = _closure2_slot3;
            michal = michal.current;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        zuuluu = oscard.bind(option)(zuuluu, report);
        oscard = _closure1_slot3;
        report = oscard.useCallback;
        zuuluu = new Array(1);
        zuuluu[0] = golfie;
        michal = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.roles;
            michal = zuuluu.includes;
            entity = _closure2_slot1;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu = report.bind(oscard)(michal, zuuluu);
        michal = _closure1_slot10;
        entity = undefined;
        entity = michal.bind(entity)(tangon, zuuluu);
        return entity;
    };
    zuuluu['useGuildRoleMembers'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useQueryGuildMembers
        oscard = argFoo;
        report = argBar;
        var _closure2_slot0 = oscard;
        var _closure2_slot1 = report;
        golfie = _closure1_slot3;
        tangon = golfie.useRef;
        zuuluu = false;
        zuuluu = tangon.bind(golfie)(zuuluu);
        var _closure2_slot2 = zuuluu;
        tangon = _closure1_slot3;
        zuuluu = tangon.useEffect;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                option = tangon.bind(entity)(michal);
                golfie = option.requestMembers;
                oscard = _closure2_slot0;
                report = _closure2_slot1;
                tangon = 200;
                tangon = golfie.bind(option)(oscard, report, tangon);
                tangon = '';
                tangon = tangon === report;
                if(tangon) { _fun00014_ip = 72; continue _fun00013 }
 63:
                report = _closure2_slot2;
                tangon = report.current;
 72:
                if(tangon) { _fun00014_ip = 141; continue _fun00013 }
 75:
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                tangon = 9;
                tangon = oscard[tangon];
                oscard = report.bind(entity)(tangon);
                report = oscard.track;
                zuuluu = _closure1_slot7;
                tangon = zuuluu.SEARCH_STARTED;
                zuuluu = {};
                golfie = 'Role Members';
                zuuluu['search_type'] = golfie;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                zuuluu = _closure2_slot2;
                michal = true;
                zuuluu['current'] = michal;
 141:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = undefined;
        return entity;
    };
    zuuluu['useQueryGuildMembers'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: filterFullMembersByQuery
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            entity = zuuluu.trim;
            zuuluu = entity.bind(zuuluu)();
            entity = zuuluu.toLowerCase;
            report = entity.bind(zuuluu)();
            entity = michal.id;
            entity = entity === report;
            if(entity) { _fun00016_ip = 84; continue _fun00015 }
 38:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 10;
            zuuluu = oscard[zuuluu];
            oscard = undefined;
            tangon = tangon.bind(oscard)(zuuluu);
            golfie = michal.name;
            zuuluu = golfie.toLowerCase;
            zuuluu = zuuluu.bind(golfie)();
            entity = tangon.bind(oscard)(report, zuuluu);
 84:
            if(entity) { _fun00016_ip = 134; continue _fun00015 }
 87:
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 10;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            zuuluu = oscard.bind(tangon)(zuuluu);
            oscard = michal.userTag;
            michal = oscard.toLowerCase;
            michal = michal.bind(oscard)();
            entity = zuuluu.bind(tangon)(report, michal);
 134:
            return entity;
        }
    };
    zuuluu['filterFullMembersByQuery'] = tangon;
    tangon = function(argFoo) { // Original name: getSectionAnalyticsName
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot6;
            michal = michal.MEMBERS;
            if(!(michal !== tangon)) { _fun00018_ip = 119; continue _fun00017 }
 20:
            michal = _closure1_slot6;
            michal = michal.PERMISSIONS;
            if(!(michal !== tangon)) { _fun00018_ip = 113; continue _fun00017 }
 34:
            michal = _closure1_slot6;
            michal = michal.DISPLAY;
            if(!(michal !== tangon)) { _fun00018_ip = 105; continue _fun00017 }
 48:
            michal = _closure1_slot6;
            michal = michal.VERIFICATIONS;
            if(!(michal !== tangon)) { _fun00018_ip = 97; continue _fun00017 }
 62:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 11;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.assertNever;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
 97:
            entity = 'Connections';
            return entity;
 105:
            entity = 'Role Settings';
            return entity;
 113:
            entity = 'Permissions';
            return entity;
 119:
            entity = 'Members';
            return entity;
        }
    };
    zuuluu['getSectionAnalyticsName'] = tangon;
    michal = function(argFoo, argBar) { // Original name: filterRole
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = argBar;
            entity = '';
            entity = entity === report;
            if(entity) { _fun00020_ip = 52; continue _fun00019 }
 14:
            michal = argFoo;
            zuuluu = michal.name;
            michal = zuuluu.toLowerCase;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.includes;
            michal = report.toLowerCase;
            michal = michal.bind(report)();
            entity = zuuluu.bind(tangon)(michal);
 52:
            return entity;
        }
    };
    zuuluu['filterRole'] = michal;
    return entity;
})();