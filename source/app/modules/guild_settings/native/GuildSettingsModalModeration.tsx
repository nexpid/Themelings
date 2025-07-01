// app/modules/guild_settings/native/GuildSettingsModalModeration.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
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
            _closure1_slot21 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot8 = tangon;
    golfie = 6;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot9 = golfie;
    golfie = 7;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot10 = golfie;
    golfie = 8;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.GuildFeatures;
    var _closure1_slot11 = option;
    option = golfie.HelpdeskArticles;
    var _closure1_slot12 = option;
    option = golfie.Permissions;
    var _closure1_slot13 = option;
    golfie = golfie.GuildNSFWContentLevel;
    var _closure1_slot14 = golfie;
    golfie = 9;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.TitleStyleType;
    var _closure1_slot15 = golfie;
    golfie = 10;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.jsx;
    var _closure1_slot16 = option;
    option = golfie.jsxs;
    var _closure1_slot17 = option;
    golfie = golfie.Fragment;
    var _closure1_slot18 = golfie;
    golfie = function(argFoo) { // Original name: GuildSettingsOwnerConfiguredContentLevel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.guild;
            option = michal.guildId;
            report = entity.nsfwLevel;
            zuuluu = null;
            if(!(zuuluu == report)) { _fun00004_ip = 38; continue _fun00003 }
 25:
            michal = _closure1_slot14;
            report = michal.DEFAULT;
 38:
            yankee = entity.ownerConfiguredContentLevel;
            if(!(zuuluu == yankee)) { _fun00004_ip = 61; continue _fun00003 }
 48:
            entity = _closure1_slot14;
            yankee = entity.DEFAULT;
 61:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 11;
            entity = golfie[entity];
            oscard = undefined;
            michal = tangon.bind(oscard)(entity);
            entity = michal.useUserIsTeen;
            michal = entity.bind(michal)();
            entity = 12;
            entity = golfie[entity];
            golfie = tangon.bind(oscard)(entity);
            tangon = golfie.useIsGuildContentLevelSettingEnabled;
            entity = {};
            entity['guildId'] = option;
            option = 'guild-settings-modal-moderation';
            entity['location'] = option;
            tangon = tangon.bind(golfie)(entity);
            entity = _closure1_slot14;
            entity = entity.AGE_RESTRICTED;
            option = report === entity;
            if(!option) { _fun00004_ip = 166; continue _fun00003 }
 152:
            entity = _closure1_slot14;
            entity = entity.AGE_RESTRICTED;
            option = yankee !== entity;
 166:
            verify = _closure1_slot8;
            golfie = verify.useCallback;
            report = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.updateGuild;
                    michal = {};
                    oscard = _closure1_slot14;
                    report = argFoo;
                    if(report) { _fun00006_ip = 51; continue _fun00005 }
 43:
                    report = oscard.DEFAULT;
                    _fun00006_ip = 57; continue _fun00005;
 51:
                    report = oscard.AGE_RESTRICTED;
 57:
                    michal['ownerConfiguredContentLevel'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            entity = new Array(0);
            verify = golfie.bind(verify)(report, entity);
            entity = null;
            if(!tangon) { _fun00004_ip = 542; continue _fun00003 }
 202:
            entity = null;
            if(michal) { _fun00004_ip = 542; continue _fun00003 }
 210:
            report = _closure1_slot16;
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            michal = 14;
            zuuluu = sizing[michal];
            zuuluu = kiloes.bind(oscard)(zuuluu);
            tangon = zuuluu.FormSection;
            zuuluu = {};
            romeon = 15;
            golfie = sizing[romeon];
            golfie = kiloes.bind(oscard)(golfie);
            backup = golfie.intl;
            foxtra = backup.string;
            golfie = sizing[romeon];
            golfie = kiloes.bind(oscard)(golfie);
            golfie = golfie.t;
            golfie = golfie.YJlvBA;
            golfie = foxtra.bind(backup)(golfie);
            zuuluu['title'] = golfie;
            golfie = sizing[michal];
            golfie = kiloes.bind(oscard)(golfie);
            backup = golfie.FormHint;
            foxtra = {};
            golfie = sizing[romeon];
            golfie = kiloes.bind(oscard)(golfie);
            echoed = golfie.intl;
            result = echoed.format;
            golfie = sizing[romeon];
            golfie = kiloes.bind(oscard)(golfie);
            golfie = golfie.t;
            output = golfie.iyQQ6+;
            golfie = {};
            source = _closure1_slot1;
            update = 16;
            update = sizing[update];
            ctrled = source.bind(oscard)(update);
            source = ctrled.getArticleURL;
            update = _closure1_slot12;
            update = update.NSFW_SERVER_AGE_RESTRICTION;
            update = source.bind(ctrled)(update);
            golfie['helpArticleLink'] = update;
            golfie = result.bind(echoed)(output, golfie);
            foxtra['children'] = golfie;
            golfie = 'filter-hint';
            golfie = report.bind(oscard)(backup, foxtra, golfie);
            zuuluu['hint'] = golfie;
            michal = sizing[michal];
            michal = kiloes.bind(oscard)(michal);
            golfie = michal.FormSwitchRow;
            michal = {};
            foxtra = sizing[romeon];
            foxtra = kiloes.bind(oscard)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            romeon = sizing[romeon];
            romeon = kiloes.bind(oscard)(romeon);
            romeon = romeon.t;
            romeon = romeon.N9xEJC;
            romeon = foxtra.bind(backup)(romeon);
            michal['label'] = romeon;
            offset = _closure1_slot14;
            offset = offset.AGE_RESTRICTED;
            offset = yankee === offset;
            michal['value'] = offset;
            michal['onValueChange'] = verify;
            michal['disabled'] = option;
            michal = report.bind(oscard)(golfie, michal);
            zuuluu['children'] = michal;
            michal = 'filter-section';
            entity = report.bind(oscard)(tangon, zuuluu, michal);
 542:
            return entity;
        }
    };
    var _closure1_slot19 = golfie;
    golfie = tangon.PureComponent;
    tangon = function(argFoo) {
        tangon = function(argFoo) { // Original name: GuildSettingsModalModeration
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                option = _closure1_slot3;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                option = option.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot5;
                entity = _closure1_slot21;
                entity = entity.bind(tangon)();
                if(entity) { _fun00008_ip = 86; continue _fun00007 }
 73:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00008_ip = 120; continue _fun00007;
 86:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 120:
                entity = zuuluu.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                michal = function() {
                    entity = _closure3_slot0;
                    entity = entity.props;
                    oscard = entity.guild;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.saveGuild;
                    zuuluu = oscard.id;
                    michal = {};
                    golfie = oscard.verificationLevel;
                    michal['verificationLevel'] = golfie;
                    golfie = oscard.explicitContentFilter;
                    michal['explicitContentFilter'] = golfie;
                    oscard = oscard.ownerConfiguredContentLevel;
                    michal['ownerConfiguredContentLevel'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                entity['handleSaveChanges'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'componentDidMount';
        report['key'] = entity;
        entity = function() { // Original name: value
            michal = this;
            entity = michal.updateNavigation;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(9);
        entity[0] = report;
        report = {};
        golfie = 'componentDidUpdate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = this;
            michal = zuuluu.updateNavigation;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'updateNavigation';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = argFoo;
                entity = this;
                var _closure3_slot0 = entity;
                entity = entity.props;
                golfie = entity.submitting;
                oscard = entity.hasChanges;
                zuuluu = entity.navigation;
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00010_ip = 54; continue _fun00009 }
 44:
                tangon = michal.submitting;
                entity = golfie === tangon;
 54:
                if(!entity) { _fun00010_ip = 67; continue _fun00009 }
 57:
                michal = michal.hasChanges;
                entity = oscard === michal;
 67:
                if(entity) { _fun00010_ip = 129; continue _fun00009 }
 70:
                michal = zuuluu.setOptions;
                entity = {};
                option = undefined;
                if(!golfie) { _fun00010_ip = 90; continue _fun00009 }
 83:
                option = function() {
                    entity = null;
                    return entity;
                };
 90:
                entity['headerLeft'] = option;
                if(golfie) { _fun00010_ip = 112; continue _fun00009 }
 98:
                tangon = undefined;
                if(!oscard) { _fun00010_ip = 110; continue _fun00009 }
 103:
                tangon = function() {
                    tangon = _closure1_slot16;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    entity = 18;
                    entity = verify[entity];
                    zuuluu = undefined;
                    entity = option.bind(zuuluu)(entity);
                    michal = entity.HeaderActionButton;
                    entity = {};
                    report = _closure3_slot0;
                    report = report.handleSaveChanges;
                    entity['onPress'] = report;
                    report = 15;
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
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
 110:
                _fun00010_ip = 119; continue _fun00009;
 112:
                tangon = function() {
                    tangon = _closure1_slot16;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 17;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.HeaderSubmittingIndicator;
                    entity = {};
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
 119:
                entity['headerRight'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 129:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'renderVerificationLevelSection';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            entity = entity.props;
            yankee = entity.guild;
            var _closure3_slot1 = yankee;
            entity = new Array(0);
            var _closure3_slot2 = entity;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 19;
            zuuluu = offset[zuuluu];
            report = undefined;
            oscard = verify.bind(report)(zuuluu);
            tangon = oscard.generateVerificationLevelOptions;
            option = yankee.hasFeature;
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.COMMUNITY;
            zuuluu = option.bind(yankee)(zuuluu);
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    sizing = entity.name;
                    option = entity.desc;
                    echoed = entity.color;
                    verify = entity.value;
                    var _closure4_slot0 = verify;
                    golfie = entity.disabled;
                    report = _closure3_slot2;
                    tangon = report.push;
                    foxtra = _closure1_slot16;
                    kiloes = _closure1_slot0;
                    backup = _closure1_slot2;
                    offset = 14;
                    yankee = backup[offset];
                    entity = undefined;
                    yankee = kiloes.bind(entity)(yankee);
                    romeon = yankee.FormRow;
                    yankee = {};
                    backup = backup[offset];
                    backup = kiloes.bind(entity)(backup);
                    backup = backup.FormRow;
                    kiloes = backup.Label;
                    backup = {};
                    output = null;
                    result = output != echoed;
                    if(!result) { _fun00012_ip = 125; continue _fun00011 }
 116:
                    result = {};
                    result['color'] = echoed;
                    output = result;
 125:
                    backup['style'] = output;
                    backup['text'] = sizing;
                    backup = foxtra.bind(entity)(kiloes, backup);
                    yankee['label'] = backup;
                    yankee['subLabel'] = option;
                    zuuluu = function() { // Original name: onPress
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.handleVerificationLevelChange;
                        entity = _closure4_slot0;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    yankee['onPress'] = zuuluu;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.props;
                    zuuluu = zuuluu.canManageGuild;
                    zuuluu = !zuuluu;
                    if(zuuluu) { _fun00012_ip = 183; continue _fun00011 }
 180:
                    zuuluu = golfie;
 183:
                    yankee['disabled'] = zuuluu;
                    zuuluu = 'radio';
                    yankee['accessibilityRole'] = zuuluu;
                    zuuluu = {};
                    backup = _closure3_slot1;
                    oscard = backup.verificationLevel;
                    oscard = verify === oscard;
                    zuuluu['selected'] = oscard;
                    yankee['accessibilityState'] = zuuluu;
                    option = _closure1_slot16;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = oscard[offset];
                    michal = golfie.bind(entity)(michal);
                    michal = michal.FormRow;
                    zuuluu = michal.Radio;
                    michal = {};
                    backup = backup.verificationLevel;
                    backup = verify === backup;
                    michal['selected'] = backup;
                    michal = option.bind(entity)(zuuluu, michal);
                    yankee['leading'] = michal;
                    michal = global;
                    zuuluu = michal.HermesInternal;
                    backup = zuuluu.concat;
                    zuuluu = 'level-';
                    zuuluu = backup.bind(zuuluu)(verify);
                    zuuluu = foxtra.bind(entity)(romeon, yankee, zuuluu);
                    oscard = oscard[offset];
                    oscard = golfie.bind(entity)(oscard);
                    golfie = oscard.FormDivider;
                    michal = michal.HermesInternal;
                    oscard = michal.concat;
                    michal = 'level-divider-';
                    oscard = oscard.bind(michal)(verify);
                    michal = {};
                    michal = option.bind(entity)(golfie, michal, oscard);
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            michal = entity.pop;
            michal = michal.bind(entity)();
            tangon = _closure1_slot16;
            oscard = 14;
            michal = offset[oscard];
            michal = verify.bind(report)(michal);
            zuuluu = michal.FormSection;
            michal = {};
            oscard = offset[oscard];
            oscard = verify.bind(report)(oscard);
            romeon = oscard.FormHint;
            yankee = {};
            oscard = 15;
            option = offset[oscard];
            option = verify.bind(report)(option);
            kiloes = option.intl;
            backup = kiloes.format;
            option = offset[oscard];
            option = verify.bind(report)(option);
            option = option.t;
            foxtra = option.iuRk2t;
            option = {};
            option = backup.bind(kiloes)(foxtra, option);
            yankee['children'] = option;
            option = 'level-hint';
            option = tangon.bind(report)(romeon, yankee, option);
            michal['hint'] = option;
            golfie = _closure1_slot15;
            golfie = golfie.ANDROID_NO_BORDER;
            michal['titleStyleType'] = golfie;
            golfie = offset[oscard];
            golfie = verify.bind(report)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(report)(oscard);
            oscard = oscard.t;
            oscard = oscard.DpRdYG;
            oscard = golfie.bind(option)(oscard);
            michal['title'] = oscard;
            michal['children'] = entity;
            entity = 'level-section';
            michal = tangon.bind(report)(zuuluu, michal, entity);
            entity = new Array(1);
            entity[0] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'renderExplicitContentFilter';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = this;
                var _closure3_slot0 = entity;
                entity = entity.props;
                yankee = entity.guild;
                var _closure3_slot1 = yankee;
                offset = entity.isGoreEnabled;
                entity = new Array(0);
                var _closure3_slot2 = entity;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                report = 19;
                oscard = michal[report];
                report = undefined;
                option = zuuluu.bind(report)(oscard);
                golfie = option.generateContentFilterOptions;
                verify = yankee.hasFeature;
                oscard = _closure1_slot11;
                oscard = oscard.COMMUNITY;
                oscard = verify.bind(yankee)(oscard);
                golfie = golfie.bind(option)(oscard);
                oscard = golfie.map;
                tangon = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = argFoo;
                        backup = entity.name;
                        option = entity.desc;
                        verify = entity.value;
                        var _closure4_slot0 = verify;
                        golfie = entity.disabled;
                        report = _closure3_slot2;
                        tangon = report.push;
                        foxtra = _closure1_slot16;
                        romeon = _closure1_slot0;
                        entity = _closure1_slot2;
                        offset = 14;
                        yankee = entity[offset];
                        entity = undefined;
                        yankee = romeon.bind(entity)(yankee);
                        romeon = yankee.FormRow;
                        yankee = {};
                        yankee['label'] = backup;
                        yankee['subLabel'] = option;
                        zuuluu = function() { // Original name: onPress
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.handleExplicitContentFilterChange;
                            entity = _closure4_slot0;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        yankee['onPress'] = zuuluu;
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.props;
                        zuuluu = zuuluu.canManageGuild;
                        zuuluu = !zuuluu;
                        if(zuuluu) { _fun00016_ip = 123; continue _fun00015 }
 120:
                        zuuluu = golfie;
 123:
                        yankee['disabled'] = zuuluu;
                        zuuluu = 'radio';
                        yankee['accessibilityRole'] = zuuluu;
                        zuuluu = {};
                        backup = _closure3_slot1;
                        oscard = backup.explicitContentFilter;
                        oscard = verify === oscard;
                        zuuluu['selected'] = oscard;
                        yankee['accessibilityState'] = zuuluu;
                        option = _closure1_slot16;
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot2;
                        michal = oscard[offset];
                        michal = golfie.bind(entity)(michal);
                        michal = michal.FormRow;
                        zuuluu = michal.Radio;
                        michal = {};
                        backup = backup.explicitContentFilter;
                        backup = verify === backup;
                        michal['selected'] = backup;
                        michal = option.bind(entity)(zuuluu, michal);
                        yankee['leading'] = michal;
                        michal = global;
                        zuuluu = michal.HermesInternal;
                        backup = zuuluu.concat;
                        zuuluu = 'filter-';
                        zuuluu = backup.bind(zuuluu)(verify);
                        zuuluu = foxtra.bind(entity)(romeon, yankee, zuuluu);
                        oscard = oscard[offset];
                        oscard = golfie.bind(entity)(oscard);
                        golfie = oscard.FormDivider;
                        michal = michal.HermesInternal;
                        oscard = michal.concat;
                        michal = 'filter-divider-';
                        oscard = oscard.bind(michal)(verify);
                        michal = {};
                        michal = option.bind(entity)(golfie, michal, oscard);
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    }
                };
                tangon = oscard.bind(golfie)(tangon);
                tangon = entity.pop;
                tangon = tangon.bind(entity)();
                tangon = _closure1_slot16;
                golfie = 14;
                michal = michal[golfie];
                michal = zuuluu.bind(report)(michal);
                zuuluu = michal.FormSection;
                michal = {};
                option = _closure1_slot0;
                oscard = _closure1_slot2;
                kiloes = 15;
                verify = oscard[kiloes];
                verify = option.bind(report)(verify);
                yankee = verify.intl;
                verify = yankee.string;
                oscard = oscard[kiloes];
                oscard = option.bind(report)(oscard);
                option = oscard.t;
                if(offset) { _fun00014_ip = 207; continue _fun00013 }
 192:
                oscard = option.Kd6OQU;
                oscard = verify.bind(yankee)(oscard);
                _fun00014_ip = 220; continue _fun00013;
 207:
                option = option.bPgfJy;
                oscard = verify.bind(yankee)(option);
 220:
                michal['title'] = oscard;
                verify = _closure1_slot16;
                yankee = _closure1_slot0;
                oscard = _closure1_slot2;
                golfie = oscard[golfie];
                golfie = yankee.bind(report)(golfie);
                option = golfie.FormHint;
                golfie = {};
                oscard = oscard[kiloes];
                oscard = yankee.bind(report)(oscard);
                romeon = oscard.intl;
                yankee = romeon.format;
                backup = _closure1_slot0;
                oscard = _closure1_slot2;
                oscard = oscard[kiloes];
                oscard = backup.bind(report)(oscard);
                oscard = oscard.t;
                if(offset) { _fun00014_ip = 307; continue _fun00013 }
 297:
                offset = oscard.zOmxND;
                _fun00014_ip = 315; continue _fun00013;
 307:
                offset = oscard.BI4ukJ;
 315:
                oscard = {};
                kiloes = _closure1_slot1;
                sizing = _closure1_slot2;
                backup = 16;
                backup = sizing[backup];
                kiloes = kiloes.bind(report)(backup);
                backup = kiloes.getArticleURL;
                foxtra = _closure1_slot12;
                foxtra = foxtra.SAFE_DIRECT_MESSAGING;
                foxtra = backup.bind(kiloes)(foxtra);
                oscard['helpdeskArticle'] = foxtra;
                oscard = yankee.bind(romeon)(offset, oscard);
                golfie['children'] = oscard;
                oscard = 'filter-hint';
                oscard = verify.bind(report)(option, golfie, oscard);
                michal['hint'] = oscard;
                michal['children'] = entity;
                entity = 'filter-section';
                michal = tangon.bind(report)(zuuluu, michal, entity);
                entity = new Array(1);
                entity[0] = michal;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'render';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                yankee = this;
                entity = yankee.props;
                verify = entity.canManageGuild;
                backup = entity.guild;
                foxtra = entity.hasChanges;
                tangon = _closure1_slot17;
                zuuluu = _closure1_slot18;
                michal = {};
                golfie = _closure1_slot0;
                report = _closure1_slot2;
                entity = 14;
                report = report[entity];
                entity = undefined;
                report = golfie.bind(entity)(report);
                golfie = report.Form;
                report = {};
                option = yankee.props;
                option = option.contentContainerStyle;
                report['contentContainerStyle'] = option;
                option = yankee.renderVerificationLevelSection;
                offset = option.bind(yankee)();
                option = new Array(3);
                option[0] = offset;
                offset = yankee.renderExplicitContentFilter;
                offset = offset.bind(yankee)();
                option[1] = offset;
                if(!verify) { _fun00018_ip = 157; continue _fun00017 }
 123:
                romeon = _closure1_slot16;
                yankee = _closure1_slot19;
                offset = {};
                offset['guild'] = backup;
                backup = backup.id;
                offset['guildId'] = backup;
                offset['hasChanges'] = foxtra;
                verify = romeon.bind(entity)(yankee, offset);
 157:
                option[2] = verify;
                report['children'] = option;
                golfie = tangon.bind(entity)(golfie, report);
                report = new Array(2);
                report[0] = golfie;
                option = _closure1_slot16;
                golfie = _closure1_slot0;
                verify = _closure1_slot2;
                oscard = 20;
                oscard = verify[oscard];
                oscard = golfie.bind(entity)(oscard);
                golfie = oscard.NavScrim;
                oscard = {};
                oscard = option.bind(entity)(golfie, oscard);
                report[1] = oscard;
                michal['children'] = report;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'componentWillUnmount';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = this;
                michal = entity.props;
                michal = michal.hasChanges;
                if(!michal) { _fun00020_ip = 68; continue _fun00019 }
 17:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 13;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.cancelChanges;
                entity = entity.props;
                entity = entity.guild;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
 68:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'handleVerificationLevelChange';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 13;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.updateGuild;
            michal = {};
            report = argFoo;
            michal['verificationLevel'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'handleExplicitContentFilterChange';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 13;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.updateGuild;
            michal = {};
            report = argFoo;
            michal['explicitContentFilter'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = oscard;
        entity[8] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot20 = tangon;
    tangon = 25;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/native/GuildSettingsModalModeration.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ConnectedGuildSettingsModalModeration
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            verify = michal.contentContainerStyle;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 21;
            tangon = zuuluu[tangon];
            report = undefined;
            golfie = michal.bind(report)(tangon);
            tangon = golfie.useNavigation;
            backup = tangon.bind(golfie)();
            tangon = 22;
            golfie = zuuluu[tangon];
            yankee = michal.bind(report)(golfie);
            offset = yankee.useStateFromStoresObject;
            golfie = _closure1_slot10;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                michal = _closure1_slot10;
                entity = michal.getProps;
                tangon = entity.bind(michal)();
                zuuluu = tangon.submitting;
                michal = tangon.hasChanges;
                entity = {};
                tangon = tangon.guild;
                entity['guild'] = tangon;
                entity['submitting'] = zuuluu;
                entity['hasChanges'] = michal;
                return entity;
            };
            golfie = offset.bind(yankee)(option, golfie);
            foxtra = golfie.guild;
            var _closure2_slot0 = foxtra;
            romeon = golfie.submitting;
            yankee = golfie.hasChanges;
            tangon = zuuluu[tangon];
            option = michal.bind(report)(tangon);
            golfie = option.useStateFromStores;
            offset = _closure1_slot9;
            tangon = new Array(1);
            tangon[0] = offset;
            entity = function() {
                tangon = _closure1_slot9;
                zuuluu = tangon.can;
                entity = _closure1_slot13;
                michal = entity.MANAGE_GUILD;
                entity = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            offset = golfie.bind(option)(tangon, entity);
            entity = 23;
            entity = zuuluu[entity];
            zuuluu = michal.bind(report)(entity);
            michal = zuuluu.useIsEligibleForSensitiveContentGoreExperiment;
            entity = 'GuildSettingsModalModeration';
            option = michal.bind(zuuluu)(entity);
            entity = null;
            michal = entity != foxtra;
            if(!michal) { _fun00022_ip = 275; continue _fun00021 }
 187:
            tangon = _closure1_slot16;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 24;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.RedesignCompat;
            michal = {};
            golfie = _closure1_slot20;
            oscard = {};
            oscard['navigation'] = backup;
            oscard['guild'] = foxtra;
            oscard['submitting'] = romeon;
            oscard['hasChanges'] = yankee;
            oscard['canManageGuild'] = offset;
            oscard['contentContainerStyle'] = verify;
            oscard['isGoreEnabled'] = option;
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 275:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();