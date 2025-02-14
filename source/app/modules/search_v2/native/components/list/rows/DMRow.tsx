// app/modules/search_v2/native/components/list/rows/DMRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: FriendPresence
        _fun113338: for(var _fun113338_ip = 0; ; ) switch(_fun113338_ip) {
 0:
            entity = argFoo;
            options = entity.user;
            zulu = entity.type;
            oscar = entity.animate;
            verify = entity.guildId;
            entity = _closure1_slot15;
            report = undefined;
            golf = entity.bind(report)();
            entity = _closure1_slot12;
            entity = entity.PENDING_INCOMING;
            if(!(zulu !== entity)) { _fun113338_ip = 146; continue _fun113338 }
 51:
            tango = _closure1_slot13;
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 13;
            entity = offset[entity];
            zulu = zulu.bind(report)(entity);
            entity = {};
            offset = 'DMRow';
            entity['location'] = offset;
            offset = options.id;
            entity['userId'] = offset;
            entity['guildId'] = verify;
            verify = golf.activityStatusIcon;
            entity['iconStyle'] = verify;
            verify = golf.activityStatusText;
            entity['textStyle'] = verify;
            golf = golf.activityStatusEmoji;
            entity['emojiStyle'] = golf;
            entity['animate'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun113338_ip = 222; continue _fun113338;
 146:
            tango = _closure1_slot13;
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 11;
            mike = verify[mike];
            mike = golf.bind(report)(mike);
            zulu = mike.Text;
            mike = {'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            oscar = 12;
            oscar = verify[oscar];
            golf = golf.bind(report)(oscar);
            oscar = golf.getUserTag;
            oscar = oscar.bind(golf)(options);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 222:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot5 = golf;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.View;
    var _closure1_slot6 = options;
    tango = tango.ActivityIndicator;
    var _closure1_slot7 = tango;
    yankee = 4;
    tango = oscar[yankee];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.StatusTypes;
    var _closure1_slot11 = options;
    tango = tango.RelationshipTypes;
    var _closure1_slot12 = tango;
    tango = 8;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot13 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot14 = tango;
    tango = 9;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    romeo = 12;
    offset['marginRight'] = romeo;
    tango['avatar'] = offset;
    offset = {'width': 14, 'height': 14};
    tango['activityStatusIcon'] = offset;
    offset = {'color': null, 'fontSize': 14, 'lineHeight': 18, 'fontWeight': '400'};
    romeo = 10;
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.HEADER_SECONDARY;
    offset['color'] = romeo;
    tango['activityStatusText'] = offset;
    offset = {'width': 16, 'height': 16};
    tango['activityStatusEmoji'] = offset;
    offset = {};
    offset['marginLeft'] = yankee;
    tango['tag'] = offset;
    offset = {};
    yankee = 'row';
    offset['flexDirection'] = yankee;
    tango['title'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot15 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: DMRow
        _fun113339: for(var _fun113339_ip = 0; ; ) switch(_fun113339_ip) {
 0:
            mike = argFoo;
            output = mike.user;
            var _closure2_slot0 = output;
            zulu = mike.nickname;
            var _closure2_slot1 = zulu;
            zulu = mike.premiumSince;
            var _closure2_slot2 = zulu;
            echo = mike.isOwner;
            var _closure2_slot3 = echo;
            kilo = mike.type;
            var _closure2_slot4 = kilo;
            sizing = mike.guildId;
            var _closure2_slot5 = sizing;
            control = mike.onPress;
            var _closure2_slot6 = control;
            golf = mike.trailing;
            oscar = mike.accessibilityActions;
            report = mike.onAccessibilityAction;
            tango = undefined;
            var _closure2_slot12 = tango;
            mike = _closure1_slot15;
            source = mike.bind(tango)();
            var _closure2_slot7 = source;
            update = _closure1_slot5;
            verify = update.useState;
            mike = false;
            offset = verify.bind(update)(mike);
            verify = _closure1_slot4;
            mike = 2;
            offset = verify.bind(tango)(offset, mike);
            mike = 0;
            verify = offset[mike];
            mike = 1;
            mike = offset[mike];
            var _closure2_slot8 = mike;
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            offset = 14;
            mike = romeo[offset];
            result = yankee.bind(tango)(mike);
            backup = result.useStateFromStoresObject;
            mike = _closure1_slot9;
            foxtrot = new Array(1);
            foxtrot[0] = mike;
            mike = function() {
                entity = {};
                tango = _closure1_slot9;
                report = tango.isMobileOnline;
                mike = _closure2_slot0;
                zulu = mike.id;
                zulu = report.bind(tango)(zulu);
                entity['isMobileOnline'] = zulu;
                zulu = tango.getStatus;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                entity['status'] = mike;
                return entity;
            };
            foxtrot = backup.bind(result)(foxtrot, mike);
            mike = foxtrot.isMobileOnline;
            var _closure2_slot9 = mike;
            result = foxtrot.status;
            var _closure2_slot10 = result;
            foxtrot = romeo[offset];
            sequence = yankee.bind(tango)(foxtrot);
            vacuum = sequence.useStateFromStores;
            foxtrot = _closure1_slot8;
            backup = new Array(1);
            backup[0] = foxtrot;
            foxtrot = function() {
                entity = _closure1_slot8;
                entity = entity.useReducedMotion;
                return entity;
            };
            backup = vacuum.bind(sequence)(backup, foxtrot);
            var _closure2_slot11 = backup;
            offset = romeo[offset];
            foxtrot = yankee.bind(tango)(offset);
            romeo = foxtrot.useStateFromStores;
            offset = _closure1_slot10;
            yankee = new Array(1);
            yankee[0] = offset;
            offset = function() {
                _fun113342: for(var _fun113342_ip = 0; ; ) switch(_fun113342_ip) {
 0:
                    entity = _closure2_slot1;
                    zulu = null;
                    if(!(zulu == entity)) { _fun113342_ip = 40; continue _fun113342 }
 13:
                    tango = _closure1_slot10;
                    zulu = tango.getNickname;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 40:
                    return entity;
                }
            };
            romeo = romeo.bind(foxtrot)(yankee, offset);
            _closure2_slot1 = romeo;
            foxtrot = update.useCallback;
            yankee = _closure1_slot3;
            offset = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun113344: for(var _fun113344_ip = 0; ; ) switch(_fun113344_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun113344_ip = 94; continue _fun113344 }
 7:
                        tango = _closure2_slot8;
                        report = undefined;
                        mike = true;
                        mike = tango.bind(report)(mike);
 23: // try_start_0
                        tango = _closure2_slot6;
                        mike = _closure2_slot0;
                        mike = mike.id;
                        mike = tango.bind(report)(mike);
                        SaveGenerator(address=45);
 43:
                        return mike;
 45:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun113344_ip = 65; continue _fun113344 }
 51: // try_end0
                        oscar = _closure2_slot8;
                        tango = false;
                        tango = oscar.bind(report)(tango);
                        return report;
 65:
                        oscar = _closure2_slot8;
                        tango = false;
                        tango = oscar.bind(report)(tango);
                        return mike;
 79: // catch_target0
                        CatchBlockStart(arg_register=1);
                        tango = _closure2_slot8;
                        zulu = false;
                        zulu = tango.bind(report)(zulu);
                        throw mike;
 94:
                        return entity;
                    }
                };
                return entity;
            };
            yankee = yankee.bind(tango)(offset);
            offset = new Array(2);
            offset[0] = control;
            control = output.id;
            offset[1] = control;
            offset = foxtrot.bind(update)(yankee, offset);
            yankee = null;
            update = romeo;
            if(!(yankee == update)) { _fun113339_ip = 396; continue _fun113339 }
 365:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            yankee = 12;
            yankee = foxtrot[yankee];
            romeo = romeo.bind(tango)(yankee);
            yankee = romeo.getName;
            update = yankee.bind(romeo)(output);
 396:
            _closure2_slot12 = update;
            romeo = _closure1_slot5;
            foxtrot = romeo.useMemo;
            control = source.title;
            yankee = new Array(6);
            yankee[0] = control;
            source = source.tag;
            yankee[1] = source;
            yankee[2] = update;
            yankee[3] = output;
            yankee[4] = echo;
            yankee[5] = zulu;
            zulu = function() {
                _fun113345: for(var _fun113345_ip = 0; ; ) switch(_fun113345_ip) {
 0:
                    tango = _closure1_slot14;
                    zulu = _closure1_slot6;
                    mike = {};
                    entity = _closure2_slot7;
                    entity = entity.title;
                    mike['style'] = entity;
                    golf = _closure1_slot13;
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 11;
                    report = report[entity];
                    entity = undefined;
                    report = oscar.bind(entity)(report);
                    oscar = report.Text;
                    report = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
                    options = _closure2_slot12;
                    report['children'] = options;
                    oscar = golf.bind(entity)(oscar, report);
                    report = new Array(4);
                    report[0] = oscar;
                    oscar = _closure2_slot0;
                    oscar = oscar.bot;
                    if(!oscar) { _fun113345_ip = 227; continue _fun113345 }
 109:
                    verify = _closure1_slot13;
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    kilo = 15;
                    golf = golf[kilo];
                    options = options.bind(entity)(golf);
                    golf = {};
                    romeo = _closure2_slot7;
                    romeo = romeo.tag;
                    golf['style'] = romeo;
                    foxtrot = _closure2_slot0;
                    romeo = foxtrot.isVerifiedBot;
                    romeo = romeo.bind(foxtrot)();
                    golf['verified'] = romeo;
                    romeo = foxtrot.isSystemUser;
                    romeo = romeo.bind(foxtrot)();
                    backup = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    foxtrot = foxtrot[kilo];
                    foxtrot = backup.bind(entity)(foxtrot);
                    foxtrot = foxtrot.Types;
                    if(romeo) { _fun113345_ip = 211; continue _fun113345 }
 203:
                    romeo = foxtrot.BOT;
                    _fun113345_ip = 217; continue _fun113345;
 211:
                    romeo = foxtrot.SYSTEM_DM;
 217:
                    golf['type'] = romeo;
                    oscar = verify.bind(entity)(options, golf);
 227:
                    report[1] = oscar;
                    oscar = _closure2_slot3;
                    if(!oscar) { _fun113345_ip = 351; continue _fun113345 }
 238:
                    verify = _closure1_slot13;
                    options = _closure1_slot6;
                    golf = {};
                    romeo = _closure2_slot7;
                    romeo = romeo.tag;
                    golf['style'] = romeo;
                    backup = _closure1_slot13;
                    sizing = _closure1_slot1;
                    output = _closure1_slot2;
                    kilo = 16;
                    romeo = output[kilo];
                    foxtrot = sizing.bind(entity)(romeo);
                    romeo = {};
                    kilo = output[kilo];
                    kilo = sizing.bind(entity)(kilo);
                    kilo = kilo.Sizes;
                    kilo = kilo.REFRESH_SMALL_16;
                    romeo['size'] = kilo;
                    kilo = 17;
                    kilo = output[kilo];
                    kilo = sizing.bind(entity)(kilo);
                    romeo['source'] = kilo;
                    kilo = true;
                    romeo['disableColor'] = kilo;
                    romeo = backup.bind(entity)(foxtrot, romeo);
                    golf['children'] = romeo;
                    oscar = verify.bind(entity)(options, golf);
 351:
                    report[2] = oscar;
                    golf = _closure2_slot2;
                    oscar = null;
                    oscar = oscar != golf;
                    if(!oscar) { _fun113345_ip = 481; continue _fun113345 }
 368:
                    verify = _closure1_slot13;
                    options = _closure1_slot6;
                    golf = {};
                    yankee = _closure2_slot7;
                    yankee = yankee.tag;
                    golf['style'] = yankee;
                    romeo = _closure1_slot13;
                    backup = _closure1_slot1;
                    kilo = _closure1_slot2;
                    foxtrot = 16;
                    offset = kilo[foxtrot];
                    yankee = backup.bind(entity)(offset);
                    offset = {};
                    foxtrot = kilo[foxtrot];
                    foxtrot = backup.bind(entity)(foxtrot);
                    foxtrot = foxtrot.Sizes;
                    foxtrot = foxtrot.REFRESH_SMALL_16;
                    offset['size'] = foxtrot;
                    foxtrot = 18;
                    foxtrot = kilo[foxtrot];
                    foxtrot = backup.bind(entity)(foxtrot);
                    offset['source'] = foxtrot;
                    foxtrot = true;
                    offset['disableColor'] = foxtrot;
                    offset = romeo.bind(entity)(yankee, offset);
                    golf['children'] = offset;
                    oscar = verify.bind(entity)(options, golf);
 481:
                    report[3] = oscar;
                    mike['children'] = report;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                }
            };
            foxtrot = foxtrot.bind(romeo)(zulu, yankee);
            yankee = romeo.useMemo;
            zulu = new Array(4);
            zulu[0] = output;
            zulu[1] = result;
            zulu[2] = mike;
            zulu[3] = sizing;
            mike = function() {
                _fun113346: for(var _fun113346_ip = 0; ; ) switch(_fun113346_ip) {
 0:
                    tango = _closure1_slot13;
                    mike = _closure1_slot1;
                    entity = _closure1_slot2;
                    options = 19;
                    entity = entity[options];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    golf = _closure2_slot0;
                    entity['user'] = golf;
                    golf = _closure2_slot5;
                    entity['guildId'] = golf;
                    golf = _closure1_slot11;
                    offset = golf.OFFLINE;
                    verify = _closure2_slot10;
                    golf = null;
                    if(!(offset !== verify)) { _fun113346_ip = 74; continue _fun113346 }
 70:
                    golf = _closure2_slot10;
 74:
                    entity['status'] = golf;
                    golf = _closure2_slot9;
                    entity['isMobileOnline'] = golf;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    oscar = oscar[options];
                    oscar = golf.bind(zulu)(oscar);
                    oscar = oscar.AvatarSizes;
                    oscar = oscar.LARGE_48;
                    entity['size'] = oscar;
                    report = _closure2_slot0;
                    report = report.avatarDecoration;
                    entity['avatarDecoration'] = report;
                    report = true;
                    entity['autoStatusCutout'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                }
            };
            yankee = yankee.bind(romeo)(mike, zulu);
            zulu = romeo.useMemo;
            mike = new Array(4);
            mike[0] = output;
            mike[1] = sizing;
            mike[2] = kilo;
            mike[3] = backup;
            entity = function() {
                _fun113347: for(var _fun113347_ip = 0; ; ) switch(_fun113347_ip) {
 0:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 12;
                    entity = tango[entity];
                    report = undefined;
                    tango = zulu.bind(report)(entity);
                    zulu = tango.getUserTag;
                    entity = _closure2_slot0;
                    oscar = zulu.bind(tango)(entity);
                    entity = null;
                    if(!(entity == oscar)) { _fun113347_ip = 116; continue _fun113347 }
 49:
                    zulu = _closure2_slot4;
                    zulu = entity != zulu;
                    entity = null;
                    if(!zulu) { _fun113347_ip = 114; continue _fun113347 }
 62:
                    golf = _closure1_slot13;
                    tango = _closure1_slot16;
                    zulu = {};
                    verify = _closure2_slot0;
                    zulu['user'] = verify;
                    verify = _closure2_slot5;
                    zulu['guildId'] = verify;
                    verify = _closure2_slot4;
                    zulu['type'] = verify;
                    options = _closure2_slot11;
                    options = !options;
                    zulu['animate'] = options;
                    entity = golf.bind(report)(tango, zulu);
 114:
                    _fun113347_ip = 169; continue _fun113347;
 116:
                    tango = _closure1_slot13;
                    zulu = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 11;
                    mike = golf[mike];
                    mike = zulu.bind(report)(mike);
                    zulu = mike.Text;
                    mike = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                    mike['children'] = oscar;
                    entity = tango.bind(report)(zulu, mike);
 169:
                    return entity;
                }
            };
            romeo = zulu.bind(romeo)(entity, mike);
            zulu = _closure1_slot13;
            mike = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 20;
            entity = backup[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.SearchListRow;
            entity = {};
            entity['label'] = foxtrot;
            entity['subLabel'] = romeo;
            entity['icon'] = yankee;
            entity['onPress'] = offset;
            if(!verify) { _fun113339_ip = 604; continue _fun113339 }
 588:
            offset = _closure1_slot13;
            verify = _closure1_slot7;
            options = {};
            golf = offset.bind(tango)(verify, options);
 604:
            entity['trailing'] = golf;
            entity['accessibilityActions'] = oscar;
            entity['onAccessibilityAction'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 21;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/list/rows/DMRow.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();