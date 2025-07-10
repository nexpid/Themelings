// app/modules/guild_antiraid/GuildAntiRaidHooks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
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
            verify = _closure1_slot14;
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
            golfie = _closure1_slot14;
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
    var _closure1_slot13 = entity;
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
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getFirstGuildIncidentId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            kiloes = argFoo;
            michal = _closure1_slot8;
            entity = michal.getCurrentUser;
            foxtra = entity.bind(michal)();
            michal = _closure1_slot9;
            entity = michal.getIncidentsByGuild;
            romeon = entity.bind(michal)();
            michal = _closure1_slot13;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot3;
            entity = 9;
            entity = tangon[entity];
            yankee = undefined;
            zuuluu = zuuluu.bind(yankee)(entity);
            entity = zuuluu.keys;
            tangon = entity.bind(zuuluu)(romeon);
            zuuluu = tangon.map;
            entity = function(argFoo) {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getGuild;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            offset = michal.bind(yankee)(entity);
            zuuluu = offset.bind(yankee)();
            michal = zuuluu.done;
            verify = 11;
            option = 12;
            golfie = false;
            oscard = 10;
            entity = null;
            report = zuuluu;
            tangon = undefined;
            if(michal) { _fun00008_ip = 366; continue _fun00007 }
 126:
            michal = report.value;
            if(!(entity != michal)) { _fun00008_ip = 339; continue _fun00007 }
 138:
            zuuluu = michal.id;
            sizing = romeon[zuuluu];
            tangon = sizing;
            if(!(entity != sizing)) { _fun00008_ip = 339; continue _fun00007 }
 157:
            output = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            output = output.bind(yankee)(zuuluu);
            zuuluu = output.hasDetectedActivity;
            zuuluu = zuuluu.bind(output)(sizing);
            if(zuuluu) { _fun00008_ip = 222; continue _fun00007 }
 188:
            output = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            output = output.bind(yankee)(zuuluu);
            zuuluu = output.isUnderLockdown;
            zuuluu = zuuluu.bind(output)(sizing);
            tangon = sizing;
            if(!zuuluu) { _fun00008_ip = 339; continue _fun00007 }
 222:
            output = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            output = output.bind(yankee)(zuuluu);
            zuuluu = output.isUnderLockdown;
            zuuluu = zuuluu.bind(output)(sizing);
            if(!zuuluu) { _fun00008_ip = 265; continue _fun00007 }
 253:
            zuuluu = michal.id;
            tangon = sizing;
            if(!(zuuluu === kiloes)) { _fun00008_ip = 339; continue _fun00007 }
 265:
            output = _closure1_slot2;
            zuuluu = _closure1_slot3;
            result = zuuluu[verify];
            echoed = output.bind(yankee)(result);
            result = echoed.hasAny;
            zuuluu = zuuluu[option];
            update = output.bind(yankee)(zuuluu);
            output = update.computePermissions;
            zuuluu = {};
            zuuluu['user'] = foxtra;
            zuuluu['context'] = michal;
            zuuluu['checkElevated'] = golfie;
            output = output.bind(update)(zuuluu);
            zuuluu = _closure1_slot10;
            zuuluu = result.bind(echoed)(output, zuuluu);
            tangon = sizing;
            if(zuuluu) { _fun00008_ip = 359; continue _fun00007 }
 339:
            sizing = offset.bind(yankee)();
            zuuluu = sizing.done;
            report = sizing;
            if(zuuluu) { _fun00008_ip = 366; continue _fun00007 }
 354:
            _fun00008_ip = 126; continue _fun00007;
 359:
            michal = michal.id;
            return michal;
 366:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.IncidentAlertModeratorPermissions;
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot11 = golfie;
    tangon = tangon.GuildFeatures;
    var _closure1_slot12 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_antiraid/GuildAntiRaidHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useFirstGuildIncidentId
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            zuuluu = 8;
            michal = report[zuuluu];
            foxtra = undefined;
            option = tangon.bind(foxtra)(michal);
            golfie = option.useStateFromStores;
            michal = _closure1_slot8;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                michal = _closure1_slot8;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            romeon = golfie.bind(option)(oscard, michal);
            michal = report[zuuluu];
            option = tangon.bind(foxtra)(michal);
            golfie = option.useStateFromStores;
            michal = _closure1_slot9;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                michal = _closure1_slot9;
                entity = michal.getIncidentsByGuild;
                entity = entity.bind(michal)();
                return entity;
            };
            yankee = golfie.bind(option)(oscard, michal);
            var _closure2_slot0 = yankee;
            michal = _closure1_slot13;
            zuuluu = report[zuuluu];
            report = tangon.bind(foxtra)(zuuluu);
            tangon = report.useStateFromStoresArray;
            oscard = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.keys;
                entity = _closure2_slot0;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.map;
                entity = function(argFoo) {
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getGuild;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, entity);
            offset = michal.bind(foxtra)(entity);
            zuuluu = offset.bind(foxtra)();
            michal = zuuluu.done;
            verify = 11;
            option = 12;
            golfie = false;
            oscard = 10;
            entity = null;
            report = zuuluu;
            tangon = undefined;
            if(michal) { _fun00010_ip = 379; continue _fun00009 }
 182:
            michal = report.value;
            if(!(entity != michal)) { _fun00010_ip = 352; continue _fun00009 }
 194:
            zuuluu = michal.id;
            kiloes = yankee[zuuluu];
            tangon = kiloes;
            if(!(entity != tangon)) { _fun00010_ip = 352; continue _fun00009 }
 213:
            sizing = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            sizing = sizing.bind(foxtra)(zuuluu);
            zuuluu = sizing.hasDetectedActivity;
            zuuluu = zuuluu.bind(sizing)(kiloes);
            if(zuuluu) { _fun00010_ip = 278; continue _fun00009 }
 244:
            sizing = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            sizing = sizing.bind(foxtra)(zuuluu);
            zuuluu = sizing.isUnderLockdown;
            zuuluu = zuuluu.bind(sizing)(kiloes);
            tangon = kiloes;
            if(!zuuluu) { _fun00010_ip = 352; continue _fun00009 }
 278:
            sizing = _closure1_slot2;
            zuuluu = _closure1_slot3;
            output = zuuluu[verify];
            result = sizing.bind(foxtra)(output);
            output = result.hasAny;
            zuuluu = zuuluu[option];
            echoed = sizing.bind(foxtra)(zuuluu);
            sizing = echoed.computePermissions;
            zuuluu = {};
            zuuluu['user'] = romeon;
            zuuluu['context'] = michal;
            zuuluu['checkElevated'] = golfie;
            sizing = sizing.bind(echoed)(zuuluu);
            zuuluu = _closure1_slot10;
            zuuluu = output.bind(result)(sizing, zuuluu);
            tangon = kiloes;
            if(zuuluu) { _fun00010_ip = 372; continue _fun00009 }
 352:
            kiloes = offset.bind(foxtra)();
            zuuluu = kiloes.done;
            report = kiloes;
            if(zuuluu) { _fun00010_ip = 379; continue _fun00009 }
 367:
            _fun00010_ip = 182; continue _fun00009;
 372:
            michal = michal.id;
            return michal;
 379:
            return entity;
        }
    };
    zuuluu['useFirstGuildIncidentId'] = tangon;
    tangon = function(argFoo) { // Original name: useGuildIncidentsState
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            report = _closure1_slot0;
            golfie = _closure1_slot3;
            tangon = 8;
            michal = golfie[tangon];
            oscard = undefined;
            offset = report.bind(oscard)(michal);
            verify = offset.useStateFromStores;
            michal = _closure1_slot5;
            option = new Array(2);
            option[0] = michal;
            michal = _closure1_slot6;
            option[1] = michal;
            michal = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = _closure1_slot5;
                    zuuluu = tangon.getGuild;
                    entity = _closure2_slot0;
                    report = zuuluu.bind(tangon)(entity);
                    entity = null;
                    if(!(entity != report)) { _fun00014_ip = 92; continue _fun00013 }
 30:
                    tangon = _closure1_slot6;
                    zuuluu = tangon.getGuildPermissions;
                    report = zuuluu.bind(tangon)(report);
                    entity = entity != report;
                    if(!entity) { _fun00014_ip = 90; continue _fun00013 }
 52:
                    oscard = _closure1_slot2;
                    tangon = _closure1_slot3;
                    zuuluu = 11;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = oscard.bind(zuuluu)(tangon);
                    zuuluu = tangon.hasAny;
                    michal = _closure1_slot10;
                    entity = zuuluu.bind(tangon)(report, michal);
 90:
                    return entity;
 92:
                    entity = false;
                    return entity;
                }
            };
            michal = verify.bind(offset)(option, michal);
            tangon = golfie[tangon];
            golfie = report.bind(oscard)(tangon);
            report = golfie.useStateFromStores;
            option = _closure1_slot9;
            tangon = new Array(1);
            tangon[0] = option;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00016_ip = 38; continue _fun00015 }
 16:
                    tangon = _closure1_slot9;
                    zuuluu = tangon.getGuildIncident;
                    michal = _closure2_slot0;
                    entity = zuuluu.bind(tangon)(michal);
 38:
                    return entity;
                }
            };
            report = report.bind(golfie)(tangon, entity);
            entity = {};
            entity['shouldShowIncidentActions'] = michal;
            entity['incidentData'] = report;
            michal = null;
            michal = michal != report;
            if(!michal) { _fun00012_ip = 163; continue _fun00011 }
 132:
            tangon = _closure1_slot0;
            golfie = _closure1_slot3;
            zuuluu = 10;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.isUnderLockdown;
            michal = zuuluu.bind(tangon)(report);
 163:
            entity['isUnderLockdown'] = michal;
            return entity;
        }
    };
    zuuluu['useGuildIncidentsState'] = tangon;
    tangon = function() { // Original name: shouldShowRaidNotificationNagbar
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = _closure1_slot15;
            zuuluu = _closure1_slot7;
            michal = zuuluu.getGuildId;
            zuuluu = michal.bind(zuuluu)();
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            zuuluu = _closure1_slot4;
            entity = zuuluu.getGuildsProto;
            tangon = entity.bind(zuuluu)();
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00018_ip = 50; continue _fun00017 }
 48:
            tangon = {};
 50:
            report = zuuluu != michal;
            entity = null;
            if(!report) { _fun00018_ip = 63; continue _fun00017 }
 59:
            entity = tangon[michal];
 63:
            tangon = zuuluu != entity;
            if(!tangon) { _fun00018_ip = 76; continue _fun00017 }
 70:
            tangon = entity.disableRaidAlertNag;
 76:
            entity = {};
            zuuluu = zuuluu != michal;
            if(!zuuluu) { _fun00018_ip = 88; continue _fun00017 }
 85:
            zuuluu = !tangon;
 88:
            entity['show'] = zuuluu;
            entity['guildId'] = michal;
            return entity;
        }
    };
    zuuluu['shouldShowRaidNotificationNagbar'] = tangon;
    tangon = function() { // Original name: shouldShowRaidInAppNotification
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = _closure1_slot15;
            tangon = _closure1_slot7;
            michal = tangon.getGuildId;
            michal = michal.bind(tangon)();
            option = undefined;
            michal = zuuluu.bind(option)(michal);
            tangon = _closure1_slot4;
            zuuluu = tangon.getGuildsProto;
            tangon = zuuluu.bind(tangon)();
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00020_ip = 50; continue _fun00019 }
 48:
            tangon = {};
 50:
            oscard = zuuluu != michal;
            report = null;
            if(!oscard) { _fun00020_ip = 63; continue _fun00019 }
 59:
            report = tangon[michal];
 63:
            tangon = zuuluu != report;
            if(!tangon) { _fun00020_ip = 76; continue _fun00019 }
 70:
            tangon = report.disableRaidAlertNag;
 76:
            report = zuuluu != michal;
            golfie = null;
            if(!report) { _fun00020_ip = 100; continue _fun00019 }
 85:
            oscard = _closure1_slot9;
            report = oscard.getGuildIncident;
            golfie = report.bind(oscard)(michal);
 100:
            report = zuuluu != golfie;
            if(!report) { _fun00020_ip = 138; continue _fun00019 }
 107:
            oscard = _closure1_slot0;
            verify = _closure1_slot3;
            entity = 10;
            entity = verify[entity];
            oscard = oscard.bind(option)(entity);
            entity = oscard.isUnderLockdown;
            report = entity.bind(oscard)(golfie);
 138:
            entity = {};
            zuuluu = zuuluu != michal;
            if(!zuuluu) { _fun00020_ip = 150; continue _fun00019 }
 147:
            zuuluu = !report;
 150:
            if(!zuuluu) { _fun00020_ip = 156; continue _fun00019 }
 153:
            zuuluu = !tangon;
 156:
            entity['show'] = zuuluu;
            entity['guildId'] = michal;
            return entity;
        }
    };
    zuuluu['shouldShowRaidInAppNotification'] = tangon;
    tangon = function(argFoo) { // Original name: getDisabledActions
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            golfie = argFoo;
            zuuluu = null;
            if(!(zuuluu != golfie)) { _fun00022_ip = 262; continue _fun00021 }
 12:
            tangon = _closure1_slot9;
            michal = tangon.getGuildIncident;
            entity = golfie.id;
            tangon = michal.bind(tangon)(entity);
            entity = {};
            option = zuuluu == golfie;
            report = undefined;
            if(option) { _fun00022_ip = 72; continue _fun00021 }
 46:
            option = golfie.features;
            golfie = option.has;
            oscard = _closure1_slot12;
            oscard = oscard.INVITES_DISABLED;
            report = golfie.bind(option)(oscard);
 72:
            if(report) { _fun00022_ip = 164; continue _fun00021 }
 75:
            golfie = zuuluu == tangon;
            oscard = undefined;
            if(golfie) { _fun00022_ip = 90; continue _fun00021 }
 84:
            oscard = tangon.invitesDisabledUntil;
 90:
            oscard = zuuluu != oscard;
            if(!oscard) { _fun00022_ip = 161; continue _fun00021 }
 97:
            golfie = global;
            offset = golfie.Date;
            yankee = tangon.invitesDisabledUntil;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            romeon = verify;
            option = new romeon[offset](yankee, offset);
            option = option instanceof Object ? option : verify;
            golfie = golfie.Date;
            verify = golfie.prototype;
            verify = Object.create(verify, {constructor: {value: golfie}});
            romeon = verify;
            golfie = new romeon[golfie](yankee);
            golfie = golfie instanceof Object ? golfie : verify;
            oscard = option > golfie;
 161:
            report = oscard;
 164:
            entity['invitesDisabled'] = report;
            report = zuuluu == tangon;
            michal = undefined;
            if(report) { _fun00022_ip = 184; continue _fun00021 }
 178:
            michal = tangon.dmsDisabledUntil;
 184:
            michal = zuuluu != michal;
            if(!michal) { _fun00022_ip = 255; continue _fun00021 }
 191:
            zuuluu = global;
            oscard = zuuluu.Date;
            yankee = tangon.dmsDisabledUntil;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            romeon = report;
            tangon = new romeon[oscard](yankee, offset);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu = zuuluu.Date;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            romeon = report;
            zuuluu = new romeon[zuuluu](yankee);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            michal = tangon > zuuluu;
 255:
            entity['dmsDisabled'] = michal;
            return entity;
 262:
            entity = {'dmsDisabled': false, 'invitesDisabled': false};
            return entity;
        }
    };
    zuuluu['getDisabledActions'] = tangon;
    michal = function(argFoo) { // Original name: useDisabledActions
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            golfie = argFoo;
            zuuluu = null;
            tangon = zuuluu == golfie;
            michal = undefined;
            offset = undefined;
            if(tangon) { _fun00024_ip = 23; continue _fun00023 }
 18:
            offset = golfie.id;
 23:
            if(!(zuuluu == offset)) { _fun00024_ip = 34; continue _fun00023 }
 27:
            offset = _closure1_slot11;
 34:
            var _closure2_slot0 = offset;
            report = _closure1_slot0;
            option = _closure1_slot3;
            tangon = 8;
            tangon = option[tangon];
            verify = report.bind(michal)(tangon);
            option = verify.useStateFromStores;
            tangon = _closure1_slot9;
            report = new Array(1);
            report[0] = tangon;
            tangon = new Array(1);
            tangon[0] = offset;
            entity = function() {
                zuuluu = _closure1_slot9;
                michal = zuuluu.getGuildIncident;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = option.bind(verify)(report, entity, tangon);
            if(!(zuuluu != golfie)) { _fun00024_ip = 334; continue _fun00023 }
 107:
            entity = {};
            option = zuuluu == golfie;
            report = undefined;
            if(option) { _fun00024_ip = 144; continue _fun00023 }
 118:
            option = golfie.features;
            golfie = option.has;
            oscard = _closure1_slot12;
            oscard = oscard.INVITES_DISABLED;
            report = golfie.bind(option)(oscard);
 144:
            if(report) { _fun00024_ip = 236; continue _fun00023 }
 147:
            golfie = zuuluu == tangon;
            oscard = undefined;
            if(golfie) { _fun00024_ip = 162; continue _fun00023 }
 156:
            oscard = tangon.invitesDisabledUntil;
 162:
            oscard = zuuluu != oscard;
            if(!oscard) { _fun00024_ip = 233; continue _fun00023 }
 169:
            golfie = global;
            offset = golfie.Date;
            foxtra = tangon.invitesDisabledUntil;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            backup = verify;
            option = new backup[offset](foxtra, romeon);
            option = option instanceof Object ? option : verify;
            golfie = golfie.Date;
            verify = golfie.prototype;
            verify = Object.create(verify, {constructor: {value: golfie}});
            backup = verify;
            golfie = new backup[golfie](foxtra);
            golfie = golfie instanceof Object ? golfie : verify;
            oscard = option > golfie;
 233:
            report = oscard;
 236:
            entity['invitesDisabled'] = report;
            report = zuuluu == tangon;
            michal = undefined;
            if(report) { _fun00024_ip = 256; continue _fun00023 }
 250:
            michal = tangon.dmsDisabledUntil;
 256:
            michal = zuuluu != michal;
            if(!michal) { _fun00024_ip = 327; continue _fun00023 }
 263:
            zuuluu = global;
            oscard = zuuluu.Date;
            foxtra = tangon.dmsDisabledUntil;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            backup = report;
            tangon = new backup[oscard](foxtra, romeon);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu = zuuluu.Date;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            backup = report;
            zuuluu = new backup[zuuluu](foxtra);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            michal = tangon > zuuluu;
 327:
            entity['dmsDisabled'] = michal;
            _fun00024_ip = 348; continue _fun00023;
 334:
            entity = {'dmsDisabled': false, 'invitesDisabled': false};
 348:
            return entity;
        }
    };
    zuuluu['useDisabledActions'] = michal;
    return entity;
})();