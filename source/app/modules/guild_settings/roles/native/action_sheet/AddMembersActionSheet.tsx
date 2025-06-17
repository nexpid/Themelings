// app/modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
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
    var _closure1_slot12 = entity;
    michal = function(argFoo) { // Original name: AddMembersBody
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.guild;
            var _closure2_slot0 = entity;
            entity = michal.role;
            var _closure2_slot1 = entity;
            entity = michal.members;
            var _closure2_slot2 = entity;
            verify = michal.pendingAdditions;
            var _closure2_slot3 = verify;
            zuuluu = michal.setPendingAdditions;
            var _closure2_slot4 = zuuluu;
            vacuum = michal.autoFocusSearch;
            source = michal.inActionSheet;
            michal = michal.maxCount;
            var _closure2_slot5 = michal;
            michal = _closure1_slot11;
            tangon = undefined;
            romeon = michal.bind(tangon)();
            var _closure2_slot6 = romeon;
            zuuluu = _closure1_slot5;
            michal = zuuluu.useState;
            offset = '';
            report = michal.bind(zuuluu)(offset);
            zuuluu = _closure1_slot4;
            michal = 2;
            zuuluu = zuuluu.bind(tangon)(report, michal);
            echoed = 0;
            kiloes = zuuluu[echoed];
            var _closure2_slot7 = kiloes;
            michal = 1;
            michal = zuuluu[michal];
            var _closure2_slot8 = michal;
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 8;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            report = !source;
            michal['isKeyboardAwareOnAndroid'] = report;
            michal = zuuluu.bind(tangon)(michal);
            update = michal.insets;
            report = _closure1_slot5;
            zuuluu = report.useMemo;
            michal = new Array(2);
            michal[0] = entity;
            michal[1] = kiloes;
            entity = function() {
                michal = function(argFoo) { // Original name: filterByQuery
                    entity = global;
                    tangon = entity.RegExp;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 9;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.escape;
                    entity = _closure2_slot7;
                    oscard = michal.bind(zuuluu)(entity);
                    entity = tangon.prototype;
                    michal = Object.create(entity, {constructor: {value: tangon}});
                    report = 'i';
                    golfie = michal;
                    entity = new golfie[tangon](oscard, report, tangon);
                    zuuluu = entity instanceof Object ? entity : michal;
                    michal = zuuluu.test;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                var _closure3_slot0 = michal;
                zuuluu = _closure2_slot2;
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = argFoo;
                        report = _closure3_slot0;
                        entity = michal.name;
                        tangon = undefined;
                        entity = report.bind(tangon)(entity);
                        if(entity) { _fun00006_ip = 40; continue _fun00005 }
 25:
                        zuuluu = _closure3_slot0;
                        michal = michal.userTag;
                        entity = zuuluu.bind(tangon)(michal);
 40:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = zuuluu.bind(report)(entity, michal);
            var _closure2_slot9 = foxtra;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 13;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            if(source) { _fun00004_ip = 255; continue _fun00003 }
 247:
            option = entity.FlashList;
            _fun00004_ip = 261; continue _fun00003;
 255:
            option = entity.BottomSheetFlashList;
 261:
            zuuluu = _closure1_slot10;
            michal = _closure1_slot9;
            entity = {};
            golfie = _closure1_slot8;
            oscard = _closure1_slot6;
            report = {};
            sizing = romeon.inputContainer;
            report['style'] = sizing;
            ctrled = _closure1_slot8;
            output = _closure1_slot1;
            sequen = _closure1_slot2;
            sizing = 14;
            sizing = sequen[sizing];
            result = output.bind(tangon)(sizing);
            output = {};
            cntext = _closure1_slot0;
            sizing = 15;
            config = sequen[sizing];
            config = cntext.bind(tangon)(config);
            record = config.intl;
            config = record.string;
            sequen = sequen[sizing];
            sequen = cntext.bind(tangon)(sequen);
            sequen = sequen.t;
            sequen = sequen.vMiCaW;
            sequen = config.bind(record)(sequen);
            output['placeholder'] = sequen;
            sequen = global;
            config = sequen.Object;
            sequen = config.values;
            record = sequen.bind(config)(verify);
            config = record.map;
            sequen = function(argFoo) {
                entity = argFoo;
                tangon = entity.display;
                entity = entity.row;
                zuuluu = entity.id;
                entity = {};
                report = entity;
                michal = copyDataProperties(report, tangon);
                michal = 'id';
                entity[michal] = zuuluu;
                return entity;
            };
            sequen = config.bind(record)(sequen);
            output['tags'] = sequen;
            sequen = function(argFoo) { // Original name: onChangeText
                michal = argFoo;
                entity = michal.trim;
                michal = entity.bind(michal)();
                entity = michal.toLowerCase;
                zuuluu = entity.bind(michal)();
                report = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 16;
                michal = verify[entity];
                entity = undefined;
                golfie = report.bind(entity)(michal);
                oscard = golfie.requestMembers;
                report = _closure2_slot0;
                report = report.id;
                option = _closure1_slot0;
                tangon = 17;
                tangon = verify[tangon];
                tangon = option.bind(entity)(tangon);
                tangon = tangon.ADD_MEMBER_QUERY_LIMIT;
                tangon = oscard.bind(golfie)(report, zuuluu, tangon);
                michal = _closure2_slot8;
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            output['onChangeText'] = sequen;
            sequen = function(argFoo) { // Original name: onRemove
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 18;
                zuuluu = zuuluu[entity];
                entity = undefined;
                oscard = tangon.bind(entity)(zuuluu);
                report = oscard.keys;
                tangon = _closure2_slot3;
                report = report.bind(oscard)(tangon);
                tangon = argFoo;
                tangon = report[tangon];
                var _closure3_slot0 = tangon;
                zuuluu = _closure2_slot4;
                michal = function(argFoo) {
                    tangon = argFoo;
                    michal = _closure3_slot0;
                    entity = tangon[michal];
                    zuuluu = _closure1_slot3;
                    report = new Array(1);
                    report[0] = michal;
                    michal = report.map;
                    entity = _closure1_slot12;
                    michal = michal.bind(report)(entity);
                    entity = undefined;
                    entity = zuuluu.bind(entity)(tangon, michal);
                    return entity;
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            output['onRemove'] = sequen;
            output['autoFocus'] = vacuum;
            output['inActionSheet'] = source;
            output = ctrled.bind(tangon)(result, output);
            report['children'] = output;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            oscard = foxtra.length;
            if(!(echoed !== oscard)) { _fun00004_ip = 647; continue _fun00003 }
 485:
            golfie = _closure1_slot8;
            oscard = {};
            output = {};
            ctrled = _closure1_slot1;
            vacuum = _closure1_slot2;
            result = 7;
            sequen = vacuum[result];
            sequen = ctrled.bind(tangon)(sequen);
            sequen = sequen.spacing;
            sequen = sequen.PX_16;
            output['paddingHorizontal'] = sequen;
            sequen = vacuum[result];
            sequen = ctrled.bind(tangon)(sequen);
            sequen = sequen.spacing;
            sequen = sequen.PX_12;
            output['paddingTop'] = sequen;
            result = vacuum[result];
            result = ctrled.bind(tangon)(result);
            result = result.spacing;
            result = result.PX_12;
            echoed = 0;
            if(!source) { _fun00004_ip = 582; continue _fun00003 }
 577:
            echoed = update.bottom;
 582:
            result = result + echoed;
            output['paddingBottom'] = result;
            oscard['contentContainerStyle'] = output;
            backup = function(argFoo) { // Original name: renderItem
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    offset = entity.item;
                    var _closure3_slot0 = offset;
                    foxtra = entity.index;
                    zuuluu = offset.roles;
                    michal = zuuluu.includes;
                    entity = _closure2_slot1;
                    entity = entity.id;
                    option = michal.bind(zuuluu)(entity);
                    michal = offset.id;
                    entity = _closure2_slot3;
                    yankee = michal in entity;
                    michal = _closure2_slot5;
                    entity = null;
                    golfie = entity != michal;
                    if(!golfie) { _fun00008_ip = 108; continue _fun00007 }
 73:
                    entity = global;
                    zuuluu = entity.Object;
                    michal = zuuluu.keys;
                    entity = _closure2_slot3;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.length;
                    entity = _closure2_slot5;
                    golfie = michal >= entity;
 108:
                    tangon = _closure1_slot8;
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 11;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    romeon = 0;
                    romeon = romeon === foxtra;
                    entity['start'] = romeon;
                    romeon = _closure2_slot9;
                    backup = romeon.length;
                    romeon = 1;
                    romeon = backup - romeon;
                    romeon = foxtra === romeon;
                    entity['end'] = romeon;
                    romeon = _closure2_slot0;
                    romeon = romeon.id;
                    entity['guildId'] = romeon;
                    romeon = offset.id;
                    entity['userId'] = romeon;
                    oscard = function() { // Original name: onPress
                        zuuluu = _closure3_slot0;
                        michal = function(argFoo) { // Original name: updatePendingAdditions
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                michal = argFoo;
                                var _closure5_slot0 = michal;
                                report = michal.roles;
                                tangon = report.includes;
                                zuuluu = _closure2_slot1;
                                zuuluu = zuuluu.id;
                                zuuluu = tangon.bind(report)(zuuluu);
                                if(zuuluu) { _fun00010_ip = 58; continue _fun00009 }
 40:
                                zuuluu = _closure2_slot4;
                                michal = undefined;
                                entity = function(argFoo) {
                                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                        entity = {};
                                        yankee = argFoo;
                                        romeon = entity;
                                        michal = copyDataProperties(romeon, yankee);
                                        michal = _closure5_slot0;
                                        michal = michal.id;
                                        tangon = michal in entity;
                                        michal = _closure5_slot0;
                                        if(tangon) { _fun00012_ip = 160; continue _fun00011 }
 38:
                                        oscard = {};
                                        tangon = michal.name;
                                        oscard['text'] = tangon;
                                        option = _closure1_slot8;
                                        report = _closure1_slot1;
                                        golfie = _closure1_slot2;
                                        tangon = 10;
                                        tangon = golfie[tangon];
                                        golfie = undefined;
                                        report = report.bind(golfie)(tangon);
                                        tangon = {};
                                        verify = michal.avatarSource;
                                        tangon['source'] = verify;
                                        verify = _closure2_slot6;
                                        offset = verify.tagAvatar;
                                        tangon['avatarStyle'] = offset;
                                        verify = verify.tagAvatar;
                                        tangon['style'] = verify;
                                        tangon = option.bind(golfie)(report, tangon);
                                        oscard['icon'] = tangon;
                                        tangon = null;
                                        if(!(tangon != oscard)) { _fun00012_ip = 169; continue _fun00011 }
 134:
                                        report = _closure5_slot0;
                                        tangon = report.id;
                                        zuuluu = {};
                                        zuuluu['display'] = oscard;
                                        zuuluu['row'] = report;
                                        entity[tangon] = zuuluu;
                                        _fun00012_ip = 169; continue _fun00011;
 160:
                                        michal = michal.id;
                                        michal = delete entity[michal];
 169:
                                        return entity;
                                    }
                                };
                                entity = zuuluu.bind(michal)(entity);
 58:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = undefined;
                        michal = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    entity['onPress'] = oscard;
                    oscard = option;
                    if(option) { _fun00008_ip = 221; continue _fun00007 }
 212:
                    if(!golfie) { _fun00008_ip = 218; continue _fun00007 }
 215:
                    golfie = !yankee;
 218:
                    oscard = golfie;
 221:
                    entity['disabled'] = oscard;
                    golfie = _closure1_slot8;
                    oscard = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 12;
                    report = yankee[report];
                    report = oscard.bind(zuuluu)(report);
                    oscard = report.FormCheckbox;
                    report = {};
                    if(option) { _fun00008_ip = 273; continue _fun00007 }
 260:
                    offset = offset.id;
                    verify = _closure2_slot3;
                    option = offset in verify;
 273:
                    report['checked'] = option;
                    report = golfie.bind(zuuluu)(oscard, report);
                    entity['trailing'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                }
            };
            oscard['renderItem'] = backup;
            oscard['data'] = foxtra;
            foxtra = 56;
            oscard['estimatedItemSize'] = foxtra;
            oscard['extraData'] = verify;
            verify = 'always';
            oscard['keyboardShouldPersistTaps'] = verify;
            oscard = golfie.bind(tangon)(option, oscard);
            _fun00004_ip = 838; continue _fun00003;
 647:
            verify = _closure1_slot8;
            option = _closure1_slot1;
            output = _closure1_slot2;
            golfie = 19;
            golfie = output[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            backup = _closure1_slot0;
            foxtra = 20;
            foxtra = output[foxtra];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.NoResultsAlt;
            golfie['Illustration'] = foxtra;
            romeon = romeon.emptyStateText;
            golfie['bodyStyle'] = romeon;
            if(!(offset === kiloes)) { _fun00004_ip = 769; continue _fun00003 }
 715:
            backup = _closure1_slot0;
            offset = _closure1_slot2;
            romeon = offset[sizing];
            romeon = backup.bind(tangon)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            offset = offset[sizing];
            offset = backup.bind(tangon)(offset);
            offset = offset.t;
            offset = offset.oB9gra;
            offset = romeon.bind(foxtra)(offset);
            _fun00004_ip = 828; continue _fun00003;
 769:
            romeon = _closure1_slot0;
            yankee = _closure1_slot2;
            foxtra = yankee[sizing];
            foxtra = romeon.bind(tangon)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.format;
            yankee = yankee[sizing];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.t;
            romeon = yankee.ErpIY2;
            yankee = {};
            yankee['query'] = kiloes;
            offset = foxtra.bind(backup)(romeon, yankee);
 828:
            golfie['body'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 838:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = romeon.bind(entity)(report);
    var _closure1_slot3 = report;
    foxtra = 1;
    report = golfie[foxtra];
    report = romeon.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    option = golfie[report];
    report = argCor;
    report = report.bind(entity)(option);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.View;
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.MAX_BULK_ROLE_MEMBERS_ADD;
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.jsx;
    var _closure1_slot8 = option;
    option = report.Fragment;
    var _closure1_slot9 = option;
    report = report.jsxs;
    var _closure1_slot10 = report;
    report = 6;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = {};
    offset = {};
    yankee = 7;
    backup = golfie[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MOBILE_PRIMARY;
    offset['backgroundColor'] = backup;
    offset['flex'] = foxtra;
    report['container'] = offset;
    offset = {};
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
    foxtra = foxtra.colors;
    foxtra = foxtra.TEXT_NORMAL;
    offset['color'] = foxtra;
    report['emptyStateText'] = offset;
    offset = {};
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_16;
    offset['marginHorizontal'] = yankee;
    report['addMembersDescription'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot11 = report;
    report = 28;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: AddMembersActionSheet
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            result = entity.guild;
            var _closure2_slot0 = result;
            output = entity.role;
            var _closure2_slot1 = output;
            entity = _closure1_slot11;
            tangon = undefined;
            source = entity.bind(tangon)();
            zuuluu = _closure1_slot5;
            michal = zuuluu.useState;
            entity = {};
            zuuluu = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = 2;
            michal = michal.bind(tangon)(zuuluu, entity);
            zuuluu = 0;
            kiloes = michal[zuuluu];
            var _closure2_slot2 = kiloes;
            entity = 1;
            backup = michal[entity];
            oscard = _closure1_slot5;
            report = oscard.useCallback;
            entity = output.id;
            michal = new Array(1);
            michal[0] = entity;
            entity = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.roles;
                michal = zuuluu.includes;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            option = report.bind(oscard)(entity, michal);
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 17;
            entity = report[entity];
            golfie = michal.bind(tangon)(entity);
            oscard = golfie.useGuildMembers;
            entity = result.id;
            sizing = oscard.bind(golfie)(entity, option);
            entity = 21;
            entity = report[entity];
            oscard = michal.bind(tangon)(entity);
            report = oscard.useSubscribeGuildMembers;
            michal = {};
            option = result.id;
            entity = global;
            offset = entity.Object;
            golfie = offset.keys;
            golfie = golfie.bind(offset)(kiloes);
            michal[option] = golfie;
            michal = report.bind(oscard)(michal);
            report = entity.Object;
            michal = report.keys;
            michal = michal.bind(report)(kiloes);
            michal = michal.length;
            foxtra = zuuluu === michal;
            if(foxtra) { _fun00014_ip = 265; continue _fun00013 }
 236:
            michal = entity.Object;
            entity = michal.keys;
            entity = entity.bind(michal)(kiloes);
            michal = entity.length;
            entity = _closure1_slot7;
            foxtra = michal > entity;
 265:
            zuuluu = _closure1_slot8;
            config = _closure1_slot0;
            ctrled = _closure1_slot2;
            entity = 22;
            entity = ctrled[entity];
            entity = config.bind(tangon)(entity);
            michal = entity.BottomSheet;
            entity = {'scrollable': true, 'header': null, 'startExpanded': true};
            romeon = true;
            golfie = _closure1_slot8;
            report = 23;
            report = ctrled[report];
            report = config.bind(tangon)(report);
            oscard = report.BottomSheetTitleHeader;
            report = {};
            update = 15;
            option = ctrled[update];
            option = config.bind(tangon)(option);
            yankee = option.intl;
            offset = yankee.string;
            option = ctrled[update];
            option = config.bind(tangon)(option);
            option = option.t;
            option = option.ZYOK4+;
            option = offset.bind(yankee)(option);
            report['title'] = option;
            option = output.name;
            report['subtitle'] = option;
            yankee = _closure1_slot8;
            option = 24;
            option = ctrled[option];
            option = config.bind(tangon)(option);
            offset = option.Button;
            option = {};
            vacuum = 'sm';
            option['size'] = vacuum;
            vacuum = ctrled[update];
            vacuum = config.bind(tangon)(vacuum);
            sequen = vacuum.intl;
            vacuum = sequen.string;
            ctrled = ctrled[update];
            ctrled = config.bind(tangon)(ctrled);
            ctrled = ctrled.t;
            ctrled = ctrled.OYkgVl;
            ctrled = vacuum.bind(sequen)(ctrled);
            option['text'] = ctrled;
            echoed = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 25;
                michal = tangon[entity];
                entity = undefined;
                option = zuuluu.bind(entity)(michal);
                golfie = option.bulkAddMemberRoles;
                report = _closure2_slot0;
                oscard = report.id;
                report = _closure2_slot1;
                report = report.id;
                verify = 18;
                verify = tangon[verify];
                offset = zuuluu.bind(entity)(verify);
                verify = offset.keys;
                michal = _closure2_slot2;
                michal = verify.bind(offset)(michal);
                michal = golfie.bind(option)(oscard, report, michal);
                michal = 26;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.hideActionSheet;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            option['onPress'] = echoed;
            echoed = 'primary';
            if(!foxtra) { _fun00014_ip = 498; continue _fun00013 }
 494:
            echoed = 'secondary';
 498:
            option['variant'] = echoed;
            option['disabled'] = foxtra;
            option = yankee.bind(tangon)(offset, option);
            report['trailing'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['header'] = report;
            golfie = _closure1_slot10;
            oscard = _closure1_slot6;
            report = {};
            option = source.container;
            report['style'] = option;
            yankee = _closure1_slot8;
            echoed = _closure1_slot0;
            foxtra = _closure1_slot2;
            option = 27;
            option = foxtra[option];
            option = echoed.bind(tangon)(option);
            offset = option.Text;
            option = {};
            ctrled = 'text-sm/normal';
            option['variant'] = ctrled;
            source = source.addMembersDescription;
            option['style'] = source;
            source = foxtra[update];
            source = echoed.bind(tangon)(source);
            ctrled = source.intl;
            source = ctrled.format;
            foxtra = foxtra[update];
            foxtra = echoed.bind(tangon)(foxtra);
            foxtra = foxtra.t;
            update = foxtra.3OxP4u;
            echoed = {};
            foxtra = _closure1_slot7;
            echoed['numMembers'] = foxtra;
            echoed = source.bind(ctrled)(update, echoed);
            option['children'] = echoed;
            offset = yankee.bind(tangon)(offset, option);
            option = new Array(2);
            option[0] = offset;
            yankee = _closure1_slot8;
            offset = _closure1_slot13;
            verify = {};
            verify['guild'] = result;
            verify['role'] = output;
            verify['members'] = sizing;
            verify['pendingAdditions'] = kiloes;
            verify['setPendingAdditions'] = backup;
            verify['autoFocusSearch'] = romeon;
            verify['maxCount'] = foxtra;
            verify['inActionSheet'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            option[1] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['AddMembersBody'] = michal;
    return entity;
})();