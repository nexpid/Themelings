// app/modules/guild_settings/native/AuditLog.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot23 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar) { // Original name: shouldNotRenderChangeDetail
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot2;
            michal = _closure1_slot3;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            michal = entity.NotRenderedChanges;
            entity = argFoo;
            entity = entity.targetType;
            zuuluu = michal[entity];
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00004_ip = 71; continue _fun00003 }
 53:
            michal = argBar;
            michal = michal.key;
            zuuluu = zuuluu[michal];
            michal = true;
            entity = michal === zuuluu;
 71:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getUserAvatarSource
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argBar;
            verify = argBaz;
            zuuluu = golfie.action;
            michal = _closure1_slot17;
            michal = michal.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(zuuluu !== michal)) { _fun00006_ip = 292; continue _fun00005 }
 31:
            zuuluu = golfie.action;
            michal = _closure1_slot17;
            michal = michal.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(zuuluu !== michal)) { _fun00006_ip = 292; continue _fun00005 }
 53:
            zuuluu = golfie.action;
            michal = _closure1_slot17;
            michal = michal.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(zuuluu !== michal)) { _fun00006_ip = 292; continue _fun00005 }
 75:
            zuuluu = golfie.action;
            michal = _closure1_slot17;
            michal = michal.AUTO_MODERATION_QUARANTINE_USER;
            if(!(zuuluu !== michal)) { _fun00006_ip = 292; continue _fun00005 }
 97:
            michal = golfie.options;
            michal = michal.integration_type;
            oscard = null;
            if(!(oscard != michal)) { _fun00006_ip = 161; continue _fun00005 }
 114:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot3;
            michal = 19;
            michal = tangon[michal];
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.get;
            michal = golfie.options;
            michal = michal.integration_type;
            michal = zuuluu.bind(tangon)(michal);
            if(!(oscard == michal)) { _fun00006_ip = 203; continue _fun00005 }
 161:
            option = oscard != verify;
            zuuluu = undefined;
            if(!option) { _fun00006_ip = 201; continue _fun00005 }
 170:
            option = golfie.user;
            oscard = oscard == option;
            tangon = undefined;
            if(oscard) { _fun00006_ip = 198; continue _fun00005 }
 184:
            golfie = option.getAvatarSource;
            oscard = false;
            tangon = golfie.bind(option)(verify, oscard);
 198:
            zuuluu = tangon;
 201:
            return zuuluu;
 203:
            tangon = _closure1_slot0;
            oscard = _closure1_slot3;
            zuuluu = 20;
            zuuluu = oscard[zuuluu];
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.isThemeDark;
            zuuluu = argFoo;
            zuuluu = tangon.bind(oscard)(zuuluu);
            michal = michal.icon;
            if(zuuluu) { _fun00006_ip = 253; continue _fun00005 }
 245:
            tangon = michal.lightPNG;
            _fun00006_ip = 259; continue _fun00005;
 253:
            tangon = michal.darkPNG;
 259:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot3;
            michal = 18;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.makeSource;
            michal = michal.bind(zuuluu)(tangon);
            return michal;
 292:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            entity = 17;
            michal = option[entity];
            oscard = undefined;
            zuuluu = golfie.bind(oscard)(michal);
            michal = zuuluu.ensureAvatarSource;
            tangon = 18;
            tangon = option[tangon];
            report = golfie.bind(oscard)(tangon);
            tangon = report.makeSource;
            entity = option[entity];
            oscard = golfie.bind(oscard)(entity);
            entity = oscard.getAutomodAvatarURL;
            entity = entity.bind(oscard)();
            entity = tangon.bind(report)(entity);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: ApplicationHook
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tangon = entity.applicationId;
            zuuluu = _closure1_slot0;
            report = _closure1_slot3;
            entity = 21;
            entity = report[entity];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.useGetOrFetchApplication;
            oscard = entity.bind(zuuluu)(tangon);
            entity = null;
            zuuluu = entity == oscard;
            if(zuuluu) { _fun00008_ip = 111; continue _fun00007 }
 53:
            tangon = _closure1_slot20;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 22;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.Text;
            michal = {'variant': 'text-md/normal', 'color': 'header-secondary'};
            oscard = oscard.name;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 111:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    golfie = 6;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.View;
    var _closure1_slot9 = golfie;
    golfie = 7;
    golfie = oscard[golfie];
    offset = option.bind(entity)(golfie);
    var _closure1_slot10 = offset;
    foxtra = 8;
    golfie = oscard[foxtra];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot11 = golfie;
    golfie = 9;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot12 = golfie;
    kiloes = 10;
    golfie = oscard[kiloes];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot13 = golfie;
    golfie = 11;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot14 = golfie;
    golfie = 12;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    verify = golfie.AuditLogTargetTypes;
    var _closure1_slot15 = verify;
    verify = golfie.AuditLogActionTypes;
    var _closure1_slot16 = verify;
    verify = golfie.AuditLogActions;
    var _closure1_slot17 = verify;
    verify = golfie.NOOP;
    var _closure1_slot18 = verify;
    backup = golfie.Fonts;
    golfie = golfie.AuditLogChangeKeys;
    var _closure1_slot19 = golfie;
    golfie = 13;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    verify = golfie.jsx;
    var _closure1_slot20 = verify;
    golfie = golfie.jsxs;
    var _closure1_slot21 = golfie;
    golfie = 14;
    golfie = oscard[golfie];
    yankee = report.bind(entity)(golfie);
    verify = yankee.createLegacyClassComponentStyles;
    golfie = {};
    romeon = {'marginHorizontal': 8, 'marginVertical': 4, 'borderRadius': 3};
    golfie['container'] = romeon;
    romeon = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    golfie['rowContainer'] = romeon;
    romeon = {'marginRight': 24, 'flex': 1};
    golfie['titleContainer'] = romeon;
    romeon = {};
    romeon['marginHorizontal'] = foxtra;
    golfie['title'] = romeon;
    romeon = {'fontSize': 12, 'lineHeight': 30};
    foxtra = 15;
    sizing = oscard[foxtra];
    sizing = option.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    sizing = sizing.PRIMARY_400;
    romeon['color'] = sizing;
    golfie['discriminator'] = romeon;
    romeon = {'marginLeft': 10, 'height': 32, 'width': 32};
    golfie['avatar'] = romeon;
    romeon = {'fontSize': 12, 'marginHorizontal': 8, 'marginTop': 8};
    sizing = oscard[foxtra];
    sizing = option.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    sizing = sizing.PRIMARY_400;
    romeon['color'] = sizing;
    golfie['timestamp'] = romeon;
    romeon = {'height': 13, 'width': 8, 'marginRight': 8};
    sizing = oscard[foxtra];
    sizing = option.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.INTERACTIVE_NORMAL;
    romeon['tintColor'] = sizing;
    golfie['arrow'] = romeon;
    romeon = {};
    output = {};
    sizing = '90deg';
    output['rotate'] = sizing;
    sizing = new Array(1);
    sizing[0] = output;
    romeon['transform'] = sizing;
    golfie['rotate90'] = romeon;
    romeon = {};
    sizing = oscard[foxtra];
    sizing = option.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_4;
    romeon['marginTop'] = sizing;
    sizing = oscard[foxtra];
    sizing = option.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_8;
    romeon['padding'] = sizing;
    sizing = oscard[foxtra];
    sizing = option.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.md;
    romeon['borderRadius'] = sizing;
    sizing = oscard[foxtra];
    sizing = option.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BG_MOD_FAINT;
    romeon['backgroundColor'] = sizing;
    golfie['changesContainer'] = romeon;
    romeon = {'flexDirection': 'row', 'flex': 1, 'alignItems': 'flex-start'};
    golfie['changeRow'] = romeon;
    romeon = {};
    romeon['marginRight'] = kiloes;
    backup = backup.CODE_BOLD;
    romeon['fontFamily'] = backup;
    golfie['changeNumberText'] = romeon;
    romeon = {'color': null, 'alignItems': 'baseline', 'fontSize': 14};
    backup = oscard[foxtra];
    backup = option.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    backup = backup.PRIMARY_400;
    romeon['color'] = backup;
    golfie['changeItemText'] = romeon;
    romeon = {'height': 10, 'width': 10, 'borderRadius': 5};
    foxtra = oscard[foxtra];
    foxtra = option.bind(entity)(foxtra);
    foxtra = foxtra.unsafe_rawColors;
    foxtra = foxtra.TRANSPARENT;
    romeon['borderColor'] = foxtra;
    golfie['colorHook'] = romeon;
    romeon = {'flex': 1, 'alignItems': 'flex-start'};
    golfie['changeItemContent'] = romeon;
    romeon = {'alignItems': 'center', 'flexDirection': 'row'};
    golfie['changeItemTextContainer'] = romeon;
    romeon = {'height': 'auto', 'paddingVertical': 0, 'paddingHorizontal': 4};
    golfie['forumTag'] = romeon;
    romeon = {'height': 14, 'width': 14};
    golfie['imageEmoji'] = romeon;
    romeon = {'fontSize': 14, 'lineHeight': 16};
    golfie['textEmoji'] = romeon;
    golfie = verify.bind(yankee)(golfie);
    var _closure1_slot22 = golfie;
    golfie = tangon.PureComponent;
    tangon = function(argFoo) {
        tangon = function() { // Original name: AuditLog
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot4;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot7;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot6;
                entity = _closure1_slot23;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 69; continue _fun00009 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00010_ip = 105; continue _fun00009;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot7;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        entity = 'hasChangesToRender';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = this;
                entity = entity.props;
                tangon = entity.log;
                var _closure3_slot0 = tangon;
                report = tangon.changes;
                oscard = tangon.actionType;
                entity = _closure1_slot16;
                entity = entity.DELETE;
                entity = oscard !== entity;
                if(entity) { _fun00012_ip = 70; continue _fun00011 }
 51:
                golfie = tangon.action;
                oscard = _closure1_slot17;
                oscard = oscard.MEMBER_BAN_ADD;
                entity = golfie === oscard;
 70:
                if(entity) { _fun00012_ip = 92; continue _fun00011 }
 73:
                golfie = tangon.action;
                oscard = _closure1_slot17;
                oscard = oscard.MEMBER_KICK;
                entity = golfie === oscard;
 92:
                if(entity) { _fun00012_ip = 114; continue _fun00011 }
 95:
                tangon = tangon.action;
                michal = _closure1_slot17;
                michal = michal.MEMBER_PRUNE;
                entity = tangon === michal;
 114:
                if(!entity) { _fun00012_ip = 147; continue _fun00011 }
 117:
                michal = null;
                michal = michal != report;
                if(!michal) { _fun00012_ip = 144; continue _fun00011 }
 126:
                tangon = report.some;
                zuuluu = function(argFoo) {
                    tangon = _closure1_slot24;
                    zuuluu = _closure3_slot0;
                    michal = undefined;
                    entity = argFoo;
                    entity = tangon.bind(michal)(zuuluu, entity);
                    entity = !entity;
                    return entity;
                };
                michal = tangon.bind(report)(zuuluu);
 144:
                entity = michal;
 147:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'renderTitle';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = this;
                zuuluu = _closure1_slot22;
                michal = entity.context;
                report = undefined;
                oscard = zuuluu.bind(report)(michal);
                var _closure3_slot0 = oscard;
                entity = entity.props;
                zuuluu = entity.log;
                var _closure3_slot1 = zuuluu;
                kiloes = zuuluu.user;
                var _closure3_slot2 = kiloes;
                foxtra = zuuluu.target;
                var _closure3_slot3 = foxtra;
                offset = zuuluu.options;
                var _closure3_slot4 = offset;
                michal = _closure1_slot2;
                tangon = _closure1_slot3;
                entity = 16;
                entity = tangon[entity];
                michal = michal.bind(report)(entity);
                entity = michal.getChangeTitle;
                verify = entity.bind(michal)(zuuluu);
                backup = null;
                michal = backup != verify;
                entity = null;
                if(!michal) { _fun00014_ip = 360; continue _fun00013 }
 115:
                tangon = _closure1_slot20;
                golfie = _closure1_slot0;
                option = _closure1_slot3;
                michal = 22;
                michal = option[michal];
                michal = golfie.bind(report)(michal);
                zuuluu = michal.Text;
                michal = {'style': null, 'accessibilityRole': 'header', 'variant': 'text-md/medium', 'color': 'header-primary'};
                oscard = oscard.title;
                michal['style'] = oscard;
                oscard = 23;
                oscard = option[oscard];
                oscard = golfie.bind(report)(oscard);
                option = oscard.intl;
                golfie = option.format;
                oscard = {};
                oscard['user'] = kiloes;
                oscard['target'] = foxtra;
                foxtra = function() { // Original name: userHook
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        michal = _closure3_slot2;
                        tangon = null;
                        if(!(tangon == michal)) { _fun00016_ip = 286; continue _fun00015 }
 16:
                        michal = _closure3_slot4;
                        michal = michal.integration_type;
                        if(!(tangon == michal)) { _fun00016_ip = 92; continue _fun00015 }
 30:
                        golfie = _closure1_slot0;
                        option = _closure1_slot3;
                        michal = 23;
                        zuuluu = option[michal];
                        oscard = undefined;
                        zuuluu = golfie.bind(oscard)(zuuluu);
                        report = zuuluu.intl;
                        zuuluu = report.string;
                        michal = option[michal];
                        michal = golfie.bind(oscard)(michal);
                        michal = michal.t;
                        michal = michal.30mdIy;
                        michal = zuuluu.bind(report)(michal);
                        return michal;
 92:
                        report = _closure1_slot1;
                        oscard = _closure1_slot3;
                        michal = 19;
                        michal = oscard[michal];
                        oscard = undefined;
                        golfie = report.bind(oscard)(michal);
                        report = golfie.get;
                        michal = _closure3_slot4;
                        michal = michal.integration_type;
                        report = report.bind(golfie)(michal);
                        golfie = tangon == report;
                        michal = undefined;
                        if(golfie) { _fun00016_ip = 151; continue _fun00015 }
 146:
                        michal = report.name;
 151:
                        if(!(tangon == michal)) { _fun00016_ip = 212; continue _fun00015 }
 155:
                        option = _closure1_slot0;
                        verify = _closure1_slot3;
                        tangon = 23;
                        report = verify[tangon];
                        report = option.bind(oscard)(report);
                        golfie = report.intl;
                        report = golfie.string;
                        tangon = verify[tangon];
                        tangon = option.bind(oscard)(tangon);
                        tangon = tangon.t;
                        tangon = tangon.n+olu7;
                        michal = report.bind(golfie)(tangon);
 212:
                        report = _closure1_slot20;
                        tangon = _closure1_slot0;
                        golfie = _closure1_slot3;
                        zuuluu = 22;
                        zuuluu = golfie[zuuluu];
                        zuuluu = tangon.bind(oscard)(zuuluu);
                        tangon = zuuluu.Text;
                        zuuluu = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        zuuluu['children'] = michal;
                        michal = _closure3_slot4;
                        golfie = michal.integration_type;
                        michal = 'integration';
                        michal = michal + golfie;
                        michal = report.bind(oscard)(tangon, zuuluu, michal);
                        return michal;
 286:
                        report = _closure1_slot21;
                        zuuluu = _closure1_slot0;
                        verify = _closure1_slot3;
                        michal = 22;
                        michal = verify[michal];
                        tangon = undefined;
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = michal.Text;
                        michal = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        golfie = _closure1_slot1;
                        oscard = 24;
                        oscard = verify[oscard];
                        offset = golfie.bind(tangon)(oscard);
                        golfie = offset.getUserTag;
                        verify = _closure3_slot2;
                        oscard = {};
                        yankee = 'username';
                        oscard['mode'] = yankee;
                        golfie = golfie.bind(offset)(verify, oscard);
                        oscard = new Array(2);
                        oscard[0] = golfie;
                        golfie = verify.isPomelo;
                        golfie = golfie.bind(verify)();
                        golfie = !golfie;
                        if(!golfie) { _fun00016_ip = 474; continue _fun00015 }
 400:
                        offset = _closure1_slot20;
                        verify = _closure1_slot0;
                        yankee = _closure1_slot3;
                        option = 25;
                        option = yankee[option];
                        option = verify.bind(tangon)(option);
                        verify = option.LegacyText;
                        option = {};
                        yankee = _closure3_slot0;
                        yankee = yankee.discriminator;
                        option['style'] = yankee;
                        yankee = _closure3_slot2;
                        romeon = yankee.discriminator;
                        yankee = '#';
                        yankee = yankee + romeon;
                        option['children'] = yankee;
                        golfie = offset.bind(tangon)(verify, option);
 474:
                        oscard[1] = golfie;
                        michal['children'] = oscard;
                        entity = _closure3_slot2;
                        oscard = entity.id;
                        entity = 'user';
                        entity = entity + oscard;
                        entity = report.bind(tangon)(zuuluu, michal, entity);
                        return entity;
                    }
                };
                oscard['userHook'] = foxtra;
                foxtra = function(argFoo, argBar) { // Original name: targetHook
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = _closure3_slot1;
                        zuuluu = entity.targetType;
                        entity = _closure1_slot15;
                        entity = entity.USER;
                        if(!(zuuluu === entity)) { _fun00018_ip = 48; continue _fun00017 }
 30:
                        zuuluu = _closure3_slot3;
                        entity = _closure1_slot12;
                        entity = zuuluu instanceof entity;
                        if(entity) { _fun00018_ip = 234; continue _fun00017 }
 48:
                        entity = _closure3_slot1;
                        zuuluu = entity.targetType;
                        entity = _closure1_slot15;
                        entity = entity.GUILD;
                        if(!(zuuluu === entity)) { _fun00018_ip = 87; continue _fun00017 }
 72:
                        zuuluu = _closure3_slot3;
                        entity = _closure1_slot11;
                        entity = zuuluu instanceof entity;
                        if(entity) { _fun00018_ip = 151; continue _fun00017 }
 87:
                        oscard = _closure1_slot20;
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot3;
                        entity = 22;
                        entity = tangon[entity];
                        report = undefined;
                        entity = zuuluu.bind(report)(entity);
                        tangon = entity.Text;
                        zuuluu = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        entity = argFoo;
                        zuuluu['children'] = entity;
                        entity = argBar;
                        entity = oscard.bind(report)(tangon, zuuluu, entity);
                        _fun00018_ip = 229; continue _fun00017;
 151:
                        golfie = _closure1_slot20;
                        tangon = _closure1_slot0;
                        report = _closure1_slot3;
                        zuuluu = 22;
                        zuuluu = report[zuuluu];
                        oscard = undefined;
                        zuuluu = tangon.bind(oscard)(zuuluu);
                        report = zuuluu.Text;
                        tangon = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        zuuluu = _closure3_slot3;
                        option = zuuluu.name;
                        tangon['children'] = option;
                        option = zuuluu.id;
                        zuuluu = 'target';
                        zuuluu = zuuluu + option;
                        entity = golfie.bind(oscard)(report, tangon, zuuluu);
 229:
                        _fun00018_ip = 454; continue _fun00017;
 234:
                        oscard = _closure1_slot21;
                        tangon = _closure1_slot0;
                        offset = _closure1_slot3;
                        zuuluu = 22;
                        zuuluu = offset[zuuluu];
                        report = undefined;
                        zuuluu = tangon.bind(report)(zuuluu);
                        tangon = zuuluu.Text;
                        zuuluu = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        option = _closure1_slot1;
                        golfie = 24;
                        golfie = offset[golfie];
                        yankee = option.bind(report)(golfie);
                        offset = yankee.getUserTag;
                        option = _closure3_slot3;
                        golfie = {};
                        romeon = 'username';
                        golfie['mode'] = romeon;
                        offset = offset.bind(yankee)(option, golfie);
                        golfie = new Array(2);
                        golfie[0] = offset;
                        offset = option.discriminator;
                        option = '0';
                        option = option !== offset;
                        if(!option) { _fun00018_ip = 422; continue _fun00017 }
 348:
                        yankee = _closure1_slot20;
                        offset = _closure1_slot0;
                        romeon = _closure1_slot3;
                        verify = 25;
                        verify = romeon[verify];
                        verify = offset.bind(report)(verify);
                        offset = verify.LegacyText;
                        verify = {};
                        romeon = _closure3_slot0;
                        romeon = romeon.discriminator;
                        verify['style'] = romeon;
                        romeon = _closure3_slot3;
                        foxtra = romeon.discriminator;
                        romeon = '#';
                        romeon = romeon + foxtra;
                        verify['children'] = romeon;
                        option = yankee.bind(report)(offset, verify);
 422:
                        golfie[1] = option;
                        zuuluu['children'] = golfie;
                        michal = _closure3_slot3;
                        golfie = michal.id;
                        michal = 'target';
                        michal = michal + golfie;
                        entity = oscard.bind(report)(tangon, zuuluu, michal);
 454:
                        return entity;
                    }
                };
                oscard['targetHook'] = foxtra;
                foxtra = offset.count;
                oscard['count'] = foxtra;
                foxtra = offset.channel;
                if(!(backup != foxtra)) { _fun00014_ip = 312; continue _fun00013 }
 246:
                foxtra = offset.channel;
                backup = 'string';
                foxtra = typeof foxtra;
                if(!(backup !== foxtra)) { _fun00014_ip = 312; continue _fun00013 }
 262:
                backup = _closure1_slot0;
                kiloes = _closure1_slot3;
                foxtra = 26;
                foxtra = kiloes[foxtra];
                output = backup.bind(report)(foxtra);
                sizing = output.computeChannelName;
                source = offset.channel;
                update = _closure1_slot14;
                echoed = _closure1_slot13;
                result = true;
                ctrled = output;
                romeon = ctrled[sizing](source, update, echoed, result, output);
                _fun00014_ip = 317; continue _fun00013;
 312:
                romeon = offset.channel;
 317:
                oscard['channel'] = romeon;
                yankee = function(argFoo, argBar) { // Original name: channelHook
                    report = _closure1_slot20;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    entity = 22;
                    entity = zuuluu[entity];
                    tangon = undefined;
                    entity = michal.bind(tangon)(entity);
                    zuuluu = entity.Text;
                    michal = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                    entity = argFoo;
                    michal['children'] = entity;
                    entity = argBar;
                    entity = report.bind(tangon)(zuuluu, michal, entity);
                    return entity;
                };
                oscard['channelHook'] = yankee;
                offset = offset.subtarget;
                oscard['subtarget'] = offset;
                oscard = golfie.bind(option)(verify, oscard);
                michal['children'] = oscard;
                entity = tangon.bind(report)(zuuluu, michal);
 360:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'renderRoleUpdate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = argFoo;
                tangon = entity.newValue;
                entity = global;
                michal = entity.Array;
                entity = michal.isArray;
                michal = entity.bind(michal)(tangon);
                entity = null;
                if(!michal) { _fun00020_ip = 51; continue _fun00019 }
 32:
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    entity = argFoo;
                    report = _closure1_slot20;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    michal = 22;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.Text;
                    michal = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                    oscard = entity.name;
                    michal['children'] = oscard;
                    entity = entity.id;
                    entity = report.bind(tangon)(zuuluu, michal, entity);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal);
 51:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'renderPermissionUpdate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = this;
                var _closure3_slot0 = entity;
                entity = argFoo;
                tangon = entity.newValue;
                entity = global;
                zuuluu = entity.Array;
                entity = zuuluu.isArray;
                zuuluu = entity.bind(zuuluu)(tangon);
                entity = null;
                if(!zuuluu) { _fun00022_ip = 58; continue _fun00021 }
 41:
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    report = argFoo;
                    tangon = _closure1_slot20;
                    michal = _closure1_slot0;
                    option = _closure1_slot3;
                    entity = 22;
                    entity = option[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.Text;
                    entity = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                    golfie = _closure1_slot2;
                    oscard = 16;
                    oscard = option[oscard];
                    option = golfie.bind(zuuluu)(oscard);
                    golfie = option.getStringForPermission;
                    oscard = _closure3_slot0;
                    oscard = oscard.props;
                    oscard = oscard.log;
                    oscard = golfie.bind(option)(report, oscard);
                    entity['children'] = oscard;
                    entity = tangon.bind(zuuluu)(michal, entity, report);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal);
 58:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'renderChangeDetails';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = this;
                var _closure3_slot0 = entity;
                michal = argFoo;
                var _closure3_slot1 = michal;
                oscard = _closure1_slot22;
                tangon = entity.context;
                report = undefined;
                golfie = oscard.bind(report)(tangon);
                var _closure3_slot2 = golfie;
                entity = entity.props;
                tangon = entity.log;
                var _closure3_slot3 = tangon;
                oscard = tangon.changes;
                entity = null;
                if(!(entity != oscard)) { _fun00024_ip = 126; continue _fun00023 }
 65:
                oscard = 0;
                var _closure3_slot4 = oscard;
                oscard = tangon.changes;
                tangon = oscard.map;
                zuuluu = function(argFoo, argBar) {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        option = argFoo;
                        michal = _closure1_slot24;
                        entity = _closure3_slot3;
                        oscard = undefined;
                        entity = michal.bind(oscard)(entity, option);
                        if(entity) { _fun00026_ip = 1518; continue _fun00025 }
 33:
                        entity = _closure3_slot3;
                        michal = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.CHANNEL_UPDATE;
                        if(!(michal !== entity)) { _fun00026_ip = 79; continue _fun00025 }
 56:
                        entity = _closure3_slot3;
                        michal = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.CHANNEL_CREATE;
                        if(!(michal === entity)) { _fun00026_ip = 101; continue _fun00025 }
 79:
                        michal = option.key;
                        entity = _closure1_slot19;
                        entity = entity.TYPE;
                        if(!(michal !== entity)) { _fun00026_ip = 424; continue _fun00025 }
 101:
                        entity = _closure3_slot3;
                        michal = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.MEMBER_UPDATE;
                        if(!(michal === entity)) { _fun00026_ip = 146; continue _fun00025 }
 124:
                        michal = option.key;
                        entity = _closure1_slot19;
                        entity = entity.COMMUNICATION_DISABLED_UNTIL;
                        if(!(michal !== entity)) { _fun00026_ip = 329; continue _fun00025 }
 146:
                        entity = _closure3_slot3;
                        michal = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.GUILD_UPDATE;
                        if(!(michal === entity)) { _fun00026_ip = 188; continue _fun00025 }
 169:
                        michal = option.key;
                        entity = _closure1_slot19;
                        entity = entity.OWNER_ID;
                        if(!(michal !== entity)) { _fun00026_ip = 221; continue _fun00025 }
 188:
                        entity = {};
                        michal = option.oldValue;
                        entity['oldValue'] = michal;
                        michal = option.newValue;
                        entity['newValue'] = michal;
                        michal = false;
                        entity['transformedValues'] = michal;
                        _fun00026_ip = 324; continue _fun00025;
 221:
                        michal = {};
                        tangon = _closure1_slot1;
                        report = _closure1_slot3;
                        zuuluu = 24;
                        verify = report[zuuluu];
                        foxtra = tangon.bind(oscard)(verify);
                        romeon = foxtra.getUserTag;
                        yankee = option.oldValue;
                        verify = {};
                        offset = 'username';
                        verify['mode'] = offset;
                        verify = romeon.bind(foxtra)(yankee, verify);
                        michal['oldValue'] = verify;
                        zuuluu = report[zuuluu];
                        verify = tangon.bind(oscard)(zuuluu);
                        report = verify.getUserTag;
                        tangon = option.newValue;
                        zuuluu = {};
                        zuuluu['mode'] = offset;
                        zuuluu = report.bind(verify)(tangon, zuuluu);
                        michal['newValue'] = zuuluu;
                        zuuluu = true;
                        michal['transformedValues'] = zuuluu;
                        entity = michal;
 324:
                        _fun00026_ip = 554; continue _fun00025;
 329:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot3;
                        michal = 28;
                        michal = tangon[michal];
                        zuuluu = zuuluu.bind(oscard)(michal);
                        michal = option.newValue;
                        report = zuuluu.bind(oscard)(michal);
                        michal = {};
                        zuuluu = option.oldValue;
                        michal['oldValue'] = zuuluu;
                        zuuluu = report.isValid;
                        zuuluu = zuuluu.bind(report)();
                        if(zuuluu) { _fun00026_ip = 394; continue _fun00025 }
 386:
                        zuuluu = option.newValue;
                        _fun00026_ip = 404; continue _fun00025;
 394:
                        tangon = report.calendar;
                        zuuluu = tangon.bind(report)();
 404:
                        michal['newValue'] = zuuluu;
                        zuuluu = true;
                        michal['transformedValues'] = zuuluu;
                        entity = michal;
                        _fun00026_ip = 554; continue _fun00025;
 424:
                        michal = {};
                        zuuluu = option.oldValue;
                        tangon = null;
                        if(!(tangon == zuuluu)) { _fun00026_ip = 481; continue _fun00025 }
 438:
                        verify = _closure1_slot0;
                        offset = _closure1_slot3;
                        report = 27;
                        report = offset[report];
                        offset = verify.bind(oscard)(report);
                        verify = offset.channelTypeString;
                        report = {};
                        yankee = option.oldValue;
                        report['type'] = yankee;
                        zuuluu = verify.bind(offset)(report);
 481:
                        michal['oldValue'] = zuuluu;
                        zuuluu = option.newValue;
                        if(!(tangon == zuuluu)) { _fun00026_ip = 539; continue _fun00025 }
 496:
                        report = _closure1_slot0;
                        verify = _closure1_slot3;
                        tangon = 27;
                        tangon = verify[tangon];
                        verify = report.bind(oscard)(tangon);
                        report = verify.channelTypeString;
                        tangon = {};
                        offset = option.newValue;
                        tangon['type'] = offset;
                        zuuluu = report.bind(verify)(tangon);
 539:
                        michal['newValue'] = zuuluu;
                        zuuluu = true;
                        michal['transformedValues'] = zuuluu;
                        entity = michal;
 554:
                        verify = entity.oldValue;
                        var _closure4_slot0 = verify;
                        echoed = entity.newValue;
                        var _closure4_slot1 = echoed;
                        sizing = entity.transformedValues;
                        entity = _closure3_slot3;
                        michal = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.MEMBER_ROLE_UPDATE;
                        if(!(michal !== entity)) { _fun00026_ip = 694; continue _fun00025 }
 603:
                        entity = _closure3_slot3;
                        michal = entity.targetType;
                        entity = _closure1_slot15;
                        entity = entity.ROLE;
                        if(!(michal !== entity)) { _fun00026_ip = 675; continue _fun00025 }
 627:
                        entity = _closure3_slot3;
                        michal = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.CHANNEL_OVERWRITE_CREATE;
                        if(!(michal !== entity)) { _fun00026_ip = 675; continue _fun00025 }
 650:
                        entity = _closure3_slot3;
                        michal = entity.action;
                        entity = _closure1_slot17;
                        entity = entity.CHANNEL_OVERWRITE_UPDATE;
                        romeon = null;
                        if(!(michal === entity)) { _fun00026_ip = 692; continue _fun00025 }
 675:
                        michal = _closure3_slot0;
                        entity = michal.renderPermissionUpdate;
                        romeon = entity.bind(michal)(option);
 692:
                        _fun00026_ip = 711; continue _fun00025;
 694:
                        michal = _closure3_slot0;
                        entity = michal.renderRoleUpdate;
                        romeon = entity.bind(michal)(option);
 711:
                        michal = _closure3_slot1;
                        entity = option.key;
                        michal = michal[entity];
                        entity = null;
                        zuuluu = entity == michal;
                        report = undefined;
                        if(zuuluu) { _fun00026_ip = 740; continue _fun00025 }
 735:
                        report = michal.bind(oscard)(option);
 740:
                        if(!(entity != report)) { _fun00026_ip = 1516; continue _fun00025 }
 747:
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot3;
                        michal = 23;
                        michal = tangon[michal];
                        michal = zuuluu.bind(oscard)(michal);
                        tangon = michal.intl;
                        zuuluu = tangon.format;
                        michal = {};
                        michal['oldValue'] = verify;
                        michal['newValue'] = echoed;
                        verify = global;
                        offset = verify.Array;
                        verify = offset.isArray;
                        offset = verify.bind(offset)(echoed);
                        verify = null;
                        if(!offset) { _fun00026_ip = 817; continue _fun00025 }
 812:
                        verify = echoed.length;
 817:
                        michal['count'] = verify;
                        verify = _closure3_slot3;
                        verify = verify.options;
                        verify = verify.subtarget;
                        if(!(entity == verify)) { _fun00026_ip = 846; continue _fun00025 }
 840:
                        verify = option.subtarget;
 846:
                        offset = entity != verify;
                        option = null;
                        if(!offset) { _fun00026_ip = 858; continue _fun00025 }
 855:
                        option = verify;
 858:
                        michal['subtarget'] = option;
                        option = function() { // Original name: newColorHook
                            entity = null;
                            return entity;
                        };
                        michal['newColorHook'] = option;
                        option = function() { // Original name: oldColorHook
                            entity = null;
                            return entity;
                        };
                        michal['oldColorHook'] = option;
                        option = function(argFoo, argBar) { // Original name: oldTagHook
                            report = _closure1_slot20;
                            michal = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            entity = 29;
                            entity = zuuluu[entity];
                            tangon = undefined;
                            entity = michal.bind(tangon)(entity);
                            zuuluu = entity.AppliedForumTagPill;
                            michal = {};
                            entity = _closure4_slot0;
                            michal['tag'] = entity;
                            entity = _closure3_slot2;
                            entity = entity.forumTag;
                            michal['containerStyle'] = entity;
                            entity = argBar;
                            entity = report.bind(tangon)(zuuluu, michal, entity);
                            return entity;
                        };
                        michal['oldTagHook'] = option;
                        option = function(argFoo, argBar) { // Original name: newTagHook
                            report = _closure1_slot20;
                            michal = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            entity = 29;
                            entity = zuuluu[entity];
                            tangon = undefined;
                            entity = michal.bind(tangon)(entity);
                            zuuluu = entity.AppliedForumTagPill;
                            michal = {};
                            entity = _closure4_slot1;
                            michal['tag'] = entity;
                            entity = _closure3_slot2;
                            entity = entity.forumTag;
                            michal['containerStyle'] = entity;
                            entity = argBar;
                            entity = report.bind(tangon)(zuuluu, michal, entity);
                            return entity;
                        };
                        michal['newTagHook'] = option;
                        option = function(argFoo, argBar) { // Original name: oldEmojiHook
                            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                                zuuluu = _closure4_slot0;
                                michal = null;
                                michal = michal != zuuluu;
                                report = undefined;
                                oscard = undefined;
                                if(!michal) { _fun00028_ip = 78; continue _fun00027 }
 20:
                                zuuluu = _closure1_slot1;
                                tangon = _closure1_slot3;
                                michal = 18;
                                michal = tangon[michal];
                                tangon = zuuluu.bind(report)(michal);
                                zuuluu = tangon.getEmojiURL;
                                michal = {'id': null, 'animated': false, 'size': 24};
                                golfie = _closure4_slot0;
                                michal['id'] = golfie;
                                oscard = zuuluu.bind(tangon)(michal);
 78:
                                tangon = _closure1_slot20;
                                zuuluu = _closure1_slot1;
                                golfie = _closure1_slot3;
                                michal = 30;
                                michal = golfie[michal];
                                zuuluu = zuuluu.bind(report)(michal);
                                michal = {};
                                michal['src'] = oscard;
                                entity = _closure4_slot0;
                                michal['name'] = entity;
                                entity = _closure3_slot2;
                                oscard = entity.textEmoji;
                                michal['textEmojiStyle'] = oscard;
                                entity = entity.imageEmoji;
                                michal['fastImageStyle'] = entity;
                                entity = argBar;
                                entity = tangon.bind(report)(zuuluu, michal, entity);
                                return entity;
                            }
                        };
                        michal['oldEmojiHook'] = option;
                        option = function(argFoo, argBar) { // Original name: newEmojiHook
                            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                                zuuluu = _closure4_slot1;
                                michal = null;
                                michal = michal != zuuluu;
                                report = undefined;
                                oscard = undefined;
                                if(!michal) { _fun00030_ip = 78; continue _fun00029 }
 20:
                                zuuluu = _closure1_slot1;
                                tangon = _closure1_slot3;
                                michal = 18;
                                michal = tangon[michal];
                                tangon = zuuluu.bind(report)(michal);
                                zuuluu = tangon.getEmojiURL;
                                michal = {'id': null, 'animated': false, 'size': 24};
                                golfie = _closure4_slot1;
                                michal['id'] = golfie;
                                oscard = zuuluu.bind(tangon)(michal);
 78:
                                tangon = _closure1_slot20;
                                zuuluu = _closure1_slot1;
                                golfie = _closure1_slot3;
                                michal = 30;
                                michal = golfie[michal];
                                zuuluu = zuuluu.bind(report)(michal);
                                michal = {};
                                michal['src'] = oscard;
                                entity = _closure4_slot1;
                                michal['name'] = entity;
                                entity = _closure3_slot2;
                                oscard = entity.textEmoji;
                                michal['textEmojiStyle'] = oscard;
                                entity = entity.imageEmoji;
                                michal['fastImageStyle'] = entity;
                                entity = argBar;
                                entity = tangon.bind(report)(zuuluu, michal, entity);
                                return entity;
                            }
                        };
                        michal['newEmojiHook'] = option;
                        golfie = function(argFoo, argBar) { // Original name: applicationHook
                            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                                report = _closure1_slot20;
                                tangon = _closure1_slot26;
                                zuuluu = {};
                                entity = _closure4_slot0;
                                option = null;
                                oscard = option == entity;
                                michal = undefined;
                                entity = undefined;
                                if(oscard) { _fun00032_ip = 43; continue _fun00031 }
 33:
                                oscard = _closure4_slot0;
                                entity = oscard.application_id;
 43:
                                if(!(option == entity)) { _fun00032_ip = 73; continue _fun00031 }
 47:
                                oscard = _closure4_slot1;
                                option = option == oscard;
                                oscard = undefined;
                                if(option) { _fun00032_ip = 70; continue _fun00031 }
 60:
                                golfie = _closure4_slot1;
                                oscard = golfie.application_id;
 70:
                                entity = oscard;
 73:
                                zuuluu['applicationId'] = entity;
                                entity = argBar;
                                entity = report.bind(michal)(tangon, zuuluu, entity);
                                return entity;
                            }
                        };
                        michal['applicationHook'] = golfie;
                        result = zuuluu.bind(tangon)(report, michal);
                        if(!(entity != result)) { _fun00026_ip = 1514; continue _fun00025 }
 972:
                        michal = _closure3_slot3;
                        zuuluu = michal.actionType;
                        michal = _closure1_slot16;
                        michal = michal.CREATE;
                        if(!(michal !== zuuluu)) { _fun00026_ip = 1092; continue _fun00025 }
 996:
                        michal = _closure1_slot16;
                        michal = michal.UPDATE;
                        if(!(michal !== zuuluu)) { _fun00026_ip = 1059; continue _fun00025 }
 1010:
                        michal = _closure1_slot16;
                        michal = michal.DELETE;
                        offset = undefined;
                        if(!(michal === zuuluu)) { _fun00026_ip = 1123; continue _fun00025 }
 1026:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot3;
                        michal = 15;
                        michal = tangon[michal];
                        michal = zuuluu.bind(oscard)(michal);
                        michal = michal.unsafe_rawColors;
                        offset = michal.RED_400;
                        _fun00026_ip = 1123; continue _fun00025;
 1059:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot3;
                        michal = 15;
                        michal = tangon[michal];
                        michal = zuuluu.bind(oscard)(michal);
                        michal = michal.unsafe_rawColors;
                        offset = michal.YELLOW_300;
                        _fun00026_ip = 1123; continue _fun00025;
 1092:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot3;
                        michal = 15;
                        michal = tangon[michal];
                        michal = zuuluu.bind(oscard)(michal);
                        michal = michal.unsafe_rawColors;
                        offset = michal.GREEN_360;
 1123:
                        michal = _closure3_slot4;
                        michal = michal + 1;
                        _closure3_slot4 = michal;
                        report = _closure1_slot21;
                        tangon = _closure1_slot9;
                        zuuluu = {};
                        option = _closure3_slot2;
                        michal = option.changeRow;
                        zuuluu['style'] = michal;
                        golfie = _closure1_slot0;
                        michal = _closure1_slot3;
                        update = 22;
                        michal = michal[update];
                        michal = golfie.bind(oscard)(michal);
                        golfie = michal.Text;
                        michal = {};
                        verify = 'text-sm/bold';
                        michal['variant'] = verify;
                        verify = option.changeNumberText;
                        option = new Array(2);
                        option[0] = verify;
                        verify = {};
                        verify['color'] = offset;
                        option[1] = verify;
                        michal['style'] = option;
                        verify = _closure3_slot4;
                        option = 10;
                        option = verify < option;
                        verify = null;
                        if(!option) { _fun00026_ip = 1245; continue _fun00025 }
 1239:
                        verify = '0';
 1245:
                        option = new Array(3);
                        option[0] = verify;
                        verify = _closure3_slot4;
                        option[1] = verify;
                        verify = ' —';
                        option[2] = verify;
                        michal['children'] = option;
                        golfie = report.bind(oscard)(golfie, michal);
                        michal = new Array(2);
                        michal[0] = golfie;
                        verify = _closure1_slot21;
                        option = _closure1_slot9;
                        golfie = {};
                        yankee = _closure3_slot2;
                        offset = yankee.changeItemContent;
                        golfie['style'] = offset;
                        offset = {};
                        yankee = yankee.changeItemTextContainer;
                        offset['style'] = yankee;
                        kiloes = _closure1_slot20;
                        foxtra = _closure1_slot0;
                        yankee = _closure1_slot3;
                        yankee = yankee[update];
                        yankee = foxtra.bind(oscard)(yankee);
                        foxtra = yankee.Text;
                        yankee = {};
                        update = 'text-sm/normal';
                        yankee['variant'] = update;
                        yankee['children'] = result;
                        foxtra = kiloes.bind(oscard)(foxtra, yankee);
                        yankee = new Array(2);
                        yankee[0] = foxtra;
                        kiloes = entity != echoed;
                        foxtra = null;
                        if(!kiloes) { _fun00026_ip = 1446; continue _fun00025 }
 1390:
                        kiloes = true;
                        foxtra = null;
                        if(!(kiloes !== sizing)) { _fun00026_ip = 1446; continue _fun00025 }
 1398:
                        sizing = _closure1_slot20;
                        kiloes = _closure1_slot9;
                        backup = {};
                        output = _closure3_slot2;
                        result = output.colorHook;
                        output = new Array(2);
                        output[0] = result;
                        result = {};
                        result['backgroundColor'] = echoed;
                        output[1] = result;
                        backup['style'] = output;
                        foxtra = sizing.bind(oscard)(kiloes, backup);
 1446:
                        yankee[1] = foxtra;
                        offset['children'] = yankee;
                        yankee = verify.bind(oscard)(option, offset);
                        offset = new Array(2);
                        offset[0] = yankee;
                        foxtra = entity != romeon;
                        yankee = null;
                        if(!foxtra) { _fun00026_ip = 1480; continue _fun00025 }
 1477:
                        yankee = romeon;
 1480:
                        offset[1] = yankee;
                        golfie['children'] = offset;
                        golfie = verify.bind(oscard)(option, golfie);
                        michal[1] = golfie;
                        zuuluu['children'] = michal;
                        michal = argBar;
                        michal = report.bind(oscard)(tangon, zuuluu, michal);
                        return michal;
 1514:
                        return entity;
 1516:
                        return entity;
 1518:
                        entity = null;
                        return entity;
                    }
                };
                oscard = tangon.bind(oscard)(zuuluu);
                tangon = _closure1_slot20;
                zuuluu = _closure1_slot9;
                michal = {};
                golfie = golfie.changesContainer;
                michal['style'] = golfie;
                michal['children'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return michal;
 126:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'renderChangeSummary';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.props;
                entity = michal.expanded;
                michal = michal.log;
                if(!entity) { _fun00034_ip = 368; continue _fun00033 }
 25:
                report = michal.targetType;
                tangon = _closure1_slot15;
                tangon = tangon.GUILD;
                if(!(tangon !== report)) { _fun00034_ip = 1189; continue _fun00033 }
 51:
                tangon = _closure1_slot15;
                tangon = tangon.CHANNEL;
                if(!(tangon !== report)) { _fun00034_ip = 1144; continue _fun00033 }
 68:
                tangon = _closure1_slot15;
                tangon = tangon.CHANNEL_OVERWRITE;
                if(!(tangon !== report)) { _fun00034_ip = 1144; continue _fun00033 }
 85:
                tangon = _closure1_slot15;
                tangon = tangon.USER;
                if(!(tangon !== report)) { _fun00034_ip = 1099; continue _fun00033 }
 102:
                tangon = _closure1_slot15;
                tangon = tangon.ROLE;
                if(!(tangon !== report)) { _fun00034_ip = 1054; continue _fun00033 }
 119:
                tangon = _closure1_slot15;
                tangon = tangon.INVITE;
                if(!(tangon !== report)) { _fun00034_ip = 1009; continue _fun00033 }
 136:
                tangon = _closure1_slot15;
                tangon = tangon.WEBHOOK;
                if(!(tangon !== report)) { _fun00034_ip = 964; continue _fun00033 }
 153:
                tangon = _closure1_slot15;
                tangon = tangon.EMOJI;
                if(!(tangon !== report)) { _fun00034_ip = 919; continue _fun00033 }
 170:
                tangon = _closure1_slot15;
                tangon = tangon.INTEGRATION;
                if(!(tangon !== report)) { _fun00034_ip = 874; continue _fun00033 }
 187:
                tangon = _closure1_slot15;
                tangon = tangon.STAGE_INSTANCE;
                if(!(tangon !== report)) { _fun00034_ip = 829; continue _fun00033 }
 204:
                tangon = _closure1_slot15;
                tangon = tangon.GUILD_SCHEDULED_EVENT;
                if(!(tangon !== report)) { _fun00034_ip = 784; continue _fun00033 }
 221:
                tangon = _closure1_slot15;
                tangon = tangon.GUILD_SCHEDULED_EVENT_EXCEPTION;
                if(!(tangon !== report)) { _fun00034_ip = 739; continue _fun00033 }
 238:
                tangon = _closure1_slot15;
                tangon = tangon.THREAD;
                if(!(tangon !== report)) { _fun00034_ip = 694; continue _fun00033 }
 255:
                tangon = _closure1_slot15;
                tangon = tangon.STICKER;
                if(!(tangon !== report)) { _fun00034_ip = 649; continue _fun00033 }
 272:
                tangon = _closure1_slot15;
                tangon = tangon.APPLICATION_COMMAND;
                if(!(tangon !== report)) { _fun00034_ip = 597; continue _fun00033 }
 289:
                tangon = _closure1_slot15;
                tangon = tangon.AUTO_MODERATION_RULE;
                if(!(tangon !== report)) { _fun00034_ip = 552; continue _fun00033 }
 306:
                tangon = _closure1_slot15;
                tangon = tangon.GUILD_SOUNDBOARD;
                if(!(tangon !== report)) { _fun00034_ip = 507; continue _fun00033 }
 323:
                tangon = _closure1_slot15;
                tangon = tangon.VOICE_CHANNEL_STATUS;
                if(!(tangon !== report)) { _fun00034_ip = 462; continue _fun00033 }
 340:
                tangon = _closure1_slot15;
                tangon = tangon.GUILD_MEMBER_VERIFICATION;
                if(!(tangon !== report)) { _fun00034_ip = 417; continue _fun00033 }
 354:
                tangon = _closure1_slot15;
                tangon = tangon.GUILD_PROFILE;
                if(!(tangon !== report)) { _fun00034_ip = 372; continue _fun00033 }
 368:
                tangon = null;
                return tangon;
 372:
                report = zuuluu.renderChangeDetails;
                golfie = _closure1_slot2;
                oscard = _closure1_slot3;
                tangon = 16;
                oscard = oscard[tangon];
                tangon = undefined;
                oscard = golfie.bind(tangon)(oscard);
                tangon = oscard.GuildProfileChangeStrings;
                tangon = tangon.bind(oscard)();
                tangon = report.bind(zuuluu)(tangon);
                return tangon;
 417:
                report = zuuluu.renderChangeDetails;
                golfie = _closure1_slot2;
                oscard = _closure1_slot3;
                tangon = 16;
                oscard = oscard[tangon];
                tangon = undefined;
                oscard = golfie.bind(tangon)(oscard);
                tangon = oscard.MemberVerificationChangeStrings;
                tangon = tangon.bind(oscard)();
                tangon = report.bind(zuuluu)(tangon);
                return tangon;
 462:
                report = zuuluu.renderChangeDetails;
                golfie = _closure1_slot2;
                oscard = _closure1_slot3;
                tangon = 16;
                oscard = oscard[tangon];
                tangon = undefined;
                oscard = golfie.bind(tangon)(oscard);
                tangon = oscard.VoiceChannelStatusStrings;
                tangon = tangon.bind(oscard)();
                tangon = report.bind(zuuluu)(tangon);
                return tangon;
 507:
                report = zuuluu.renderChangeDetails;
                golfie = _closure1_slot2;
                oscard = _closure1_slot3;
                tangon = 16;
                oscard = oscard[tangon];
                tangon = undefined;
                oscard = golfie.bind(tangon)(oscard);
                tangon = oscard.GuildSoundboardChangeStrings;
                tangon = tangon.bind(oscard)();
                tangon = report.bind(zuuluu)(tangon);
                return tangon;
 552:
                report = zuuluu.renderChangeDetails;
                golfie = _closure1_slot2;
                oscard = _closure1_slot3;
                tangon = 16;
                oscard = oscard[tangon];
                tangon = undefined;
                oscard = golfie.bind(tangon)(oscard);
                tangon = oscard.AutoModerationRuleChangeStrings;
                tangon = tangon.bind(oscard)();
                tangon = report.bind(zuuluu)(tangon);
                return tangon;
 597:
                tangon = zuuluu.renderChangeDetails;
                golfie = _closure1_slot2;
                oscard = _closure1_slot3;
                report = 16;
                oscard = oscard[report];
                report = undefined;
                oscard = golfie.bind(report)(oscard);
                report = oscard.CommandPermissionChangeStrings;
                michal = michal.changes;
                michal = report.bind(oscard)(michal);
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 649:
                tangon = zuuluu.renderChangeDetails;
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                michal = 16;
                report = report[michal];
                michal = undefined;
                report = oscard.bind(michal)(report);
                michal = report.StickerChangeStrings;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 694:
                tangon = zuuluu.renderChangeDetails;
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                michal = 16;
                report = report[michal];
                michal = undefined;
                report = oscard.bind(michal)(report);
                michal = report.ThreadChangeStrings;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 739:
                tangon = zuuluu.renderChangeDetails;
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                michal = 16;
                report = report[michal];
                michal = undefined;
                report = oscard.bind(michal)(report);
                michal = report.GuildScheduledEventExceptionChangeStrings;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 784:
                tangon = zuuluu.renderChangeDetails;
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                michal = 16;
                report = report[michal];
                michal = undefined;
                report = oscard.bind(michal)(report);
                michal = report.GuildScheduledEventChangeStrings;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 829:
                tangon = zuuluu.renderChangeDetails;
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                michal = 16;
                report = report[michal];
                michal = undefined;
                report = oscard.bind(michal)(report);
                michal = report.StageInstanceChangeStrings;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 874:
                tangon = zuuluu.renderChangeDetails;
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                michal = 16;
                report = report[michal];
                michal = undefined;
                report = oscard.bind(michal)(report);
                michal = report.IntegrationChangeStrings;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 919:
                tangon = zuuluu.renderChangeDetails;
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                michal = 16;
                report = report[michal];
                michal = undefined;
                report = oscard.bind(michal)(report);
                michal = report.EmojiChangeStrings;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 964:
                tangon = zuuluu.renderChangeDetails;
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                michal = 16;
                report = report[michal];
                michal = undefined;
                report = oscard.bind(michal)(report);
                michal = report.WebhookChangeStrings;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 1009:
                tangon = zuuluu.renderChangeDetails;
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                michal = 16;
                report = report[michal];
                michal = undefined;
                report = oscard.bind(michal)(report);
                michal = report.InviteChangeStrings;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 1054:
                tangon = zuuluu.renderChangeDetails;
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                michal = 16;
                report = report[michal];
                michal = undefined;
                report = oscard.bind(michal)(report);
                michal = report.RoleChangeStrings;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 1099:
                tangon = zuuluu.renderChangeDetails;
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                michal = 16;
                report = report[michal];
                michal = undefined;
                report = oscard.bind(michal)(report);
                michal = report.UserChangeStrings;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 1144:
                tangon = zuuluu.renderChangeDetails;
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                michal = 16;
                report = report[michal];
                michal = undefined;
                report = oscard.bind(michal)(report);
                michal = report.ChannelChangeStrings;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                return michal;
 1189:
                michal = zuuluu.renderChangeDetails;
                report = _closure1_slot2;
                tangon = _closure1_slot3;
                entity = 16;
                tangon = tangon[entity];
                entity = undefined;
                tangon = report.bind(entity)(tangon);
                entity = tangon.GuildChangeStrings;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'render';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                option = this;
                michal = _closure1_slot22;
                entity = option.context;
                tangon = undefined;
                echoed = michal.bind(tangon)(entity);
                michal = option.props;
                papara = michal.log;
                var _closure3_slot0 = papara;
                golfie = michal.expanded;
                entity = michal.onHeaderClick;
                cntext = michal.guildId;
                zuuluu = michal.channel;
                var _closure3_slot1 = zuuluu;
                verify = michal.containerStyle;
                record = michal.theme;
                ctrled = papara.user;
                var _closure3_slot2 = ctrled;
                michal = option.hasChangesToRender;
                backup = michal.bind(option)();
                zuuluu = papara.timestampStart;
                michal = zuuluu.calendar;
                oscard = michal.bind(zuuluu)();
                zuuluu = papara.timestampEnd;
                michal = zuuluu.calendar;
                yankee = michal.bind(zuuluu)();
                if(!(oscard !== yankee)) { _fun00036_ip = 207; continue _fun00035 }
 133:
                report = _closure1_slot21;
                zuuluu = _closure1_slot0;
                offset = _closure1_slot3;
                michal = 25;
                michal = offset[michal];
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.LegacyText;
                michal = {};
                offset = echoed.timestamp;
                michal['style'] = offset;
                offset = new Array(3);
                offset[0] = oscard;
                romeon = '—';
                offset[1] = romeon;
                offset[2] = yankee;
                michal['children'] = offset;
                result = report.bind(tangon)(zuuluu, michal);
                _fun00036_ip = 259; continue _fun00035;
 207:
                report = _closure1_slot20;
                zuuluu = _closure1_slot0;
                offset = _closure1_slot3;
                michal = 25;
                michal = offset[michal];
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.LegacyText;
                michal = {};
                offset = echoed.timestamp;
                michal['style'] = offset;
                michal['children'] = oscard;
                result = report.bind(tangon)(zuuluu, michal);
 259:
                if(backup) { _fun00036_ip = 266; continue _fun00035 }
 262:
                entity = _closure1_slot18;
 266:
                var _closure3_slot3 = entity;
                oscard = null;
                update = null;
                if(!golfie) { _fun00036_ip = 283; continue _fun00035 }
 277:
                update = echoed.rotate90;
 283:
                zuuluu = _closure1_slot21;
                michal = _closure1_slot0;
                report = _closure1_slot3;
                entity = 31;
                entity = report[entity];
                entity = michal.bind(tangon)(entity);
                michal = entity.Card;
                entity = {};
                offset = echoed.container;
                report = new Array(2);
                report[0] = offset;
                report[1] = verify;
                entity['style'] = report;
                report = 'secondary';
                if(!golfie) { _fun00036_ip = 347; continue _fun00035 }
 343:
                report = 'primary';
 347:
                entity['variant'] = report;
                report = 'none';
                if(!golfie) { _fun00036_ip = 362; continue _fun00035 }
 358:
                report = 'strong';
 362:
                entity['border'] = report;
                report = function() { // Original name: onPress
                    zuuluu = _closure3_slot3;
                    michal = _closure3_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity['onPress'] = report;
                offset = _closure1_slot21;
                verify = _closure1_slot9;
                report = {};
                yankee = echoed.rowContainer;
                report['style'] = yankee;
                kiloes = _closure1_slot20;
                romeon = _closure1_slot1;
                target = _closure1_slot3;
                yankee = 32;
                yankee = target[yankee];
                romeon = romeon.bind(tangon)(yankee);
                yankee = {};
                sizing = papara.action;
                yankee['action'] = sizing;
                romeon = kiloes.bind(tangon)(romeon, yankee);
                yankee = new Array(4);
                yankee[0] = romeon;
                sizing = _closure1_slot20;
                config = _closure1_slot0;
                romeon = 33;
                romeon = target[romeon];
                romeon = config.bind(tangon)(romeon);
                kiloes = romeon.PressableOpacity;
                romeon = {};
                source = 'button';
                romeon['accessibilityRole'] = source;
                source = 23;
                vacuum = target[source];
                vacuum = config.bind(tangon)(vacuum);
                sequen = vacuum.intl;
                vacuum = sequen.string;
                source = target[source];
                source = config.bind(tangon)(source);
                source = source.t;
                source = source.iXAna2;
                source = vacuum.bind(sequen)(source);
                romeon['accessibilityLabel'] = source;
                vacuum = oscard == ctrled;
                source = undefined;
                if(vacuum) { _fun00036_ip = 548; continue _fun00035 }
 543:
                source = ctrled.username;
 548:
                romeon['accessibilityHint'] = source;
                output = function() { // Original name: onPress
                    _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        entity = 34;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.hideActionSheet;
                        zuuluu = zuuluu.bind(tangon)();
                        report = _closure3_slot2;
                        zuuluu = null;
                        if(!(zuuluu != report)) { _fun00038_ip = 101; continue _fun00037 }
 48:
                        zuuluu = _closure1_slot1;
                        report = _closure1_slot3;
                        michal = 35;
                        michal = report[michal];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = {};
                        report = _closure3_slot2;
                        report = report.id;
                        michal['userId'] = report;
                        tangon = _closure3_slot1;
                        tangon = tangon.id;
                        michal['channelId'] = tangon;
                        michal = zuuluu.bind(entity)(michal);
 101:
                        return entity;
                    }
                };
                romeon['onPress'] = output;
                ctrled = _closure1_slot20;
                source = _closure1_slot1;
                config = _closure1_slot3;
                vacuum = 36;
                output = config[vacuum];
                source = source.bind(tangon)(output);
                output = {};
                sequen = echoed.avatar;
                output['style'] = sequen;
                sequen = _closure1_slot25;
                sequen = sequen.bind(tangon)(record, papara, cntext);
                output['source'] = sequen;
                sequen = _closure1_slot0;
                vacuum = config[vacuum];
                vacuum = sequen.bind(tangon)(vacuum);
                vacuum = vacuum.AvatarSizes;
                vacuum = vacuum.SMALL;
                output['size'] = vacuum;
                output = ctrled.bind(tangon)(source, output);
                romeon['children'] = output;
                romeon = sizing.bind(tangon)(kiloes, romeon);
                yankee[1] = romeon;
                sizing = _closure1_slot21;
                kiloes = _closure1_slot9;
                romeon = {};
                output = echoed.titleContainer;
                romeon['style'] = output;
                output = option.renderTitle;
                source = output.bind(option)();
                output = new Array(2);
                output[0] = source;
                output[1] = result;
                romeon['children'] = output;
                romeon = sizing.bind(tangon)(kiloes, romeon);
                yankee[2] = romeon;
                romeon = null;
                if(!backup) { _fun00036_ip = 820; continue _fun00035 }
 725:
                kiloes = _closure1_slot20;
                output = _closure1_slot1;
                result = _closure1_slot3;
                sizing = 37;
                foxtra = result[sizing];
                backup = output.bind(tangon)(foxtra);
                foxtra = {};
                source = echoed.arrow;
                echoed = new Array(2);
                echoed[0] = source;
                echoed[1] = update;
                foxtra['style'] = echoed;
                sizing = result[sizing];
                sizing = output.bind(tangon)(sizing);
                sizing = sizing.Sizes;
                sizing = sizing.CUSTOM;
                foxtra['size'] = sizing;
                sizing = 38;
                sizing = result[sizing];
                sizing = output.bind(tangon)(sizing);
                foxtra['source'] = sizing;
                romeon = kiloes.bind(tangon)(backup, foxtra);
 820:
                yankee[3] = romeon;
                report['children'] = yankee;
                verify = offset.bind(tangon)(verify, report);
                report = new Array(2);
                report[0] = verify;
                oscard = null;
                if(!golfie) { _fun00036_ip = 859; continue _fun00035 }
 847:
                golfie = option.renderChangeSummary;
                oscard = golfie.bind(option)();
 859:
                report[1] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(golfie);
    golfie = 39;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.ThemeContext;
    tangon['contextType'] = golfie;
    golfie = 40;
    golfie = oscard[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.connectStores;
    golfie = new Array(1);
    golfie[0] = offset;
    michal = function() {
        entity = {};
        michal = _closure1_slot10;
        michal = michal.theme;
        entity['theme'] = michal;
        return entity;
    };
    michal = option.bind(verify)(golfie, michal);
    michal = michal.bind(entity)(tangon);
    tangon = 41;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/native/AuditLog.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();