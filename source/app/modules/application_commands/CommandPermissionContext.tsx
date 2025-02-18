// app/modules/application_commands/CommandPermissionContext.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    verify = argCor;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar, argBaz) { // Original name: computeAllowNsfw
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBaz;
            entity = argBar;
            michal = !entity;
            entity = !michal;
            if(michal) { _fun00002_ip = 58; continue _fun00001 }
 18:
            michal = _closure1_slot5;
            report = tangon instanceof michal;
            michal = !report;
            if(!report) { _fun00002_ip = 55; continue _fun00001 }
 35:
            oscard = tangon.guild_id;
            report = null;
            if(!(report != oscard)) { _fun00002_ip = 52; continue _fun00001 }
 46:
            zuuluu = tangon.nsfw;
 52:
            michal = zuuluu;
 55:
            entity = michal;
 58:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: computePermissions
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            entity = _closure1_slot5;
            entity = golfie instanceof entity;
            if(!entity) { _fun00004_ip = 33; continue _fun00003 }
 17:
            entity = golfie.isPrivate;
            entity = entity.bind(golfie)();
            if(entity) { _fun00004_ip = 293; continue _fun00003 }
 33:
            entity = null;
            if(!(entity != golfie)) { _fun00004_ip = 293; continue _fun00003 }
 42:
            zuuluu = _closure1_slot9;
            entity = zuuluu.computePermissions;
            report = entity.bind(zuuluu)(golfie);
            zuuluu = _closure1_slot1;
            entity = _closure1_slot2;
            verify = 11;
            entity = entity[verify];
            option = undefined;
            tangon = zuuluu.bind(option)(entity);
            zuuluu = tangon.has;
            entity = _closure1_slot12;
            entity = entity.ADMINISTRATOR;
            entity = zuuluu.bind(tangon)(report, entity);
            tangon = true;
            zuuluu = true;
            if(entity) { _fun00004_ip = 274; continue _fun00003 }
 110:
            entity = _closure1_slot5;
            golfie = golfie instanceof entity;
            offset = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[verify];
            yankee = offset.bind(option)(entity);
            offset = yankee.has;
            entity = _closure1_slot12;
            entity = entity.VIEW_CHANNEL;
            entity = offset.bind(yankee)(report, entity);
            if(golfie) { _fun00004_ip = 166; continue _fun00003 }
 159:
            tangon = entity;
            zuuluu = true;
            _fun00004_ip = 274; continue _fun00003;
 166:
            oscard = entity;
            if(!entity) { _fun00004_ip = 210; continue _fun00003 }
 172:
            golfie = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[verify];
            offset = golfie.bind(option)(entity);
            golfie = offset.has;
            entity = _closure1_slot12;
            entity = entity.USE_APPLICATION_COMMANDS;
            oscard = golfie.bind(offset)(report, entity);
 210:
            golfie = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[verify];
            verify = golfie.bind(option)(entity);
            option = verify.has;
            golfie = _closure1_slot12;
            entity = argBar;
            if(entity) { _fun00004_ip = 256; continue _fun00003 }
 242:
            entity = golfie.SEND_MESSAGES;
            entity = option.bind(verify)(report, entity);
            _fun00004_ip = 268; continue _fun00003;
 256:
            golfie = golfie.SEND_MESSAGES_IN_THREADS;
            entity = option.bind(verify)(report, golfie);
 268:
            zuuluu = entity;
            tangon = oscard;
 274:
            entity = {};
            entity['computedPermissions'] = report;
            entity['hasBaseAccessPermissions'] = tangon;
            entity['hasSendMessagesPermission'] = zuuluu;
            return entity;
 293:
            entity = {'computedPermissions': null, 'hasBaseAccessPermissions': true, 'hasSendMessagesPermission': true};
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 11;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.deserialize;
            michal = 0;
            michal = zuuluu.bind(tangon)(michal);
            entity['computedPermissions'] = michal;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    michal = function(argFoo) { // Original name: getContextGuildId
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = _closure1_slot5;
            entity = michal instanceof entity;
            if(entity) { _fun00006_ip = 24; continue _fun00005 }
 17:
            entity = michal.id;
            _fun00006_ip = 29; continue _fun00005;
 24:
            entity = michal.guild_id;
 29:
            return entity;
        }
    };
    var _closure1_slot15 = michal;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ChannelRecordBase;
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 8;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.ChannelTypes;
    var _closure1_slot11 = option;
    report = report.Permissions;
    var _closure1_slot12 = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/application_commands/CommandPermissionContext.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: buildPermissionContext
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            romeon = argFoo;
            entity = _closure1_slot5;
            entity = romeon instanceof entity;
            oscard = romeon;
            if(!entity) { _fun00008_ip = 68; continue _fun00007 }
 20:
            entity = romeon.isThread;
            entity = entity.bind(romeon)();
            oscard = romeon;
            if(!entity) { _fun00008_ip = 68; continue _fun00007 }
 36:
            tangon = _closure1_slot7;
            zuuluu = tangon.getChannel;
            entity = romeon.parent_id;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            oscard = romeon;
            if(!(zuuluu != entity)) { _fun00008_ip = 68; continue _fun00007 }
 65:
            oscard = entity;
 68:
            entity = null;
            zuuluu = entity != oscard;
            report = undefined;
            option = undefined;
            if(!zuuluu) { _fun00008_ip = 90; continue _fun00007 }
 81:
            zuuluu = _closure1_slot15;
            option = zuuluu.bind(report)(oscard);
 90:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 9;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.ViewNsfwCommands;
            zuuluu = tangon.getSetting;
            tangon = zuuluu.bind(tangon)();
            golfie = _closure1_slot6;
            zuuluu = golfie.getId;
            offset = zuuluu.bind(golfie)();
            golfie = _closure1_slot10;
            zuuluu = golfie.getCurrentUser;
            zuuluu = zuuluu.bind(golfie)();
            verify = entity == zuuluu;
            golfie = undefined;
            if(verify) { _fun00008_ip = 168; continue _fun00007 }
 162:
            golfie = zuuluu.nsfwAllowed;
 168:
            zuuluu = entity != golfie;
            if(!zuuluu) { _fun00008_ip = 178; continue _fun00007 }
 175:
            zuuluu = golfie;
 178:
            if(!(entity != option)) { _fun00008_ip = 217; continue _fun00007 }
 182:
            verify = _closure1_slot8;
            golfie = verify.getMember;
            golfie = golfie.bind(verify)(option, offset);
            yankee = entity == golfie;
            verify = undefined;
            if(yankee) { _fun00008_ip = 213; continue _fun00007 }
 207:
            verify = golfie.roles;
 213:
            if(!(entity == verify)) { _fun00008_ip = 221; continue _fun00007 }
 217:
            verify = new Array(0);
 221:
            golfie = _closure1_slot4;
            entity = golfie.isViewingRoles;
            option = entity.bind(golfie)(option);
            golfie = _closure1_slot14;
            entity = _closure1_slot5;
            entity = romeon instanceof entity;
            if(!entity) { _fun00008_ip = 261; continue _fun00007 }
 251:
            yankee = romeon.isThread;
            entity = yankee.bind(romeon)();
 261:
            golfie = golfie.bind(report)(oscard, entity);
            entity = {};
            entity['context'] = oscard;
            entity['userId'] = offset;
            entity['roleIds'] = verify;
            entity['isImpersonating'] = option;
            option = argBar;
            entity['commandTypes'] = option;
            option = golfie.computedPermissions;
            entity['computedPermissions'] = option;
            option = golfie.hasBaseAccessPermissions;
            entity['hasBaseAccessPermissions'] = option;
            golfie = golfie.hasSendMessagesPermission;
            entity['hasSendMessagesPermission'] = golfie;
            michal = _closure1_slot13;
            michal = michal.bind(report)(oscard, zuuluu, tangon);
            entity['allowNsfw'] = michal;
            return entity;
        }
    };
    zuuluu['buildPermissionContext'] = report;
    report = function(argFoo, argBar) { // Original name: usePermissionContext
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            romeon = argBar;
            var _closure2_slot0 = report;
            var _closure2_slot1 = romeon;
            golfie = _closure1_slot3;
            oscard = golfie.useMemo;
            tangon = new Array(1);
            tangon[0] = report;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = _closure2_slot0;
                    zuuluu = _closure1_slot5;
                    zuuluu = tangon instanceof zuuluu;
                    if(!zuuluu) { _fun00012_ip = 68; continue _fun00011 }
 21:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.isThread;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!zuuluu) { _fun00012_ip = 68; continue _fun00011 }
 38:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getChannel;
                    entity = _closure2_slot0;
                    entity = entity.parent_id;
                    entity = zuuluu.bind(tangon)(entity);
                    zuuluu = null;
                    if(!(zuuluu == entity)) { _fun00012_ip = 72; continue _fun00011 }
 68:
                    entity = _closure2_slot0;
 72:
                    return entity;
                }
            };
            yankee = oscard.bind(golfie)(zuuluu, tangon);
            var _closure2_slot2 = yankee;
            zuuluu = null;
            tangon = zuuluu != yankee;
            offset = undefined;
            zuuluu = undefined;
            if(!tangon) { _fun00010_ip = 73; continue _fun00009 }
 64:
            tangon = _closure1_slot15;
            zuuluu = tangon.bind(offset)(yankee);
 73:
            var _closure2_slot3 = zuuluu;
            tangon = _closure1_slot0;
            foxtra = _closure1_slot2;
            zuuluu = 9;
            zuuluu = foxtra[zuuluu];
            zuuluu = tangon.bind(offset)(zuuluu);
            oscard = zuuluu.ViewNsfwCommands;
            zuuluu = oscard.useSetting;
            oscard = zuuluu.bind(oscard)();
            var _closure2_slot4 = oscard;
            zuuluu = 10;
            golfie = foxtra[zuuluu];
            backup = tangon.bind(offset)(golfie);
            verify = backup.useStateFromStores;
            golfie = _closure1_slot6;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                michal = _closure1_slot6;
                entity = michal.getId;
                entity = entity.bind(michal)();
                return entity;
            };
            option = verify.bind(backup)(option, golfie);
            var _closure2_slot5 = option;
            golfie = foxtra[zuuluu];
            kiloes = tangon.bind(offset)(golfie);
            backup = kiloes.useStateFromStores;
            golfie = _closure1_slot10;
            verify = new Array(1);
            verify[0] = golfie;
            golfie = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure1_slot10;
                    entity = michal.getCurrentUser;
                    zuuluu = entity.bind(michal)();
                    entity = null;
                    tangon = entity == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00014_ip = 33; continue _fun00013 }
 27:
                    michal = zuuluu.nsfwAllowed;
 33:
                    entity = entity != michal;
                    if(!entity) { _fun00014_ip = 43; continue _fun00013 }
 40:
                    entity = michal;
 43:
                    return entity;
                }
            };
            golfie = backup.bind(kiloes)(verify, golfie);
            var _closure2_slot6 = golfie;
            verify = foxtra[zuuluu];
            sizing = tangon.bind(offset)(verify);
            kiloes = sizing.useStateFromStoresArray;
            verify = _closure1_slot8;
            backup = new Array(1);
            backup[0] = verify;
            verify = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00016_ip = 59; continue _fun00015 }
 13:
                    report = _closure1_slot8;
                    tangon = report.getMember;
                    zuuluu = _closure2_slot3;
                    entity = _closure2_slot5;
                    zuuluu = tangon.bind(report)(zuuluu, entity);
                    tangon = michal == zuuluu;
                    entity = undefined;
                    if(tangon) { _fun00016_ip = 55; continue _fun00015 }
 49:
                    entity = zuuluu.roles;
 55:
                    if(!(michal == entity)) { _fun00016_ip = 63; continue _fun00015 }
 59:
                    entity = new Array(0);
 63:
                    return entity;
                }
            };
            verify = kiloes.bind(sizing)(backup, verify);
            var _closure2_slot7 = verify;
            zuuluu = foxtra[zuuluu];
            foxtra = tangon.bind(offset)(zuuluu);
            offset = foxtra.useStateFromStores;
            zuuluu = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.isViewingRoles;
                entity = _closure2_slot3;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = offset.bind(foxtra)(tangon, zuuluu);
            var _closure2_slot8 = offset;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(8);
            michal[0] = romeon;
            michal[1] = yankee;
            michal[2] = offset;
            michal[3] = verify;
            michal[4] = option;
            michal[5] = golfie;
            michal[6] = oscard;
            michal[7] = report;
            entity = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    report = _closure1_slot14;
                    tangon = _closure2_slot2;
                    oscard = _closure2_slot0;
                    entity = _closure1_slot5;
                    entity = oscard instanceof entity;
                    if(!entity) { _fun00018_ip = 43; continue _fun00017 }
 29:
                    golfie = _closure2_slot0;
                    oscard = golfie.isThread;
                    entity = oscard.bind(golfie)();
 43:
                    oscard = undefined;
                    entity = report.bind(oscard)(tangon, entity);
                    option = entity.computedPermissions;
                    golfie = entity.hasBaseAccessPermissions;
                    tangon = entity.hasSendMessagesPermission;
                    entity = {};
                    report = _closure2_slot2;
                    entity['context'] = report;
                    verify = _closure2_slot5;
                    entity['userId'] = verify;
                    verify = _closure2_slot7;
                    entity['roleIds'] = verify;
                    verify = _closure2_slot1;
                    entity['commandTypes'] = verify;
                    verify = _closure2_slot8;
                    entity['isImpersonating'] = verify;
                    entity['computedPermissions'] = option;
                    entity['hasBaseAccessPermissions'] = golfie;
                    entity['hasSendMessagesPermission'] = tangon;
                    tangon = _closure1_slot13;
                    zuuluu = _closure2_slot6;
                    michal = _closure2_slot4;
                    michal = tangon.bind(oscard)(report, zuuluu, michal);
                    entity['allowNsfw'] = michal;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['usePermissionContext'] = report;
    tangon = function(argFoo, argBar) { // Original name: computeCommandContextType
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            oscard = argFoo;
            entity = _closure1_slot5;
            entity = oscard instanceof entity;
            if(!entity) { _fun00020_ip = 39; continue _fun00019 }
 17:
            michal = null;
            tangon = michal == oscard;
            report = undefined;
            entity = undefined;
            if(tangon) { _fun00020_ip = 35; continue _fun00019 }
 30:
            entity = oscard.guild_id;
 35:
            if(!(michal != entity)) { _fun00020_ip = 78; continue _fun00019 }
 39:
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 12;
            tangon = tangon[entity];
            entity = undefined;
            entity = golfie.bind(entity)(tangon);
            entity = entity.InteractionContextType;
            entity = entity.GUILD;
            _fun00020_ip = 201; continue _fun00019;
 78:
            tangon = michal == oscard;
            golfie = undefined;
            if(tangon) { _fun00020_ip = 92; continue _fun00019 }
 87:
            golfie = oscard.type;
 92:
            tangon = _closure1_slot11;
            tangon = tangon.DM;
            if(!(golfie === tangon)) { _fun00020_ip = 132; continue _fun00019 }
 106:
            michal = michal == oscard;
            tangon = undefined;
            if(michal) { _fun00020_ip = 125; continue _fun00019 }
 115:
            michal = oscard.getRecipientId;
            tangon = michal.bind(oscard)();
 125:
            michal = argBar;
            if(!(tangon !== michal)) { _fun00020_ip = 166; continue _fun00019 }
 132:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 12;
            michal = oscard[michal];
            michal = tangon.bind(report)(michal);
            michal = michal.InteractionContextType;
            michal = michal.PRIVATE_CHANNEL;
            _fun00020_ip = 198; continue _fun00019;
 166:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 12;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.InteractionContextType;
            michal = zuuluu.BOT_DM;
 198:
            entity = michal;
 201:
            return entity;
        }
    };
    zuuluu['computeCommandContextType'] = tangon;
    zuuluu['getContextGuildId'] = michal;
    return entity;
})();