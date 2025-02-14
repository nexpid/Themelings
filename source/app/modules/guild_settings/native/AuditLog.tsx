// app/modules/guild_settings/native/AuditLog.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun125553: for(var _fun125553_ip = 0; ; ) switch(_fun125553_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot24;
            entity = entity.bind(zulu)();
            if(entity) { _fun125553_ip = 51; continue _fun125553 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun125553_ip = 92; continue _fun125553;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun125553_ip = 71; continue _fun125553 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun125554: for(var _fun125554_ip = 0; ; ) switch(_fun125554_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun125554_ip = 76; continue _fun125554;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot24 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar) { // Original name: shouldNotRenderChangeDetail
        _fun125557: for(var _fun125557_ip = 0; ; ) switch(_fun125557_ip) {
 0:
            zulu = _closure1_slot2;
            mike = _closure1_slot3;
            entity = 16;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            mike = entity.NotRenderedChanges;
            entity = argFoo;
            entity = entity.targetType;
            zulu = mike[entity];
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun125557_ip = 71; continue _fun125557 }
 53:
            mike = argBar;
            mike = mike.key;
            zulu = zulu[mike];
            mike = true;
            entity = mike === zulu;
 71:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getUserAvatarSource
        _fun125558: for(var _fun125558_ip = 0; ; ) switch(_fun125558_ip) {
 0:
            golf = argBar;
            verify = argBaz;
            zulu = golf.action;
            mike = _closure1_slot17;
            mike = mike.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(zulu !== mike)) { _fun125558_ip = 292; continue _fun125558 }
 31:
            zulu = golf.action;
            mike = _closure1_slot17;
            mike = mike.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(zulu !== mike)) { _fun125558_ip = 292; continue _fun125558 }
 53:
            zulu = golf.action;
            mike = _closure1_slot17;
            mike = mike.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(zulu !== mike)) { _fun125558_ip = 292; continue _fun125558 }
 75:
            zulu = golf.action;
            mike = _closure1_slot17;
            mike = mike.AUTO_MODERATION_QUARANTINE_USER;
            if(!(zulu !== mike)) { _fun125558_ip = 292; continue _fun125558 }
 97:
            mike = golf.options;
            mike = mike.integration_type;
            oscar = null;
            if(!(oscar != mike)) { _fun125558_ip = 161; continue _fun125558 }
 114:
            zulu = _closure1_slot1;
            tango = _closure1_slot3;
            mike = 19;
            mike = tango[mike];
            report = undefined;
            tango = zulu.bind(report)(mike);
            zulu = tango.get;
            mike = golf.options;
            mike = mike.integration_type;
            mike = zulu.bind(tango)(mike);
            if(!(oscar == mike)) { _fun125558_ip = 203; continue _fun125558 }
 161:
            options = oscar != verify;
            zulu = undefined;
            if(!options) { _fun125558_ip = 201; continue _fun125558 }
 170:
            options = golf.user;
            oscar = oscar == options;
            tango = undefined;
            if(oscar) { _fun125558_ip = 198; continue _fun125558 }
 184:
            golf = options.getAvatarSource;
            oscar = false;
            tango = golf.bind(options)(verify, oscar);
 198:
            zulu = tango;
 201:
            return zulu;
 203:
            tango = _closure1_slot0;
            oscar = _closure1_slot3;
            zulu = 20;
            zulu = oscar[zulu];
            oscar = tango.bind(report)(zulu);
            tango = oscar.isThemeDark;
            zulu = argFoo;
            zulu = tango.bind(oscar)(zulu);
            mike = mike.icon;
            if(zulu) { _fun125558_ip = 253; continue _fun125558 }
 245:
            tango = mike.lightPNG;
            _fun125558_ip = 259; continue _fun125558;
 253:
            tango = mike.darkPNG;
 259:
            zulu = _closure1_slot0;
            oscar = _closure1_slot3;
            mike = 18;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.makeSource;
            mike = mike.bind(zulu)(tango);
            return mike;
 292:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            entity = 17;
            mike = options[entity];
            oscar = undefined;
            zulu = golf.bind(oscar)(mike);
            mike = zulu.ensureAvatarSource;
            tango = 18;
            tango = options[tango];
            report = golf.bind(oscar)(tango);
            tango = report.makeSource;
            entity = options[entity];
            oscar = golf.bind(oscar)(entity);
            entity = oscar.getAutomodAvatarURL;
            entity = entity.bind(oscar)();
            entity = tango.bind(report)(entity);
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: ApplicationHook
        _fun125559: for(var _fun125559_ip = 0; ; ) switch(_fun125559_ip) {
 0:
            entity = argFoo;
            tango = entity.applicationId;
            zulu = _closure1_slot0;
            report = _closure1_slot3;
            entity = 21;
            entity = report[entity];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = zulu.useGetOrFetchApplication;
            oscar = entity.bind(zulu)(tango);
            entity = null;
            zulu = entity == oscar;
            if(zulu) { _fun125559_ip = 111; continue _fun125559 }
 53:
            tango = _closure1_slot20;
            zulu = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 22;
            mike = golf[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.Text;
            mike = {'variant': 'text-md/normal', 'color': 'header-secondary'};
            oscar = oscar.name;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 111:
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    golf = 6;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.View;
    var _closure1_slot9 = golf;
    golf = 7;
    golf = oscar[golf];
    offset = options.bind(entity)(golf);
    var _closure1_slot10 = offset;
    foxtrot = 8;
    golf = oscar[foxtrot];
    golf = options.bind(entity)(golf);
    var _closure1_slot11 = golf;
    golf = 9;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot12 = golf;
    kilo = 10;
    golf = oscar[kilo];
    golf = options.bind(entity)(golf);
    var _closure1_slot13 = golf;
    golf = 11;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot14 = golf;
    golf = 12;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    verify = golf.AuditLogTargetTypes;
    var _closure1_slot15 = verify;
    verify = golf.AuditLogActionTypes;
    var _closure1_slot16 = verify;
    verify = golf.AuditLogActions;
    var _closure1_slot17 = verify;
    verify = golf.NOOP;
    var _closure1_slot18 = verify;
    backup = golf.Fonts;
    golf = golf.AuditLogChangeKeys;
    var _closure1_slot19 = golf;
    golf = 13;
    verify = oscar[golf];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot20 = verify;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot21 = golf;
    golf = 14;
    golf = oscar[golf];
    yankee = report.bind(entity)(golf);
    verify = yankee.createLegacyClassComponentStyles;
    golf = {};
    romeo = {'marginHorizontal': 8, 'marginVertical': 4, 'borderRadius': 3};
    golf['container'] = romeo;
    romeo = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    golf['rowContainer'] = romeo;
    romeo = {'marginRight': 24, 'flex': 1};
    golf['titleContainer'] = romeo;
    romeo = {};
    romeo['marginHorizontal'] = foxtrot;
    golf['title'] = romeo;
    romeo = {'fontSize': 12, 'lineHeight': 30};
    foxtrot = 15;
    sizing = oscar[foxtrot];
    sizing = options.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    sizing = sizing.PRIMARY_400;
    romeo['color'] = sizing;
    golf['discriminator'] = romeo;
    romeo = {'marginLeft': 10, 'height': 32, 'width': 32};
    golf['avatar'] = romeo;
    romeo = {'fontSize': 12, 'marginHorizontal': 8, 'marginTop': 8};
    sizing = oscar[foxtrot];
    sizing = options.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    sizing = sizing.PRIMARY_400;
    romeo['color'] = sizing;
    golf['timestamp'] = romeo;
    romeo = {'height': 13, 'width': 8, 'marginRight': 8};
    sizing = oscar[foxtrot];
    sizing = options.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.INTERACTIVE_NORMAL;
    romeo['tintColor'] = sizing;
    golf['arrow'] = romeo;
    romeo = {};
    output = {};
    sizing = '90deg';
    output['rotate'] = sizing;
    sizing = new Array(1);
    sizing[0] = output;
    romeo['transform'] = sizing;
    golf['rotate90'] = romeo;
    romeo = {};
    sizing = oscar[foxtrot];
    sizing = options.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_4;
    romeo['marginTop'] = sizing;
    sizing = oscar[foxtrot];
    sizing = options.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_8;
    romeo['padding'] = sizing;
    sizing = oscar[foxtrot];
    sizing = options.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.md;
    romeo['borderRadius'] = sizing;
    sizing = oscar[foxtrot];
    sizing = options.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BG_MOD_FAINT;
    romeo['backgroundColor'] = sizing;
    golf['changesContainer'] = romeo;
    romeo = {'flexDirection': 'row', 'flex': 1, 'alignItems': 'flex-start'};
    golf['changeRow'] = romeo;
    romeo = {};
    romeo['marginRight'] = kilo;
    backup = backup.CODE_BOLD;
    romeo['fontFamily'] = backup;
    golf['changeNumberText'] = romeo;
    romeo = {'color': null, 'alignItems': 'baseline', 'fontSize': 14};
    backup = oscar[foxtrot];
    backup = options.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    backup = backup.PRIMARY_400;
    romeo['color'] = backup;
    golf['changeItemText'] = romeo;
    romeo = {'height': 10, 'width': 10, 'borderRadius': 5};
    foxtrot = oscar[foxtrot];
    foxtrot = options.bind(entity)(foxtrot);
    foxtrot = foxtrot.unsafe_rawColors;
    foxtrot = foxtrot.TRANSPARENT;
    romeo['borderColor'] = foxtrot;
    golf['colorHook'] = romeo;
    romeo = {'flex': 1, 'alignItems': 'flex-start'};
    golf['changeItemContent'] = romeo;
    romeo = {'alignItems': 'center', 'flexDirection': 'row'};
    golf['changeItemTextContainer'] = romeo;
    romeo = {'height': 'auto', 'paddingVertical': 0, 'paddingHorizontal': 4};
    golf['forumTag'] = romeo;
    romeo = {'height': 14, 'width': 14};
    golf['imageEmoji'] = romeo;
    romeo = {'fontSize': 14, 'lineHeight': 16};
    golf['textEmoji'] = romeo;
    golf = verify.bind(yankee)(golf);
    var _closure1_slot22 = golf;
    golf = tango.PureComponent;
    tango = function(argFoo) {
        tango = function() { // Original name: AuditLog
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot4;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot23;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'hasChangesToRender';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun125562: for(var _fun125562_ip = 0; ; ) switch(_fun125562_ip) {
 0:
                entity = this;
                entity = entity.props;
                tango = entity.log;
                var _closure3_slot0 = tango;
                report = tango.changes;
                oscar = tango.actionType;
                entity = _closure1_slot16;
                entity = entity.DELETE;
                entity = oscar !== entity;
                if(entity) { _fun125562_ip = 71; continue _fun125562 }
 52:
                golf = tango.action;
                oscar = _closure1_slot17;
                oscar = oscar.MEMBER_BAN_ADD;
                entity = golf === oscar;
 71:
                if(entity) { _fun125562_ip = 93; continue _fun125562 }
 74:
                golf = tango.action;
                oscar = _closure1_slot17;
                oscar = oscar.MEMBER_KICK;
                entity = golf === oscar;
 93:
                if(entity) { _fun125562_ip = 115; continue _fun125562 }
 96:
                tango = tango.action;
                mike = _closure1_slot17;
                mike = mike.MEMBER_PRUNE;
                entity = tango === mike;
 115:
                if(!entity) { _fun125562_ip = 148; continue _fun125562 }
 118:
                mike = null;
                mike = mike != report;
                if(!mike) { _fun125562_ip = 145; continue _fun125562 }
 127:
                tango = report.some;
                zulu = function(argFoo) {
                    tango = _closure1_slot25;
                    zulu = _closure3_slot0;
                    mike = undefined;
                    entity = argFoo;
                    entity = tango.bind(mike)(zulu, entity);
                    entity = !entity;
                    return entity;
                };
                mike = tango.bind(report)(zulu);
 145:
                entity = mike;
 148:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'renderTitle';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun125564: for(var _fun125564_ip = 0; ; ) switch(_fun125564_ip) {
 0:
                entity = this;
                zulu = _closure1_slot22;
                mike = entity.context;
                report = undefined;
                oscar = zulu.bind(report)(mike);
                var _closure3_slot0 = oscar;
                entity = entity.props;
                zulu = entity.log;
                var _closure3_slot1 = zulu;
                kilo = zulu.user;
                var _closure3_slot2 = kilo;
                foxtrot = zulu.target;
                var _closure3_slot3 = foxtrot;
                offset = zulu.options;
                var _closure3_slot4 = offset;
                mike = _closure1_slot2;
                tango = _closure1_slot3;
                entity = 16;
                entity = tango[entity];
                mike = mike.bind(report)(entity);
                entity = mike.getChangeTitle;
                verify = entity.bind(mike)(zulu);
                backup = null;
                mike = backup != verify;
                entity = null;
                if(!mike) { _fun125564_ip = 361; continue _fun125564 }
 116:
                tango = _closure1_slot20;
                golf = _closure1_slot0;
                options = _closure1_slot3;
                mike = 22;
                mike = options[mike];
                mike = golf.bind(report)(mike);
                zulu = mike.Text;
                mike = {'style': null, 'accessibilityRole': 'header', 'variant': 'text-md/medium', 'color': 'header-primary'};
                oscar = oscar.title;
                mike['style'] = oscar;
                oscar = 23;
                oscar = options[oscar];
                oscar = golf.bind(report)(oscar);
                options = oscar.intl;
                golf = options.format;
                oscar = {};
                oscar['user'] = kilo;
                oscar['target'] = foxtrot;
                foxtrot = function() { // Original name: userHook
                    _fun125565: for(var _fun125565_ip = 0; ; ) switch(_fun125565_ip) {
 0:
                        mike = _closure3_slot2;
                        tango = null;
                        if(!(tango == mike)) { _fun125565_ip = 284; continue _fun125565 }
 16:
                        mike = _closure3_slot4;
                        mike = mike.integration_type;
                        if(!(tango == mike)) { _fun125565_ip = 92; continue _fun125565 }
 30:
                        golf = _closure1_slot0;
                        options = _closure1_slot3;
                        mike = 23;
                        zulu = options[mike];
                        oscar = undefined;
                        zulu = golf.bind(oscar)(zulu);
                        report = zulu.intl;
                        zulu = report.string;
                        mike = options[mike];
                        mike = golf.bind(oscar)(mike);
                        mike = mike.t;
                        mike = mike.30mdIy;
                        mike = zulu.bind(report)(mike);
                        return mike;
 92:
                        report = _closure1_slot1;
                        oscar = _closure1_slot3;
                        mike = 19;
                        mike = oscar[mike];
                        oscar = undefined;
                        golf = report.bind(oscar)(mike);
                        report = golf.get;
                        mike = _closure3_slot4;
                        mike = mike.integration_type;
                        report = report.bind(golf)(mike);
                        golf = tango == report;
                        mike = undefined;
                        if(golf) { _fun125565_ip = 151; continue _fun125565 }
 146:
                        mike = report.name;
 151:
                        if(!(tango == mike)) { _fun125565_ip = 210; continue _fun125565 }
 155:
                        options = _closure1_slot0;
                        verify = _closure1_slot3;
                        tango = 23;
                        report = verify[tango];
                        report = options.bind(oscar)(report);
                        golf = report.intl;
                        report = golf.string;
                        tango = verify[tango];
                        tango = options.bind(oscar)(tango);
                        tango = tango.t;
                        tango = tango.n+olu7;
                        mike = report.bind(golf)(tango);
 210:
                        report = _closure1_slot20;
                        tango = _closure1_slot0;
                        golf = _closure1_slot3;
                        zulu = 22;
                        zulu = golf[zulu];
                        zulu = tango.bind(oscar)(zulu);
                        tango = zulu.Text;
                        zulu = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        zulu['children'] = mike;
                        mike = _closure3_slot4;
                        golf = mike.integration_type;
                        mike = 'integration';
                        mike = mike + golf;
                        mike = report.bind(oscar)(tango, zulu, mike);
                        return mike;
 284:
                        report = _closure1_slot21;
                        zulu = _closure1_slot0;
                        verify = _closure1_slot3;
                        mike = 22;
                        mike = verify[mike];
                        tango = undefined;
                        mike = zulu.bind(tango)(mike);
                        zulu = mike.Text;
                        mike = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        golf = _closure1_slot1;
                        oscar = 24;
                        oscar = verify[oscar];
                        offset = golf.bind(tango)(oscar);
                        golf = offset.getUserTag;
                        verify = _closure3_slot2;
                        oscar = {};
                        yankee = 'username';
                        oscar['mode'] = yankee;
                        golf = golf.bind(offset)(verify, oscar);
                        oscar = new Array(2);
                        oscar[0] = golf;
                        golf = verify.isPomelo;
                        golf = golf.bind(verify)();
                        golf = !golf;
                        if(!golf) { _fun125565_ip = 472; continue _fun125565 }
 398:
                        offset = _closure1_slot20;
                        verify = _closure1_slot0;
                        yankee = _closure1_slot3;
                        options = 25;
                        options = yankee[options];
                        options = verify.bind(tango)(options);
                        verify = options.LegacyText;
                        options = {};
                        yankee = _closure3_slot0;
                        yankee = yankee.discriminator;
                        options['style'] = yankee;
                        yankee = _closure3_slot2;
                        romeo = yankee.discriminator;
                        yankee = '#';
                        yankee = yankee + romeo;
                        options['children'] = yankee;
                        golf = offset.bind(tango)(verify, options);
 472:
                        oscar[1] = golf;
                        mike['children'] = oscar;
                        entity = _closure3_slot2;
                        oscar = entity.id;
                        entity = 'user';
                        entity = entity + oscar;
                        entity = report.bind(tango)(zulu, mike, entity);
                        return entity;
                    }
                };
                oscar['userHook'] = foxtrot;
                foxtrot = function(argFoo, argBar) { // Original name: targetHook
                    _fun125566: for(var _fun125566_ip = 0; ; ) switch(_fun125566_ip) {
 0:
                        entity = _closure3_slot1;
                        zulu = entity.targetType;
                        entity = _closure1_slot15;
                        entity = entity.USER;
                        if(!(zulu === entity)) { _fun125566_ip = 48; continue _fun125566 }
 30:
                        zulu = _closure3_slot3;
                        entity = _closure1_slot12;
                        entity = zulu instanceof entity;
                        if(entity) { _fun125566_ip = 234; continue _fun125566 }
 48:
                        entity = _closure3_slot1;
                        zulu = entity.targetType;
                        entity = _closure1_slot15;
                        entity = entity.GUILD;
                        if(!(zulu === entity)) { _fun125566_ip = 87; continue _fun125566 }
 72:
                        zulu = _closure3_slot3;
                        entity = _closure1_slot11;
                        entity = zulu instanceof entity;
                        if(entity) { _fun125566_ip = 151; continue _fun125566 }
 87:
                        oscar = _closure1_slot20;
                        zulu = _closure1_slot0;
                        tango = _closure1_slot3;
                        entity = 22;
                        entity = tango[entity];
                        report = undefined;
                        entity = zulu.bind(report)(entity);
                        tango = entity.Text;
                        zulu = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        entity = argFoo;
                        zulu['children'] = entity;
                        entity = argBar;
                        entity = oscar.bind(report)(tango, zulu, entity);
                        _fun125566_ip = 229; continue _fun125566;
 151:
                        golf = _closure1_slot20;
                        tango = _closure1_slot0;
                        report = _closure1_slot3;
                        zulu = 22;
                        zulu = report[zulu];
                        oscar = undefined;
                        zulu = tango.bind(oscar)(zulu);
                        report = zulu.Text;
                        tango = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        zulu = _closure3_slot3;
                        options = zulu.name;
                        tango['children'] = options;
                        options = zulu.id;
                        zulu = 'target';
                        zulu = zulu + options;
                        entity = golf.bind(oscar)(report, tango, zulu);
 229:
                        _fun125566_ip = 454; continue _fun125566;
 234:
                        oscar = _closure1_slot21;
                        tango = _closure1_slot0;
                        offset = _closure1_slot3;
                        zulu = 22;
                        zulu = offset[zulu];
                        report = undefined;
                        zulu = tango.bind(report)(zulu);
                        tango = zulu.Text;
                        zulu = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        options = _closure1_slot1;
                        golf = 24;
                        golf = offset[golf];
                        yankee = options.bind(report)(golf);
                        offset = yankee.getUserTag;
                        options = _closure3_slot3;
                        golf = {};
                        romeo = 'username';
                        golf['mode'] = romeo;
                        offset = offset.bind(yankee)(options, golf);
                        golf = new Array(2);
                        golf[0] = offset;
                        offset = options.discriminator;
                        options = '0';
                        options = options !== offset;
                        if(!options) { _fun125566_ip = 422; continue _fun125566 }
 348:
                        yankee = _closure1_slot20;
                        offset = _closure1_slot0;
                        romeo = _closure1_slot3;
                        verify = 25;
                        verify = romeo[verify];
                        verify = offset.bind(report)(verify);
                        offset = verify.LegacyText;
                        verify = {};
                        romeo = _closure3_slot0;
                        romeo = romeo.discriminator;
                        verify['style'] = romeo;
                        romeo = _closure3_slot3;
                        foxtrot = romeo.discriminator;
                        romeo = '#';
                        romeo = romeo + foxtrot;
                        verify['children'] = romeo;
                        options = yankee.bind(report)(offset, verify);
 422:
                        golf[1] = options;
                        zulu['children'] = golf;
                        mike = _closure3_slot3;
                        golf = mike.id;
                        mike = 'target';
                        mike = mike + golf;
                        entity = oscar.bind(report)(tango, zulu, mike);
 454:
                        return entity;
                    }
                };
                oscar['targetHook'] = foxtrot;
                foxtrot = offset.count;
                oscar['count'] = foxtrot;
                foxtrot = offset.channel;
                if(!(backup != foxtrot)) { _fun125564_ip = 313; continue _fun125564 }
 247:
                foxtrot = offset.channel;
                backup = 'string';
                foxtrot = typeof foxtrot;
                if(!(backup !== foxtrot)) { _fun125564_ip = 313; continue _fun125564 }
 263:
                backup = _closure1_slot0;
                kilo = _closure1_slot3;
                foxtrot = 26;
                foxtrot = kilo[foxtrot];
                output = backup.bind(report)(foxtrot);
                sizing = output.computeChannelName;
                source = offset.channel;
                update = _closure1_slot14;
                echo = _closure1_slot13;
                result = true;
                control = output;
                romeo = control[sizing](source, update, echo, result, output);
                _fun125564_ip = 318; continue _fun125564;
 313:
                romeo = offset.channel;
 318:
                oscar['channel'] = romeo;
                yankee = function(argFoo, argBar) { // Original name: channelHook
                    report = _closure1_slot20;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot3;
                    entity = 22;
                    entity = zulu[entity];
                    tango = undefined;
                    entity = mike.bind(tango)(entity);
                    zulu = entity.Text;
                    mike = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                    entity = argFoo;
                    mike['children'] = entity;
                    entity = argBar;
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                };
                oscar['channelHook'] = yankee;
                offset = offset.subtarget;
                oscar['subtarget'] = offset;
                oscar = golf.bind(options)(verify, oscar);
                mike['children'] = oscar;
                entity = tango.bind(report)(zulu, mike);
 361:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'renderRoleUpdate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun125568: for(var _fun125568_ip = 0; ; ) switch(_fun125568_ip) {
 0:
                entity = argFoo;
                tango = entity.newValue;
                entity = global;
                mike = entity.Array;
                entity = mike.isArray;
                mike = entity.bind(mike)(tango);
                entity = null;
                if(!mike) { _fun125568_ip = 51; continue _fun125568 }
 32:
                zulu = tango.map;
                mike = function(argFoo) {
                    entity = argFoo;
                    report = _closure1_slot20;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot3;
                    mike = 22;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.Text;
                    mike = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                    oscar = entity.name;
                    mike['children'] = oscar;
                    entity = entity.id;
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                };
                entity = zulu.bind(tango)(mike);
 51:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'renderPermissionUpdate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun125570: for(var _fun125570_ip = 0; ; ) switch(_fun125570_ip) {
 0:
                entity = this;
                var _closure3_slot0 = entity;
                entity = argFoo;
                tango = entity.newValue;
                entity = global;
                zulu = entity.Array;
                entity = zulu.isArray;
                zulu = entity.bind(zulu)(tango);
                entity = null;
                if(!zulu) { _fun125570_ip = 58; continue _fun125570 }
 41:
                zulu = tango.map;
                mike = function(argFoo) {
                    report = argFoo;
                    tango = _closure1_slot20;
                    mike = _closure1_slot0;
                    options = _closure1_slot3;
                    entity = 22;
                    entity = options[entity];
                    zulu = undefined;
                    entity = mike.bind(zulu)(entity);
                    mike = entity.Text;
                    entity = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                    golf = _closure1_slot2;
                    oscar = 16;
                    oscar = options[oscar];
                    options = golf.bind(zulu)(oscar);
                    golf = options.getStringForPermission;
                    oscar = _closure3_slot0;
                    oscar = oscar.props;
                    oscar = oscar.log;
                    oscar = golf.bind(options)(report, oscar);
                    entity['children'] = oscar;
                    entity = tango.bind(zulu)(mike, entity, report);
                    return entity;
                };
                entity = zulu.bind(tango)(mike);
 58:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'renderChangeDetails';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun125572: for(var _fun125572_ip = 0; ; ) switch(_fun125572_ip) {
 0:
                entity = this;
                var _closure3_slot0 = entity;
                mike = argFoo;
                var _closure3_slot1 = mike;
                oscar = _closure1_slot22;
                tango = entity.context;
                report = undefined;
                golf = oscar.bind(report)(tango);
                var _closure3_slot2 = golf;
                entity = entity.props;
                tango = entity.log;
                var _closure3_slot3 = tango;
                oscar = tango.changes;
                entity = null;
                if(!(entity != oscar)) { _fun125572_ip = 127; continue _fun125572 }
 66:
                oscar = 0;
                var _closure3_slot4 = oscar;
                oscar = tango.changes;
                tango = oscar.map;
                zulu = function(argFoo, argBar) {
                    _fun125573: for(var _fun125573_ip = 0; ; ) switch(_fun125573_ip) {
 0:
                        options = argFoo;
                        mike = _closure1_slot25;
                        entity = _closure3_slot3;
                        oscar = undefined;
                        entity = mike.bind(oscar)(entity, options);
                        if(entity) { _fun125573_ip = 1518; continue _fun125573 }
 33:
                        entity = _closure3_slot3;
                        mike = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.CHANNEL_UPDATE;
                        if(!(mike !== entity)) { _fun125573_ip = 79; continue _fun125573 }
 56:
                        entity = _closure3_slot3;
                        mike = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.CHANNEL_CREATE;
                        if(!(mike === entity)) { _fun125573_ip = 101; continue _fun125573 }
 79:
                        mike = options.key;
                        entity = _closure1_slot19;
                        entity = entity.TYPE;
                        if(!(mike !== entity)) { _fun125573_ip = 424; continue _fun125573 }
 101:
                        entity = _closure3_slot3;
                        mike = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.MEMBER_UPDATE;
                        if(!(mike === entity)) { _fun125573_ip = 146; continue _fun125573 }
 124:
                        mike = options.key;
                        entity = _closure1_slot19;
                        entity = entity.COMMUNICATION_DISABLED_UNTIL;
                        if(!(mike !== entity)) { _fun125573_ip = 329; continue _fun125573 }
 146:
                        entity = _closure3_slot3;
                        mike = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.GUILD_UPDATE;
                        if(!(mike === entity)) { _fun125573_ip = 188; continue _fun125573 }
 169:
                        mike = options.key;
                        entity = _closure1_slot19;
                        entity = entity.OWNER_ID;
                        if(!(mike !== entity)) { _fun125573_ip = 221; continue _fun125573 }
 188:
                        entity = {};
                        mike = options.oldValue;
                        entity['oldValue'] = mike;
                        mike = options.newValue;
                        entity['newValue'] = mike;
                        mike = false;
                        entity['transformedValues'] = mike;
                        _fun125573_ip = 324; continue _fun125573;
 221:
                        mike = {};
                        tango = _closure1_slot1;
                        report = _closure1_slot3;
                        zulu = 24;
                        verify = report[zulu];
                        foxtrot = tango.bind(oscar)(verify);
                        romeo = foxtrot.getUserTag;
                        yankee = options.oldValue;
                        verify = {};
                        offset = 'username';
                        verify['mode'] = offset;
                        verify = romeo.bind(foxtrot)(yankee, verify);
                        mike['oldValue'] = verify;
                        zulu = report[zulu];
                        verify = tango.bind(oscar)(zulu);
                        report = verify.getUserTag;
                        tango = options.newValue;
                        zulu = {};
                        zulu['mode'] = offset;
                        zulu = report.bind(verify)(tango, zulu);
                        mike['newValue'] = zulu;
                        zulu = true;
                        mike['transformedValues'] = zulu;
                        entity = mike;
 324:
                        _fun125573_ip = 554; continue _fun125573;
 329:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot3;
                        mike = 28;
                        mike = tango[mike];
                        zulu = zulu.bind(oscar)(mike);
                        mike = options.newValue;
                        report = zulu.bind(oscar)(mike);
                        mike = {};
                        zulu = options.oldValue;
                        mike['oldValue'] = zulu;
                        zulu = report.isValid;
                        zulu = zulu.bind(report)();
                        if(zulu) { _fun125573_ip = 394; continue _fun125573 }
 386:
                        zulu = options.newValue;
                        _fun125573_ip = 404; continue _fun125573;
 394:
                        tango = report.calendar;
                        zulu = tango.bind(report)();
 404:
                        mike['newValue'] = zulu;
                        zulu = true;
                        mike['transformedValues'] = zulu;
                        entity = mike;
                        _fun125573_ip = 554; continue _fun125573;
 424:
                        mike = {};
                        zulu = options.oldValue;
                        tango = null;
                        if(!(tango == zulu)) { _fun125573_ip = 481; continue _fun125573 }
 438:
                        verify = _closure1_slot0;
                        offset = _closure1_slot3;
                        report = 27;
                        report = offset[report];
                        offset = verify.bind(oscar)(report);
                        verify = offset.channelTypeString;
                        report = {};
                        yankee = options.oldValue;
                        report['type'] = yankee;
                        zulu = verify.bind(offset)(report);
 481:
                        mike['oldValue'] = zulu;
                        zulu = options.newValue;
                        if(!(tango == zulu)) { _fun125573_ip = 539; continue _fun125573 }
 496:
                        report = _closure1_slot0;
                        verify = _closure1_slot3;
                        tango = 27;
                        tango = verify[tango];
                        verify = report.bind(oscar)(tango);
                        report = verify.channelTypeString;
                        tango = {};
                        offset = options.newValue;
                        tango['type'] = offset;
                        zulu = report.bind(verify)(tango);
 539:
                        mike['newValue'] = zulu;
                        zulu = true;
                        mike['transformedValues'] = zulu;
                        entity = mike;
 554:
                        verify = entity.oldValue;
                        var _closure4_slot0 = verify;
                        echo = entity.newValue;
                        var _closure4_slot1 = echo;
                        sizing = entity.transformedValues;
                        entity = _closure3_slot3;
                        mike = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.MEMBER_ROLE_UPDATE;
                        if(!(mike !== entity)) { _fun125573_ip = 694; continue _fun125573 }
 603:
                        entity = _closure3_slot3;
                        mike = entity.targetType;
                        entity = _closure1_slot15;
                        entity = entity.ROLE;
                        if(!(mike !== entity)) { _fun125573_ip = 675; continue _fun125573 }
 627:
                        entity = _closure3_slot3;
                        mike = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.CHANNEL_OVERWRITE_CREATE;
                        if(!(mike !== entity)) { _fun125573_ip = 675; continue _fun125573 }
 650:
                        entity = _closure3_slot3;
                        mike = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.CHANNEL_OVERWRITE_UPDATE;
                        romeo = null;
                        if(!(mike === entity)) { _fun125573_ip = 692; continue _fun125573 }
 675:
                        mike = _closure3_slot0;
                        entity = mike.renderPermissionUpdate;
                        romeo = entity.bind(mike)(options);
 692:
                        _fun125573_ip = 711; continue _fun125573;
 694:
                        mike = _closure3_slot0;
                        entity = mike.renderRoleUpdate;
                        romeo = entity.bind(mike)(options);
 711:
                        mike = _closure3_slot1;
                        entity = options.key;
                        mike = mike[entity];
                        entity = null;
                        zulu = entity == mike;
                        report = undefined;
                        if(zulu) { _fun125573_ip = 740; continue _fun125573 }
 735:
                        report = mike.bind(oscar)(options);
 740:
                        if(!(entity != report)) { _fun125573_ip = 1516; continue _fun125573 }
 747:
                        zulu = _closure1_slot0;
                        tango = _closure1_slot3;
                        mike = 23;
                        mike = tango[mike];
                        mike = zulu.bind(oscar)(mike);
                        tango = mike.intl;
                        zulu = tango.format;
                        mike = {};
                        mike['oldValue'] = verify;
                        mike['newValue'] = echo;
                        verify = global;
                        offset = verify.Array;
                        verify = offset.isArray;
                        offset = verify.bind(offset)(echo);
                        verify = null;
                        if(!offset) { _fun125573_ip = 817; continue _fun125573 }
 812:
                        verify = echo.length;
 817:
                        mike['count'] = verify;
                        verify = _closure3_slot3;
                        verify = verify.options;
                        verify = verify.subtarget;
                        if(!(entity == verify)) { _fun125573_ip = 846; continue _fun125573 }
 840:
                        verify = options.subtarget;
 846:
                        offset = entity != verify;
                        options = null;
                        if(!offset) { _fun125573_ip = 858; continue _fun125573 }
 855:
                        options = verify;
 858:
                        mike['subtarget'] = options;
                        options = function() { // Original name: newColorHook
                            entity = null;
                            return entity;
                        };
                        mike['newColorHook'] = options;
                        options = function() { // Original name: oldColorHook
                            entity = null;
                            return entity;
                        };
                        mike['oldColorHook'] = options;
                        options = function(argFoo, argBar) { // Original name: oldTagHook
                            report = _closure1_slot20;
                            mike = _closure1_slot0;
                            zulu = _closure1_slot3;
                            entity = 29;
                            entity = zulu[entity];
                            tango = undefined;
                            entity = mike.bind(tango)(entity);
                            zulu = entity.AppliedForumTagPill;
                            mike = {};
                            entity = _closure4_slot0;
                            mike['tag'] = entity;
                            entity = _closure3_slot2;
                            entity = entity.forumTag;
                            mike['containerStyle'] = entity;
                            entity = argBar;
                            entity = report.bind(tango)(zulu, mike, entity);
                            return entity;
                        };
                        mike['oldTagHook'] = options;
                        options = function(argFoo, argBar) { // Original name: newTagHook
                            report = _closure1_slot20;
                            mike = _closure1_slot0;
                            zulu = _closure1_slot3;
                            entity = 29;
                            entity = zulu[entity];
                            tango = undefined;
                            entity = mike.bind(tango)(entity);
                            zulu = entity.AppliedForumTagPill;
                            mike = {};
                            entity = _closure4_slot1;
                            mike['tag'] = entity;
                            entity = _closure3_slot2;
                            entity = entity.forumTag;
                            mike['containerStyle'] = entity;
                            entity = argBar;
                            entity = report.bind(tango)(zulu, mike, entity);
                            return entity;
                        };
                        mike['newTagHook'] = options;
                        options = function(argFoo, argBar) { // Original name: oldEmojiHook
                            _fun125578: for(var _fun125578_ip = 0; ; ) switch(_fun125578_ip) {
 0:
                                zulu = _closure4_slot0;
                                mike = null;
                                mike = mike != zulu;
                                report = undefined;
                                oscar = undefined;
                                if(!mike) { _fun125578_ip = 78; continue _fun125578 }
 20:
                                zulu = _closure1_slot1;
                                tango = _closure1_slot3;
                                mike = 18;
                                mike = tango[mike];
                                tango = zulu.bind(report)(mike);
                                zulu = tango.getEmojiURL;
                                mike = {'id': null, 'animated': false, 'size': 24};
                                golf = _closure4_slot0;
                                mike['id'] = golf;
                                oscar = zulu.bind(tango)(mike);
 78:
                                tango = _closure1_slot20;
                                zulu = _closure1_slot1;
                                golf = _closure1_slot3;
                                mike = 30;
                                mike = golf[mike];
                                zulu = zulu.bind(report)(mike);
                                mike = {};
                                mike['src'] = oscar;
                                entity = _closure4_slot0;
                                mike['name'] = entity;
                                entity = _closure3_slot2;
                                oscar = entity.textEmoji;
                                mike['textEmojiStyle'] = oscar;
                                entity = entity.imageEmoji;
                                mike['fastImageStyle'] = entity;
                                entity = argBar;
                                entity = tango.bind(report)(zulu, mike, entity);
                                return entity;
                            }
                        };
                        mike['oldEmojiHook'] = options;
                        options = function(argFoo, argBar) { // Original name: newEmojiHook
                            _fun125579: for(var _fun125579_ip = 0; ; ) switch(_fun125579_ip) {
 0:
                                zulu = _closure4_slot1;
                                mike = null;
                                mike = mike != zulu;
                                report = undefined;
                                oscar = undefined;
                                if(!mike) { _fun125579_ip = 78; continue _fun125579 }
 20:
                                zulu = _closure1_slot1;
                                tango = _closure1_slot3;
                                mike = 18;
                                mike = tango[mike];
                                tango = zulu.bind(report)(mike);
                                zulu = tango.getEmojiURL;
                                mike = {'id': null, 'animated': false, 'size': 24};
                                golf = _closure4_slot1;
                                mike['id'] = golf;
                                oscar = zulu.bind(tango)(mike);
 78:
                                tango = _closure1_slot20;
                                zulu = _closure1_slot1;
                                golf = _closure1_slot3;
                                mike = 30;
                                mike = golf[mike];
                                zulu = zulu.bind(report)(mike);
                                mike = {};
                                mike['src'] = oscar;
                                entity = _closure4_slot1;
                                mike['name'] = entity;
                                entity = _closure3_slot2;
                                oscar = entity.textEmoji;
                                mike['textEmojiStyle'] = oscar;
                                entity = entity.imageEmoji;
                                mike['fastImageStyle'] = entity;
                                entity = argBar;
                                entity = tango.bind(report)(zulu, mike, entity);
                                return entity;
                            }
                        };
                        mike['newEmojiHook'] = options;
                        golf = function(argFoo, argBar) { // Original name: applicationHook
                            _fun125580: for(var _fun125580_ip = 0; ; ) switch(_fun125580_ip) {
 0:
                                report = _closure1_slot20;
                                tango = _closure1_slot27;
                                zulu = {};
                                entity = _closure4_slot0;
                                options = null;
                                oscar = options == entity;
                                mike = undefined;
                                entity = undefined;
                                if(oscar) { _fun125580_ip = 43; continue _fun125580 }
 33:
                                oscar = _closure4_slot0;
                                entity = oscar.application_id;
 43:
                                if(!(options == entity)) { _fun125580_ip = 73; continue _fun125580 }
 47:
                                oscar = _closure4_slot1;
                                options = options == oscar;
                                oscar = undefined;
                                if(options) { _fun125580_ip = 70; continue _fun125580 }
 60:
                                golf = _closure4_slot1;
                                oscar = golf.application_id;
 70:
                                entity = oscar;
 73:
                                zulu['applicationId'] = entity;
                                entity = argBar;
                                entity = report.bind(mike)(tango, zulu, entity);
                                return entity;
                            }
                        };
                        mike['applicationHook'] = golf;
                        result = zulu.bind(tango)(report, mike);
                        if(!(entity != result)) { _fun125573_ip = 1514; continue _fun125573 }
 972:
                        mike = _closure3_slot3;
                        zulu = mike.actionType;
                        mike = _closure1_slot16;
                        mike = mike.CREATE;
                        if(!(mike !== zulu)) { _fun125573_ip = 1092; continue _fun125573 }
 996:
                        mike = _closure1_slot16;
                        mike = mike.UPDATE;
                        if(!(mike !== zulu)) { _fun125573_ip = 1059; continue _fun125573 }
 1010:
                        mike = _closure1_slot16;
                        mike = mike.DELETE;
                        offset = undefined;
                        if(!(mike === zulu)) { _fun125573_ip = 1123; continue _fun125573 }
 1026:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot3;
                        mike = 15;
                        mike = tango[mike];
                        mike = zulu.bind(oscar)(mike);
                        mike = mike.unsafe_rawColors;
                        offset = mike.RED_400;
                        _fun125573_ip = 1123; continue _fun125573;
 1059:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot3;
                        mike = 15;
                        mike = tango[mike];
                        mike = zulu.bind(oscar)(mike);
                        mike = mike.unsafe_rawColors;
                        offset = mike.YELLOW_300;
                        _fun125573_ip = 1123; continue _fun125573;
 1092:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot3;
                        mike = 15;
                        mike = tango[mike];
                        mike = zulu.bind(oscar)(mike);
                        mike = mike.unsafe_rawColors;
                        offset = mike.GREEN_360;
 1123:
                        mike = _closure3_slot4;
                        mike = mike + 1;
                        _closure3_slot4 = mike;
                        report = _closure1_slot21;
                        tango = _closure1_slot9;
                        zulu = {};
                        options = _closure3_slot2;
                        mike = options.changeRow;
                        zulu['style'] = mike;
                        golf = _closure1_slot0;
                        mike = _closure1_slot3;
                        update = 22;
                        mike = mike[update];
                        mike = golf.bind(oscar)(mike);
                        golf = mike.Text;
                        mike = {};
                        verify = 'text-sm/bold';
                        mike['variant'] = verify;
                        verify = options.changeNumberText;
                        options = new Array(2);
                        options[0] = verify;
                        verify = {};
                        verify['color'] = offset;
                        options[1] = verify;
                        mike['style'] = options;
                        verify = _closure3_slot4;
                        options = 10;
                        options = verify < options;
                        verify = null;
                        if(!options) { _fun125573_ip = 1245; continue _fun125573 }
 1239:
                        verify = '0';
 1245:
                        options = new Array(3);
                        options[0] = verify;
                        verify = _closure3_slot4;
                        options[1] = verify;
                        verify = ' —';
                        options[2] = verify;
                        mike['children'] = options;
                        golf = report.bind(oscar)(golf, mike);
                        mike = new Array(2);
                        mike[0] = golf;
                        verify = _closure1_slot21;
                        options = _closure1_slot9;
                        golf = {};
                        yankee = _closure3_slot2;
                        offset = yankee.changeItemContent;
                        golf['style'] = offset;
                        offset = {};
                        yankee = yankee.changeItemTextContainer;
                        offset['style'] = yankee;
                        kilo = _closure1_slot20;
                        foxtrot = _closure1_slot0;
                        yankee = _closure1_slot3;
                        yankee = yankee[update];
                        yankee = foxtrot.bind(oscar)(yankee);
                        foxtrot = yankee.Text;
                        yankee = {};
                        update = 'text-sm/normal';
                        yankee['variant'] = update;
                        yankee['children'] = result;
                        foxtrot = kilo.bind(oscar)(foxtrot, yankee);
                        yankee = new Array(2);
                        yankee[0] = foxtrot;
                        kilo = entity != echo;
                        foxtrot = null;
                        if(!kilo) { _fun125573_ip = 1446; continue _fun125573 }
 1390:
                        kilo = true;
                        foxtrot = null;
                        if(!(kilo !== sizing)) { _fun125573_ip = 1446; continue _fun125573 }
 1398:
                        sizing = _closure1_slot20;
                        kilo = _closure1_slot9;
                        backup = {};
                        output = _closure3_slot2;
                        result = output.colorHook;
                        output = new Array(2);
                        output[0] = result;
                        result = {};
                        result['backgroundColor'] = echo;
                        output[1] = result;
                        backup['style'] = output;
                        foxtrot = sizing.bind(oscar)(kilo, backup);
 1446:
                        yankee[1] = foxtrot;
                        offset['children'] = yankee;
                        yankee = verify.bind(oscar)(options, offset);
                        offset = new Array(2);
                        offset[0] = yankee;
                        foxtrot = entity != romeo;
                        yankee = null;
                        if(!foxtrot) { _fun125573_ip = 1480; continue _fun125573 }
 1477:
                        yankee = romeo;
 1480:
                        offset[1] = yankee;
                        golf['children'] = offset;
                        golf = verify.bind(oscar)(options, golf);
                        mike[1] = golf;
                        zulu['children'] = mike;
                        mike = argBar;
                        mike = report.bind(oscar)(tango, zulu, mike);
                        return mike;
 1514:
                        return entity;
 1516:
                        return entity;
 1518:
                        entity = null;
                        return entity;
                    }
                };
                oscar = tango.bind(oscar)(zulu);
                tango = _closure1_slot20;
                zulu = _closure1_slot9;
                mike = {};
                golf = golf.changesContainer;
                mike['style'] = golf;
                mike['children'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return mike;
 127:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'renderChangeSummary';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun125581: for(var _fun125581_ip = 0; ; ) switch(_fun125581_ip) {
 0:
                zulu = this;
                mike = zulu.props;
                entity = mike.expanded;
                mike = mike.log;
                if(!entity) { _fun125581_ip = 352; continue _fun125581 }
 26:
                report = mike.targetType;
                tango = _closure1_slot15;
                tango = tango.GUILD;
                if(!(tango !== report)) { _fun125581_ip = 1128; continue _fun125581 }
 52:
                tango = _closure1_slot15;
                tango = tango.CHANNEL;
                if(!(tango !== report)) { _fun125581_ip = 1083; continue _fun125581 }
 69:
                tango = _closure1_slot15;
                tango = tango.CHANNEL_OVERWRITE;
                if(!(tango !== report)) { _fun125581_ip = 1083; continue _fun125581 }
 86:
                tango = _closure1_slot15;
                tango = tango.USER;
                if(!(tango !== report)) { _fun125581_ip = 1038; continue _fun125581 }
 103:
                tango = _closure1_slot15;
                tango = tango.ROLE;
                if(!(tango !== report)) { _fun125581_ip = 993; continue _fun125581 }
 120:
                tango = _closure1_slot15;
                tango = tango.INVITE;
                if(!(tango !== report)) { _fun125581_ip = 948; continue _fun125581 }
 137:
                tango = _closure1_slot15;
                tango = tango.WEBHOOK;
                if(!(tango !== report)) { _fun125581_ip = 903; continue _fun125581 }
 154:
                tango = _closure1_slot15;
                tango = tango.EMOJI;
                if(!(tango !== report)) { _fun125581_ip = 858; continue _fun125581 }
 171:
                tango = _closure1_slot15;
                tango = tango.INTEGRATION;
                if(!(tango !== report)) { _fun125581_ip = 813; continue _fun125581 }
 188:
                tango = _closure1_slot15;
                tango = tango.STAGE_INSTANCE;
                if(!(tango !== report)) { _fun125581_ip = 768; continue _fun125581 }
 205:
                tango = _closure1_slot15;
                tango = tango.GUILD_SCHEDULED_EVENT;
                if(!(tango !== report)) { _fun125581_ip = 723; continue _fun125581 }
 222:
                tango = _closure1_slot15;
                tango = tango.GUILD_SCHEDULED_EVENT_EXCEPTION;
                if(!(tango !== report)) { _fun125581_ip = 678; continue _fun125581 }
 239:
                tango = _closure1_slot15;
                tango = tango.THREAD;
                if(!(tango !== report)) { _fun125581_ip = 633; continue _fun125581 }
 256:
                tango = _closure1_slot15;
                tango = tango.STICKER;
                if(!(tango !== report)) { _fun125581_ip = 588; continue _fun125581 }
 273:
                tango = _closure1_slot15;
                tango = tango.APPLICATION_COMMAND;
                if(!(tango !== report)) { _fun125581_ip = 536; continue _fun125581 }
 290:
                tango = _closure1_slot15;
                tango = tango.AUTO_MODERATION_RULE;
                if(!(tango !== report)) { _fun125581_ip = 491; continue _fun125581 }
 307:
                tango = _closure1_slot15;
                tango = tango.GUILD_SOUNDBOARD;
                if(!(tango !== report)) { _fun125581_ip = 446; continue _fun125581 }
 324:
                tango = _closure1_slot15;
                tango = tango.VOICE_CHANNEL_STATUS;
                if(!(tango !== report)) { _fun125581_ip = 401; continue _fun125581 }
 338:
                tango = _closure1_slot15;
                tango = tango.GUILD_MEMBER_VERIFICATION;
                if(!(tango !== report)) { _fun125581_ip = 356; continue _fun125581 }
 352:
                tango = null;
                return tango;
 356:
                report = zulu.renderChangeDetails;
                golf = _closure1_slot2;
                oscar = _closure1_slot3;
                tango = 16;
                oscar = oscar[tango];
                tango = undefined;
                oscar = golf.bind(tango)(oscar);
                tango = oscar.MemberVerificationChangeStrings;
                tango = tango.bind(oscar)();
                tango = report.bind(zulu)(tango);
                return tango;
 401:
                report = zulu.renderChangeDetails;
                golf = _closure1_slot2;
                oscar = _closure1_slot3;
                tango = 16;
                oscar = oscar[tango];
                tango = undefined;
                oscar = golf.bind(tango)(oscar);
                tango = oscar.VoiceChannelStatusStrings;
                tango = tango.bind(oscar)();
                tango = report.bind(zulu)(tango);
                return tango;
 446:
                report = zulu.renderChangeDetails;
                golf = _closure1_slot2;
                oscar = _closure1_slot3;
                tango = 16;
                oscar = oscar[tango];
                tango = undefined;
                oscar = golf.bind(tango)(oscar);
                tango = oscar.GuildSoundboardChangeStrings;
                tango = tango.bind(oscar)();
                tango = report.bind(zulu)(tango);
                return tango;
 491:
                report = zulu.renderChangeDetails;
                golf = _closure1_slot2;
                oscar = _closure1_slot3;
                tango = 16;
                oscar = oscar[tango];
                tango = undefined;
                oscar = golf.bind(tango)(oscar);
                tango = oscar.AutoModerationRuleChangeStrings;
                tango = tango.bind(oscar)();
                tango = report.bind(zulu)(tango);
                return tango;
 536:
                tango = zulu.renderChangeDetails;
                golf = _closure1_slot2;
                oscar = _closure1_slot3;
                report = 16;
                oscar = oscar[report];
                report = undefined;
                oscar = golf.bind(report)(oscar);
                report = oscar.CommandPermissionChangeStrings;
                mike = mike.changes;
                mike = report.bind(oscar)(mike);
                mike = tango.bind(zulu)(mike);
                return mike;
 588:
                tango = zulu.renderChangeDetails;
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                mike = 16;
                report = report[mike];
                mike = undefined;
                report = oscar.bind(mike)(report);
                mike = report.StickerChangeStrings;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                return mike;
 633:
                tango = zulu.renderChangeDetails;
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                mike = 16;
                report = report[mike];
                mike = undefined;
                report = oscar.bind(mike)(report);
                mike = report.ThreadChangeStrings;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                return mike;
 678:
                tango = zulu.renderChangeDetails;
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                mike = 16;
                report = report[mike];
                mike = undefined;
                report = oscar.bind(mike)(report);
                mike = report.GuildScheduledEventExceptionChangeStrings;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                return mike;
 723:
                tango = zulu.renderChangeDetails;
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                mike = 16;
                report = report[mike];
                mike = undefined;
                report = oscar.bind(mike)(report);
                mike = report.GuildScheduledEventChangeStrings;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                return mike;
 768:
                tango = zulu.renderChangeDetails;
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                mike = 16;
                report = report[mike];
                mike = undefined;
                report = oscar.bind(mike)(report);
                mike = report.StageInstanceChangeStrings;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                return mike;
 813:
                tango = zulu.renderChangeDetails;
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                mike = 16;
                report = report[mike];
                mike = undefined;
                report = oscar.bind(mike)(report);
                mike = report.IntegrationChangeStrings;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                return mike;
 858:
                tango = zulu.renderChangeDetails;
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                mike = 16;
                report = report[mike];
                mike = undefined;
                report = oscar.bind(mike)(report);
                mike = report.EmojiChangeStrings;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                return mike;
 903:
                tango = zulu.renderChangeDetails;
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                mike = 16;
                report = report[mike];
                mike = undefined;
                report = oscar.bind(mike)(report);
                mike = report.WebhookChangeStrings;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                return mike;
 948:
                tango = zulu.renderChangeDetails;
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                mike = 16;
                report = report[mike];
                mike = undefined;
                report = oscar.bind(mike)(report);
                mike = report.InviteChangeStrings;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                return mike;
 993:
                tango = zulu.renderChangeDetails;
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                mike = 16;
                report = report[mike];
                mike = undefined;
                report = oscar.bind(mike)(report);
                mike = report.RoleChangeStrings;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                return mike;
 1038:
                tango = zulu.renderChangeDetails;
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                mike = 16;
                report = report[mike];
                mike = undefined;
                report = oscar.bind(mike)(report);
                mike = report.UserChangeStrings;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                return mike;
 1083:
                tango = zulu.renderChangeDetails;
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                mike = 16;
                report = report[mike];
                mike = undefined;
                report = oscar.bind(mike)(report);
                mike = report.ChannelChangeStrings;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                return mike;
 1128:
                mike = zulu.renderChangeDetails;
                report = _closure1_slot2;
                tango = _closure1_slot3;
                entity = 16;
                tango = tango[entity];
                entity = undefined;
                tango = report.bind(entity)(tango);
                entity = tango.GuildChangeStrings;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'render';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun125582: for(var _fun125582_ip = 0; ; ) switch(_fun125582_ip) {
 0:
                options = this;
                mike = _closure1_slot22;
                entity = options.context;
                tango = undefined;
                echo = mike.bind(tango)(entity);
                mike = options.props;
                papa = mike.log;
                var _closure3_slot0 = papa;
                golf = mike.expanded;
                entity = mike.onHeaderClick;
                context = mike.guildId;
                zulu = mike.channel;
                var _closure3_slot1 = zulu;
                verify = mike.containerStyle;
                record = mike.theme;
                control = papa.user;
                var _closure3_slot2 = control;
                mike = options.hasChangesToRender;
                backup = mike.bind(options)();
                zulu = papa.timestampStart;
                mike = zulu.calendar;
                oscar = mike.bind(zulu)();
                zulu = papa.timestampEnd;
                mike = zulu.calendar;
                yankee = mike.bind(zulu)();
                if(!(oscar !== yankee)) { _fun125582_ip = 208; continue _fun125582 }
 134:
                report = _closure1_slot21;
                zulu = _closure1_slot0;
                offset = _closure1_slot3;
                mike = 25;
                mike = offset[mike];
                mike = zulu.bind(tango)(mike);
                zulu = mike.LegacyText;
                mike = {};
                offset = echo.timestamp;
                mike['style'] = offset;
                offset = new Array(3);
                offset[0] = oscar;
                romeo = '—';
                offset[1] = romeo;
                offset[2] = yankee;
                mike['children'] = offset;
                result = report.bind(tango)(zulu, mike);
                _fun125582_ip = 260; continue _fun125582;
 208:
                report = _closure1_slot20;
                zulu = _closure1_slot0;
                offset = _closure1_slot3;
                mike = 25;
                mike = offset[mike];
                mike = zulu.bind(tango)(mike);
                zulu = mike.LegacyText;
                mike = {};
                offset = echo.timestamp;
                mike['style'] = offset;
                mike['children'] = oscar;
                result = report.bind(tango)(zulu, mike);
 260:
                if(backup) { _fun125582_ip = 267; continue _fun125582 }
 263:
                entity = _closure1_slot18;
 267:
                var _closure3_slot3 = entity;
                oscar = null;
                update = null;
                if(!golf) { _fun125582_ip = 284; continue _fun125582 }
 278:
                update = echo.rotate90;
 284:
                zulu = _closure1_slot21;
                mike = _closure1_slot0;
                report = _closure1_slot3;
                entity = 31;
                entity = report[entity];
                entity = mike.bind(tango)(entity);
                mike = entity.Card;
                entity = {};
                offset = echo.container;
                report = new Array(2);
                report[0] = offset;
                report[1] = verify;
                entity['style'] = report;
                report = 'secondary';
                if(!golf) { _fun125582_ip = 348; continue _fun125582 }
 344:
                report = 'primary';
 348:
                entity['variant'] = report;
                report = 'none';
                if(!golf) { _fun125582_ip = 363; continue _fun125582 }
 359:
                report = 'strong';
 363:
                entity['border'] = report;
                report = function() { // Original name: onPress
                    zulu = _closure3_slot3;
                    mike = _closure3_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                entity['onPress'] = report;
                offset = _closure1_slot21;
                verify = _closure1_slot9;
                report = {};
                yankee = echo.rowContainer;
                report['style'] = yankee;
                kilo = _closure1_slot20;
                romeo = _closure1_slot1;
                target = _closure1_slot3;
                yankee = 32;
                yankee = target[yankee];
                romeo = romeo.bind(tango)(yankee);
                yankee = {};
                sizing = papa.action;
                yankee['action'] = sizing;
                romeo = kilo.bind(tango)(romeo, yankee);
                yankee = new Array(4);
                yankee[0] = romeo;
                sizing = _closure1_slot20;
                config = _closure1_slot0;
                romeo = 33;
                romeo = target[romeo];
                romeo = config.bind(tango)(romeo);
                kilo = romeo.PressableOpacity;
                romeo = {};
                source = 'button';
                romeo['accessibilityRole'] = source;
                source = 23;
                vacuum = target[source];
                vacuum = config.bind(tango)(vacuum);
                sequence = vacuum.intl;
                vacuum = sequence.string;
                source = target[source];
                source = config.bind(tango)(source);
                source = source.t;
                source = source.iXAna2;
                source = vacuum.bind(sequence)(source);
                romeo['accessibilityLabel'] = source;
                vacuum = oscar == control;
                source = undefined;
                if(vacuum) { _fun125582_ip = 549; continue _fun125582 }
 544:
                source = control.username;
 549:
                romeo['accessibilityHint'] = source;
                output = function() { // Original name: onPress
                    _fun125584: for(var _fun125584_ip = 0; ; ) switch(_fun125584_ip) {
 0:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot3;
                        entity = 34;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.hideActionSheet;
                        zulu = zulu.bind(tango)();
                        report = _closure3_slot2;
                        zulu = null;
                        if(!(zulu != report)) { _fun125584_ip = 101; continue _fun125584 }
 48:
                        zulu = _closure1_slot1;
                        report = _closure1_slot3;
                        mike = 35;
                        mike = report[mike];
                        zulu = zulu.bind(entity)(mike);
                        mike = {};
                        report = _closure3_slot2;
                        report = report.id;
                        mike['userId'] = report;
                        tango = _closure3_slot1;
                        tango = tango.id;
                        mike['channelId'] = tango;
                        mike = zulu.bind(entity)(mike);
 101:
                        return entity;
                    }
                };
                romeo['onPress'] = output;
                control = _closure1_slot20;
                source = _closure1_slot1;
                config = _closure1_slot3;
                vacuum = 36;
                output = config[vacuum];
                source = source.bind(tango)(output);
                output = {};
                sequence = echo.avatar;
                output['style'] = sequence;
                sequence = _closure1_slot26;
                sequence = sequence.bind(tango)(record, papa, context);
                output['source'] = sequence;
                sequence = _closure1_slot0;
                vacuum = config[vacuum];
                vacuum = sequence.bind(tango)(vacuum);
                vacuum = vacuum.AvatarSizes;
                vacuum = vacuum.SMALL;
                output['size'] = vacuum;
                output = control.bind(tango)(source, output);
                romeo['children'] = output;
                romeo = sizing.bind(tango)(kilo, romeo);
                yankee[1] = romeo;
                sizing = _closure1_slot21;
                kilo = _closure1_slot9;
                romeo = {};
                output = echo.titleContainer;
                romeo['style'] = output;
                output = options.renderTitle;
                source = output.bind(options)();
                output = new Array(2);
                output[0] = source;
                output[1] = result;
                romeo['children'] = output;
                romeo = sizing.bind(tango)(kilo, romeo);
                yankee[2] = romeo;
                romeo = null;
                if(!backup) { _fun125582_ip = 821; continue _fun125582 }
 726:
                kilo = _closure1_slot20;
                output = _closure1_slot1;
                result = _closure1_slot3;
                sizing = 37;
                foxtrot = result[sizing];
                backup = output.bind(tango)(foxtrot);
                foxtrot = {};
                source = echo.arrow;
                echo = new Array(2);
                echo[0] = source;
                echo[1] = update;
                foxtrot['style'] = echo;
                sizing = result[sizing];
                sizing = output.bind(tango)(sizing);
                sizing = sizing.Sizes;
                sizing = sizing.CUSTOM;
                foxtrot['size'] = sizing;
                sizing = 38;
                sizing = result[sizing];
                sizing = output.bind(tango)(sizing);
                foxtrot['source'] = sizing;
                romeo = kilo.bind(tango)(backup, foxtrot);
 821:
                yankee[3] = romeo;
                report['children'] = yankee;
                verify = offset.bind(tango)(verify, report);
                report = new Array(2);
                report[0] = verify;
                oscar = null;
                if(!golf) { _fun125582_ip = 860; continue _fun125582 }
 848:
                golf = options.renderChangeSummary;
                oscar = golf.bind(options)();
 860:
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(golf);
    golf = 39;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.ThemeContext;
    tango['contextType'] = golf;
    golf = 40;
    golf = oscar[golf];
    verify = options.bind(entity)(golf);
    options = verify.connectStores;
    golf = new Array(1);
    golf[0] = offset;
    mike = function() {
        entity = {};
        mike = _closure1_slot10;
        mike = mike.theme;
        entity['theme'] = mike;
        return entity;
    };
    mike = options.bind(verify)(golf, mike);
    mike = mike.bind(entity)(tango);
    tango = 41;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/native/AuditLog.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();