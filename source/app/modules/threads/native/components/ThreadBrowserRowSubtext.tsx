// app/modules/threads/native/components/ThreadBrowserRowSubtext.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: MessageContent
        entity = argFoo;
        golf = entity.thread;
        entity = entity.message;
        var _closure2_slot0 = entity;
        mike = _closure1_slot13;
        tango = undefined;
        options = mike.bind(tango)();
        verify = _closure1_slot0;
        foxtrot = _closure1_slot2;
        mike = 17;
        mike = foxtrot[mike];
        oscar = verify.bind(tango)(mike);
        zulu = oscar.useSubscribeGuildMembers;
        mike = {};
        offset = golf.guild_id;
        golf = entity.author;
        yankee = golf.id;
        golf = new Array(1);
        golf[0] = yankee;
        mike[offset] = golf;
        mike = zulu.bind(oscar)(mike);
        mike = 11;
        zulu = foxtrot[mike];
        offset = verify.bind(tango)(zulu);
        golf = offset.useStateFromStores;
        zulu = _closure1_slot7;
        oscar = new Array(1);
        oscar[0] = zulu;
        zulu = function() {
            _fun113903: for(var _fun113903_ip = 0; ; ) switch(_fun113903_ip) {
 0:
                tango = _closure1_slot7;
                zulu = tango.getUser;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = entity.id;
                entity = zulu.bind(tango)(entity);
                zulu = null;
                if(!(zulu == entity)) { _fun113903_ip = 52; continue _fun113903 }
 42:
                mike = _closure2_slot0;
                entity = mike.author;
 52:
                return entity;
            }
        };
        offset = golf.bind(offset)(oscar, zulu);
        mike = foxtrot[mike];
        golf = verify.bind(tango)(mike);
        oscar = golf.useStateFromStores;
        mike = _closure1_slot5;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            entity = _closure1_slot5;
            entity = entity.roleStyle;
            return entity;
        };
        mike = oscar.bind(golf)(zulu, mike);
        var _closure2_slot1 = mike;
        zulu = _closure1_slot1;
        mike = 18;
        mike = foxtrot[mike];
        mike = zulu.bind(tango)(mike);
        mike = mike.bind(tango)(entity);
        oscar = mike.nick;
        var _closure2_slot2 = oscar;
        mike = mike.colorString;
        var _closure2_slot3 = mike;
        mike = 19;
        mike = foxtrot[mike];
        zulu = zulu.bind(tango)(mike);
        mike = zulu.extractTimestamp;
        entity = entity.id;
        zulu = mike.bind(zulu)(entity);
        entity = 12;
        mike = foxtrot[entity];
        oscar = verify.bind(tango)(mike);
        mike = oscar.getTimestampString;
        golf = mike.bind(oscar)(zulu);
        entity = foxtrot[entity];
        mike = verify.bind(tango)(entity);
        entity = mike.getTimestampAccessibilityLabel;
        oscar = entity.bind(mike)(zulu);
        entity = 20;
        entity = foxtrot[entity];
        mike = verify.bind(tango)(entity);
        entity = mike.useShouldFilterKeywords;
        entity = entity.bind(mike)();
        var _closure2_slot4 = entity;
        zulu = _closure1_slot9;
        mike = _closure1_slot16;
        entity = {};
        entity['user'] = offset;
        entity['timestamp'] = golf;
        entity['accessibilityLabel'] = oscar;
        golf = _closure1_slot9;
        report = 14;
        report = foxtrot[report];
        report = verify.bind(tango)(report);
        oscar = report.Text;
        report = {'lineClamp': 1, 'ellipsizeMode': 'tail', 'lineBreakMode': 'tail', 'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
        options = options.subtextContent;
        report['style'] = options;
        options = 15;
        offset = foxtrot[options];
        offset = verify.bind(tango)(offset);
        yankee = offset.intl;
        offset = yankee.format;
        options = foxtrot[options];
        options = verify.bind(tango)(options);
        options = options.t;
        verify = options.M79KAA;
        options = {};
        foxtrot = function(argFoo, argBar) { // Original name: usernameHook
            _fun113905: for(var _fun113905_ip = 0; ; ) switch(_fun113905_ip) {
 0:
                report = _closure1_slot9;
                tango = _closure1_slot17;
                zulu = {};
                entity = _closure2_slot2;
                golf = null;
                mike = golf != entity;
                entity = '';
                if(!mike) { _fun113905_ip = 37; continue _fun113905 }
 33:
                entity = _closure2_slot2;
 37:
                zulu['nickname'] = entity;
                verify = _closure2_slot1;
                mike = undefined;
                options = 'username';
                entity = undefined;
                if(!(options === verify)) { _fun113905_ip = 62; continue _fun113905 }
 58:
                entity = _closure2_slot3;
 62:
                zulu['usernameColor'] = entity;
                entity = _closure2_slot3;
                zulu['roleColor'] = entity;
                options = _closure2_slot1;
                entity = 'dot';
                entity = entity === options;
                if(!entity) { _fun113905_ip = 99; continue _fun113905 }
 91:
                oscar = _closure2_slot3;
                entity = golf != oscar;
 99:
                zulu['shouldShowRoleDot'] = entity;
                entity = argBar;
                entity = report.bind(mike)(tango, zulu, entity);
                return entity;
            }
        };
        options['usernameHook'] = foxtrot;
        romeo = function(argFoo, argBar) { // Original name: messageTextHook
            report = _closure1_slot9;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 21;
            mike = golf[mike];
            tango = undefined;
            mike = zulu.bind(tango)(mike);
            zulu = mike.LegacyText;
            mike = {};
            oscar = _closure1_slot1;
            entity = 22;
            entity = golf[entity];
            golf = oscar.bind(tango)(entity);
            oscar = _closure2_slot0;
            entity = {};
            verify = true;
            entity['formatInline'] = verify;
            options = _closure2_slot4;
            entity['shouldFilterKeywords'] = options;
            entity = golf.bind(tango)(oscar, entity);
            entity = entity.content;
            mike['children'] = entity;
            entity = argBar;
            entity = report.bind(tango)(zulu, mike, entity);
            return entity;
        };
        options['messageTextHook'] = romeo;
        options = offset.bind(yankee)(verify, options);
        report['children'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: SubstringRow
        _fun113907: for(var _fun113907_ip = 0; ; ) switch(_fun113907_ip) {
 0:
            entity = argFoo;
            mike = entity.user;
            golf = entity.children;
            offset = entity.timestamp;
            verify = entity.accessibilityLabel;
            entity = _closure1_slot13;
            report = undefined;
            yankee = entity.bind(report)();
            entity = null;
            if(!(entity != mike)) { _fun113907_ip = 215; continue _fun113907 }
 46:
            zulu = _closure1_slot10;
            mike = _closure1_slot4;
            entity = {};
            tango = yankee.row;
            entity['style'] = tango;
            tango = new Array(3);
            tango[0] = golf;
            romeo = _closure1_slot9;
            options = _closure1_slot4;
            golf = {};
            foxtrot = yankee.dividerDot;
            golf['style'] = foxtrot;
            golf = romeo.bind(report)(options, golf);
            tango[1] = golf;
            romeo = _closure1_slot9;
            options = _closure1_slot0;
            foxtrot = _closure1_slot2;
            golf = 14;
            golf = foxtrot[golf];
            golf = options.bind(report)(golf);
            options = golf.Text;
            golf = {};
            foxtrot = yankee.timestamp;
            golf['style'] = foxtrot;
            golf['accessibilityLabel'] = verify;
            foxtrot = 'text-sm/medium';
            golf['variant'] = foxtrot;
            foxtrot = 'text-muted';
            golf['color'] = foxtrot;
            foxtrot = global;
            foxtrot = foxtrot.HermesInternal;
            backup = foxtrot.concat;
            foxtrot = '';
            foxtrot = backup.bind(foxtrot)(offset);
            golf['children'] = foxtrot;
            golf = romeo.bind(report)(options, golf);
            tango[2] = golf;
            entity['children'] = tango;
            entity = zulu.bind(report)(mike, entity);
            _fun113907_ip = 326; continue _fun113907;
 215:
            tango = _closure1_slot9;
            zulu = _closure1_slot4;
            mike = {};
            golf = yankee.row;
            mike['style'] = golf;
            options = _closure1_slot9;
            golf = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 14;
            oscar = romeo[oscar];
            oscar = golf.bind(report)(oscar);
            golf = oscar.Text;
            oscar = {};
            yankee = yankee.timestamp;
            oscar['style'] = yankee;
            oscar['accessibilityLabel'] = verify;
            verify = 'text-sm/medium';
            oscar['variant'] = verify;
            verify = 'text-muted';
            oscar['color'] = verify;
            verify = ' ';
            verify = verify + offset;
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 326:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: Username
        _fun113908: for(var _fun113908_ip = 0; ; ) switch(_fun113908_ip) {
 0:
            mike = argFoo;
            verify = mike.nickname;
            offset = mike.usernameColor;
            var _closure2_slot0 = offset;
            romeo = mike.roleColor;
            golf = mike.shouldShowRoleDot;
            mike = _closure1_slot13;
            tango = undefined;
            options = mike.bind(tango)();
            var _closure2_slot1 = options;
            report = _closure1_slot3;
            zulu = report.useMemo;
            mike = new Array(2);
            mike[0] = offset;
            mike[1] = options;
            entity = function() {
                _fun113909: for(var _fun113909_ip = 0; ; ) switch(_fun113909_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = null;
                    if(!(entity == mike)) { _fun113909_ip = 24; continue _fun113909 }
 13:
                    entity = _closure2_slot1;
                    entity = entity.username;
                    _fun113909_ip = 58; continue _fun113909;
 24:
                    mike = _closure2_slot1;
                    zulu = mike.username;
                    mike = new Array(2);
                    mike[0] = zulu;
                    zulu = {};
                    tango = _closure2_slot0;
                    zulu['color'] = tango;
                    mike[1] = zulu;
                    entity = mike;
 58:
                    return entity;
                }
            };
            offset = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot10;
            mike = _closure1_slot11;
            entity = {};
            if(!golf) { _fun113908_ip = 147; continue _fun113908 }
 97:
            yankee = _closure1_slot9;
            options = _closure1_slot0;
            foxtrot = _closure1_slot2;
            report = 23;
            report = foxtrot[report];
            report = options.bind(tango)(report);
            options = report.RoleDot;
            report = {};
            report['color'] = romeo;
            romeo = 'small';
            report['size'] = romeo;
            golf = yankee.bind(tango)(options, report);
 147:
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot9;
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            oscar = 21;
            oscar = yankee[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.LegacyText;
            oscar = {};
            oscar['style'] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    options = tango.bind(entity)(golf);
    var _closure1_slot3 = options;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.MessageTypes;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    foxtrot = tango.Fonts;
    tango = 8;
    verify = oscar[tango];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot9 = verify;
    verify = oscar[tango];
    verify = report.bind(entity)(verify);
    verify = verify.jsxs;
    var _closure1_slot10 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot11 = tango;
    verify = golf.CHANNEL_NAME_CHANGE;
    tango = new Array(2);
    tango[0] = verify;
    golf = golf.THREAD_STARTER_MESSAGE;
    tango[1] = golf;
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    golf = verify.createStyles;
    tango = {};
    offset = {};
    yankee = 'row';
    offset['flexDirection'] = yankee;
    tango['row'] = offset;
    offset = {'fontSize': 14, 'lineHeight': 18};
    backup = 18;
    yankee = foxtrot.PRIMARY_MEDIUM;
    offset['fontFamily'] = yankee;
    yankee = 10;
    kilo = oscar[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.HEADER_SECONDARY;
    offset['color'] = kilo;
    tango['subText'] = offset;
    offset = {'lineHeight': 18, 'flexShrink': 1};
    tango['subtextContent'] = offset;
    offset = {};
    offset['lineHeight'] = backup;
    tango['timestamp'] = offset;
    offset = {'fontSize': 14, 'lineHeight': 18};
    foxtrot = foxtrot.PRIMARY_SEMIBOLD;
    offset['fontFamily'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.HEADER_SECONDARY;
    offset['color'] = foxtrot;
    tango['username'] = offset;
    offset = {'width': 4, 'height': 4, 'marginHorizontal': 4, 'borderRadius': 2, 'backgroundColor': null, 'alignSelf': 'center'};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BG_MOD_STRONG;
    offset['backgroundColor'] = foxtrot;
    tango['dividerDot'] = offset;
    offset = {'position': 'absolute', 'height': 1, 'left': 16, 'right': 0, 'bottom': 0};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACCENT;
    offset['backgroundColor'] = yankee;
    tango['divider'] = offset;
    tango = golf.bind(verify)(tango);
    var _closure1_slot13 = tango;
    golf = options.memo;
    tango = function(argFoo) {
        _fun113910: for(var _fun113910_ip = 0; ; ) switch(_fun113910_ip) {
 0:
            entity = argFoo;
            verify = entity.thread;
            var _closure2_slot0 = verify;
            oscar = entity.timestamp;
            options = entity.accessibilityLabel;
            tango = undefined;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            entity = _closure1_slot13;
            offset = entity.bind(tango)();
            zulu = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 11;
            entity = yankee[mike];
            backup = zulu.bind(tango)(entity);
            foxtrot = backup.useStateFromStores;
            entity = _closure1_slot7;
            golf = new Array(1);
            golf[0] = entity;
            entity = function() {
                zulu = _closure1_slot7;
                mike = zulu.getUser;
                entity = _closure2_slot0;
                entity = entity.ownerId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = foxtrot.bind(backup)(golf, entity);
            var _closure2_slot1 = golf;
            entity = yankee[mike];
            kilo = zulu.bind(tango)(entity);
            backup = kilo.useStateFromStores;
            entity = _closure1_slot6;
            foxtrot = new Array(1);
            foxtrot[0] = entity;
            entity = function() {
                tango = _closure1_slot6;
                zulu = tango.getMember;
                entity = _closure2_slot0;
                mike = entity.guild_id;
                entity = entity.ownerId;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = backup.bind(kilo)(foxtrot, entity);
            var _closure2_slot2 = entity;
            mike = yankee[mike];
            foxtrot = zulu.bind(tango)(mike);
            yankee = foxtrot.useStateFromStores;
            mike = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                entity = _closure1_slot5;
                entity = entity.roleStyle;
                return entity;
            };
            mike = yankee.bind(foxtrot)(zulu, mike);
            var _closure2_slot3 = mike;
            mike = null;
            yankee = mike == entity;
            zulu = undefined;
            if(yankee) { _fun113910_ip = 204; continue _fun113910 }
 198:
            zulu = entity.colorString;
 204:
            yankee = mike != zulu;
            mike = undefined;
            if(!yankee) { _fun113910_ip = 216; continue _fun113910 }
 213:
            mike = zulu;
 216:
            _closure2_slot4 = mike;
            zulu = _closure1_slot3;
            mike = zulu.useRef;
            mike = mike.bind(zulu)(verify);
            _closure2_slot5 = mike;
            verify = _closure1_slot3;
            zulu = verify.useEffect;
            mike = function() {
                mike = _closure2_slot5;
                entity = _closure2_slot0;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(verify)(mike);
            verify = _closure1_slot3;
            zulu = verify.useEffect;
            mike = new Array(2);
            mike[0] = entity;
            mike[1] = golf;
            entity = function() {
                _fun113915: for(var _fun113915_ip = 0; ; ) switch(_fun113915_ip) {
 0:
                    mike = _closure2_slot1;
                    zulu = null;
                    if(!(zulu != mike)) { _fun113915_ip = 21; continue _fun113915 }
 13:
                    mike = _closure2_slot2;
                    if(!(zulu == mike)) { _fun113915_ip = 86; continue _fun113915 }
 21:
                    entity = _closure2_slot5;
                    entity = entity.current;
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 13;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.requestMembersById;
                    mike = entity.guild_id;
                    report = entity.ownerId;
                    entity = new Array(1);
                    entity[0] = report;
                    entity = zulu.bind(tango)(mike, entity);
 86:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zulu.bind(verify)(entity, mike);
            zulu = _closure1_slot9;
            mike = _closure1_slot16;
            entity = {};
            entity['user'] = golf;
            entity['timestamp'] = oscar;
            entity['accessibilityLabel'] = options;
            golf = _closure1_slot9;
            verify = _closure1_slot0;
            foxtrot = _closure1_slot2;
            report = 14;
            report = foxtrot[report];
            report = verify.bind(tango)(report);
            oscar = report.Text;
            report = {'lineClamp': 1, 'ellipsizeMode': 'tail', 'lineBreakMode': 'tail', 'style': null, 'accessibilityLabel': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            offset = offset.subtextContent;
            report['style'] = offset;
            report['accessibilityLabel'] = options;
            options = 15;
            offset = foxtrot[options];
            offset = verify.bind(tango)(offset);
            yankee = offset.intl;
            offset = yankee.format;
            options = foxtrot[options];
            options = verify.bind(tango)(options);
            options = options.t;
            verify = options.imPXd3;
            options = {};
            romeo = function(argFoo, argBar) { // Original name: usernameHook
                _fun113916: for(var _fun113916_ip = 0; ; ) switch(_fun113916_ip) {
 0:
                    report = _closure1_slot9;
                    tango = _closure1_slot17;
                    zulu = {};
                    mike = _closure2_slot2;
                    golf = null;
                    verify = golf == mike;
                    mike = undefined;
                    options = undefined;
                    if(verify) { _fun113916_ip = 43; continue _fun113916 }
 33:
                    verify = _closure2_slot2;
                    options = verify.nick;
 43:
                    if(!(golf == options)) { _fun113916_ip = 82; continue _fun113916 }
 47:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 16;
                    entity = offset[entity];
                    offset = verify.bind(mike)(entity);
                    verify = offset.getName;
                    entity = _closure2_slot1;
                    options = verify.bind(offset)(entity);
 82:
                    verify = golf != options;
                    entity = '';
                    if(!verify) { _fun113916_ip = 96; continue _fun113916 }
 93:
                    entity = options;
 96:
                    zulu['nickname'] = entity;
                    verify = _closure2_slot3;
                    options = 'username';
                    entity = undefined;
                    if(!(options === verify)) { _fun113916_ip = 119; continue _fun113916 }
 115:
                    entity = _closure2_slot4;
 119:
                    zulu['usernameColor'] = entity;
                    entity = _closure2_slot4;
                    zulu['roleColor'] = entity;
                    options = _closure2_slot3;
                    entity = 'dot';
                    entity = entity === options;
                    if(!entity) { _fun113916_ip = 156; continue _fun113916 }
 148:
                    oscar = _closure2_slot4;
                    entity = golf != oscar;
 156:
                    zulu['shouldShowRoleDot'] = entity;
                    entity = argBar;
                    entity = report.bind(mike)(tango, zulu, entity);
                    return entity;
                }
            };
            options['usernameHook'] = romeo;
            options = offset.bind(yankee)(verify, options);
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = 24;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/threads/native/components/ThreadBrowserRowSubtext.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ThreadSubtext
        _fun113917: for(var _fun113917_ip = 0; ; ) switch(_fun113917_ip) {
 0:
            entity = argFoo;
            golf = entity.thread;
            yankee = golf.id;
            var _closure2_slot0 = yankee;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            tango = 11;
            oscar = mike[tango];
            tango = undefined;
            offset = zulu.bind(tango)(oscar);
            verify = offset.useStateFromStores;
            oscar = _closure1_slot8;
            options = new Array(1);
            options[0] = oscar;
            oscar = new Array(1);
            oscar[0] = yankee;
            report = function() {
                zulu = _closure1_slot8;
                mike = zulu.getMostRecentMessage;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = verify.bind(offset)(options, report, oscar);
            options = 12;
            mike = mike[options];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useLastMessageTimestamp;
            report = mike.bind(zulu)(golf);
            mike = null;
            if(!(mike != verify)) { _fun113917_ip = 175; continue _fun113917 }
 113:
            oscar = _closure1_slot12;
            zulu = oscar.includes;
            mike = verify.type;
            mike = zulu.bind(oscar)(mike);
            if(mike) { _fun113917_ip = 175; continue _fun113917 }
 135:
            mike = golf.isArchivedThread;
            mike = mike.bind(golf)();
            if(mike) { _fun113917_ip = 175; continue _fun113917 }
 148:
            oscar = _closure1_slot9;
            zulu = _closure1_slot15;
            mike = {};
            mike['thread'] = golf;
            mike['message'] = verify;
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 175:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            oscar = mike[options];
            verify = zulu.bind(tango)(oscar);
            oscar = verify.getTimestampString;
            oscar = oscar.bind(verify)(report);
            mike = mike[options];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.getTimestampAccessibilityLabel;
            report = mike.bind(zulu)(report);
            zulu = _closure1_slot9;
            mike = _closure1_slot14;
            entity = {};
            entity['thread'] = golf;
            entity['timestamp'] = oscar;
            entity['accessibilityLabel'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['ThreadSubtext'] = mike;
    return entity;
})();