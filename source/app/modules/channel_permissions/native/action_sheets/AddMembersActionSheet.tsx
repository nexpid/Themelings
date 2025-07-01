// app/modules/channel_permissions/native/action_sheets/AddMembersActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    option = argCor;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = option;
    var _closure1_slot3 = golfie;
    entity = function(argFoo) { // Original name: _toPropertyKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            tangon = 'object';
            entity = typeof golfie;
            michal = golfie;
            if(!(tangon === entity)) { _fun00002_ip = 119; continue _fun00001 }
 17:
            michal = golfie;
            if(!michal) { _fun00002_ip = 119; continue _fun00001 }
 23:
            entity = global;
            zuuluu = entity.Symbol;
            zuuluu = zuuluu.toPrimitive;
            oscard = golfie[zuuluu];
            report = undefined;
            if(!(report === oscard)) { _fun00002_ip = 60; continue _fun00001 }
 47:
            zuuluu = entity.String;
            michal = zuuluu.bind(report)(golfie);
            _fun00002_ip = 119; continue _fun00001;
 60:
            report = oscard.call;
            zuuluu = 'string';
            report = report.bind(oscard)(golfie, zuuluu);
            zuuluu = typeof report;
            michal = report;
            if(!(tangon === zuuluu)) { _fun00002_ip = 119; continue _fun00001 }
 85:
            tangon = entity.TypeError;
            entity = tangon.prototype;
            zuuluu = Object.create(entity, {constructor: {value: tangon}});
            verify = '@@toPrimitive must return a primitive value.';
            offset = zuuluu;
            entity = new offset[tangon](verify, option);
            entity = entity instanceof Object ? entity : zuuluu;
            throw entity;
 119:
            tangon = 'symbol';
            zuuluu = typeof michal;
            entity = michal;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 136; continue _fun00001 }
 133:
            entity = '' + michal;
 136:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: getFullRowId
        entity = argFoo;
        report = entity.rowType;
        tangon = entity.id;
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = '';
        entity = ':';
        entity = zuuluu.bind(michal)(report, entity, tangon);
        return entity;
    };
    var _closure1_slot23 = entity;
    michal = function(argFoo) { // Original name: AddMembersBody
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            ctrled = report.channel;
            result = report.guild;
            var _closure2_slot0 = result;
            echoed = report.pendingAdditions;
            var _closure2_slot1 = echoed;
            entity = report.setPendingAdditions;
            var _closure2_slot2 = entity;
            sizing = report.permission;
            tangon = undefined;
            if(!(sizing === tangon)) { _fun00004_ip = 80; continue _fun00003 }
 51:
            michal = _closure1_slot2;
            zuuluu = _closure1_slot3;
            entity = 15;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            sizing = entity.NONE;
 80:
            michal = report.inActionSheet;
            zuuluu = {'channel': 0, 'guild': 0, 'pendingAdditions': 0, 'setPendingAdditions': 0, 'permission': 0, 'inActionSheet': 0};
            quebec = null;
            variable36 = zuuluu;
            entity = silentSetPrototypeOf(variable36, quebec);
            golfie = 0;
            variable36 = {};
            quebec = report;
            equals = zuuluu;
            offset = copyDataProperties(variable36, quebec, equals);
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            entity = function(argFoo, argBar) { // Original name: getQuery
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    michal = argBar;
                    entity = tangon;
                    if(!michal) { _fun00006_ip = 25; continue _fun00005 }
 12:
                    zuuluu = tangon.slice;
                    michal = 1;
                    entity = zuuluu.bind(tangon)(michal);
 25:
                    return entity;
                }
            };
            var _closure2_slot12 = entity;
            option = function(argFoo) { // Original name: filterByQuery
                zuuluu = _closure2_slot12;
                tangon = _closure2_slot6;
                michal = tangon.trim;
                michal = michal.bind(tangon)();
                entity = _closure2_slot4;
                oscard = undefined;
                report = zuuluu.bind(oscard)(michal, entity);
                entity = global;
                tangon = entity.RegExp;
                zuuluu = _closure1_slot1;
                golfie = _closure1_slot3;
                michal = 17;
                michal = golfie[michal];
                zuuluu = zuuluu.bind(oscard)(michal);
                michal = zuuluu.escape;
                zuuluu = michal.bind(zuuluu)(report);
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = '';
                verify = michal.bind(entity)(zuuluu);
                entity = tangon.prototype;
                michal = Object.create(entity, {constructor: {value: tangon}});
                option = 'i';
                offset = michal;
                entity = new offset[tangon](verify, option, golfie);
                zuuluu = entity instanceof Object ? entity : michal;
                michal = zuuluu.test;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = _closure1_slot21;
            kiloes = entity.bind(tangon)();
            _closure2_slot3 = kiloes;
            report = _closure1_slot7;
            zuuluu = report.useState;
            entity = false;
            zuuluu = zuuluu.bind(report)(entity);
            entity = _closure1_slot6;
            verify = 2;
            report = entity.bind(tangon)(zuuluu, verify);
            entity = report[golfie];
            _closure2_slot4 = entity;
            zuuluu = 1;
            report = report[zuuluu];
            _closure2_slot5 = report;
            oscard = _closure1_slot7;
            report = oscard.useState;
            update = '';
            oscard = report.bind(oscard)(update);
            report = _closure1_slot6;
            report = report.bind(tangon)(oscard, verify);
            output = report[golfie];
            _closure2_slot6 = output;
            report = report[zuuluu];
            _closure2_slot7 = report;
            oscard = _closure1_slot1;
            foxtra = _closure1_slot3;
            report = 16;
            report = foxtra[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            romeon = !michal;
            report['isKeyboardAwareOnAndroid'] = romeon;
            report = oscard.bind(tangon)(report);
            romeon = report.insets;
            oscard = _closure1_slot2;
            report = 15;
            report = foxtra[report];
            source = oscard.bind(tangon)(report);
            oscard = source.canEveryoneRole;
            report = _closure1_slot16;
            report = report.ADMINISTRATOR;
            source = oscard.bind(source)(report, result);
            oscard = _closure1_slot0;
            report = 18;
            vacuum = foxtra[report];
            record = oscard.bind(tangon)(vacuum);
            config = record.useStateFromStores;
            vacuum = _closure1_slot11;
            sequen = new Array(1);
            sequen[0] = vacuum;
            vacuum = function() {
                zuuluu = _closure1_slot11;
                michal = zuuluu.getRoles;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            record = config.bind(record)(sequen, vacuum);
            report = foxtra[report];
            vacuum = oscard.bind(tangon)(report);
            foxtra = vacuum.useStateFromStoresArray;
            report = _closure1_slot10;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                zuuluu = _closure1_slot10;
                michal = zuuluu.getMemberIds;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = foxtra.bind(vacuum)(oscard, report);
            if(entity) { _fun00004_ip = 596; continue _fun00003 }
 455:
            report = _closure1_slot2;
            entity = _closure1_slot3;
            sequen = 19;
            entity = entity[sequen];
            report = report.bind(tangon)(entity);
            entity = report.getRolesRows;
            variable37 = report;
            variable36 = result;
            quebec = record;
            equals = ctrled;
            whisks = sizing;
            limora = option;
            entity = variable37[entity](variable36, quebec, equals, whisks, limora, sierra);
            report = entity.length;
            foxtra = entity;
            if(!(golfie === report)) { _fun00004_ip = 600; continue _fun00003 }
 515:
            report = output.trim;
            report = report.bind(output)();
            report = update !== report;
            if(report) { _fun00004_ip = 561; continue _fun00003 }
 532:
            config = _closure1_slot2;
            vacuum = _closure1_slot3;
            vacuum = vacuum[sequen];
            config = config.bind(tangon)(vacuum);
            vacuum = config.hasCustomRoles;
            report = vacuum.bind(config)(result, record);
 561:
            if(report) { _fun00004_ip = 591; continue _fun00003 }
 564:
            vacuum = _closure1_slot2;
            report = _closure1_slot3;
            report = report[sequen];
            vacuum = vacuum.bind(tangon)(report);
            report = vacuum.getNoRolesRow;
            entity = report.bind(vacuum)();
 591:
            foxtra = entity;
            _fun00004_ip = 600; continue _fun00003;
 596:
            foxtra = new Array(0);
 600:
            report = _closure1_slot2;
            vacuum = _closure1_slot3;
            entity = 19;
            entity = vacuum[entity];
            report = report.bind(tangon)(entity);
            entity = report.getMembersRows;
            variable37 = report;
            variable36 = oscard;
            quebec = ctrled;
            equals = result;
            whisks = sizing;
            limora = option;
            oscard = variable37[entity](variable36, quebec, equals, whisks, limora, sierra);
            report = new Array(0);
            entity = foxtra.length;
            if(!(!(entity > golfie))) { _fun00004_ip = 667; continue _fun00003 }
 661:
            entity = new Array(0);
            _fun00004_ip = 733; continue _fun00003;
 667:
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot3;
            option = 24;
            sizing = vacuum[option];
            sizing = ctrled.bind(tangon)(sizing);
            result = sizing.intl;
            sizing = result.string;
            option = vacuum[option];
            option = ctrled.bind(tangon)(option);
            option = option.t;
            option = option.LPJmLy;
            sizing = sizing.bind(result)(option);
            option = new Array(1);
            option[0] = sizing;
            entity = option;
 733:
            sizing = new Array(0);
            variable36 = sizing;
            quebec = entity;
            equals = 0;
            equals = arraySpread(variable36, quebec, equals);
            variable36 = sizing;
            quebec = foxtra;
            option = arraySpread(variable36, quebec, equals);
            entity = oscard.length;
            if(!(!(entity > golfie))) { _fun00004_ip = 774; continue _fun00003 }
 768:
            entity = new Array(0);
            _fun00004_ip = 840; continue _fun00003;
 774:
            sequen = _closure1_slot0;
            config = _closure1_slot3;
            result = 24;
            ctrled = config[result];
            ctrled = sequen.bind(tangon)(ctrled);
            vacuum = ctrled.intl;
            ctrled = vacuum.string;
            result = config[result];
            result = sequen.bind(tangon)(result);
            result = result.t;
            result = result.9Oq93t;
            ctrled = ctrled.bind(vacuum)(result);
            result = new Array(1);
            result[0] = ctrled;
            entity = result;
 840:
            variable36 = sizing;
            quebec = entity;
            equals = option;
            equals = arraySpread(variable36, quebec, equals);
            variable36 = sizing;
            quebec = oscard;
            entity = arraySpread(variable36, quebec, equals);
            entity = foxtra.length;
            entity = entity > golfie;
            option = 0;
            if(!entity) { _fun00004_ip = 880; continue _fun00003 }
 877:
            option = zuuluu;
 880:
            _closure2_slot8 = option;
            entity = foxtra.length;
            entity = option + entity;
            entity = entity - zuuluu;
            _closure2_slot9 = entity;
            result = oscard.length;
            option = entity;
            if(!(result > golfie)) { _fun00004_ip = 917; continue _fun00003 }
 913:
            option = entity + verify;
 917:
            _closure2_slot10 = option;
            entity = oscard.length;
            entity = option + entity;
            entity = entity - zuuluu;
            _closure2_slot11 = entity;
            zuuluu = report.push;
            entity = {};
            vacuum = _closure1_slot0;
            option = _closure1_slot3;
            result = 24;
            verify = option[result];
            verify = vacuum.bind(tangon)(verify);
            sequen = verify.intl;
            ctrled = sequen.string;
            verify = option[result];
            verify = vacuum.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.LPJmLy;
            verify = ctrled.bind(sequen)(verify);
            entity['title'] = verify;
            entity['data'] = foxtra;
            entity = zuuluu.bind(report)(entity);
            zuuluu = report.push;
            entity = {};
            verify = option[result];
            verify = vacuum.bind(tangon)(verify);
            ctrled = verify.intl;
            verify = ctrled.string;
            option = option[result];
            option = vacuum.bind(tangon)(option);
            option = option.t;
            option = option.9Oq93t;
            option = verify.bind(ctrled)(option);
            entity['title'] = option;
            entity['data'] = oscard;
            entity = zuuluu.bind(report)(entity);
            entity = global;
            zuuluu = entity.Object;
            entity = zuuluu.values;
            report = entity.bind(zuuluu)(echoed);
            zuuluu = report.map;
            entity = function(argFoo) {
                entity = argFoo;
                tangon = entity.display;
                michal = entity.row;
                entity = {};
                report = entity;
                zuuluu = copyDataProperties(report, tangon);
                zuuluu = michal.id;
                michal = 'id';
                entity[michal] = zuuluu;
                return entity;
            };
            cntext = zuuluu.bind(report)(entity);
            if(michal) { _fun00004_ip = 1121; continue _fun00003 }
 1115:
            verify = _closure1_slot9;
            _fun00004_ip = 1147; continue _fun00003;
 1121:
            zuuluu = _closure1_slot0;
            report = _closure1_slot3;
            entity = 25;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            verify = entity.BottomSheetScrollView;
 1147:
            zuuluu = _closure1_slot0;
            report = _closure1_slot3;
            entity = 26;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            if(michal) { _fun00004_ip = 1178; continue _fun00003 }
 1170:
            option = entity.FlashList;
            _fun00004_ip = 1184; continue _fun00003;
 1178:
            option = entity.BottomSheetFlashList;
 1184:
            zuuluu = _closure1_slot19;
            michal = _closure1_slot18;
            entity = {};
            vacuum = _closure1_slot17;
            ctrled = _closure1_slot8;
            report = {};
            sequen = kiloes.inputContainer;
            report['style'] = sequen;
            record = _closure1_slot17;
            config = _closure1_slot1;
            papara = _closure1_slot3;
            sequen = 27;
            sequen = papara[sequen];
            config = config.bind(tangon)(sequen);
            sequen = {};
            sierra = _closure1_slot0;
            target = papara[result];
            target = sierra.bind(tangon)(target);
            status = target.intl;
            target = status.string;
            papara = papara[result];
            papara = sierra.bind(tangon)(papara);
            papara = papara.t;
            papara = papara.TVZdKi;
            papara = target.bind(status)(papara);
            sequen['placeholder'] = papara;
            sequen['tags'] = cntext;
            cntext = function(argFoo) { // Original name: onChangeText
                report = argFoo;
                entity = report.trim;
                offset = entity.bind(report)();
                michal = offset.charAt;
                entity = 0;
                michal = michal.bind(offset)(entity);
                entity = '@';
                zuuluu = entity === michal;
                oscard = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 28;
                michal = michal[entity];
                entity = undefined;
                verify = oscard.bind(entity)(michal);
                option = verify.requestMembers;
                oscard = _closure2_slot0;
                golfie = oscard.id;
                oscard = _closure2_slot12;
                oscard = oscard.bind(entity)(offset, zuuluu);
                tangon = _closure1_slot15;
                tangon = option.bind(verify)(golfie, oscard, tangon);
                tangon = _closure2_slot7;
                tangon = tangon.bind(entity)(report);
                michal = _closure2_slot5;
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            sequen['onChangeText'] = cntext;
            cntext = function(argFoo) { // Original name: onRemove
                entity = global;
                report = entity.Object;
                tangon = report.keys;
                zuuluu = _closure2_slot1;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = argFoo;
                zuuluu = tangon[zuuluu];
                var _closure3_slot0 = zuuluu;
                zuuluu = _closure2_slot2;
                entity = undefined;
                michal = function(argFoo) {
                    tangon = argFoo;
                    michal = _closure3_slot0;
                    entity = tangon[michal];
                    zuuluu = _closure1_slot5;
                    report = new Array(1);
                    report[0] = michal;
                    michal = report.map;
                    entity = _closure1_slot22;
                    michal = michal.bind(report)(entity);
                    entity = undefined;
                    entity = zuuluu.bind(entity)(tangon, michal);
                    return entity;
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            sequen['onRemove'] = cntext;
            sequen = record.bind(tangon)(config, sequen);
            report['children'] = sequen;
            ctrled = vacuum.bind(tangon)(ctrled, report);
            report = new Array(3);
            report[0] = ctrled;
            if(!source) { _fun00004_ip = 1492; continue _fun00003 }
 1352:
            sequen = _closure1_slot17;
            vacuum = _closure1_slot8;
            ctrled = {};
            config = kiloes.adminWarning;
            ctrled['style'] = config;
            cntext = _closure1_slot17;
            record = _closure1_slot1;
            papara = _closure1_slot3;
            target = 29;
            config = papara[target];
            record = record.bind(tangon)(config);
            config = {};
            sierra = _closure1_slot0;
            target = papara[target];
            target = sierra.bind(tangon)(target);
            target = target.HelpMessageTypes;
            target = target.WARNING;
            config['messageType'] = target;
            target = papara[result];
            target = sierra.bind(tangon)(target);
            status = target.intl;
            target = status.string;
            papara = papara[result];
            papara = sierra.bind(tangon)(papara);
            papara = papara.t;
            papara = papara.5f3HIC;
            papara = target.bind(status)(papara);
            config['children'] = papara;
            config = cntext.bind(tangon)(record, config);
            ctrled['children'] = config;
            source = sequen.bind(tangon)(vacuum, ctrled);
 1492:
            report[1] = source;
            if(!(update !== output)) { _fun00004_ip = 1521; continue _fun00003 }
 1500:
            foxtra = foxtra.length;
            if(!(golfie === foxtra)) { _fun00004_ip = 1521; continue _fun00003 }
 1509:
            oscard = oscard.length;
            if(!(golfie !== oscard)) { _fun00004_ip = 1686; continue _fun00003 }
 1521:
            golfie = _closure1_slot17;
            oscard = {};
            variable36 = oscard;
            quebec = offset;
            foxtra = copyDataProperties(variable36, quebec);
            update = _closure1_slot20;
            foxtra = 'estimatedItemSize';
            oscard[foxtra] = update;
            foxtra = 'extraData';
            oscard[foxtra] = echoed;
            foxtra = 'data';
            oscard[foxtra] = sizing;
            foxtra = {};
            echoed = _closure1_slot1;
            update = _closure1_slot3;
            sizing = 14;
            source = update[sizing];
            source = echoed.bind(tangon)(source);
            source = source.spacing;
            source = source.PX_16;
            foxtra['paddingHorizontal'] = source;
            sizing = update[sizing];
            sizing = echoed.bind(tangon)(sizing);
            sizing = sizing.spacing;
            sizing = sizing.PX_16;
            romeon = romeon.bottom;
            romeon = sizing + romeon;
            foxtra['paddingBottom'] = romeon;
            romeon = 'contentContainerStyle';
            oscard[romeon] = foxtra;
            romeon = function(argFoo) { // Original name: renderRow
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.item;
                    var _closure3_slot0 = oscard;
                    yankee = entity.index;
                    michal = 'string';
                    entity = typeof oscard;
                    if(!(michal !== entity)) { _fun00008_ip = 214; continue _fun00007 }
 33:
                    tangon = _closure1_slot17;
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    entity = 22;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    golfie = _closure2_slot8;
                    golfie = golfie === yankee;
                    if(golfie) { _fun00008_ip = 86; continue _fun00007 }
 78:
                    option = _closure2_slot10;
                    golfie = option === yankee;
 86:
                    entity['start'] = golfie;
                    golfie = _closure2_slot9;
                    golfie = golfie === yankee;
                    if(golfie) { _fun00008_ip = 109; continue _fun00007 }
 101:
                    option = _closure2_slot11;
                    golfie = option === yankee;
 109:
                    entity['end'] = golfie;
                    entity['item'] = oscard;
                    golfie = _closure2_slot0;
                    golfie = golfie.id;
                    entity['guildId'] = golfie;
                    report = function() { // Original name: onPress
                        zuuluu = _closure3_slot0;
                        michal = function(argFoo) { // Original name: updatePendingAdditions
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                michal = argFoo;
                                var _closure5_slot0 = michal;
                                zuuluu = michal.rowType;
                                michal = _closure1_slot14;
                                michal = michal.EMPTY_STATE;
                                if(!(zuuluu !== michal)) { _fun00010_ip = 53; continue _fun00009 }
 32:
                                zuuluu = _closure2_slot2;
                                michal = undefined;
                                entity = function(argFoo) {
                                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                        entity = {};
                                        foxtra = argFoo;
                                        backup = entity;
                                        michal = copyDataProperties(backup, foxtra);
                                        zuuluu = _closure1_slot23;
                                        michal = _closure5_slot0;
                                        verify = undefined;
                                        michal = zuuluu.bind(verify)(michal);
                                        zuuluu = michal in entity;
                                        if(zuuluu) { _fun00012_ip = 399; continue _fun00011 }
 43:
                                        zuuluu = _closure5_slot0;
                                        report = zuuluu.rowType;
                                        zuuluu = _closure1_slot14;
                                        zuuluu = zuuluu.ROLE;
                                        if(!(report !== zuuluu)) { _fun00012_ip = 293; continue _fun00011 }
 70:
                                        zuuluu = _closure5_slot0;
                                        report = zuuluu.rowType;
                                        zuuluu = _closure1_slot14;
                                        zuuluu = zuuluu.ADMINISTRATOR;
                                        if(!(report !== zuuluu)) { _fun00012_ip = 293; continue _fun00011 }
 97:
                                        zuuluu = _closure5_slot0;
                                        report = zuuluu.rowType;
                                        zuuluu = _closure1_slot14;
                                        zuuluu = zuuluu.MEMBER;
                                        if(!(report !== zuuluu)) { _fun00012_ip = 150; continue _fun00011 }
 121:
                                        zuuluu = _closure5_slot0;
                                        golfie = zuuluu.rowType;
                                        zuuluu = _closure1_slot14;
                                        zuuluu = zuuluu.OWNER;
                                        report = undefined;
                                        if(!(golfie === zuuluu)) { _fun00012_ip = 372; continue _fun00011 }
 150:
                                        option = _closure1_slot13;
                                        golfie = option.getUser;
                                        zuuluu = _closure5_slot0;
                                        zuuluu = zuuluu.id;
                                        yankee = golfie.bind(option)(zuuluu);
                                        zuuluu = null;
                                        zuuluu = zuuluu != yankee;
                                        report = undefined;
                                        if(!zuuluu) { _fun00012_ip = 372; continue _fun00011 }
 188:
                                        zuuluu = {};
                                        golfie = _closure5_slot0;
                                        golfie = golfie.name;
                                        zuuluu['text'] = golfie;
                                        offset = _closure1_slot17;
                                        option = _closure1_slot1;
                                        romeon = _closure1_slot3;
                                        golfie = 20;
                                        golfie = romeon[golfie];
                                        option = option.bind(verify)(golfie);
                                        golfie = {};
                                        golfie['user'] = yankee;
                                        romeon = _closure2_slot0;
                                        romeon = romeon.id;
                                        golfie['guildId'] = romeon;
                                        romeon = _closure2_slot3;
                                        romeon = romeon.tagAvatar;
                                        golfie['avatarStyle'] = romeon;
                                        yankee = _closure2_slot3;
                                        yankee = yankee.tagAvatar;
                                        golfie['style'] = yankee;
                                        golfie = offset.bind(verify)(option, golfie);
                                        zuuluu['icon'] = golfie;
                                        report = zuuluu;
                                        _fun00012_ip = 372; continue _fun00011;
 293:
                                        zuuluu = {};
                                        romeon = _closure5_slot0;
                                        golfie = romeon.name;
                                        zuuluu['text'] = golfie;
                                        option = _closure1_slot17;
                                        golfie = _closure1_slot8;
                                        oscard = {};
                                        offset = _closure2_slot3;
                                        yankee = offset.tagRoleColor;
                                        offset = new Array(2);
                                        offset[0] = yankee;
                                        yankee = {};
                                        romeon = romeon.colorString;
                                        yankee['backgroundColor'] = romeon;
                                        offset[1] = yankee;
                                        oscard['style'] = offset;
                                        oscard = option.bind(verify)(golfie, oscard);
                                        zuuluu['icon'] = oscard;
                                        report = zuuluu;
 372:
                                        zuuluu = null;
                                        if(!(zuuluu != report)) { _fun00012_ip = 403; continue _fun00011 }
 378:
                                        zuuluu = {};
                                        zuuluu['display'] = report;
                                        tangon = _closure5_slot0;
                                        zuuluu['row'] = tangon;
                                        entity[michal] = zuuluu;
                                        _fun00012_ip = 403; continue _fun00011;
 399:
                                        michal = delete entity[michal];
 403:
                                        return entity;
                                    }
                                };
                                entity = zuuluu.bind(michal)(entity);
 53:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = undefined;
                        michal = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    entity['onPress'] = report;
                    option = _closure1_slot17;
                    golfie = _closure1_slot0;
                    yankee = _closure1_slot3;
                    report = 23;
                    report = yankee[report];
                    report = golfie.bind(zuuluu)(report);
                    golfie = report.FormCheckbox;
                    report = {};
                    offset = _closure1_slot23;
                    offset = offset.bind(zuuluu)(oscard);
                    verify = _closure2_slot1;
                    verify = offset in verify;
                    report['checked'] = verify;
                    report = option.bind(zuuluu)(golfie, report);
                    entity['trailing'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    _fun00008_ip = 291; continue _fun00007;
 214:
                    report = _closure1_slot17;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    michal = 21;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.Text;
                    michal = {'style': null, 'maxFontSizeMultiplier': 2, 'accessibilityRole': 'header', 'variant': 'text-sm/semibold', 'color': 'interactive-normal'};
                    golfie = _closure2_slot3;
                    golfie = golfie.sectionRowWrapper;
                    michal['style'] = golfie;
                    michal['children'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 291:
                    return entity;
                }
            };
            yankee = 'renderItem';
            oscard[yankee] = romeon;
            romeon = 'handled';
            yankee = 'keyboardShouldPersistTaps';
            oscard[yankee] = romeon;
            oscard = golfie.bind(tangon)(option, oscard);
            _fun00004_ip = 1852; continue _fun00003;
 1686:
            option = _closure1_slot17;
            golfie = {};
            variable36 = golfie;
            quebec = offset;
            offset = copyDataProperties(variable36, quebec);
            romeon = _closure1_slot17;
            yankee = _closure1_slot1;
            foxtra = _closure1_slot3;
            offset = 30;
            offset = foxtra[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            backup = _closure1_slot0;
            sizing = 31;
            sizing = foxtra[sizing];
            sizing = backup.bind(tangon)(sizing);
            sizing = sizing.NoResultsAlt;
            offset['Illustration'] = sizing;
            sizing = kiloes.emptyState;
            offset['style'] = sizing;
            kiloes = kiloes.emptyStateText;
            offset['bodyStyle'] = kiloes;
            kiloes = foxtra[result];
            kiloes = backup.bind(tangon)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.format;
            foxtra = foxtra[result];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.t;
            backup = foxtra.ErpIY2;
            foxtra = {};
            foxtra['query'] = output;
            foxtra = kiloes.bind(sizing)(backup, foxtra);
            offset['body'] = foxtra;
            yankee = romeon.bind(tangon)(yankee, offset);
            offset = 'children';
            golfie[offset] = yankee;
            oscard = option.bind(tangon)(verify, golfie);
 1852:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot24 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = romeon.bind(entity)(report);
    var _closure1_slot4 = report;
    yankee = 1;
    report = golfie[yankee];
    report = romeon.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.View;
    var _closure1_slot8 = option;
    report = report.ScrollView;
    var _closure1_slot9 = report;
    report = 5;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 6;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 7;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 8;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot13 = report;
    report = 9;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.RowType;
    var _closure1_slot14 = option;
    report = report.MEMBER_REQUEST_COUNT;
    var _closure1_slot15 = report;
    report = 10;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.FORM_ROW_VERTICAL_PADDING;
    report = 11;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot16 = report;
    report = 12;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    verify = report.jsx;
    var _closure1_slot17 = verify;
    verify = report.Fragment;
    var _closure1_slot18 = verify;
    report = report.jsxs;
    var _closure1_slot19 = report;
    report = 30;
    report = option + report;
    var _closure1_slot20 = report;
    report = 13;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = {};
    offset = {};
    offset['flex'] = yankee;
    report['container'] = offset;
    offset = {};
    yankee = 'center';
    offset['alignItems'] = yankee;
    yankee = 14;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    offset['paddingHorizontal'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_12;
    offset['paddingTop'] = foxtra;
    report['inputContainer'] = offset;
    offset = {'height': 12, 'width': 12, 'borderRadius': 6};
    report['tagRoleColor'] = offset;
    offset = {'width': 16, 'height': 16};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    offset['borderRadius'] = foxtra;
    report['tagAvatar'] = offset;
    offset = {};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    offset['paddingTop'] = foxtra;
    report['emptyState'] = offset;
    offset = {};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.TEXT_NORMAL;
    offset['color'] = foxtra;
    report['emptyStateText'] = offset;
    offset = {};
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_12;
    offset['paddingVertical'] = yankee;
    report['sectionRowWrapper'] = offset;
    offset = {'marginHorizontal': 16, 'marginVertical': 8};
    report['adminWarning'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot21 = report;
    report = 40;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/channel_permissions/native/action_sheets/AddMembersActionSheet.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: AddMembersActionSheet
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            kiloes = entity.channel;
            var _closure2_slot0 = kiloes;
            yankee = entity.canSkip;
            report = undefined;
            var _closure2_slot1 = report;
            entity = function() { // Original name: _handleAddPressed
                tangon = undefined;
                entity = undefined;
                zuuluu = _closure1_slot4;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(zuuluu) { _fun00016_ip = 209; continue _fun00015 }
 12:
                            zuuluu = new Array(0);
                            michal = zuuluu;
                            var _closure5_slot0 = zuuluu;
                            zuuluu = 0;
                            var _closure5_slot1 = zuuluu;
                            var _closure5_slot2 = zuuluu;
                            zuuluu = global;
                            golfie = zuuluu.Object;
                            report = golfie.values;
                            zuuluu = _closure2_slot1;
                            golfie = report.bind(golfie)(zuuluu);
                            report = golfie.forEach;
                            zuuluu = function(argFoo) {
                                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                    entity = argFoo;
                                    entity = entity.row;
                                    zuuluu = entity.id;
                                    michal = null;
                                    michal = michal != zuuluu;
                                    if(!michal) { _fun00018_ip = 36; continue _fun00017 }
 23:
                                    tangon = entity.id;
                                    zuuluu = '';
                                    michal = zuuluu !== tangon;
 36:
                                    if(!michal) { _fun00018_ip = 248; continue _fun00017 }
 42:
                                    zuuluu = entity.rowType;
                                    michal = _closure1_slot14;
                                    michal = michal.ROLE;
                                    if(!(zuuluu !== michal)) { _fun00018_ip = 169; continue _fun00017 }
 65:
                                    zuuluu = entity.rowType;
                                    michal = _closure1_slot14;
                                    michal = michal.MEMBER;
                                    if(!(zuuluu === michal)) { _fun00018_ip = 248; continue _fun00017 }
 88:
                                    zuuluu = _closure5_slot1;
                                    zuuluu = zuuluu + 1;
                                    _closure5_slot1 = zuuluu;
                                    report = _closure5_slot0;
                                    zuuluu = report.push;
                                    golfie = _closure1_slot0;
                                    oscard = _closure1_slot3;
                                    michal = 33;
                                    oscard = oscard[michal];
                                    michal = undefined;
                                    option = golfie.bind(michal)(oscard);
                                    golfie = option.permissionOverwriteForUser;
                                    oscard = entity.id;
                                    michal = _closure2_slot0;
                                    michal = michal.type;
                                    michal = golfie.bind(option)(oscard, michal);
                                    michal = zuuluu.bind(report)(michal);
                                    _fun00018_ip = 248; continue _fun00017;
 169:
                                    zuuluu = _closure5_slot2;
                                    zuuluu = zuuluu + 1;
                                    _closure5_slot2 = zuuluu;
                                    zuuluu = _closure5_slot0;
                                    michal = zuuluu.push;
                                    oscard = _closure1_slot0;
                                    report = _closure1_slot3;
                                    tangon = 33;
                                    report = report[tangon];
                                    tangon = undefined;
                                    oscard = oscard.bind(tangon)(report);
                                    report = oscard.permissionOverwriteForRole;
                                    tangon = entity.id;
                                    entity = _closure2_slot0;
                                    entity = entity.type;
                                    entity = report.bind(oscard)(tangon, entity);
                                    entity = michal.bind(zuuluu)(entity);
 248:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            zuuluu = report.bind(golfie)(zuuluu);
 75: // try_start_0
                            option = _closure1_slot0;
                            golfie = _closure1_slot3;
                            report = 34;
                            golfie = golfie[report];
                            report = undefined;
                            option = option.bind(report)(golfie);
                            golfie = option.savePermissionUpdates;
                            oscard = _closure2_slot0;
                            oscard = oscard.id;
                            michal = golfie.bind(option)(oscard, michal);
                            SaveGenerator(address=125);
 123:
                            return michal;
 125:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(oscard) { _fun00016_ip = 199; continue _fun00015 }
 131:
                            option = _closure1_slot0;
                            oscard = _closure1_slot3;
                            golfie = 35;
                            golfie = oscard[golfie];
                            verify = option.bind(report)(golfie);
                            option = verify.memberOrRoleAddedToast;
                            golfie = _closure5_slot2;
                            tangon = _closure5_slot1;
                            tangon = option.bind(verify)(golfie, tangon);
                            tangon = _closure1_slot1;
                            zuuluu = 36;
                            zuuluu = oscard[zuuluu];
                            tangon = tangon.bind(report)(zuuluu);
                            zuuluu = tangon.hideActionSheet;
                            zuuluu = zuuluu.bind(tangon)();
 197: // try_end0
                            _fun00016_ip = 204; continue _fun00015;
 199:
                            return michal;
 202: // catch_target0
                            CatchBlockStart(arg_register=1);
 204:
                            michal = undefined;
                            return michal;
 209:
                            return entity;
                        }
                    };
                    return entity;
                };
                tangon = zuuluu.bind(tangon)(michal);
                _closure2_slot2 = tangon;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            var _closure2_slot2 = entity;
            entity = _closure1_slot21;
            offset = entity.bind(report)();
            zuuluu = _closure1_slot7;
            michal = zuuluu.useState;
            entity = {};
            zuuluu = michal.bind(zuuluu)(entity);
            michal = _closure1_slot6;
            entity = 2;
            michal = michal.bind(report)(zuuluu, entity);
            zuuluu = 0;
            backup = michal[zuuluu];
            _closure2_slot1 = backup;
            entity = 1;
            foxtra = michal[entity];
            michal = _closure1_slot0;
            tangon = _closure1_slot3;
            entity = 18;
            entity = tangon[entity];
            golfie = michal.bind(report)(entity);
            oscard = golfie.useStateFromStores;
            entity = _closure1_slot12;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure1_slot12;
                    michal = zuuluu.getGuild;
                    report = _closure2_slot0;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00020_ip = 44; continue _fun00019 }
 30:
                    report = _closure2_slot0;
                    tangon = report.getGuildId;
                    entity = tangon.bind(report)();
 44:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            sizing = oscard.bind(golfie)(michal, entity);
            michal = _closure1_slot1;
            entity = 32;
            entity = tangon[entity];
            entity = michal.bind(report)(entity);
            romeon = true;
            michal = entity.bind(report)(kiloes, romeon);
            entity = null;
            tangon = entity != michal;
            output = '';
            if(!tangon) { _fun00014_ip = 184; continue _fun00013 }
 181:
            output = michal;
 184:
            if(!(entity != sizing)) { _fun00014_ip = 670; continue _fun00013 }
 191:
            michal = global;
            tangon = michal.Object;
            michal = tangon.keys;
            michal = michal.bind(tangon)(backup);
            michal = michal.length;
            echoed = zuuluu === michal;
            tangon = _closure1_slot17;
            source = _closure1_slot0;
            ctrled = _closure1_slot3;
            michal = 37;
            michal = ctrled[michal];
            michal = source.bind(report)(michal);
            zuuluu = michal.BottomSheet;
            michal = {'scrollable': true, 'header': null, 'startExpanded': true};
            option = _closure1_slot17;
            oscard = 38;
            oscard = ctrled[oscard];
            oscard = source.bind(report)(oscard);
            golfie = oscard.BottomSheetTitleHeader;
            oscard = {};
            config = 24;
            result = ctrled[config];
            result = source.bind(report)(result);
            sequen = result.intl;
            vacuum = sequen.string;
            result = ctrled[config];
            result = source.bind(report)(result);
            result = result.t;
            result = result.dMJ3Y2;
            result = vacuum.bind(sequen)(result);
            oscard['title'] = result;
            oscard['subtitle'] = output;
            result = _closure1_slot17;
            output = 39;
            output = ctrled[output];
            output = source.bind(report)(output);
            output = output.Button;
            if(!yankee) { _fun00014_ip = 370; continue _fun00013 }
 367:
            if(echoed) { _fun00014_ip = 468; continue _fun00013 }
 370:
            yankee = {};
            source = 'sm';
            yankee['size'] = source;
            sequen = _closure1_slot0;
            source = _closure1_slot3;
            ctrled = source[config];
            ctrled = sequen.bind(report)(ctrled);
            vacuum = ctrled.intl;
            ctrled = vacuum.string;
            source = source[config];
            source = sequen.bind(report)(source);
            source = source.t;
            source = source.OYkgVl;
            source = ctrled.bind(vacuum)(source);
            yankee['text'] = source;
            source = function() { // Original name: handleAddPressed
                entity = undefined;
                tangon = _closure2_slot2;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            yankee['onPress'] = source;
            source = 'primary';
            if(!echoed) { _fun00014_ip = 458; continue _fun00013 }
 454:
            source = 'secondary';
 458:
            yankee['variant'] = source;
            yankee['disabled'] = echoed;
            _fun00014_ip = 556; continue _fun00013;
 468:
            echoed = {};
            source = 'sm';
            echoed['size'] = source;
            sequen = _closure1_slot0;
            source = _closure1_slot3;
            ctrled = source[config];
            ctrled = sequen.bind(report)(ctrled);
            vacuum = ctrled.intl;
            ctrled = vacuum.string;
            source = source[config];
            source = sequen.bind(report)(source);
            source = source.t;
            source = source.5WxrcX;
            source = ctrled.bind(vacuum)(source);
            echoed['text'] = source;
            update = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 36;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.hideActionSheet;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            echoed['onPress'] = update;
            update = 'secondary';
            echoed['variant'] = update;
            yankee = echoed;
 556:
            yankee = result.bind(report)(output, yankee);
            oscard['trailing'] = yankee;
            oscard = option.bind(report)(golfie, oscard);
            michal['header'] = oscard;
            option = _closure1_slot17;
            golfie = _closure1_slot8;
            oscard = {};
            offset = offset.container;
            oscard['style'] = offset;
            yankee = _closure1_slot17;
            offset = _closure1_slot24;
            verify = {};
            verify['channel'] = kiloes;
            verify['guild'] = sizing;
            kiloes = kiloes.accessPermissions;
            verify['permission'] = kiloes;
            verify['pendingAdditions'] = backup;
            verify['setPendingAdditions'] = foxtra;
            verify['inActionSheet'] = romeon;
            verify = yankee.bind(report)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 670:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['AddMembersBody'] = michal;
    return entity;
})();