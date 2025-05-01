// app/modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    option = argCor;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    var _closure1_slot3 = golfie;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot7;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot6;
            entity = _closure1_slot27;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot27 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    michal = function(argFoo) { // Original name: GuildSettingsModalMemberEditScene
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            offset = michal.guildId;
            var _closure2_slot0 = offset;
            yankee = michal.userId;
            var _closure2_slot1 = yankee;
            update = michal.onClose;
            foxtra = michal.contentContainerStyle;
            option = michal.navScrim;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot3;
            michal = 34;
            michal = tangon[michal];
            report = undefined;
            golfie = zuuluu.bind(report)(michal);
            michal = golfie.useNavigation;
            backup = michal.bind(golfie)();
            var _closure2_slot2 = backup;
            michal = 35;
            golfie = tangon[michal];
            kiloes = zuuluu.bind(report)(golfie);
            romeon = kiloes.useStateFromStores;
            golfie = _closure1_slot12;
            verify = new Array(1);
            verify[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot12;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            result = romeon.bind(kiloes)(verify, golfie);
            var _closure2_slot3 = result;
            golfie = tangon[michal];
            kiloes = zuuluu.bind(report)(golfie);
            romeon = kiloes.useStateFromStores;
            golfie = _closure1_slot12;
            verify = new Array(1);
            verify[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot12;
                michal = zuuluu.getRoles;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            output = romeon.bind(kiloes)(verify, golfie);
            golfie = tangon[michal];
            kiloes = zuuluu.bind(report)(golfie);
            romeon = kiloes.useStateFromStoresObject;
            golfie = _closure1_slot14;
            verify = new Array(1);
            verify[0] = golfie;
            golfie = function() {
                michal = _closure1_slot14;
                entity = michal.getCurrentUser;
                michal = entity.bind(michal)();
                tangon = _closure1_slot1;
                report = _closure1_slot3;
                entity = 36;
                entity = report[entity];
                oscard = undefined;
                report = tangon.bind(oscard)(entity);
                entity = null;
                tangon = entity != michal;
                entity = 'GuildSettingsModalMemberEditScene: current user cannot be undefined';
                entity = report.bind(oscard)(tangon, entity);
                entity = {};
                report = _closure1_slot14;
                tangon = report.getUser;
                zuuluu = _closure2_slot1;
                zuuluu = tangon.bind(report)(zuuluu);
                entity['user'] = zuuluu;
                entity['currentUser'] = michal;
                return entity;
            };
            golfie = romeon.bind(kiloes)(verify, golfie);
            kiloes = golfie.user;
            var _closure2_slot4 = kiloes;
            sizing = golfie.currentUser;
            echoed = _closure1_slot9;
            romeon = echoed.useEffect;
            verify = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 21;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.startEditingNickname;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            golfie = new Array(0);
            golfie = romeon.bind(echoed)(verify, golfie);
            golfie = tangon[michal];
            echoed = zuuluu.bind(report)(golfie);
            romeon = echoed.useStateFromStores;
            golfie = _closure1_slot15;
            verify = new Array(1);
            verify[0] = golfie;
            golfie = function() {
                entity = _closure1_slot15;
                entity = entity.keyboardOpen;
                return entity;
            };
            verify = romeon.bind(echoed)(verify, golfie);
            michal = tangon[michal];
            echoed = zuuluu.bind(report)(michal);
            romeon = echoed.useStateFromStoresObject;
            michal = _closure1_slot16;
            golfie = new Array(5);
            golfie[0] = michal;
            michal = _closure1_slot11;
            golfie[1] = michal;
            michal = _closure1_slot13;
            golfie[2] = michal;
            michal = _closure1_slot14;
            golfie[3] = michal;
            michal = _closure1_slot12;
            golfie[4] = michal;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = {};
                    oscard = _closure1_slot11;
                    report = oscard.getMember;
                    tangon = _closure2_slot0;
                    zuuluu = _closure2_slot1;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    entity['member'] = zuuluu;
                    zuuluu = _closure1_slot16;
                    zuuluu = zuuluu.nicknameError;
                    entity['nicknameError'] = zuuluu;
                    zuuluu = _closure1_slot16;
                    zuuluu = zuuluu.roles;
                    entity['editRoles'] = zuuluu;
                    zuuluu = _closure1_slot16;
                    zuuluu = zuuluu.isEditing;
                    entity['isEditing'] = zuuluu;
                    zuuluu = _closure1_slot16;
                    zuuluu = zuuluu.isSubmitting;
                    entity['submitting'] = zuuluu;
                    zuuluu = _closure2_slot3;
                    verify = null;
                    zuuluu = verify != zuuluu;
                    if(!zuuluu) { _fun00008_ip = 118; continue _fun00007 }
 110:
                    tangon = _closure2_slot4;
                    zuuluu = verify != tangon;
 118:
                    if(!zuuluu) { _fun00008_ip = 156; continue _fun00007 }
 121:
                    offset = _closure1_slot13;
                    option = offset.canManageUser;
                    tangon = _closure1_slot17;
                    oscard = tangon.MANAGE_NICKNAMES;
                    report = _closure2_slot4;
                    tangon = _closure2_slot3;
                    zuuluu = option.bind(offset)(oscard, report, tangon);
 156:
                    entity['canChangeNick'] = zuuluu;
                    oscard = _closure1_slot13;
                    report = oscard.can;
                    zuuluu = _closure1_slot17;
                    tangon = zuuluu.MANAGE_ROLES;
                    zuuluu = _closure2_slot3;
                    tangon = report.bind(oscard)(tangon, zuuluu);
                    entity['canManageRoles'] = tangon;
                    zuuluu = verify != zuuluu;
                    if(!zuuluu) { _fun00008_ip = 211; continue _fun00007 }
 203:
                    tangon = _closure2_slot4;
                    zuuluu = verify != tangon;
 211:
                    if(!zuuluu) { _fun00008_ip = 249; continue _fun00007 }
 214:
                    offset = _closure1_slot13;
                    option = offset.canManageUser;
                    tangon = _closure1_slot17;
                    oscard = tangon.KICK_MEMBERS;
                    report = _closure2_slot4;
                    tangon = _closure2_slot3;
                    zuuluu = option.bind(offset)(oscard, report, tangon);
 249:
                    entity['canKick'] = zuuluu;
                    zuuluu = _closure2_slot3;
                    zuuluu = verify != zuuluu;
                    if(!zuuluu) { _fun00008_ip = 273; continue _fun00007 }
 265:
                    tangon = _closure2_slot4;
                    zuuluu = verify != tangon;
 273:
                    if(!zuuluu) { _fun00008_ip = 311; continue _fun00007 }
 276:
                    offset = _closure1_slot13;
                    option = offset.canManageUser;
                    tangon = _closure1_slot17;
                    oscard = tangon.BAN_MEMBERS;
                    report = _closure2_slot4;
                    tangon = _closure2_slot3;
                    zuuluu = option.bind(offset)(oscard, report, tangon);
 311:
                    entity['canBan'] = zuuluu;
                    report = _closure1_slot0;
                    tangon = _closure1_slot3;
                    zuuluu = 37;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.canToggleCommunicationDisableOnUser;
                    tangon = _closure2_slot3;
                    option = verify == tangon;
                    tangon = undefined;
                    if(option) { _fun00008_ip = 366; continue _fun00007 }
 357:
                    option = _closure2_slot3;
                    tangon = option.id;
 366:
                    option = _closure2_slot4;
                    option = verify == option;
                    zuuluu = undefined;
                    if(option) { _fun00008_ip = 388; continue _fun00007 }
 379:
                    michal = _closure2_slot4;
                    zuuluu = michal.id;
 388:
                    option = _closure1_slot14;
                    michal = new Array(3);
                    michal[0] = option;
                    option = _closure1_slot12;
                    michal[1] = option;
                    golfie = _closure1_slot13;
                    michal[2] = golfie;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    entity['canDisableCommunication'] = michal;
                    return entity;
                }
            };
            romeon = romeon.bind(echoed)(golfie, michal);
            michal = 38;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.useSubscribeGuildMembers;
            michal = {};
            golfie = new Array(1);
            golfie[0] = yankee;
            michal[offset] = golfie;
            michal = zuuluu.bind(tangon)(michal);
            tangon = _closure1_slot9;
            zuuluu = tangon.useCallback;
            michal = new Array(1);
            michal[0] = backup;
            entity = function() {
                zuuluu = _closure2_slot2;
                michal = zuuluu.pop;
                entity = 2;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            echoed = zuuluu.bind(tangon)(entity, michal);
            golfie = null;
            michal = golfie != sizing;
            entity = null;
            if(!michal) { _fun00006_ip = 609; continue _fun00005 }
 425:
            michal = golfie != result;
            entity = null;
            if(!michal) { _fun00006_ip = 609; continue _fun00005 }
 437:
            michal = golfie != kiloes;
            entity = null;
            if(!michal) { _fun00006_ip = 609; continue _fun00005 }
 449:
            tangon = _closure1_slot21;
            zuuluu = _closure1_slot0;
            offset = _closure1_slot3;
            michal = 39;
            michal = offset[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.RedesignCompat;
            michal = {};
            yankee = _closure1_slot20;
            offset = _closure1_slot25;
            oscard = {};
            ctrled = oscard;
            source = romeon;
            romeon = copyDataProperties(ctrled, source);
            romeon = 'onClose';
            oscard[romeon] = update;
            romeon = 'handleSuccessfulRemoval';
            oscard[romeon] = echoed;
            romeon = 'guild';
            oscard[romeon] = result;
            romeon = 'guildRoles';
            oscard[romeon] = output;
            romeon = 'currentUser';
            oscard[romeon] = sizing;
            romeon = 'user';
            oscard[romeon] = kiloes;
            romeon = 'navigation';
            oscard[romeon] = backup;
            romeon = 'contentContainerStyle';
            oscard[romeon] = foxtra;
            offset = yankee.bind(report)(offset, oscard);
            oscard = new Array(2);
            oscard[0] = offset;
            golfie = null;
            if(verify) { _fun00006_ip = 595; continue _fun00005 }
 592:
            golfie = option;
 595:
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 609:
            return entity;
        }
    };
    var _closure1_slot28 = michal;
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
    var _closure1_slot4 = report;
    report = 1;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 3;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    option = 6;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    option = option.View;
    var _closure1_slot10 = option;
    option = 7;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot11 = option;
    option = 8;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot12 = option;
    option = 9;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot13 = option;
    option = 10;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot14 = option;
    option = 11;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot15 = option;
    option = 12;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot16 = option;
    option = 13;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    verify = option.Permissions;
    var _closure1_slot17 = verify;
    verify = option.GuildFeatures;
    var _closure1_slot18 = verify;
    option = option.GuildSettingsSections;
    var _closure1_slot19 = option;
    option = 14;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    verify = option.jsx;
    var _closure1_slot20 = verify;
    verify = option.jsxs;
    var _closure1_slot21 = verify;
    option = option.Fragment;
    var _closure1_slot22 = option;
    option = 15;
    option = golfie[option];
    offset = oscard.bind(entity)(option);
    verify = offset.createLegacyClassComponentStyles;
    option = {};
    yankee = {};
    romeon = 63;
    yankee['height'] = romeon;
    option['userInfo'] = yankee;
    yankee = {'width': 40, 'height': 40};
    option['avatar'] = yankee;
    yankee = {};
    romeon = 'row';
    yankee['flexDirection'] = romeon;
    option['rowLabel'] = yankee;
    yankee = {'marginTop': 8, 'marginBottom': 8};
    option['ctaButton'] = yankee;
    yankee = {'marginRight': 0, 'marginLeft': 0, 'paddingRight': 0, 'paddingLeft': 16};
    option['actionButtonLeft'] = yankee;
    yankee = {'marginRight': 0, 'marginLeft': 0, 'paddingRight': 16, 'paddingLeft': 0};
    option['actionButtonRight'] = yankee;
    yankee = {};
    romeon = 'auto';
    yankee['flexBasis'] = romeon;
    option['actionButtonContainer'] = yankee;
    option = verify.bind(offset)(option);
    var _closure1_slot23 = option;
    verify = report.PureComponent;
    option = function(argFoo) {
        report = function(argFoo) { // Original name: RolesList
            zuuluu = argFoo;
            oscard = this;
            michal = _closure1_slot4;
            report = _closure2_slot0;
            tangon = undefined;
            michal = michal.bind(tangon)(oscard, report);
            michal = _closure1_slot26;
            entity = new Array(1);
            entity[0] = zuuluu;
            entity = michal.bind(tangon)(oscard, report, entity);
            michal = {};
            zuuluu = zuuluu.isEditing;
            michal['isEditingProp'] = zuuluu;
            entity['state'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot8;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot5;
        oscard = {};
        michal = 'render';
        oscard['key'] = michal;
        michal = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = this;
                entity = entity.props;
                offset = entity.guild;
                var _closure3_slot0 = offset;
                oscard = entity.guildRoles;
                zuuluu = entity.roles;
                var _closure3_slot1 = zuuluu;
                zuuluu = entity.isEditing;
                verify = entity.currentUserId;
                var _closure3_slot2 = verify;
                tangon = entity.onStartEditing;
                entity = entity.onToggleRole;
                var _closure3_slot3 = entity;
                if(zuuluu) { _fun00010_ip = 258; continue _fun00009 }
 76:
                report = _closure1_slot1;
                output = _closure1_slot3;
                zuuluu = 17;
                zuuluu = output[zuuluu];
                romeon = undefined;
                zuuluu = report.bind(romeon)(zuuluu);
                golfie = zuuluu.bind(romeon)(oscard);
                report = golfie.filter;
                zuuluu = function(argFoo) {
                    zuuluu = _closure3_slot1;
                    michal = zuuluu.indexOf;
                    entity = argFoo;
                    entity = entity.id;
                    michal = michal.bind(zuuluu)(entity);
                    entity = -1;
                    entity = entity !== michal;
                    return entity;
                };
                golfie = report.bind(golfie)(zuuluu);
                report = golfie.map;
                zuuluu = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        report = _closure1_slot21;
                        tangon = _closure1_slot10;
                        zuuluu = {};
                        verify = _closure1_slot20;
                        romeon = _closure1_slot0;
                        yankee = _closure1_slot3;
                        offset = 19;
                        oscard = yankee[offset];
                        michal = undefined;
                        oscard = romeon.bind(michal)(oscard);
                        option = oscard.FormRow;
                        oscard = {};
                        foxtra = _closure1_slot20;
                        yankee = yankee[offset];
                        yankee = romeon.bind(michal)(yankee);
                        yankee = yankee.FormRow;
                        romeon = yankee.Label;
                        yankee = {};
                        kiloes = entity.colorString;
                        backup = null;
                        kiloes = backup != kiloes;
                        if(!kiloes) { _fun00012_ip = 107; continue _fun00011 }
 92:
                        kiloes = {};
                        sizing = entity.colorString;
                        kiloes['color'] = sizing;
                        backup = kiloes;
 107:
                        yankee['style'] = backup;
                        backup = entity.name;
                        yankee['text'] = backup;
                        yankee = foxtra.bind(michal)(romeon, yankee);
                        oscard['label'] = yankee;
                        option = verify.bind(michal)(option, oscard);
                        oscard = new Array(2);
                        oscard[0] = option;
                        verify = _closure1_slot20;
                        option = _closure1_slot0;
                        golfie = _closure1_slot3;
                        golfie = golfie[offset];
                        golfie = option.bind(michal)(golfie);
                        option = golfie.FormDivider;
                        golfie = {};
                        golfie = verify.bind(michal)(option, golfie);
                        oscard[1] = golfie;
                        zuuluu['children'] = oscard;
                        entity = entity.id;
                        entity = report.bind(michal)(tangon, zuuluu, entity);
                        return entity;
                    }
                };
                report = report.bind(golfie)(zuuluu);
                zuuluu = report.value;
                zuuluu = zuuluu.bind(report)();
                report = zuuluu.push;
                yankee = _closure1_slot20;
                sizing = _closure1_slot0;
                golfie = 19;
                golfie = output[golfie];
                golfie = sizing.bind(romeon)(golfie);
                option = golfie.FormRow;
                golfie = {};
                foxtra = 20;
                backup = output[foxtra];
                backup = sizing.bind(romeon)(backup);
                kiloes = backup.intl;
                backup = kiloes.string;
                foxtra = output[foxtra];
                foxtra = sizing.bind(romeon)(foxtra);
                foxtra = foxtra.t;
                foxtra = foxtra.+riKdH;
                foxtra = backup.bind(kiloes)(foxtra);
                golfie['label'] = foxtra;
                golfie['onPress'] = tangon;
                tangon = 'addition';
                tangon = yankee.bind(romeon)(option, golfie, tangon);
                tangon = report.bind(zuuluu)(tangon);
                report = zuuluu;
                _fun00010_ip = 386; continue _fun00009;
 258:
                golfie = _closure1_slot2;
                option = _closure1_slot3;
                zuuluu = 16;
                zuuluu = option[zuuluu];
                tangon = undefined;
                golfie = golfie.bind(tangon)(zuuluu);
                zuuluu = golfie.getHighestRole;
                zuuluu = zuuluu.bind(golfie)(offset, verify);
                var _closure3_slot4 = zuuluu;
                golfie = _closure1_slot1;
                zuuluu = 17;
                zuuluu = option[zuuluu];
                zuuluu = golfie.bind(tangon)(zuuluu);
                oscard = zuuluu.bind(tangon)(oscard);
                tangon = oscard.filter;
                zuuluu = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 18;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.isEveryoneRoleId;
                    entity = _closure3_slot0;
                    michal = entity.id;
                    entity = argFoo;
                    entity = entity.id;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = !entity;
                    return entity;
                };
                oscard = tangon.bind(oscard)(zuuluu);
                tangon = oscard.filter;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.managed;
                    entity = !entity;
                    return entity;
                };
                oscard = tangon.bind(oscard)(zuuluu);
                tangon = oscard.filter;
                zuuluu = function(argFoo) {
                    zuuluu = _closure1_slot2;
                    michal = _closure1_slot3;
                    entity = 16;
                    michal = michal[entity];
                    entity = undefined;
                    oscard = zuuluu.bind(entity)(michal);
                    report = oscard.isRoleHigher;
                    offset = _closure3_slot0;
                    verify = _closure3_slot2;
                    option = _closure3_slot4;
                    golfie = argFoo;
                    yankee = oscard;
                    entity = yankee[report](offset, verify, option, golfie, oscard);
                    return entity;
                };
                tangon = tangon.bind(oscard)(zuuluu);
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        var _closure4_slot0 = entity;
                        tangon = _closure3_slot1;
                        zuuluu = tangon.indexOf;
                        michal = entity.id;
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = -1;
                        sizing = michal !== zuuluu;
                        var _closure4_slot1 = sizing;
                        report = _closure1_slot21;
                        tangon = _closure1_slot10;
                        zuuluu = {};
                        romeon = _closure1_slot20;
                        foxtra = _closure1_slot0;
                        option = _closure1_slot3;
                        offset = 19;
                        oscard = option[offset];
                        michal = undefined;
                        oscard = foxtra.bind(michal)(oscard);
                        yankee = oscard.FormRow;
                        oscard = {};
                        backup = _closure1_slot20;
                        option = option[offset];
                        option = foxtra.bind(michal)(option);
                        option = option.FormRow;
                        foxtra = option.Label;
                        option = {};
                        output = entity.colorString;
                        kiloes = null;
                        output = kiloes != output;
                        if(!output) { _fun00014_ip = 149; continue _fun00013 }
 134:
                        output = {};
                        result = entity.colorString;
                        output['color'] = result;
                        kiloes = output;
 149:
                        option['style'] = kiloes;
                        kiloes = entity.name;
                        option['text'] = kiloes;
                        option = backup.bind(michal)(foxtra, option);
                        oscard['label'] = option;
                        golfie = function() { // Original name: onPress
                            tangon = _closure3_slot3;
                            michal = _closure4_slot0;
                            zuuluu = michal.id;
                            entity = _closure4_slot1;
                            michal = !entity;
                            entity = undefined;
                            entity = tangon.bind(entity)(zuuluu, michal);
                            return entity;
                        };
                        oscard['onPress'] = golfie;
                        kiloes = _closure1_slot20;
                        option = _closure1_slot0;
                        golfie = _closure1_slot3;
                        foxtra = golfie[offset];
                        foxtra = option.bind(michal)(foxtra);
                        foxtra = foxtra.FormRow;
                        backup = foxtra.Radio;
                        foxtra = {};
                        foxtra['selected'] = sizing;
                        foxtra = kiloes.bind(michal)(backup, foxtra);
                        oscard['leading'] = foxtra;
                        yankee = romeon.bind(michal)(yankee, oscard);
                        oscard = new Array(2);
                        oscard[0] = yankee;
                        verify = _closure1_slot20;
                        golfie = golfie[offset];
                        golfie = option.bind(michal)(golfie);
                        option = golfie.FormDivider;
                        golfie = {};
                        offset = true;
                        golfie['iconPush'] = offset;
                        golfie = verify.bind(michal)(option, golfie);
                        oscard[1] = golfie;
                        zuuluu['children'] = oscard;
                        entity = entity.id;
                        entity = report.bind(michal)(tangon, zuuluu, entity);
                        return entity;
                    }
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.value;
                report = michal.bind(zuuluu)();
 386:
                tangon = _closure1_slot20;
                verify = _closure1_slot0;
                offset = _closure1_slot3;
                entity = 19;
                entity = offset[entity];
                zuuluu = undefined;
                entity = verify.bind(zuuluu)(entity);
                michal = entity.FormSection;
                entity = {};
                oscard = 20;
                golfie = offset[oscard];
                golfie = verify.bind(zuuluu)(golfie);
                option = golfie.intl;
                golfie = option.string;
                oscard = offset[oscard];
                oscard = verify.bind(zuuluu)(oscard);
                oscard = oscard.t;
                oscard = oscard.LPJmLy;
                oscard = golfie.bind(option)(oscard);
                entity['title'] = oscard;
                entity['children'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            }
        };
        oscard['value'] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        oscard = {};
        golfie = 'getDerivedStateFromProps';
        oscard['key'] = golfie;
        entity = function(argFoo, argBar) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.isEditing;
                entity = argBar;
                michal = entity.isEditingProp;
                entity = null;
                if(!(michal !== zuuluu)) { _fun00016_ip = 34; continue _fun00015 }
 24:
                michal = {};
                michal['isEditingProp'] = zuuluu;
                entity = michal;
 34:
                return entity;
            }
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    verify = option.bind(entity)(verify);
    var _closure1_slot24 = verify;
    option = {};
    offset = new Array(0);
    option['roles'] = offset;
    verify['defaultProps'] = option;
    option = report.PureComponent;
    report = function(argFoo) {
        tangon = function(argFoo) { // Original name: GuildSettingsModalMemberEdit
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                oscard = this;
                yankee = 0;
                golfie = copyRestArgs(yankee);
                zuuluu = _closure1_slot4;
                report = _closure2_slot0;
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(oscard, report);
                zuuluu = _closure1_slot26;
                entity = new Array(0);
                yankee = entity;
                offset = golfie;
                verify = 0;
                golfie = arraySpread(yankee, offset, verify);
                entity = zuuluu.bind(tangon)(oscard, report, entity);
                var _closure3_slot0 = entity;
                zuuluu = {};
                report = entity.props;
                report = report.member;
                oscard = null;
                oscard = oscard == report;
                if(oscard) { _fun00018_ip = 92; continue _fun00017 }
 86:
                tangon = report.nick;
 92:
                zuuluu['nick'] = tangon;
                entity['state'] = zuuluu;
                zuuluu = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.setState;
                    entity = {};
                    tangon = argFoo;
                    entity['nick'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleChangeNickname'] = zuuluu;
                zuuluu = function() {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        michal = _closure3_slot0;
                        michal = michal.state;
                        michal = michal.nick;
                        report = null;
                        if(!(report != michal)) { _fun00020_ip = 155; continue _fun00019 }
 27:
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        michal = 21;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = tangon.changeNickname;
                        oscard = _closure3_slot0;
                        michal = oscard.props;
                        michal = michal.guild;
                        michal = michal.id;
                        golfie = oscard.props;
                        golfie = golfie.currentUser;
                        golfie = golfie.id;
                        oscard = oscard.props;
                        oscard = oscard.user;
                        oscard = oscard.id;
                        report = null;
                        if(!(golfie !== oscard)) { _fun00020_ip = 133; continue _fun00019 }
 114:
                        oscard = _closure3_slot0;
                        oscard = oscard.props;
                        oscard = oscard.user;
                        report = oscard.id;
 133:
                        entity = _closure3_slot0;
                        entity = entity.state;
                        entity = entity.nick;
                        entity = zuuluu.bind(tangon)(michal, report, entity);
 155:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleSaveNickname'] = zuuluu;
                zuuluu = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 21;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.startEditingRoles;
                    michal = _closure3_slot0;
                    zuuluu = michal.props;
                    zuuluu = zuuluu.guild;
                    zuuluu = zuuluu.id;
                    michal = michal.props;
                    michal = michal.user;
                    michal = michal.id;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                entity['handleStartEditingRoles'] = zuuluu;
                zuuluu = function(argFoo, argBar) {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 21;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.toggleRole;
                    zuuluu = argFoo;
                    michal = argBar;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                entity['handleToggleRole'] = zuuluu;
                zuuluu = function() {
                    entity = _closure3_slot0;
                    entity = entity.props;
                    oscard = entity.guild;
                    report = entity.user;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 22;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.openDisableCommunication;
                    michal = {};
                    oscard = oscard.id;
                    michal['guildId'] = oscard;
                    report = report.id;
                    michal['userId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['handleSetCommunicationDisabled'] = zuuluu;
                zuuluu = function() {
                    entity = _closure3_slot0;
                    entity = entity.props;
                    oscard = entity.guild;
                    report = entity.user;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 22;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.openEnableCommunication;
                    michal = {};
                    oscard = oscard.id;
                    michal['guildId'] = oscard;
                    report = report.id;
                    michal['userId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['handleClearCommunicationDisabled'] = zuuluu;
                zuuluu = function() {
                    entity = _closure3_slot0;
                    entity = entity.props;
                    oscard = entity.user;
                    report = entity.handleSuccessfulRemoval;
                    tangon = entity.navigation;
                    zuuluu = tangon.push;
                    entity = _closure1_slot19;
                    michal = entity.MEMBER_KICK;
                    entity = {};
                    oscard = oscard.id;
                    entity['userId'] = oscard;
                    entity['onKick'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleKick'] = zuuluu;
                zuuluu = function() {
                    entity = _closure3_slot0;
                    entity = entity.props;
                    oscard = entity.user;
                    report = entity.handleSuccessfulRemoval;
                    tangon = entity.navigation;
                    zuuluu = tangon.push;
                    entity = _closure1_slot19;
                    michal = entity.MEMBER_BAN;
                    entity = {};
                    oscard = oscard.id;
                    entity['userId'] = oscard;
                    entity['onBan'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleBan'] = zuuluu;
                zuuluu = function() {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        entity = _closure3_slot0;
                        entity = entity.props;
                        report = entity.guild;
                        tangon = entity.user;
                        zuuluu = report.hasFeature;
                        michal = _closure1_slot18;
                        michal = michal.VERIFIED;
                        michal = zuuluu.bind(report)(michal);
                        if(michal) { _fun00022_ip = 109; continue _fun00021 }
 49:
                        zuuluu = report.hasFeature;
                        michal = _closure1_slot18;
                        michal = michal.PARTNERED;
                        michal = zuuluu.bind(report)(michal);
                        if(michal) { _fun00022_ip = 109; continue _fun00021 }
 73:
                        oscard = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        michal = 24;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        zuuluu = oscard.bind(michal)(zuuluu);
                        michal = zuuluu.open;
                        michal = michal.bind(zuuluu)(report, tangon);
                        _fun00022_ip = 141; continue _fun00021;
 109:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 23;
                        michal = michal[entity];
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        entity = michal.transferOwnershipProtected;
                        entity = entity.bind(michal)();
 141:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleTransferOwnership'] = zuuluu;
                zuuluu = function() {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        michal = _closure3_slot0;
                        michal = michal.props;
                        zuuluu = michal.editRoles;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00024_ip = 107; continue _fun00023 }
 24:
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        michal = 21;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        report = tangon.bind(michal)(zuuluu);
                        tangon = report.updateMemberRoles;
                        entity = _closure3_slot0;
                        michal = entity.props;
                        michal = michal.guild;
                        zuuluu = michal.id;
                        michal = entity.props;
                        michal = michal.user;
                        michal = michal.id;
                        entity = entity.props;
                        entity = entity.editRoles;
                        entity = tangon.bind(report)(zuuluu, michal, entity);
 107:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleSaveMemberRoles'] = zuuluu;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 21;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.stopEditingRoles;
                    michal = michal.bind(zuuluu)();
                    return entity;
                };
                entity['handleCancelEditMemberRoles'] = michal;
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
        entity = 'componentDidMount';
        report['key'] = entity;
        entity = function() { // Original name: value
            michal = this;
            entity = michal.updateNavigator;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'componentDidUpdate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = this;
            michal = zuuluu.updateNavigator;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'updateNavigator';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                michal = argFoo;
                entity = this;
                var _closure3_slot0 = entity;
                entity = entity.props;
                report = entity.submitting;
                oscard = entity.isEditing;
                zuuluu = entity.navigation;
                offset = entity.onClose;
                golfie = null;
                entity = golfie != michal;
                if(!entity) { _fun00026_ip = 60; continue _fun00025 }
 50:
                option = michal.submitting;
                entity = report === option;
 60:
                if(!entity) { _fun00026_ip = 73; continue _fun00025 }
 63:
                option = michal.isEditing;
                entity = oscard === option;
 73:
                if(!entity) { _fun00026_ip = 86; continue _fun00025 }
 76:
                michal = michal.onClose;
                entity = offset === michal;
 86:
                if(entity) { _fun00026_ip = 207; continue _fun00025 }
 89:
                michal = zuuluu.setOptions;
                entity = {};
                if(report) { _fun00026_ip = 157; continue _fun00025 }
 100:
                if(oscard) { _fun00026_ip = 150; continue _fun00025 }
 103:
                option = golfie != offset;
                yankee = undefined;
                golfie = undefined;
                if(!option) { _fun00026_ip = 148; continue _fun00025 }
 114:
                verify = _closure1_slot0;
                romeon = _closure1_slot3;
                option = 26;
                option = romeon[option];
                verify = verify.bind(yankee)(option);
                option = verify.getHeaderCloseButton;
                golfie = option.bind(verify)(offset);
 148:
                _fun00026_ip = 155; continue _fun00025;
 150:
                golfie = function() {
                    tangon = _closure1_slot20;
                    option = _closure1_slot0;
                    verify = _closure1_slot3;
                    entity = 25;
                    entity = verify[entity];
                    zuuluu = undefined;
                    entity = option.bind(zuuluu)(entity);
                    michal = entity.HeaderActionButton;
                    entity = {};
                    report = 20;
                    oscard = verify[report];
                    oscard = option.bind(zuuluu)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    report = verify[report];
                    report = option.bind(zuuluu)(report);
                    report = report.t;
                    report = report.ETE/oK;
                    report = oscard.bind(golfie)(report);
                    entity['text'] = report;
                    report = _closure3_slot0;
                    report = report.handleCancelEditMemberRoles;
                    entity['onPress'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
 155:
                _fun00026_ip = 162; continue _fun00025;
 157:
                golfie = function() {
                    entity = null;
                    return entity;
                };
 162:
                entity['headerLeft'] = golfie;
                if(report) { _fun00026_ip = 182; continue _fun00025 }
 170:
                report = undefined;
                if(!oscard) { _fun00026_ip = 180; continue _fun00025 }
 175:
                report = function() {
                    tangon = _closure1_slot20;
                    option = _closure1_slot0;
                    verify = _closure1_slot3;
                    entity = 25;
                    entity = verify[entity];
                    zuuluu = undefined;
                    entity = option.bind(zuuluu)(entity);
                    michal = entity.HeaderActionButton;
                    entity = {};
                    report = 20;
                    oscard = verify[report];
                    oscard = option.bind(zuuluu)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    report = verify[report];
                    report = option.bind(zuuluu)(report);
                    report = report.t;
                    report = report.R3BPHx;
                    report = oscard.bind(golfie)(report);
                    entity['text'] = report;
                    report = _closure3_slot0;
                    report = report.handleSaveMemberRoles;
                    entity['onPress'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
 180:
                _fun00026_ip = 187; continue _fun00025;
 182:
                report = function() {
                    tangon = _closure1_slot20;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    entity = 26;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.HeaderSubmittingIndicator;
                    entity = {};
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
 187:
                entity['headerRight'] = report;
                tangon = function() { // Original name: headerTitle
                    tangon = _closure1_slot20;
                    oscard = _closure1_slot0;
                    yankee = _closure1_slot3;
                    entity = 26;
                    entity = yankee[entity];
                    zuuluu = undefined;
                    entity = oscard.bind(zuuluu)(entity);
                    michal = entity.NavigatorHeader;
                    entity = {};
                    report = 20;
                    golfie = yankee[report];
                    golfie = oscard.bind(zuuluu)(golfie);
                    option = golfie.intl;
                    golfie = option.formatToPlainString;
                    report = yankee[report];
                    report = oscard.bind(zuuluu)(report);
                    report = report.t;
                    oscard = report.v7odxs;
                    report = {};
                    offset = _closure1_slot1;
                    verify = 27;
                    verify = yankee[verify];
                    yankee = offset.bind(zuuluu)(verify);
                    offset = yankee.getName;
                    verify = _closure3_slot0;
                    verify = verify.props;
                    verify = verify.user;
                    verify = offset.bind(yankee)(verify);
                    report['user'] = verify;
                    report = golfie.bind(option)(oscard, report);
                    entity['title'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
                entity['headerTitle'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 207:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'render';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                kiloes = this;
                michal = _closure1_slot23;
                entity = kiloes.context;
                report = undefined;
                config = michal.bind(report)(entity);
                entity = kiloes.state;
                variable37 = entity.nick;
                entity = kiloes.props;
                ctrled = entity.user;
                sierra = entity.guild;
                status = entity.guildRoles;
                target = entity.member;
                papara = entity.editRoles;
                whisks = entity.nicknameError;
                cntext = entity.currentUser;
                record = entity.isEditing;
                update = entity.canChangeNick;
                echoed = entity.canManageRoles;
                sizing = entity.canKick;
                option = entity.canBan;
                output = entity.canDisableCommunication;
                entity = null;
                if(!(entity != target)) { _fun00028_ip = 1769; continue _fun00027 }
 123:
                tangon = _closure1_slot21;
                zuuluu = _closure1_slot10;
                michal = {};
                oscard = config.rowLabel;
                michal['style'] = oscard;
                verify = _closure1_slot20;
                golfie = _closure1_slot0;
                offset = _closure1_slot3;
                oscard = 28;
                oscard = offset[oscard];
                oscard = golfie.bind(report)(oscard);
                golfie = oscard.Text;
                oscard = {};
                yankee = 'text-sm/medium';
                oscard['variant'] = yankee;
                yankee = _closure1_slot1;
                vacuum = 27;
                offset = offset[vacuum];
                yankee = yankee.bind(report)(offset);
                offset = yankee.getUserTag;
                offset = offset.bind(yankee)(ctrled);
                oscard['children'] = offset;
                golfie = verify.bind(report)(golfie, oscard);
                oscard = new Array(2);
                oscard[0] = golfie;
                verify = ctrled.bot;
                golfie = null;
                if(!verify) { _fun00028_ip = 285; continue _fun00027 }
 238:
                yankee = _closure1_slot20;
                offset = _closure1_slot1;
                romeon = _closure1_slot3;
                verify = 29;
                verify = romeon[verify];
                offset = offset.bind(report)(verify);
                verify = {};
                romeon = ctrled.isVerifiedBot;
                romeon = romeon.bind(ctrled)();
                verify['verified'] = romeon;
                golfie = yankee.bind(report)(offset, verify);
 285:
                oscard[1] = golfie;
                michal['children'] = oscard;
                sequen = tangon.bind(report)(zuuluu, michal);
                michal = entity != target;
                result = null;
                if(!michal) { _fun00028_ip = 596; continue _fun00027 }
 311:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot3;
                michal = 30;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.isMemberCommunicationDisabled;
                michal = michal.bind(zuuluu)(target);
                oscard = _closure1_slot20;
                romeon = _closure1_slot0;
                limora = _closure1_slot3;
                zuuluu = 19;
                zuuluu = limora[zuuluu];
                zuuluu = romeon.bind(report)(zuuluu);
                tangon = zuuluu.FormSection;
                zuuluu = {};
                offset = _closure1_slot20;
                golfie = 31;
                golfie = limora[golfie];
                golfie = romeon.bind(report)(golfie);
                verify = golfie.TableRow;
                golfie = {};
                yankee = 'danger';
                golfie['variant'] = yankee;
                yankee = 20;
                foxtra = limora[yankee];
                foxtra = romeon.bind(report)(foxtra);
                backup = foxtra.intl;
                foxtra = backup.formatToPlainString;
                yankee = limora[yankee];
                yankee = romeon.bind(report)(yankee);
                yankee = yankee.t;
                if(michal) { _fun00028_ip = 519; continue _fun00027 }
 445:
                romeon = yankee.FN7NIS;
                michal = {};
                quebec = _closure1_slot1;
                equals = limora[vacuum];
                quebec = quebec.bind(report)(equals);
                equals = quebec.getName;
                equals = equals.bind(quebec)(ctrled);
                michal['user'] = equals;
                michal = foxtra.bind(backup)(romeon, michal);
                golfie['label'] = michal;
                michal = kiloes.handleSetCommunicationDisabled;
                golfie['onPress'] = michal;
                michal = offset.bind(report)(verify, golfie);
                zuuluu['children'] = michal;
                michal = oscard.bind(report)(tangon, zuuluu);
                _fun00028_ip = 593; continue _fun00027;
 519:
                romeon = yankee.RuL6o6;
                yankee = {};
                equals = _closure1_slot1;
                limora = limora[vacuum];
                equals = equals.bind(report)(limora);
                limora = equals.getName;
                limora = limora.bind(equals)(ctrled);
                yankee['user'] = limora;
                yankee = foxtra.bind(backup)(romeon, yankee);
                golfie['label'] = yankee;
                yankee = kiloes.handleClearCommunicationDisabled;
                golfie['onPress'] = yankee;
                golfie = offset.bind(report)(verify, golfie);
                zuuluu['children'] = golfie;
                michal = oscard.bind(report)(tangon, zuuluu);
 593:
                result = michal;
 596:
                zuuluu = ctrled.id;
                michal = sierra.ownerId;
                michal = zuuluu !== michal;
                if(!michal) { _fun00028_ip = 625; continue _fun00027 }
 614:
                zuuluu = sierra.isOwnerWithRequiredMfaLevel;
                michal = zuuluu.bind(sierra)(cntext);
 625:
                if(!michal) { _fun00028_ip = 637; continue _fun00027 }
 628:
                zuuluu = ctrled.bot;
                michal = !zuuluu;
 637:
                golfie = undefined;
                if(!michal) { _fun00028_ip = 786; continue _fun00027 }
 645:
                tangon = _closure1_slot20;
                backup = _closure1_slot0;
                limora = _closure1_slot3;
                michal = 19;
                michal = limora[michal];
                michal = backup.bind(report)(michal);
                zuuluu = michal.FormSection;
                michal = {};
                offset = _closure1_slot20;
                oscard = 31;
                oscard = limora[oscard];
                oscard = backup.bind(report)(oscard);
                verify = oscard.TableRow;
                oscard = {};
                yankee = 'danger';
                oscard['variant'] = yankee;
                yankee = 20;
                romeon = limora[yankee];
                romeon = backup.bind(report)(romeon);
                foxtra = romeon.intl;
                romeon = foxtra.string;
                yankee = limora[yankee];
                yankee = backup.bind(report)(yankee);
                yankee = yankee.t;
                yankee = yankee.Z5s7PD;
                yankee = romeon.bind(foxtra)(yankee);
                oscard['label'] = yankee;
                yankee = kiloes.handleTransferOwnership;
                oscard['onPress'] = yankee;
                oscard = offset.bind(report)(verify, oscard);
                michal['children'] = oscard;
                golfie = tangon.bind(report)(zuuluu, michal);
 786:
                tangon = _closure1_slot21;
                foxtra = _closure1_slot0;
                limora = _closure1_slot3;
                verify = 19;
                michal = limora[verify];
                michal = foxtra.bind(report)(michal);
                zuuluu = michal.Form;
                michal = {};
                oscard = {};
                offset = 1;
                oscard['flex'] = offset;
                michal['style'] = oscard;
                oscard = kiloes.props;
                oscard = oscard.contentContainerStyle;
                michal['contentContainerStyle'] = oscard;
                yankee = _closure1_slot20;
                oscard = limora[verify];
                oscard = foxtra.bind(report)(oscard);
                offset = oscard.FormSection;
                oscard = {};
                backup = _closure1_slot20;
                romeon = limora[verify];
                romeon = foxtra.bind(report)(romeon);
                foxtra = romeon.FormRow;
                romeon = {};
                variable36 = _closure1_slot20;
                equals = _closure1_slot1;
                quebec = 32;
                limora = limora[quebec];
                equals = equals.bind(report)(limora);
                limora = {};
                variable38 = config.avatar;
                limora['style'] = variable38;
                limora['user'] = ctrled;
                variable38 = sierra.id;
                limora['guildId'] = variable38;
                limora = variable36.bind(report)(equals, limora);
                romeon['leading'] = limora;
                config = config.userInfo;
                romeon['DEPRECATED_style'] = config;
                romeon['label'] = sequen;
                romeon = backup.bind(report)(foxtra, romeon);
                oscard['children'] = romeon;
                offset = yankee.bind(report)(offset, oscard);
                oscard = new Array(4);
                oscard[0] = offset;
                offset = ctrled.isClyde;
                offset = offset.bind(ctrled)();
                offset = !offset;
                if(!offset) { _fun00028_ip = 1568; continue _fun00027 }
 1003:
                foxtra = _closure1_slot21;
                romeon = _closure1_slot22;
                yankee = {};
                if(update) { _fun00028_ip = 1030; continue _fun00027 }
 1016:
                sequen = cntext.id;
                backup = ctrled.id;
                update = sequen === backup;
 1030:
                if(!update) { _fun00028_ip = 1268; continue _fun00027 }
 1036:
                config = _closure1_slot20;
                variable38 = _closure1_slot0;
                limora = _closure1_slot3;
                backup = limora[verify];
                backup = variable38.bind(report)(backup);
                sequen = backup.FormSection;
                backup = {};
                variable40 = 20;
                equals = limora[variable40];
                equals = variable38.bind(report)(equals);
                variable36 = equals.intl;
                equals = variable36.string;
                limora = limora[variable40];
                limora = variable38.bind(report)(limora);
                limora = limora.t;
                limora = limora.621LJC;
                limora = equals.bind(variable36)(limora);
                backup['title'] = limora;
                equals = entity != whisks;
                limora = undefined;
                if(!equals) { _fun00028_ip = 1130; continue _fun00027 }
 1127:
                limora = whisks;
 1130:
                backup['error'] = limora;
                equals = _closure1_slot20;
                variable39 = _closure1_slot0;
                variable36 = _closure1_slot3;
                limora = variable36[verify];
                limora = variable39.bind(report)(limora);
                whisks = limora.FormInput;
                limora = {};
                limora['value'] = variable37;
                variable37 = false;
                limora['showTopContainer'] = variable37;
                variable37 = variable36[variable40];
                variable37 = variable39.bind(report)(variable37);
                variable38 = variable37.intl;
                variable37 = variable38.string;
                variable36 = variable36[variable40];
                variable36 = variable39.bind(report)(variable36);
                variable36 = variable36.t;
                variable36 = variable36.h7UKXl;
                variable36 = variable37.bind(variable38)(variable36);
                limora['placeholder'] = variable36;
                variable36 = kiloes.handleChangeNickname;
                limora['onChange'] = variable36;
                variable36 = kiloes.handleSaveNickname;
                limora['onEndEditing'] = variable36;
                limora['maxLength'] = quebec;
                limora = equals.bind(report)(whisks, limora);
                backup['children'] = limora;
                update = config.bind(report)(sequen, backup);
 1268:
                backup = new Array(4);
                backup[0] = update;
                if(!echoed) { _fun00028_ip = 1363; continue _fun00027 }
 1279:
                config = _closure1_slot20;
                sequen = _closure1_slot24;
                update = {};
                update['guild'] = sierra;
                update['guildRoles'] = status;
                if(record) { _fun00028_ip = 1307; continue _fun00027 }
 1301:
                papara = target.roles;
 1307:
                if(!(entity == papara)) { _fun00028_ip = 1315; continue _fun00027 }
 1311:
                papara = new Array(0);
 1315:
                update['roles'] = papara;
                cntext = cntext.id;
                update['currentUserId'] = cntext;
                update['isEditing'] = record;
                record = kiloes.handleToggleRole;
                update['onToggleRole'] = record;
                record = kiloes.handleStartEditingRoles;
                update['onStartEditing'] = record;
                echoed = config.bind(report)(sequen, update);
 1363:
                backup[1] = echoed;
                if(!output) { _fun00028_ip = 1373; continue _fun00027 }
 1370:
                output = result;
 1373:
                backup[2] = output;
                if(!sizing) { _fun00028_ip = 1554; continue _fun00027 }
 1383:
                echoed = _closure1_slot20;
                cntext = _closure1_slot0;
                status = _closure1_slot3;
                output = status[verify];
                output = cntext.bind(report)(output);
                result = output.FormSection;
                output = {};
                config = _closure1_slot20;
                update = 31;
                update = status[update];
                update = cntext.bind(report)(update);
                sequen = update.TableRow;
                update = {};
                record = 'danger';
                update['variant'] = record;
                record = 20;
                papara = status[record];
                papara = cntext.bind(report)(papara);
                target = papara.intl;
                papara = target.formatToPlainString;
                record = status[record];
                record = cntext.bind(report)(record);
                record = record.t;
                cntext = record.yOiJHB;
                record = {};
                sierra = _closure1_slot1;
                status = status[vacuum];
                sierra = sierra.bind(report)(status);
                status = sierra.getName;
                status = status.bind(sierra)(ctrled);
                record['user'] = status;
                record = papara.bind(target)(cntext, record);
                update['label'] = record;
                record = kiloes.handleKick;
                update['onPress'] = record;
                update = config.bind(report)(sequen, update);
                output['children'] = update;
                sizing = echoed.bind(report)(result, output);
 1554:
                backup[3] = sizing;
                yankee['children'] = backup;
                offset = foxtra.bind(report)(romeon, yankee);
 1568:
                oscard[1] = offset;
                if(!option) { _fun00028_ip = 1749; continue _fun00027 }
 1578:
                yankee = _closure1_slot20;
                output = _closure1_slot0;
                update = _closure1_slot3;
                verify = update[verify];
                verify = output.bind(report)(verify);
                offset = verify.FormSection;
                verify = {};
                backup = _closure1_slot20;
                romeon = 31;
                romeon = update[romeon];
                romeon = output.bind(report)(romeon);
                foxtra = romeon.TableRow;
                romeon = {};
                sizing = 'danger';
                romeon['variant'] = sizing;
                sizing = 20;
                result = update[sizing];
                result = output.bind(report)(result);
                echoed = result.intl;
                result = echoed.formatToPlainString;
                sizing = update[sizing];
                sizing = output.bind(report)(sizing);
                sizing = sizing.t;
                output = sizing.TuAZub;
                sizing = {};
                source = _closure1_slot1;
                update = update[vacuum];
                source = source.bind(report)(update);
                update = source.getName;
                update = update.bind(source)(ctrled);
                sizing['user'] = update;
                sizing = result.bind(echoed)(output, sizing);
                romeon['label'] = sizing;
                kiloes = kiloes.handleBan;
                romeon['onPress'] = kiloes;
                romeon = backup.bind(report)(foxtra, romeon);
                verify['children'] = romeon;
                option = yankee.bind(report)(offset, verify);
 1749:
                oscard[2] = option;
                oscard[3] = golfie;
                michal['children'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return michal;
 1769:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = report.bind(entity)(option);
    var _closure1_slot25 = option;
    report = 33;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ThemeContext;
    option['contextType'] = report;
    report = 44;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: MemberModalEdit
        michal = argFoo;
        zuuluu = michal.guildId;
        golfie = michal.userId;
        yankee = michal.onClose;
        var _closure2_slot0 = yankee;
        offset = michal.onRemove;
        var _closure2_slot1 = offset;
        oscard = _closure1_slot1;
        option = _closure1_slot3;
        michal = 42;
        michal = option[michal];
        tangon = undefined;
        michal = oscard.bind(tangon)(michal);
        verify = michal.bind(tangon)(zuuluu);
        var _closure2_slot2 = verify;
        oscard = _closure1_slot9;
        zuuluu = oscard.useMemo;
        michal = new Array(3);
        michal[0] = yankee;
        michal[1] = offset;
        michal[2] = verify;
        entity = function() {
            report = _closure2_slot2;
            tangon = _closure2_slot0;
            zuuluu = _closure2_slot1;
            michal = function(argFoo, argBar, argBaz) { // Original name: getScreens
                entity = argFoo;
                var _closure4_slot0 = entity;
                entity = argBar;
                var _closure4_slot1 = entity;
                entity = argBaz;
                var _closure4_slot2 = entity;
                entity = {};
                michal = _closure1_slot19;
                report = michal.MEMBER_EDIT;
                zuuluu = {};
                oscard = function(argFoo) { // Original name: render
                    tangon = _closure1_slot20;
                    zuuluu = _closure1_slot28;
                    michal = {};
                    golfie = argFoo;
                    option = michal;
                    entity = copyDataProperties(option, golfie);
                    oscard = _closure4_slot1;
                    report = 'onClose';
                    michal[report] = oscard;
                    report = _closure4_slot0;
                    entity = 'guildId';
                    michal[entity] = report;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                zuuluu['render'] = oscard;
                entity[report] = zuuluu;
                report = michal.MEMBER_KICK;
                zuuluu = {};
                oscard = function() { // Original name: headerTitle
                    entity = null;
                    return entity;
                };
                zuuluu['headerTitle'] = oscard;
                oscard = function(argFoo) { // Original name: render
                    tangon = _closure1_slot20;
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    entity = 40;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    option = argFoo;
                    verify = entity;
                    report = copyDataProperties(verify, option);
                    golfie = _closure4_slot0;
                    oscard = 'guildId';
                    entity[oscard] = golfie;
                    oscard = _closure4_slot2;
                    report = 'onKick';
                    entity[report] = oscard;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
                zuuluu['render'] = oscard;
                entity[report] = zuuluu;
                zuuluu = michal.MEMBER_BAN;
                michal = {};
                report = function() { // Original name: headerTitle
                    entity = null;
                    return entity;
                };
                michal['headerTitle'] = report;
                tangon = function(argFoo) { // Original name: render
                    tangon = _closure1_slot20;
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    entity = 41;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    option = argFoo;
                    verify = entity;
                    report = copyDataProperties(verify, option);
                    golfie = _closure4_slot0;
                    oscard = 'guildId';
                    entity[oscard] = golfie;
                    oscard = _closure4_slot2;
                    report = 'onBan';
                    entity[report] = oscard;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
                michal['render'] = tangon;
                entity[zuuluu] = michal;
                return entity;
            };
            entity = undefined;
            entity = michal.bind(entity)(report, tangon, zuuluu);
            return entity;
        };
        oscard = zuuluu.bind(oscard)(entity, michal);
        zuuluu = _closure1_slot20;
        michal = _closure1_slot0;
        entity = 43;
        entity = option[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.Navigator;
        entity = {};
        entity['screens'] = oscard;
        report = _closure1_slot19;
        oscard = report.MEMBER_EDIT;
        entity['initialRouteName'] = oscard;
        oscard = {};
        report = report.MEMBER_EDIT;
        oscard['name'] = report;
        report = {};
        report['userId'] = golfie;
        oscard['params'] = report;
        report = new Array(1);
        report[0] = oscard;
        entity['initialRouteStack'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['GuildSettingsModalMemberEditScene'] = michal;
    return entity;
})();