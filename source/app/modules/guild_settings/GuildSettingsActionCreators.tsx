// app/modules/guild_settings/GuildSettingsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.Endpoints;
    var _closure1_slot10 = option;
    option = michal.Layers;
    option = michal.GuildSettingsSubsections;
    var _closure1_slot11 = option;
    option = michal.GuildSettingsSections;
    var _closure1_slot12 = option;
    option = michal.GuildFeatures;
    var _closure1_slot13 = option;
    michal = michal.Routes;
    var _closure1_slot14 = michal;
    michal = 8;
    michal = oscard[michal];
    option = golfie.bind(entity)(michal);
    michal = option.prototype;
    golfie = Object.create(michal, {constructor: {value: option}});
    romeon = 'GuildSettingsActionCreators';
    foxtra = golfie;
    michal = new foxtra[option](romeon, yankee);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot15 = michal;
    michal = {};
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: init
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_INIT';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['section'] = report;
        report = argCor;
        michal['subsection'] = report;
        report = argBaz;
        michal['location'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['init'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: open
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 299; continue _fun00001 }
 10:
                    report = _closure1_slot8;
                    tangon = report.getGuild;
                    zuuluu = _closure2_slot0;
                    report = tangon.bind(report)(zuuluu);
                    tangon = null;
                    zuuluu = tangon != report;
                    if(!zuuluu) { _fun00002_ip = 69; continue _fun00001 }
 43:
                    option = report.features;
                    golfie = option.has;
                    report = _closure1_slot13;
                    report = report.COMMUNITY;
                    zuuluu = golfie.bind(option)(report);
 69:
                    if(!zuuluu) { _fun00002_ip = 164; continue _fun00001 }
 72:
                    report = _closure2_slot1;
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.GUILD_AUTOMOD;
                    if(!(report === zuuluu)) { _fun00002_ip = 118; continue _fun00001 }
 90:
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.SAFETY;
                    _closure2_slot1 = zuuluu;
                    zuuluu = _closure1_slot11;
                    zuuluu = zuuluu.SAFETY_AUTOMOD;
                    _closure2_slot3 = zuuluu;
 118:
                    report = _closure2_slot1;
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.MEMBER_VERIFICATION;
                    if(!(report === zuuluu)) { _fun00002_ip = 164; continue _fun00001 }
 136:
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.SAFETY;
                    _closure2_slot1 = zuuluu;
                    zuuluu = _closure1_slot11;
                    zuuluu = zuuluu.SAFETY_DM_AND_SPAM_PROTECTION;
                    _closure2_slot3 = zuuluu;
 164:
                    offset = _closure1_slot16;
                    verify = offset.init;
                    backup = _closure2_slot0;
                    foxtra = _closure2_slot1;
                    romeon = _closure2_slot2;
                    yankee = _closure2_slot3;
                    kiloes = offset;
                    zuuluu = kiloes[verify](backup, foxtra, romeon, yankee, offset);
                    zuuluu = _closure2_slot1;
                    if(!(tangon != zuuluu)) { _fun00002_ip = 229; continue _fun00001 }
 205:
                    golfie = _closure1_slot16;
                    report = golfie.setSection;
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot3;
                    zuuluu = report.bind(golfie)(tangon, zuuluu);
 229:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 9;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'GUILD_SETTINGS_OPEN';
                    zuuluu['type'] = golfie;
                    golfie = _closure2_slot0;
                    zuuluu['guildId'] = golfie;
                    golfie = _closure2_slot1;
                    zuuluu['section'] = golfie;
                    oscard = _closure2_slot3;
                    zuuluu['subsection'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 299:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['open'] = golfie;
    golfie = function() { // Original name: close
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_CLOSE';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['close'] = golfie;
    golfie = function(argFoo) { // Original name: saveRouteStack
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_SAVE_ROUTE_STACK';
        michal['type'] = report;
        report = argFoo;
        michal['state'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['saveRouteStack'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setSection
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            michal = argBar;
            tangon = _closure1_slot9;
            zuuluu = tangon.getGuildId;
            oscard = zuuluu.bind(tangon)();
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00004_ip = 216; continue _fun00003 }
 32:
            report = _closure1_slot8;
            tangon = report.getGuild;
            tangon = tangon.bind(report)(oscard);
            zuuluu = zuuluu != tangon;
            if(!zuuluu) { _fun00004_ip = 79; continue _fun00003 }
 53:
            oscard = tangon.features;
            report = oscard.has;
            tangon = _closure1_slot13;
            tangon = tangon.COMMUNITY;
            zuuluu = report.bind(oscard)(tangon);
 79:
            report = golfie;
            tangon = michal;
            if(!zuuluu) { _fun00004_ip = 165; continue _fun00003 }
 88:
            zuuluu = _closure1_slot12;
            oscard = zuuluu.GUILD_AUTOMOD;
            zuuluu = golfie;
            if(!(golfie === oscard)) { _fun00004_ip = 125; continue _fun00003 }
 105:
            oscard = _closure1_slot12;
            zuuluu = oscard.SAFETY;
            oscard = _closure1_slot11;
            michal = oscard.SAFETY_AUTOMOD;
 125:
            oscard = _closure1_slot12;
            oscard = oscard.MEMBER_VERIFICATION;
            if(!(zuuluu === oscard)) { _fun00004_ip = 159; continue _fun00003 }
 139:
            oscard = _closure1_slot12;
            zuuluu = oscard.SAFETY;
            oscard = _closure1_slot11;
            michal = oscard.SAFETY_DM_AND_SPAM_PROTECTION;
 159:
            report = zuuluu;
            tangon = michal;
 165:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            oscard = 'GUILD_SETTINGS_SET_SECTION';
            entity['type'] = oscard;
            entity['section'] = report;
            entity['subsection'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 216:
            entity = undefined;
            return entity;
        }
    };
    michal['setSection'] = golfie;
    golfie = function(argFoo) { // Original name: setSearchQuery
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_SET_SEARCH_QUERY';
        michal['type'] = report;
        report = argFoo;
        michal['searchQuery'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['setSearchQuery'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: selectRole
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.dispatch;
        entity = {};
        tangon = 'GUILD_SETTINGS_ROLE_SELECT';
        entity['type'] = tangon;
        tangon = argFoo;
        entity['roleId'] = tangon;
        tangon = argBar;
        entity['searchQuery'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['selectRole'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: updateEmbed
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 10;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        tangon = michal.HTTP;
        zuuluu = tangon.patch;
        michal = {};
        oscard = _closure1_slot10;
        report = oscard.GUILD_WIDGET;
        report = report.bind(oscard)(golfie);
        michal['url'] = report;
        report = {};
        oscard = argBar;
        report['enabled'] = oscard;
        oscard = argBaz;
        report['channel_id'] = oscard;
        michal['body'] = report;
        report = true;
        michal['oldFormErrors'] = report;
        michal['rejectWithError'] = report;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.then;
        entity = function(argFoo) {
            report = argFoo;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'GUILD_SETTINGS_SET_WIDGET';
            michal['type'] = oscard;
            oscard = _closure2_slot0;
            michal['guildId'] = oscard;
            oscard = report.body;
            oscard = oscard.enabled;
            michal['enabled'] = oscard;
            report = report.body;
            report = report.channel_id;
            michal['channelId'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['updateEmbed'] = golfie;
    golfie = function(argFoo) { // Original name: updateMFALevel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.guildId;
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.level;
            var _closure2_slot1 = zuuluu;
            oscard = michal.isEnabled;
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 11;
            michal = option[michal];
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = {};
            michal = {};
            romeon = _closure1_slot0;
            yankee = 12;
            verify = option[yankee];
            verify = romeon.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = option[yankee];
            option = romeon.bind(report)(option);
            option = option.t;
            option = option.Wi9LER;
            option = verify.bind(offset)(option);
            michal['title'] = option;
            offset = _closure1_slot0;
            golfie = _closure1_slot2;
            option = golfie[yankee];
            option = offset.bind(report)(option);
            verify = option.intl;
            option = verify.string;
            golfie = golfie[yankee];
            golfie = offset.bind(report)(golfie);
            golfie = golfie.t;
            if(oscard) { _fun00006_ip = 171; continue _fun00005 }
 158:
            oscard = golfie.yZcYGR;
            oscard = option.bind(verify)(oscard);
            _fun00006_ip = 182; continue _fun00005;
 171:
            golfie = golfie.MP0Ho6;
            oscard = option.bind(verify)(golfie);
 182:
            michal['actionText'] = oscard;
            zuuluu['modalProps'] = michal;
            michal = false;
            zuuluu['checkEnabled'] = michal;
            michal = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                zuuluu = entity.HTTP;
                michal = zuuluu.post;
                entity = {};
                golfie = _closure1_slot10;
                oscard = golfie.GUILD_MFA;
                tangon = _closure2_slot0;
                tangon = oscard.bind(golfie)(tangon);
                entity['url'] = tangon;
                tangon = {};
                report = _closure2_slot1;
                tangon['level'] = report;
                option = argFoo;
                verify = tangon;
                report = copyDataProperties(verify, option);
                entity['body'] = tangon;
                tangon = true;
                entity['oldFormErrors'] = tangon;
                tangon = false;
                entity['rejectWithError'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = tangon.bind(report)(michal, zuuluu);
            michal = zuuluu.then;
            entity = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dispatch;
                entity = {};
                tangon = 'GUILD_SETTINGS_SET_MFA_SUCCESS';
                entity['type'] = tangon;
                tangon = argFoo;
                tangon = tangon.body;
                tangon = tangon.level;
                entity['level'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['updateMFALevel'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: updateIcon
        verify = argFoo;
        golfie = argBar;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = golfie;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 10;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.HTTP;
        tangon = report.patch;
        zuuluu = {};
        option = _closure1_slot10;
        oscard = option.GUILD;
        oscard = oscard.bind(option)(verify);
        zuuluu['url'] = oscard;
        oscard = {};
        oscard['icon'] = golfie;
        zuuluu['body'] = oscard;
        oscard = true;
        zuuluu['oldFormErrors'] = oscard;
        oscard = false;
        zuuluu['rejectWithError'] = oscard;
        report = tangon.bind(report)(zuuluu);
        tangon = report.then;
        zuuluu = function() {
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 9;
            michal = report[entity];
            entity = undefined;
            golfie = tangon.bind(entity)(michal);
            oscard = golfie.dispatch;
            zuuluu = {};
            michal = 'GUILD_SETTINGS_UPDATE';
            zuuluu['type'] = michal;
            option = _closure2_slot1;
            zuuluu['icon'] = option;
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = 13;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.checkGuildTemplateDirty;
            michal = _closure2_slot0;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'GUILD_SETTINGS_SUBMIT_FAILURE';
            entity['type'] = tangon;
            tangon = argFoo;
            tangon = tangon.body;
            entity['errors'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    michal['updateIcon'] = golfie;
    golfie = function(argFoo) { // Original name: cancelChanges
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_CANCEL_CHANGES';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['cancelChanges'] = golfie;
    golfie = function(argFoo) { // Original name: updateGuild
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            michal = oscard.safetyAlertsChannelId;
            zuuluu = oscard.profile;
            tangon = null;
            report = Object.create(tangon);
            entity = 0;
            report['safetyAlertsChannelId'] = entity;
            report['profile'] = entity;
            offset = {};
            verify = oscard;
            option = report;
            verify = copyDataProperties(offset, verify, option);
            report = {};
            offset = report;
            entity = copyDataProperties(offset, verify);
            if(!(tangon != zuuluu)) { _fun00008_ip = 97; continue _fun00007 }
 57:
            entity = {};
            oscard = report.profile;
            if(!(tangon == oscard)) { _fun00008_ip = 71; continue _fun00007 }
 69:
            oscard = {};
 71:
            offset = entity;
            verify = oscard;
            oscard = copyDataProperties(offset, verify);
            offset = entity;
            verify = zuuluu;
            zuuluu = copyDataProperties(offset, verify);
            report['profile'] = entity;
 97:
            oscard = _closure1_slot9;
            zuuluu = oscard.getGuildId;
            zuuluu = zuuluu.bind(oscard)();
            zuuluu = tangon != zuuluu;
            if(!zuuluu) { _fun00008_ip = 125; continue _fun00007 }
 121:
            zuuluu = tangon != michal;
 125:
            if(!zuuluu) { _fun00008_ip = 134; continue _fun00007 }
 128:
            report['safetyAlertsChannelId'] = michal;
 134:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'GUILD_SETTINGS_UPDATE';
            michal['type'] = oscard;
            offset = michal;
            verify = report;
            report = copyDataProperties(offset, verify);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['updateGuild'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: updateGuildProfile
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_PROFILE_UPDATE';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        oscard = argBar;
        golfie = michal;
        report = copyDataProperties(golfie, oscard);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['updateGuildProfile'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: saveGuild
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            verify = argFoo;
            zuuluu = argBar;
            golfie = arguments[2];
            var _closure2_slot0 = verify;
            papara = zuuluu.name;
            cntext = zuuluu.description;
            record = zuuluu.icon;
            config = zuuluu.splash;
            sequen = zuuluu.banner;
            vacuum = zuuluu.homeHeader;
            update = zuuluu.afkChannelId;
            echoed = zuuluu.afkTimeout;
            result = zuuluu.systemChannelId;
            output = zuuluu.verificationLevel;
            sizing = zuuluu.defaultMessageNotifications;
            kiloes = zuuluu.explicitContentFilter;
            ctrled = zuuluu.features;
            backup = zuuluu.systemChannelFlags;
            source = zuuluu.preferredLocale;
            foxtra = zuuluu.rulesChannelId;
            michal = zuuluu.safetyAlertsChannelId;
            romeon = zuuluu.ownerConfiguredContentLevel;
            option = zuuluu.discoverySplash;
            oscard = zuuluu.publicUpdatesChannelId;
            yankee = zuuluu.premiumProgressBarEnabled;
            offset = zuuluu.profile;
            zuuluu = zuuluu.moderatorReportingEnabled;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00010_ip = 158; continue _fun00009 }
 156:
            golfie = {};
 158:
            var _closure2_slot1 = golfie;
            report = {};
            report['name'] = papara;
            report['description'] = cntext;
            report['icon'] = record;
            report['splash'] = config;
            report['banner'] = sequen;
            report['home_header'] = vacuum;
            report['features'] = ctrled;
            report['preferred_locale'] = source;
            report['afk_channel_id'] = update;
            report['afk_timeout'] = echoed;
            report['system_channel_id'] = result;
            report['verification_level'] = output;
            report['default_message_notifications'] = sizing;
            report['explicit_content_filter'] = kiloes;
            report['system_channel_flags'] = backup;
            report['rules_channel_id'] = foxtra;
            report['owner_configured_content_level'] = romeon;
            report['discovery_splash'] = option;
            report['public_updates_channel_id'] = oscard;
            report['safety_alerts_channel_id'] = michal;
            michal = null;
            option = michal != yankee;
            oscard = null;
            if(!option) { _fun00010_ip = 282; continue _fun00009 }
 272:
            option = {};
            option['premium_progress_bar_enabled'] = yankee;
            oscard = option;
 282:
            status = report;
            target = oscard;
            oscard = copyDataProperties(status, target);
            oscard = offset;
            if(!(michal != oscard)) { _fun00010_ip = 333; continue _fun00009 }
 299:
            option = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 14;
            michal = yankee[michal];
            option = option.bind(tangon)(michal);
            michal = option.toServerGuildProfile;
            oscard = michal.bind(option)(offset);
 333:
            michal = 'profile';
            report[michal] = oscard;
            michal = 'moderator_reporting_enabled';
            report[michal] = zuuluu;
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 9;
            michal = option[michal];
            offset = zuuluu.bind(tangon)(michal);
            zuuluu = offset.dispatch;
            michal = {};
            yankee = 'GUILD_SETTINGS_SUBMIT';
            michal['type'] = yankee;
            michal = zuuluu.bind(offset)(michal);
            zuuluu = _closure1_slot0;
            michal = 10;
            michal = option[michal];
            michal = zuuluu.bind(tangon)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.patch;
            michal = {};
            option = _closure1_slot10;
            oscard = option.GUILD;
            oscard = oscard.bind(option)(verify);
            michal['url'] = oscard;
            oscard = {};
            golfie = golfie.isForDiscovery;
            oscard['for_discovery'] = golfie;
            michal['query'] = oscard;
            michal['body'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            report = false;
            michal['rejectWithError'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 9;
                michal = tangon[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.dispatch;
                michal = {};
                golfie = 'GUILD_SETTINGS_SUBMIT_SUCCESS';
                michal['type'] = golfie;
                golfie = argFoo;
                golfie = golfie.body;
                michal['guild'] = golfie;
                michal = report.bind(oscard)(michal);
                michal = 13;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.checkGuildTemplateDirty;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 9;
                    tangon = tangon[michal];
                    michal = undefined;
                    oscard = report.bind(michal)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'GUILD_SETTINGS_SUBMIT_FAILURE';
                    tangon['type'] = golfie;
                    golfie = entity.body;
                    tangon['errors'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    oscard = _closure1_slot15;
                    report = oscard.error;
                    tangon = {};
                    zuuluu = entity.body;
                    tangon['errors'] = zuuluu;
                    zuuluu = 'Failed to save guild settings';
                    zuuluu = report.bind(oscard)(zuuluu, tangon);
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.throwErr;
                    if(zuuluu) { _fun00012_ip = 111; continue _fun00011 }
 109:
                    return michal;
 111:
                    entity = entity.body;
                    throw entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal['saveGuild'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: updateGuildModeration
        option = argFoo;
        oscard = argBar;
        var _closure2_slot0 = option;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 10;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        tangon = michal.HTTP;
        zuuluu = tangon.patch;
        michal = {};
        golfie = _closure1_slot10;
        report = golfie.GUILD;
        report = report.bind(golfie)(option);
        michal['url'] = report;
        report = {};
        golfie = oscard.verificationLevel;
        report['verification_level'] = golfie;
        oscard = oscard.explicitContentFilter;
        report['explicit_content_filter'] = oscard;
        michal['body'] = report;
        report = true;
        michal['oldFormErrors'] = report;
        report = false;
        michal['rejectWithError'] = report;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.then;
        entity = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 13;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.checkGuildTemplateDirty;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            entity = argFoo;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['updateGuildModeration'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: transferOwnership
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = arguments[2];
            michal = arguments[3];
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            tangon = argBar;
            var _closure2_slot1 = tangon;
            tangon = undefined;
            if(!(zuuluu === tangon)) { _fun00014_ip = 30; continue _fun00013 }
 28:
            zuuluu = null;
 30:
            var _closure2_slot2 = zuuluu;
            if(!(michal === tangon)) { _fun00014_ip = 40; continue _fun00013 }
 38:
            michal = null;
 40:
            var _closure2_slot3 = michal;
            zuuluu = _closure1_slot1;
            offset = _closure1_slot2;
            michal = 11;
            michal = offset[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            report = {};
            verify = _closure1_slot0;
            oscard = 12;
            golfie = offset[oscard];
            golfie = verify.bind(tangon)(golfie);
            yankee = golfie.intl;
            option = yankee.string;
            golfie = offset[oscard];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.Z5s7PD;
            golfie = option.bind(yankee)(golfie);
            report['title'] = golfie;
            golfie = offset[oscard];
            golfie = verify.bind(tangon)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(tangon)(oscard);
            oscard = oscard.t;
            oscard = oscard.Z5s7PD;
            oscard = golfie.bind(option)(oscard);
            report['actionText'] = oscard;
            michal['modalProps'] = report;
            report = false;
            michal['checkEnabled'] = report;
            entity = function(argFoo) {
                michal = _closure1_slot1;
                offset = _closure1_slot2;
                entity = 15;
                entity = offset[entity];
                verify = undefined;
                zuuluu = michal.bind(verify)(entity);
                michal = zuuluu.patch;
                entity = {};
                option = _closure1_slot10;
                tangon = option.GUILD;
                golfie = _closure2_slot0;
                tangon = tangon.bind(option)(golfie);
                entity['url'] = tangon;
                tangon = {};
                option = _closure2_slot1;
                tangon['owner_id'] = option;
                option = _closure2_slot3;
                tangon['code'] = option;
                yankee = argFoo;
                romeon = tangon;
                option = copyDataProperties(romeon, yankee);
                entity['body'] = tangon;
                tangon = true;
                entity['oldFormErrors'] = tangon;
                tangon = {};
                option = _closure1_slot0;
                report = 16;
                report = offset[report];
                report = option.bind(verify)(report);
                report = report.NetworkActionNames;
                report = report.GUILD_TRANSFER_OWNERSHIP;
                tangon['event'] = report;
                report = {};
                report['guild_id'] = golfie;
                oscard = _closure2_slot2;
                report['verification_type'] = oscard;
                tangon['properties'] = report;
                entity['trackedActionData'] = tangon;
                tangon = false;
                entity['rejectWithError'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    michal['transferOwnership'] = golfie;
    golfie = function(argFoo) { // Original name: sendTransferOwnershipPincode
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            golfie = argFoo;
            oscard = arguments[1];
            verify = undefined;
            if(!(oscard === verify)) { _fun00016_ip = 14; continue _fun00015 }
 12:
            oscard = false;
 14:
            michal = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 15;
            entity = offset[entity];
            zuuluu = michal.bind(verify)(entity);
            michal = zuuluu.put;
            entity = {};
            option = _closure1_slot10;
            tangon = option.GUILD_PINCODE;
            tangon = tangon.bind(option)(golfie);
            entity['url'] = tangon;
            tangon = true;
            entity['oldFormErrors'] = tangon;
            tangon = {};
            option = _closure1_slot0;
            report = 16;
            report = offset[report];
            report = option.bind(verify)(report);
            report = report.NetworkActionNames;
            report = report.GUILD_TRANSFER_OWNERSHIP_SEND_CODE;
            tangon['event'] = report;
            report = {};
            report['guild_id'] = golfie;
            report['is_resend'] = oscard;
            tangon['properties'] = report;
            entity['trackedActionData'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['sendTransferOwnershipPincode'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: deleteGuild
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot1;
        offset = _closure1_slot2;
        michal = 11;
        michal = offset[michal];
        report = undefined;
        tangon = zuuluu.bind(report)(michal);
        zuuluu = {};
        michal = {};
        verify = _closure1_slot0;
        oscard = 12;
        golfie = offset[oscard];
        golfie = verify.bind(report)(golfie);
        romeon = golfie.intl;
        yankee = romeon.formatToPlainString;
        golfie = offset[oscard];
        golfie = verify.bind(report)(golfie);
        golfie = golfie.t;
        option = golfie.us7mCw;
        golfie = {};
        foxtra = argBar;
        golfie['name'] = foxtra;
        golfie = yankee.bind(romeon)(option, golfie);
        michal['title'] = golfie;
        golfie = offset[oscard];
        golfie = verify.bind(report)(golfie);
        option = golfie.intl;
        golfie = option.string;
        oscard = offset[oscard];
        oscard = verify.bind(report)(oscard);
        oscard = oscard.t;
        oscard = oscard.l3hWPz;
        oscard = golfie.bind(option)(oscard);
        michal['actionText'] = oscard;
        oscard = true;
        michal['disallowBackupCodes'] = oscard;
        zuuluu['modalProps'] = michal;
        michal = false;
        zuuluu['checkEnabled'] = michal;
        michal = function(argFoo) {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 10;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.HTTP;
            michal = zuuluu.post;
            entity = {};
            oscard = _closure1_slot10;
            report = oscard.GUILD_DELETE;
            tangon = _closure2_slot0;
            tangon = report.bind(oscard)(tangon);
            entity['url'] = tangon;
            tangon = argFoo;
            entity['body'] = tangon;
            tangon = true;
            entity['oldFormErrors'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu = tangon.bind(report)(michal, zuuluu);
        michal = zuuluu.then;
        entity = function() {
            michal = _closure1_slot16;
            entity = michal.close;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['deleteGuild'] = golfie;
    golfie = function(argFoo) { // Original name: leaveGuild
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = arguments[1];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00018_ip = 20; continue _fun00017 }
 18:
            zuuluu = false;
 20:
            var _closure2_slot1 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00020_ip = 227; continue _fun00019 }
 10:
                        zuuluu = _closure1_slot5;
                        michal = zuuluu.isLurking;
                        yankee = _closure2_slot0;
                        oscard = michal.bind(zuuluu)(yankee);
                        golfie = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 10;
                        michal = zuuluu[michal];
                        zuuluu = undefined;
                        michal = golfie.bind(zuuluu)(michal);
                        option = michal.HTTP;
                        golfie = option.del;
                        michal = {};
                        offset = _closure1_slot10;
                        verify = offset.GUILD_LEAVE;
                        verify = verify.bind(offset)(yankee);
                        michal['url'] = verify;
                        verify = {};
                        offset = oscard;
                        if(oscard) { _fun00020_ip = 116; continue _fun00019 }
 97:
                        foxtra = _closure1_slot7;
                        romeon = foxtra.isCurrentUserGuest;
                        yankee = _closure2_slot0;
                        offset = romeon.bind(foxtra)(yankee);
 116:
                        verify['lurking'] = offset;
                        michal['body'] = verify;
                        verify = true;
                        michal['oldFormErrors'] = verify;
                        verify = false;
                        michal['rejectWithError'] = verify;
                        michal = golfie.bind(option)(michal);
                        SaveGenerator(address=147);
 145:
                        return michal;
 147:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                        if(golfie) { _fun00020_ip = 224; continue _fun00019 }
 153:
                        option = _closure1_slot16;
                        golfie = option.close;
                        golfie = golfie.bind(option)();
                        report = _closure2_slot1;
                        if(!report) { _fun00020_ip = 177; continue _fun00019 }
 174:
                        report = oscard;
 177:
                        if(!report) { _fun00020_ip = 221; continue _fun00019 }
 180:
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        report = 17;
                        report = golfie[report];
                        oscard = oscard.bind(zuuluu)(report);
                        report = oscard.transitionTo;
                        tangon = _closure1_slot14;
                        tangon = tangon.GUILD_DISCOVERY;
                        tangon = report.bind(oscard)(tangon);
 221:
                        return zuuluu;
 224:
                        return michal;
 227:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['leaveGuild'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: updateMemberRoles
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        michal = argGra;
        var _closure2_slot4 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00022_ip = 261; continue _fun00021 }
 12:
                    golfie = _closure1_slot4;
                    oscard = golfie.isFullServerPreview;
                    tangon = _closure2_slot0;
                    tangon = oscard.bind(golfie)(tangon);
                    if(!tangon) { _fun00022_ip = 65; continue _fun00021 }
 40:
                    oscard = _closure2_slot1;
                    golfie = _closure1_slot6;
                    tangon = golfie.getId;
                    tangon = tangon.bind(golfie)();
                    if(!(oscard !== tangon)) { _fun00022_ip = 214; continue _fun00021 }
 65:
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 10;
                    oscard = oscard[tangon];
                    tangon = undefined;
                    tangon = golfie.bind(tangon)(oscard);
                    golfie = tangon.HTTP;
                    oscard = golfie.patch;
                    tangon = {};
                    yankee = _closure1_slot10;
                    offset = yankee.GUILD_MEMBER;
                    verify = _closure2_slot0;
                    option = _closure2_slot1;
                    option = offset.bind(yankee)(verify, option);
                    tangon['url'] = option;
                    option = {};
                    verify = _closure2_slot2;
                    option['roles'] = verify;
                    tangon['body'] = option;
                    option = true;
                    tangon['oldFormErrors'] = option;
                    option = false;
                    tangon['rejectWithError'] = option;
                    tangon = oscard.bind(golfie)(tangon);
                    SaveGenerator(address=165);
 163:
                    return tangon;
 165:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00022_ip = 211; continue _fun00021 }
 171:
                    option = _closure2_slot3;
                    golfie = option.forEach;
                    oscard = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 9;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.dispatch;
                        entity = {};
                        tangon = 'GUILD_ROLE_MEMBER_ADD';
                        entity['type'] = tangon;
                        report = _closure2_slot0;
                        entity['guildId'] = report;
                        report = argFoo;
                        entity['roleId'] = report;
                        tangon = _closure2_slot1;
                        entity['userId'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    oscard = golfie.bind(option)(oscard);
                    golfie = _closure2_slot4;
                    oscard = golfie.forEach;
                    report = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 9;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.dispatch;
                        entity = {};
                        tangon = 'GUILD_ROLE_MEMBER_REMOVE';
                        entity['type'] = tangon;
                        report = _closure2_slot0;
                        entity['guildId'] = report;
                        report = argFoo;
                        entity['roleId'] = report;
                        tangon = _closure2_slot1;
                        entity['userId'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    report = oscard.bind(golfie)(report);
                    _fun00022_ip = 256; continue _fun00021;
 211:
                    return tangon;
 214:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 18;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.updateImpersonatedRoles;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot2;
                    michal = tangon.bind(report)(zuuluu, michal);
 256:
                    michal = undefined;
                    return michal;
 261:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['updateMemberRoles'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: bulkAddMemberRoles
        option = argFoo;
        golfie = argBar;
        var _closure2_slot0 = option;
        var _closure2_slot1 = golfie;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 10;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        tangon = michal.HTTP;
        zuuluu = tangon.patch;
        michal = {};
        oscard = _closure1_slot10;
        report = oscard.GUILD_ROLE_MEMBERS;
        report = report.bind(oscard)(option, golfie);
        michal['url'] = report;
        report = {};
        oscard = argBaz;
        report['member_ids'] = oscard;
        michal['body'] = report;
        report = false;
        michal['rejectWithError'] = report;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.then;
        entity = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'GUILD_ROLE_MEMBER_BULK_ADD';
            michal['type'] = report;
            oscard = _closure2_slot0;
            michal['guildId'] = oscard;
            report = _closure2_slot1;
            michal['roleId'] = report;
            report = argFoo;
            report = report.body;
            michal['added'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['bulkAddMemberRoles'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: enableIntegration
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 10;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        oscard = _closure1_slot10;
        report = oscard.GUILD_INTEGRATIONS;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        tangon = {};
        report = argBar;
        tangon['type'] = report;
        report = argBaz;
        tangon['id'] = report;
        entity['body'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['enableIntegration'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: disableIntegration
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 10;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.del;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golfie = _closure1_slot10;
        oscard = golfie.GUILD_INTEGRATION;
        report = argFoo;
        tangon = argBar;
        tangon = oscard.bind(golfie)(report, tangon);
        entity['url'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['disableIntegration'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: updateIntegration
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 10;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.patch;
        entity = {};
        golfie = _closure1_slot10;
        oscard = golfie.GUILD_INTEGRATION;
        report = argFoo;
        tangon = argBar;
        tangon = oscard.bind(golfie)(report, tangon);
        entity['url'] = tangon;
        tangon = {};
        report = argBaz;
        tangon['expire_behavior'] = report;
        report = argCor;
        tangon['expire_grace_period'] = report;
        report = argGra;
        tangon['enable_emoticons'] = report;
        entity['body'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['updateIntegration'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: syncIntegration
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 10;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.HTTP;
        zuuluu = tangon.post;
        michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        option = _closure1_slot10;
        golfie = option.GUILD_INTEGRATION_SYNC;
        oscard = argFoo;
        report = argBar;
        report = golfie.bind(option)(oscard, report);
        michal['url'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['syncIntegration'] = golfie;
    golfie = function(argFoo) { // Original name: migratePinPermission
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00024_ip = 115; continue _fun00023 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 10;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.post;
                    michal = {};
                    option = _closure1_slot10;
                    golfie = option.GUILD_MIGRATE_PIN_PERMISSION;
                    oscard = _closure2_slot0;
                    oscard = golfie.bind(option)(oscard);
                    michal['url'] = oscard;
                    oscard = true;
                    michal['rejectWithError'] = oscard;
                    report = tangon.bind(report)(michal);
                    tangon = report.then;
                    michal = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 9;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.dispatch;
                        entity = {};
                        tangon = 'GUILD_SETTINGS_PIN_PERMISSION_MIGRATED';
                        entity['type'] = tangon;
                        tangon = _closure2_slot0;
                        entity['guildId'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=103);
 101:
                    return michal;
 103:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00024_ip = 112; continue _fun00023 }
 109:
                    return zuuluu;
 112:
                    return michal;
 115:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['migratePinPermission'] = golfie;
    var _closure1_slot16 = michal;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/GuildSettingsActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();