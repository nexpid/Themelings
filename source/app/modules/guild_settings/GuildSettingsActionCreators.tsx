// app/modules/guild_settings/GuildSettingsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.Endpoints;
    var _closure1_slot10 = options;
    options = mike.Layers;
    options = mike.GuildSettingsSubsections;
    var _closure1_slot11 = options;
    options = mike.GuildSettingsSections;
    var _closure1_slot12 = options;
    mike = mike.GuildFeatures;
    var _closure1_slot13 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.toServerGuildProfile;
    var _closure1_slot14 = mike;
    mike = 9;
    mike = oscar[mike];
    options = golf.bind(entity)(mike);
    mike = options.prototype;
    golf = Object.create(mike, {constructor: {value: options}});
    romeo = 'GuildSettingsActionCreators';
    foxtrot = golf;
    mike = new foxtrot[options](romeo, yankee);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot15 = mike;
    mike = {};
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: init
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_INIT';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['section'] = report;
        report = argCorge;
        mike['subsection'] = report;
        report = argBaz;
        mike['location'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['init'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: open
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun72883: for(var _fun72883_ip = 0; ; ) switch(_fun72883_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun72883_ip = 390; continue _fun72883 }
 10:
                    tango = _closure2_slot1;
                    zulu = _closure1_slot12;
                    zulu = zulu.DISCOVERY;
                    zulu = tango === zulu;
                    if(!zulu) { _fun72883_ip = 81; continue _fun72883 }
 37:
                    golf = _closure1_slot0;
                    report = _closure1_slot2;
                    tango = 11;
                    report = report[tango];
                    tango = undefined;
                    options = golf.bind(tango)(report);
                    golf = options.getMemberVerificationRolloutEnabled;
                    report = _closure2_slot0;
                    tango = 'GuildSettignsActionCreators.open';
                    zulu = golf.bind(options)(report, tango);
 81:
                    if(!zulu) { _fun72883_ip = 112; continue _fun72883 }
 84:
                    zulu = _closure1_slot12;
                    zulu = zulu.ACCESS;
                    _closure2_slot1 = zulu;
                    zulu = _closure1_slot11;
                    zulu = zulu.ACCESS_DISCOVERABLE;
                    _closure2_slot3 = zulu;
 112:
                    report = _closure1_slot8;
                    tango = report.getGuild;
                    zulu = _closure2_slot0;
                    options = tango.bind(report)(zulu);
                    tango = null;
                    zulu = tango != options;
                    if(!zulu) { _fun72883_ip = 160; continue _fun72883 }
 139:
                    golf = options.hasFeature;
                    report = _closure1_slot13;
                    report = report.COMMUNITY;
                    zulu = golf.bind(options)(report);
 160:
                    if(!zulu) { _fun72883_ip = 255; continue _fun72883 }
 163:
                    report = _closure2_slot1;
                    zulu = _closure1_slot12;
                    zulu = zulu.GUILD_AUTOMOD;
                    if(!(report === zulu)) { _fun72883_ip = 209; continue _fun72883 }
 181:
                    zulu = _closure1_slot12;
                    zulu = zulu.SAFETY;
                    _closure2_slot1 = zulu;
                    zulu = _closure1_slot11;
                    zulu = zulu.SAFETY_AUTOMOD;
                    _closure2_slot3 = zulu;
 209:
                    report = _closure2_slot1;
                    zulu = _closure1_slot12;
                    zulu = zulu.MEMBER_VERIFICATION;
                    if(!(report === zulu)) { _fun72883_ip = 255; continue _fun72883 }
 227:
                    zulu = _closure1_slot12;
                    zulu = zulu.SAFETY;
                    _closure2_slot1 = zulu;
                    zulu = _closure1_slot11;
                    zulu = zulu.SAFETY_DM_AND_SPAM_PROTECTION;
                    _closure2_slot3 = zulu;
 255:
                    offset = _closure1_slot16;
                    verify = offset.init;
                    backup = _closure2_slot0;
                    foxtrot = _closure2_slot1;
                    romeo = _closure2_slot2;
                    yankee = _closure2_slot3;
                    kilo = offset;
                    zulu = kilo[verify](backup, foxtrot, romeo, yankee, offset);
                    zulu = _closure2_slot1;
                    if(!(tango != zulu)) { _fun72883_ip = 320; continue _fun72883 }
 296:
                    golf = _closure1_slot16;
                    report = golf.setSection;
                    tango = _closure2_slot1;
                    zulu = _closure2_slot3;
                    zulu = report.bind(golf)(tango, zulu);
 320:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 10;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'GUILD_SETTINGS_OPEN';
                    zulu['type'] = golf;
                    golf = _closure2_slot0;
                    zulu['guildId'] = golf;
                    golf = _closure2_slot1;
                    zulu['section'] = golf;
                    oscar = _closure2_slot3;
                    zulu['subsection'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 390:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['open'] = golf;
    golf = function() { // Original name: close
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_CLOSE';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['close'] = golf;
    golf = function(argFoo) { // Original name: saveRouteStack
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_SAVE_ROUTE_STACK';
        mike['type'] = report;
        report = argFoo;
        mike['state'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['saveRouteStack'] = golf;
    golf = function(argFoo, argBar) { // Original name: setSection
        _fun72886: for(var _fun72886_ip = 0; ; ) switch(_fun72886_ip) {
 0:
            golf = argFoo;
            mike = argBar;
            tango = _closure1_slot9;
            zulu = tango.getGuildId;
            oscar = zulu.bind(tango)();
            zulu = null;
            if(!(zulu != oscar)) { _fun72886_ip = 291; continue _fun72886 }
 32:
            tango = _closure1_slot12;
            tango = tango.DISCOVERY;
            tango = golf === tango;
            if(!tango) { _fun72886_ip = 89; continue _fun72886 }
 49:
            verify = _closure1_slot0;
            options = _closure1_slot2;
            report = 11;
            options = options[report];
            report = undefined;
            verify = verify.bind(report)(options);
            options = verify.getMemberVerificationRolloutEnabled;
            report = 'GuildSettignsActionCreators.setSection';
            tango = options.bind(verify)(oscar, report);
 89:
            if(!tango) { _fun72886_ip = 112; continue _fun72886 }
 92:
            tango = _closure1_slot12;
            golf = tango.ACCESS;
            tango = _closure1_slot11;
            mike = tango.ACCESS_DISCOVERABLE;
 112:
            report = _closure1_slot8;
            tango = report.getGuild;
            oscar = tango.bind(report)(oscar);
            zulu = zulu != oscar;
            if(!zulu) { _fun72886_ip = 154; continue _fun72886 }
 133:
            report = oscar.hasFeature;
            tango = _closure1_slot13;
            tango = tango.COMMUNITY;
            zulu = report.bind(oscar)(tango);
 154:
            report = golf;
            tango = mike;
            if(!zulu) { _fun72886_ip = 240; continue _fun72886 }
 163:
            zulu = _closure1_slot12;
            oscar = zulu.GUILD_AUTOMOD;
            zulu = golf;
            if(!(golf === oscar)) { _fun72886_ip = 200; continue _fun72886 }
 180:
            oscar = _closure1_slot12;
            zulu = oscar.SAFETY;
            oscar = _closure1_slot11;
            mike = oscar.SAFETY_AUTOMOD;
 200:
            oscar = _closure1_slot12;
            oscar = oscar.MEMBER_VERIFICATION;
            if(!(zulu === oscar)) { _fun72886_ip = 234; continue _fun72886 }
 214:
            oscar = _closure1_slot12;
            zulu = oscar.SAFETY;
            oscar = _closure1_slot11;
            mike = oscar.SAFETY_DM_AND_SPAM_PROTECTION;
 234:
            report = zulu;
            tango = mike;
 240:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            oscar = 'GUILD_SETTINGS_SET_SECTION';
            entity['type'] = oscar;
            entity['section'] = report;
            entity['subsection'] = tango;
            entity = mike.bind(zulu)(entity);
 291:
            entity = undefined;
            return entity;
        }
    };
    mike['setSection'] = golf;
    golf = function(argFoo) { // Original name: setSearchQuery
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_SET_SEARCH_QUERY';
        mike['type'] = report;
        report = argFoo;
        mike['searchQuery'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['setSearchQuery'] = golf;
    golf = function(argFoo, argBar) { // Original name: selectRole
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.dispatch;
        entity = {};
        tango = 'GUILD_SETTINGS_ROLE_SELECT';
        entity['type'] = tango;
        tango = argFoo;
        entity['roleId'] = tango;
        tango = argBar;
        entity['searchQuery'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['selectRole'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: updateEmbed
        options = argFoo;
        var _closure2_slot0 = options;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 12;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.patch;
        zulu = {};
        golf = _closure1_slot10;
        oscar = golf.GUILD_WIDGET;
        oscar = oscar.bind(golf)(options);
        zulu['url'] = oscar;
        oscar = {};
        golf = argBar;
        oscar['enabled'] = golf;
        golf = argBaz;
        oscar['channel_id'] = golf;
        zulu['body'] = oscar;
        oscar = true;
        zulu['oldFormErrors'] = oscar;
        zulu['rejectWithError'] = oscar;
        tango = tango.bind(report)(zulu);
        zulu = tango.then;
        mike = function(argFoo) {
            report = argFoo;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'GUILD_SETTINGS_SET_WIDGET';
            mike['type'] = oscar;
            oscar = _closure2_slot0;
            mike['guildId'] = oscar;
            oscar = report.body;
            oscar = oscar.enabled;
            mike['enabled'] = oscar;
            report = report.body;
            report = report.channel_id;
            mike['channelId'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateEmbed'] = golf;
    golf = function(argFoo) { // Original name: updateMFALevel
        _fun72891: for(var _fun72891_ip = 0; ; ) switch(_fun72891_ip) {
 0:
            mike = argFoo;
            zulu = mike.guildId;
            var _closure2_slot0 = zulu;
            zulu = mike.level;
            var _closure2_slot1 = zulu;
            oscar = mike.isEnabled;
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 13;
            mike = options[mike];
            report = undefined;
            tango = zulu.bind(report)(mike);
            zulu = {};
            mike = {};
            romeo = _closure1_slot0;
            yankee = 14;
            verify = options[yankee];
            verify = romeo.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = options[yankee];
            options = romeo.bind(report)(options);
            options = options.t;
            options = options.Wi9LER;
            options = verify.bind(offset)(options);
            mike['title'] = options;
            offset = _closure1_slot0;
            golf = _closure1_slot2;
            options = golf[yankee];
            options = offset.bind(report)(options);
            verify = options.intl;
            options = verify.string;
            golf = golf[yankee];
            golf = offset.bind(report)(golf);
            golf = golf.t;
            if(oscar) { _fun72891_ip = 171; continue _fun72891 }
 158:
            oscar = golf.yZcYGR;
            oscar = options.bind(verify)(oscar);
            _fun72891_ip = 182; continue _fun72891;
 171:
            golf = golf.MP0Ho6;
            oscar = options.bind(verify)(golf);
 182:
            mike['actionText'] = oscar;
            zulu['modalProps'] = mike;
            mike = false;
            zulu['checkEnabled'] = mike;
            mike = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                zulu = entity.HTTP;
                mike = zulu.post;
                entity = {};
                golf = _closure1_slot10;
                oscar = golf.GUILD_MFA;
                tango = _closure2_slot0;
                tango = oscar.bind(golf)(tango);
                entity['url'] = tango;
                tango = {};
                report = _closure2_slot1;
                tango['level'] = report;
                options = argFoo;
                verify = tango;
                report = copyDataProperties(verify, options);
                entity['body'] = tango;
                tango = true;
                entity['oldFormErrors'] = tango;
                tango = false;
                entity['rejectWithError'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = tango.bind(report)(mike, zulu);
            mike = zulu.then;
            entity = function(argFoo) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.dispatch;
                entity = {};
                tango = 'GUILD_SETTINGS_SET_MFA_SUCCESS';
                entity['type'] = tango;
                tango = argFoo;
                tango = tango.body;
                tango = tango.level;
                entity['level'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['updateMFALevel'] = golf;
    golf = function(argFoo, argBar) { // Original name: updateIcon
        verify = argFoo;
        golf = argBar;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = golf;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 12;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.patch;
        zulu = {};
        options = _closure1_slot10;
        oscar = options.GUILD;
        oscar = oscar.bind(options)(verify);
        zulu['url'] = oscar;
        oscar = {};
        oscar['icon'] = golf;
        zulu['body'] = oscar;
        oscar = true;
        zulu['oldFormErrors'] = oscar;
        oscar = false;
        zulu['rejectWithError'] = oscar;
        report = tango.bind(report)(zulu);
        tango = report.then;
        zulu = function() {
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 10;
            mike = report[entity];
            entity = undefined;
            golf = tango.bind(entity)(mike);
            oscar = golf.dispatch;
            zulu = {};
            mike = 'GUILD_SETTINGS_UPDATE';
            zulu['type'] = mike;
            options = _closure2_slot1;
            zulu['icon'] = options;
            zulu = oscar.bind(golf)(zulu);
            zulu = 15;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.checkGuildTemplateDirty;
            mike = _closure2_slot0;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'GUILD_SETTINGS_SUBMIT_FAILURE';
            entity['type'] = tango;
            tango = argFoo;
            tango = tango.body;
            entity['errors'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    mike['updateIcon'] = golf;
    golf = function(argFoo) { // Original name: cancelChanges
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_CANCEL_CHANGES';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['cancelChanges'] = golf;
    golf = function(argFoo) { // Original name: updateGuild
        _fun72898: for(var _fun72898_ip = 0; ; ) switch(_fun72898_ip) {
 0:
            oscar = argFoo;
            mike = oscar.safetyAlertsChannelId;
            zulu = oscar.profile;
            tango = null;
            report = Object.create(tango);
            entity = 0;
            report['safetyAlertsChannelId'] = entity;
            report['profile'] = entity;
            offset = {};
            verify = oscar;
            options = report;
            verify = copyDataProperties(offset, verify, options);
            report = {};
            offset = report;
            entity = copyDataProperties(offset, verify);
            if(!(tango != zulu)) { _fun72898_ip = 97; continue _fun72898 }
 57:
            entity = {};
            oscar = report.profile;
            if(!(tango == oscar)) { _fun72898_ip = 71; continue _fun72898 }
 69:
            oscar = {};
 71:
            offset = entity;
            verify = oscar;
            oscar = copyDataProperties(offset, verify);
            offset = entity;
            verify = zulu;
            zulu = copyDataProperties(offset, verify);
            report['profile'] = entity;
 97:
            oscar = _closure1_slot9;
            zulu = oscar.getGuildId;
            zulu = zulu.bind(oscar)();
            zulu = tango != zulu;
            if(!zulu) { _fun72898_ip = 125; continue _fun72898 }
 121:
            zulu = tango != mike;
 125:
            if(!zulu) { _fun72898_ip = 134; continue _fun72898 }
 128:
            report['safetyAlertsChannelId'] = mike;
 134:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'GUILD_SETTINGS_UPDATE';
            mike['type'] = oscar;
            offset = mike;
            verify = report;
            report = copyDataProperties(offset, verify);
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['updateGuild'] = golf;
    golf = function(argFoo, argBar) { // Original name: updateGuildProfile
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_PROFILE_UPDATE';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        oscar = argBar;
        golf = mike;
        report = copyDataProperties(golf, oscar);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateGuildProfile'] = golf;
    golf = function(argFoo, argBar) { // Original name: saveGuild
        _fun72900: for(var _fun72900_ip = 0; ; ) switch(_fun72900_ip) {
 0:
            verify = argFoo;
            tango = argBar;
            golf = arguments[2];
            var _closure2_slot0 = verify;
            record = tango.name;
            config = tango.description;
            sequence = tango.icon;
            vacuum = tango.splash;
            control = tango.banner;
            source = tango.homeHeader;
            result = tango.afkChannelId;
            output = tango.afkTimeout;
            sizing = tango.systemChannelId;
            kilo = tango.verificationLevel;
            backup = tango.defaultMessageNotifications;
            foxtrot = tango.explicitContentFilter;
            update = tango.features;
            romeo = tango.systemChannelFlags;
            echo = tango.preferredLocale;
            yankee = tango.rulesChannelId;
            mike = tango.safetyAlertsChannelId;
            options = tango.discoverySplash;
            zulu = tango.publicUpdatesChannelId;
            offset = tango.premiumProgressBarEnabled;
            oscar = tango.profile;
            tango = undefined;
            if(!(golf === tango)) { _fun72900_ip = 146; continue _fun72900 }
 144:
            golf = {};
 146:
            var _closure2_slot1 = golf;
            report = {};
            report['name'] = record;
            report['description'] = config;
            report['icon'] = sequence;
            report['splash'] = vacuum;
            report['banner'] = control;
            report['home_header'] = source;
            report['features'] = update;
            report['preferred_locale'] = echo;
            report['afk_channel_id'] = result;
            report['afk_timeout'] = output;
            report['system_channel_id'] = sizing;
            report['verification_level'] = kilo;
            report['default_message_notifications'] = backup;
            report['explicit_content_filter'] = foxtrot;
            report['system_channel_flags'] = romeo;
            report['rules_channel_id'] = yankee;
            report['discovery_splash'] = options;
            report['public_updates_channel_id'] = zulu;
            report['safety_alerts_channel_id'] = mike;
            mike = null;
            options = mike != offset;
            zulu = null;
            if(!options) { _fun72900_ip = 265; continue _fun72900 }
 255:
            options = {};
            options['premium_progress_bar_enabled'] = offset;
            zulu = options;
 265:
            papa = report;
            context = zulu;
            zulu = copyDataProperties(papa, context);
            zulu = oscar;
            if(!(mike != zulu)) { _fun72900_ip = 294; continue _fun72900 }
 282:
            mike = _closure1_slot14;
            zulu = mike.bind(tango)(oscar);
 294:
            mike = 'profile';
            report[mike] = zulu;
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 10;
            mike = options[mike];
            offset = zulu.bind(tango)(mike);
            zulu = offset.dispatch;
            mike = {};
            yankee = 'GUILD_SETTINGS_SUBMIT';
            mike['type'] = yankee;
            mike = zulu.bind(offset)(mike);
            zulu = _closure1_slot0;
            mike = 12;
            mike = options[mike];
            mike = zulu.bind(tango)(mike);
            tango = mike.HTTP;
            zulu = tango.patch;
            mike = {};
            options = _closure1_slot10;
            oscar = options.GUILD;
            oscar = oscar.bind(options)(verify);
            mike['url'] = oscar;
            oscar = {};
            golf = golf.isForDiscovery;
            oscar['for_discovery'] = golf;
            mike['query'] = oscar;
            mike['body'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            report = false;
            mike['rejectWithError'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 10;
                mike = tango[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                report = oscar.dispatch;
                mike = {};
                golf = 'GUILD_SETTINGS_SUBMIT_SUCCESS';
                mike['type'] = golf;
                golf = argFoo;
                golf = golf.body;
                mike['guild'] = golf;
                mike = report.bind(oscar)(mike);
                mike = 15;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.checkGuildTemplateDirty;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = function(argFoo) {
                _fun72902: for(var _fun72902_ip = 0; ; ) switch(_fun72902_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 10;
                    tango = tango[mike];
                    mike = undefined;
                    oscar = report.bind(mike)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'GUILD_SETTINGS_SUBMIT_FAILURE';
                    tango['type'] = golf;
                    golf = entity.body;
                    tango['errors'] = golf;
                    tango = report.bind(oscar)(tango);
                    oscar = _closure1_slot15;
                    report = oscar.error;
                    tango = {};
                    zulu = entity.body;
                    tango['errors'] = zulu;
                    zulu = 'Failed to save guild settings';
                    zulu = report.bind(oscar)(zulu, tango);
                    zulu = _closure2_slot1;
                    zulu = zulu.throwErr;
                    if(zulu) { _fun72902_ip = 111; continue _fun72902 }
 109:
                    return mike;
 111:
                    entity = entity.body;
                    throw entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike['saveGuild'] = golf;
    golf = function(argFoo, argBar) { // Original name: updateGuildModeration
        options = argFoo;
        oscar = argBar;
        var _closure2_slot0 = options;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 12;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.patch;
        mike = {};
        golf = _closure1_slot10;
        report = golf.GUILD;
        report = report.bind(golf)(options);
        mike['url'] = report;
        report = {};
        golf = oscar.verificationLevel;
        report['verification_level'] = golf;
        oscar = oscar.explicitContentFilter;
        report['explicit_content_filter'] = oscar;
        mike['body'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        report = false;
        mike['rejectWithError'] = report;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.then;
        entity = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 15;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.checkGuildTemplateDirty;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            entity = argFoo;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['updateGuildModeration'] = golf;
    golf = function(argFoo, argBar) { // Original name: transferOwnership
        _fun72905: for(var _fun72905_ip = 0; ; ) switch(_fun72905_ip) {
 0:
            zulu = arguments[2];
            mike = arguments[3];
            tango = argFoo;
            var _closure2_slot0 = tango;
            tango = argBar;
            var _closure2_slot1 = tango;
            tango = undefined;
            if(!(zulu === tango)) { _fun72905_ip = 30; continue _fun72905 }
 28:
            zulu = null;
 30:
            var _closure2_slot2 = zulu;
            if(!(mike === tango)) { _fun72905_ip = 40; continue _fun72905 }
 38:
            mike = null;
 40:
            var _closure2_slot3 = mike;
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 13;
            mike = offset[mike];
            zulu = zulu.bind(tango)(mike);
            mike = {};
            report = {};
            verify = _closure1_slot0;
            oscar = 14;
            golf = offset[oscar];
            golf = verify.bind(tango)(golf);
            yankee = golf.intl;
            options = yankee.string;
            golf = offset[oscar];
            golf = verify.bind(tango)(golf);
            golf = golf.t;
            golf = golf.Z5s7PD;
            golf = options.bind(yankee)(golf);
            report['title'] = golf;
            golf = offset[oscar];
            golf = verify.bind(tango)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(tango)(oscar);
            oscar = oscar.t;
            oscar = oscar.Z5s7PD;
            oscar = golf.bind(options)(oscar);
            report['actionText'] = oscar;
            mike['modalProps'] = report;
            report = false;
            mike['checkEnabled'] = report;
            entity = function(argFoo) {
                mike = _closure1_slot1;
                offset = _closure1_slot2;
                entity = 16;
                entity = offset[entity];
                verify = undefined;
                zulu = mike.bind(verify)(entity);
                mike = zulu.patch;
                entity = {};
                options = _closure1_slot10;
                tango = options.GUILD;
                golf = _closure2_slot0;
                tango = tango.bind(options)(golf);
                entity['url'] = tango;
                tango = {};
                options = _closure2_slot1;
                tango['owner_id'] = options;
                options = _closure2_slot3;
                tango['code'] = options;
                yankee = argFoo;
                romeo = tango;
                options = copyDataProperties(romeo, yankee);
                entity['body'] = tango;
                tango = true;
                entity['oldFormErrors'] = tango;
                tango = {};
                options = _closure1_slot0;
                report = 17;
                report = offset[report];
                report = options.bind(verify)(report);
                report = report.NetworkActionNames;
                report = report.GUILD_TRANSFER_OWNERSHIP;
                tango['event'] = report;
                report = {};
                report['guild_id'] = golf;
                oscar = _closure2_slot2;
                report['verification_type'] = oscar;
                tango['properties'] = report;
                entity['trackedActionData'] = tango;
                tango = false;
                entity['rejectWithError'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    mike['transferOwnership'] = golf;
    golf = function(argFoo) { // Original name: sendTransferOwnershipPincode
        _fun72907: for(var _fun72907_ip = 0; ; ) switch(_fun72907_ip) {
 0:
            golf = argFoo;
            oscar = arguments[1];
            verify = undefined;
            if(!(oscar === verify)) { _fun72907_ip = 14; continue _fun72907 }
 12:
            oscar = false;
 14:
            mike = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 16;
            entity = offset[entity];
            zulu = mike.bind(verify)(entity);
            mike = zulu.put;
            entity = {};
            options = _closure1_slot10;
            tango = options.GUILD_PINCODE;
            tango = tango.bind(options)(golf);
            entity['url'] = tango;
            tango = true;
            entity['oldFormErrors'] = tango;
            tango = {};
            options = _closure1_slot0;
            report = 17;
            report = offset[report];
            report = options.bind(verify)(report);
            report = report.NetworkActionNames;
            report = report.GUILD_TRANSFER_OWNERSHIP_SEND_CODE;
            tango['event'] = report;
            report = {};
            report['guild_id'] = golf;
            report['is_resend'] = oscar;
            tango['properties'] = report;
            entity['trackedActionData'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['sendTransferOwnershipPincode'] = golf;
    golf = function(argFoo, argBar) { // Original name: deleteGuild
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot1;
        offset = _closure1_slot2;
        mike = 13;
        mike = offset[mike];
        report = undefined;
        tango = zulu.bind(report)(mike);
        zulu = {};
        mike = {};
        verify = _closure1_slot0;
        oscar = 14;
        golf = offset[oscar];
        golf = verify.bind(report)(golf);
        romeo = golf.intl;
        yankee = romeo.formatToPlainString;
        golf = offset[oscar];
        golf = verify.bind(report)(golf);
        golf = golf.t;
        options = golf.us7mCw;
        golf = {};
        foxtrot = argBar;
        golf['name'] = foxtrot;
        golf = yankee.bind(romeo)(options, golf);
        mike['title'] = golf;
        golf = offset[oscar];
        golf = verify.bind(report)(golf);
        options = golf.intl;
        golf = options.string;
        oscar = offset[oscar];
        oscar = verify.bind(report)(oscar);
        oscar = oscar.t;
        oscar = oscar.l3hWPz;
        oscar = golf.bind(options)(oscar);
        mike['actionText'] = oscar;
        oscar = true;
        mike['disallowBackupCodes'] = oscar;
        zulu['modalProps'] = mike;
        mike = false;
        zulu['checkEnabled'] = mike;
        mike = function(argFoo) {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.HTTP;
            mike = zulu.post;
            entity = {};
            oscar = _closure1_slot10;
            report = oscar.GUILD_DELETE;
            tango = _closure2_slot0;
            tango = report.bind(oscar)(tango);
            entity['url'] = tango;
            tango = argFoo;
            entity['body'] = tango;
            tango = true;
            entity['oldFormErrors'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = tango.bind(report)(mike, zulu);
        mike = zulu.then;
        entity = function() {
            mike = _closure1_slot16;
            entity = mike.close;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['deleteGuild'] = golf;
    golf = function(argFoo) { // Original name: leaveGuild
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun72913: for(var _fun72913_ip = 0; ; ) switch(_fun72913_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun72913_ip = 170; continue _fun72913 }
 10:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 12;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = mike.HTTP;
                    report = oscar.del;
                    mike = {};
                    options = _closure1_slot10;
                    golf = options.GUILD_LEAVE;
                    yankee = _closure2_slot0;
                    golf = golf.bind(options)(yankee);
                    mike['url'] = golf;
                    golf = {};
                    offset = _closure1_slot5;
                    options = offset.isLurking;
                    options = options.bind(offset)(yankee);
                    if(options) { _fun72913_ip = 113; continue _fun72913 }
 94:
                    yankee = _closure1_slot7;
                    offset = yankee.isCurrentUserGuest;
                    verify = _closure2_slot0;
                    options = offset.bind(yankee)(verify);
 113:
                    golf['lurking'] = options;
                    mike['body'] = golf;
                    golf = true;
                    mike['oldFormErrors'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=144);
 142:
                    return mike;
 144:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun72913_ip = 167; continue _fun72913 }
 150:
                    report = _closure1_slot16;
                    tango = report.close;
                    tango = tango.bind(report)();
                    return zulu;
 167:
                    return mike;
 170:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['leaveGuild'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: updateMemberRoles
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        mike = argGrault;
        var _closure2_slot4 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun72916: for(var _fun72916_ip = 0; ; ) switch(_fun72916_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun72916_ip = 265; continue _fun72916 }
 12:
                    golf = _closure1_slot4;
                    oscar = golf.isFullServerPreview;
                    tango = _closure2_slot0;
                    tango = oscar.bind(golf)(tango);
                    if(!tango) { _fun72916_ip = 65; continue _fun72916 }
 40:
                    oscar = _closure2_slot1;
                    golf = _closure1_slot6;
                    tango = golf.getId;
                    tango = tango.bind(golf)();
                    if(!(oscar !== tango)) { _fun72916_ip = 218; continue _fun72916 }
 65:
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 12;
                    oscar = oscar[tango];
                    tango = undefined;
                    tango = golf.bind(tango)(oscar);
                    golf = tango.HTTP;
                    oscar = golf.patch;
                    tango = {};
                    yankee = _closure1_slot10;
                    offset = yankee.GUILD_MEMBER;
                    verify = _closure2_slot0;
                    options = _closure2_slot1;
                    options = offset.bind(yankee)(verify, options);
                    tango['url'] = options;
                    options = {};
                    verify = _closure2_slot2;
                    options['roles'] = verify;
                    tango['body'] = options;
                    options = true;
                    tango['oldFormErrors'] = options;
                    options = false;
                    tango['rejectWithError'] = options;
                    tango = oscar.bind(golf)(tango);
                    SaveGenerator(address=165);
 163:
                    return tango;
 165:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun72916_ip = 215; continue _fun72916 }
 171:
                    options = _closure2_slot3;
                    golf = options.forEach;
                    oscar = function(argFoo) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.dispatch;
                        entity = {};
                        tango = 'GUILD_ROLE_MEMBER_ADD';
                        entity['type'] = tango;
                        report = _closure2_slot0;
                        entity['guildId'] = report;
                        report = argFoo;
                        entity['roleId'] = report;
                        tango = _closure2_slot1;
                        entity['userId'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    oscar = golf.bind(options)(oscar);
                    golf = _closure2_slot4;
                    oscar = golf.forEach;
                    report = function(argFoo) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.dispatch;
                        entity = {};
                        tango = 'GUILD_ROLE_MEMBER_REMOVE';
                        entity['type'] = tango;
                        report = _closure2_slot0;
                        entity['guildId'] = report;
                        report = argFoo;
                        entity['roleId'] = report;
                        tango = _closure2_slot1;
                        entity['userId'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    report = oscar.bind(golf)(report);
                    _fun72916_ip = 260; continue _fun72916;
 215:
                    return tango;
 218:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 18;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.updateImpersonatedRoles;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot2;
                    mike = tango.bind(report)(zulu, mike);
 260:
                    mike = undefined;
                    return mike;
 265:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['updateMemberRoles'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: bulkAddMemberRoles
        options = argFoo;
        golf = argBar;
        var _closure2_slot0 = options;
        var _closure2_slot1 = golf;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 12;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.patch;
        mike = {};
        oscar = _closure1_slot10;
        report = oscar.GUILD_ROLE_MEMBERS;
        report = report.bind(oscar)(options, golf);
        mike['url'] = report;
        report = {};
        oscar = argBaz;
        report['member_ids'] = oscar;
        mike['body'] = report;
        report = false;
        mike['rejectWithError'] = report;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.then;
        entity = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'GUILD_ROLE_MEMBER_BULK_ADD';
            mike['type'] = report;
            oscar = _closure2_slot0;
            mike['guildId'] = oscar;
            report = _closure2_slot1;
            mike['roleId'] = report;
            report = argFoo;
            report = report.body;
            mike['added'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['bulkAddMemberRoles'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: enableIntegration
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        oscar = _closure1_slot10;
        report = oscar.GUILD_INTEGRATIONS;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = {};
        report = argBar;
        tango['type'] = report;
        report = argBaz;
        tango['id'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['enableIntegration'] = golf;
    golf = function(argFoo, argBar) { // Original name: disableIntegration
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golf = _closure1_slot10;
        oscar = golf.GUILD_INTEGRATION;
        report = argFoo;
        tango = argBar;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['disableIntegration'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: updateIntegration
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.patch;
        entity = {};
        golf = _closure1_slot10;
        oscar = golf.GUILD_INTEGRATION;
        report = argFoo;
        tango = argBar;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        tango = {};
        report = argBaz;
        tango['expire_behavior'] = report;
        report = argCorge;
        tango['expire_grace_period'] = report;
        report = argGrault;
        tango['enable_emoticons'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['updateIntegration'] = golf;
    golf = function(argFoo, argBar) { // Original name: syncIntegration
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.HTTP;
        zulu = tango.post;
        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        options = _closure1_slot10;
        golf = options.GUILD_INTEGRATION_SYNC;
        oscar = argFoo;
        report = argBar;
        report = golf.bind(options)(oscar, report);
        mike['url'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['syncIntegration'] = golf;
    var _closure1_slot16 = mike;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/GuildSettingsActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();