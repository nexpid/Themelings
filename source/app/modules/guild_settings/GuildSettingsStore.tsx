// app/modules/guild_settings/GuildSettingsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun72920: for(var _fun72920_ip = 0; ; ) switch(_fun72920_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot55;
            entity = entity.bind(zulu)();
            if(entity) { _fun72920_ip = 51; continue _fun72920 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun72920_ip = 92; continue _fun72920;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun72920_ip = 71; continue _fun72920 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot54 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun72921: for(var _fun72921_ip = 0; ; ) switch(_fun72921_ip) {
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
            _fun72921_ip = 76; continue _fun72921;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot55 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot55 = entity;
    entity = function(argFoo) { // Original name: syncGuild
        _fun72924: for(var _fun72924_ip = 0; ; ) switch(_fun72924_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot27;
            entity = null;
            if(!(entity != mike)) { _fun72924_ip = 90; continue _fun72924 }
 16:
            mike = _closure1_slot26;
            if(!(entity != mike)) { _fun72924_ip = 90; continue _fun72924 }
 24:
            mike = _closure1_slot26;
            mike = mike.id;
            if(!(mike === report)) { _fun72924_ip = 90; continue _fun72924 }
 37:
            tango = _closure1_slot13;
            mike = tango.getGuild;
            mike = mike.bind(tango)(report);
            entity = entity != mike;
            if(!entity) { _fun72924_ip = 88; continue _fun72924 }
 58:
            report = _closure1_slot26;
            tango = _closure1_slot27;
            if(!(report !== tango)) { _fun72924_ip = 78; continue _fun72924 }
 70:
            var _closure1_slot26 = mike;
            entity = true;
            _fun72924_ip = 88; continue _fun72924;
 78:
            _closure1_slot26 = mike;
            var _closure1_slot27 = mike;
            entity = true;
 88:
            return entity;
 90:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot56 = entity;
    romeo = function(argFoo) { // Original name: handleFormInit
        _fun72925: for(var _fun72925_ip = 0; ; ) switch(_fun72925_ip) {
 0:
            entity = argFoo;
            options = entity.guildId;
            oscar = entity.section;
            mike = entity.subsection;
            tango = entity.location;
            zulu = _closure1_slot13;
            mike = zulu.getGuild;
            report = mike.bind(zulu)(options);
            zulu = null;
            if(!(zulu != report)) { _fun72925_ip = 241; continue _fun72925 }
 50:
            golf = _closure1_slot8;
            mike = golf.getProfile;
            mike = mike.bind(golf)(options);
            _closure1_slot27 = report;
            _closure1_slot26 = report;
            var _closure1_slot29 = mike;
            var _closure1_slot28 = mike;
            mike = _closure1_slot15;
            mike = mike.OPEN;
            _closure1_slot37 = mike;
            mike = {};
            _closure1_slot38 = mike;
            golf = _closure1_slot1;
            report = _closure1_slot2;
            mike = 15;
            report = report[mike];
            mike = undefined;
            golf = golf.bind(mike)(report);
            report = golf.castGuildIdAsEveryoneGuildRoleId;
            report = report.bind(golf)(options);
            var _closure1_slot30 = report;
            report = _closure1_slot27;
            report = report.mfaLevel;
            _closure1_slot43 = report;
            report = _closure1_slot47;
            _closure1_slot48 = report;
            var _closure1_slot32 = zulu;
            _closure1_slot44 = tango;
            if(!(zulu != oscar)) { _fun72925_ip = 239; continue _fun72925 }
 172:
            zulu = {};
            tango = 'stack';
            zulu['type'] = tango;
            report = {};
            tango = 'landing';
            report['key'] = tango;
            tango = _closure1_slot17;
            tango = tango.LANDING;
            report['name'] = tango;
            tango = new Array(2);
            tango[0] = report;
            report = {};
            report['key'] = oscar;
            report['name'] = oscar;
            tango[1] = report;
            zulu['routes'] = tango;
            var _closure1_slot31 = zulu;
 239:
            return mike;
 241:
            mike = _closure1_slot58;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot57 = romeo;
    yankee = function() { // Original name: handleFormClose
        zulu = false;
        _closure1_slot36 = zulu;
        entity = _closure1_slot15;
        entity = entity.CLOSED;
        _closure1_slot37 = entity;
        entity = null;
        _closure1_slot27 = entity;
        _closure1_slot26 = entity;
        _closure1_slot39 = zulu;
        _closure1_slot40 = entity;
        _closure1_slot41 = entity;
        zulu = 0;
        _closure1_slot42 = zulu;
        _closure1_slot49 = entity;
        _closure1_slot52 = entity;
        _closure1_slot53 = entity;
        var _closure1_slot23 = entity;
        var _closure1_slot24 = entity;
        var _closure1_slot25 = entity;
        entity = _closure1_slot16;
        entity = entity.NONE;
        _closure1_slot43 = entity;
        entity = undefined;
        _closure1_slot31 = entity;
        return entity;
    };
    var _closure1_slot58 = yankee;
    entity = function(argFoo) { // Original name: _createInvite
        _fun72927: for(var _fun72927_ip = 0; ; ) switch(_fun72927_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot11;
            entity = {};
            tango = mike.code;
            entity['code'] = tango;
            tango = mike.temporary;
            entity['temporary'] = tango;
            tango = mike.revoked;
            entity['revoked'] = tango;
            oscar = mike.inviter;
            tango = null;
            golf = tango != oscar;
            oscar = null;
            if(!golf) { _fun72927_ip = 90; continue _fun72927 }
 60:
            verify = _closure1_slot12;
            yankee = mike.inviter;
            options = verify.prototype;
            options = Object.create(options, {constructor: {value: verify}});
            romeo = options;
            golf = new romeo[verify](yankee, offset);
            oscar = golf instanceof Object ? golf : options;
 90:
            entity['inviter'] = oscar;
            options = _closure1_slot9;
            golf = mike.channel;
            oscar = undefined;
            golf = options.bind(oscar)(golf);
            entity['channel'] = golf;
            golf = mike.guild;
            options = tango != golf;
            golf = null;
            if(!options) { _fun72927_ip = 158; continue _fun72927 }
 129:
            offset = _closure1_slot10;
            yankee = mike.guild;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            romeo = verify;
            options = new romeo[offset](yankee, offset);
            golf = options instanceof Object ? options : verify;
 158:
            entity['guild'] = golf;
            golf = mike.uses;
            entity['uses'] = golf;
            golf = mike.max_uses;
            entity['maxUses'] = golf;
            golf = mike.max_age;
            entity['maxAge'] = golf;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            report = 21;
            report = options[report];
            report = golf.bind(oscar)(report);
            golf = mike.created_at;
            options = tango != golf;
            tango = undefined;
            if(!options) { _fun72927_ip = 233; continue _fun72927 }
 230:
            tango = golf;
 233:
            tango = report.bind(oscar)(tango);
            entity['createdAt'] = tango;
            mike = mike.flags;
            entity['flags'] = mike;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            romeo = mike;
            yankee = entity;
            entity = new romeo[zulu](yankee, offset);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    var _closure1_slot59 = entity;
    offset = function(argFoo) { // Original name: handleIntegrationsUpdate
        _fun72928: for(var _fun72928_ip = 0; ; ) switch(_fun72928_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot27;
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun72928_ip = 37; continue _fun72928 }
 19:
            report = _closure1_slot37;
            mike = _closure1_slot15;
            mike = mike.OPEN;
            entity = report === mike;
 37:
            if(!entity) { _fun72928_ip = 126; continue _fun72928 }
 40:
            report = tango.type;
            mike = 'GUILD_INTEGRATIONS_UPDATE';
            mike = mike !== report;
            if(mike) { _fun72928_ip = 76; continue _fun72928 }
 58:
            report = tango.guildId;
            tango = _closure1_slot27;
            tango = tango.id;
            mike = report === tango;
 76:
            if(!mike) { _fun72928_ip = 123; continue _fun72928 }
 79:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 22;
            report = report[tango];
            tango = undefined;
            report = oscar.bind(tango)(report);
            tango = report.fetchGuildIntegrationsApplications;
            zulu = _closure1_slot27;
            zulu = zulu.id;
            zulu = tango.bind(report)(zulu);
            mike = undefined;
 123:
            entity = mike;
 126:
            return entity;
        }
    };
    var _closure1_slot60 = offset;
    foxtrot = global;
    verify = foxtrot.Object;
    tango = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(verify)(zulu, entity, mike);
    verify = 0;
    mike = golf[verify];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.createChannelRecordFromInvite;
    var _closure1_slot9 = mike;
    mike = 7;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 9;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 10;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 11;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 12;
    mike = golf[mike];
    backup = oscar.bind(entity)(mike);
    tango = backup.FormStates;
    var _closure1_slot15 = tango;
    mike = backup.MFALevels;
    var _closure1_slot16 = mike;
    kilo = backup.GuildSettingsSections;
    var _closure1_slot17 = kilo;
    kilo = backup.GuildSettingsSubsections;
    var _closure1_slot18 = kilo;
    backup = backup.Endpoints;
    var _closure1_slot19 = backup;
    backup = 13;
    backup = golf[backup];
    backup = oscar.bind(entity)(backup);
    backup = backup.DEFAULT_DISCOVERY_CATEGORY_ID;
    var _closure1_slot20 = backup;
    kilo = 14;
    kilo = golf[kilo];
    kilo = oscar.bind(entity)(kilo);
    sizing = kilo.PUBLIC_SUCCESS_MODAL_SEEN_KEY;
    var _closure1_slot21 = sizing;
    kilo = kilo.CREATE_NEW_CHANNEL_VALUE;
    var _closure1_slot22 = kilo;
    kilo = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'profile'];
    var _closure1_slot33 = kilo;
    kilo = ['brandColorPrimary', 'description', 'icon', 'name', 'traits', 'visibility'];
    var _closure1_slot34 = kilo;
    sizing = foxtrot.Set;
    foxtrot = sizing.prototype;
    kilo = Object.create(foxtrot, {constructor: {value: sizing}});
    echo = ['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader'];
    update = kilo;
    foxtrot = new update[sizing](echo, result);
    foxtrot = foxtrot instanceof Object ? foxtrot : kilo;
    var _closure1_slot35 = foxtrot;
    foxtrot = false;
    var _closure1_slot36 = foxtrot;
    tango = tango.CLOSED;
    var _closure1_slot37 = tango;
    tango = {};
    var _closure1_slot38 = tango;
    var _closure1_slot39 = foxtrot;
    tango = null;
    var _closure1_slot40 = tango;
    var _closure1_slot41 = tango;
    var _closure1_slot42 = verify;
    mike = mike.NONE;
    var _closure1_slot43 = mike;
    var _closure1_slot44 = tango;
    mike = {'primaryCategoryId': null, 'secondaryCategoryIds': null, 'keywords': null, 'emojiDiscoverabilityEnabled': true, 'partnerActionedTimestamp': null, 'partnerApplicationTimestamp': null, 'isPublished': false};
    mike['primaryCategoryId'] = backup;
    backup = new Array(0);
    mike['secondaryCategoryIds'] = backup;
    backup = new Array(0);
    mike['keywords'] = backup;
    backup = new Array(0);
    mike['reasonsToJoin'] = backup;
    backup = new Array(0);
    mike['socialLinks'] = backup;
    backup = '';
    mike['about'] = backup;
    var _closure1_slot45 = mike;
    var _closure1_slot46 = foxtrot;
    var _closure1_slot47 = mike;
    var _closure1_slot48 = mike;
    var _closure1_slot49 = tango;
    var _closure1_slot50 = verify;
    var _closure1_slot51 = tango;
    var _closure1_slot52 = tango;
    var _closure1_slot53 = tango;
    tango = 25;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    verify = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: GuildSettingsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot54;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            report = this;
            tango = report.waitFor;
            zulu = _closure1_slot13;
            mike = _closure1_slot8;
            entity = _closure1_slot14;
            entity = tango.bind(report)(zulu, mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(19);
        entity[0] = report;
        report = {};
        golf = 'getMetadata';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot48;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'hasChanges';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun72933: for(var _fun72933_ip = 0; ; ) switch(_fun72933_ip) {
 0:
                zulu = _closure1_slot1;
                entity = _closure1_slot2;
                oscar = 23;
                entity = entity[oscar];
                report = undefined;
                golf = zulu.bind(report)(entity);
                tango = golf.isEqual;
                zulu = _closure1_slot27;
                entity = _closure1_slot26;
                entity = tango.bind(golf)(zulu, entity);
                entity = !entity;
                if(entity) { _fun72933_ip = 91; continue _fun72933 }
 51:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                zulu = zulu[oscar];
                options = tango.bind(report)(zulu);
                golf = options.isEqual;
                tango = _closure1_slot48;
                zulu = _closure1_slot47;
                zulu = golf.bind(options)(tango, zulu);
                entity = !zulu;
 91:
                if(entity) { _fun72933_ip = 134; continue _fun72933 }
 94:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                zulu = zulu[oscar];
                report = tango.bind(report)(zulu);
                tango = report.isEqual;
                zulu = _closure1_slot29;
                mike = _closure1_slot28;
                mike = tango.bind(report)(zulu, mike);
                entity = !mike;
 134:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'isOpen';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot36;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getSavedRouteState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot31;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getSection';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot23;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'showNotice';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            entity = mike.hasChanges;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getGuildId';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun72938: for(var _fun72938_ip = 0; ; ) switch(_fun72938_ip) {
 0:
                zulu = _closure1_slot27;
                entity = null;
                zulu = entity != zulu;
                if(!zulu) { _fun72938_ip = 25; continue _fun72938 }
 16:
                mike = _closure1_slot27;
                entity = mike.id;
 25:
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'showPublicSuccessModal';
        report['key'] = golf;
        golf = function() { // Original name: value
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 24;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            zulu = mike.Storage;
            mike = zulu.get;
            entity = _closure1_slot21;
            entity = mike.bind(zulu)(entity);
            entity = !entity;
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getGuild';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot27;
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'getGuildProfile';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot29;
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'isSubmitting';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot37;
            entity = _closure1_slot15;
            entity = entity.SUBMITTING;
            entity = mike === entity;
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'isGuildMetadataLoaded';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot46;
            return entity;
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'getErrors';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot38;
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'getError';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun72945: for(var _fun72945_ip = 0; ; ) switch(_fun72945_ip) {
 0:
                mike = _closure1_slot38;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun72945_ip = 26; continue _fun72945 }
 23:
                entity = mike;
 26:
                return entity;
            }
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'getSelectedRoleId';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot30;
            return entity;
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'getSlug';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot32;
            return entity;
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'getBans';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = _closure1_slot49;
            entity = new Array(2);
            entity[0] = zulu;
            mike = _closure1_slot50;
            entity[1] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'getProps';
        report['key'] = golf;
        oscar = function() { // Original name: value
            tango = this;
            entity = {};
            mike = tango.isSubmitting;
            mike = mike.bind(tango)();
            entity['submitting'] = mike;
            zulu = _closure1_slot53;
            entity['integrations'] = zulu;
            zulu = _closure1_slot23;
            entity['section'] = zulu;
            zulu = _closure1_slot24;
            entity['subsection'] = zulu;
            zulu = _closure1_slot38;
            entity['errors'] = zulu;
            zulu = _closure1_slot27;
            entity['guild'] = zulu;
            zulu = _closure1_slot49;
            entity['bans'] = zulu;
            zulu = _closure1_slot50;
            entity['bansVersion'] = zulu;
            zulu = _closure1_slot52;
            entity['invites'] = zulu;
            zulu = _closure1_slot30;
            entity['selectedRoleId'] = zulu;
            zulu = _closure1_slot39;
            entity['embedEnabled'] = zulu;
            zulu = _closure1_slot40;
            entity['embedChannelId'] = zulu;
            zulu = _closure1_slot43;
            entity['mfaLevel'] = zulu;
            zulu = _closure1_slot25;
            entity['searchQuery'] = zulu;
            zulu = _closure1_slot41;
            entity['vanityURLCode'] = zulu;
            zulu = _closure1_slot42;
            entity['vanityURLUses'] = zulu;
            zulu = _closure1_slot26;
            entity['originalGuild'] = zulu;
            zulu = tango.hasChanges;
            zulu = zulu.bind(tango)();
            entity['hasChanges'] = zulu;
            zulu = _closure1_slot48;
            entity['guildMetadata'] = zulu;
            zulu = _closure1_slot44;
            entity['analyticsLocation'] = zulu;
            mike = _closure1_slot46;
            entity['isGuildMetadataLoaded'] = mike;
            return entity;
        };
        report['value'] = oscar;
        entity[18] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = tango.bind(entity)(verify);
    tango = 'GuildSettingsStore';
    verify['displayName'] = tango;
    tango = 19;
    tango = golf[tango];
    echo = options.bind(entity)(tango);
    tango = {};
    tango['GUILD_SETTINGS_INIT'] = romeo;
    romeo = function(argFoo) { // Original name: handleFormOpen
        mike = true;
        _closure1_slot36 = mike;
        zulu = _closure1_slot57;
        entity = undefined;
        mike = argFoo;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango['GUILD_SETTINGS_OPEN'] = romeo;
    tango['GUILD_SETTINGS_CLOSE'] = yankee;
    yankee = function(argFoo) { // Original name: handleUpdate
        _fun72951: for(var _fun72951_ip = 0; ; ) switch(_fun72951_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            tango = _closure1_slot27;
            zulu = null;
            if(!(zulu != tango)) { _fun72951_ip = 58; continue _fun72951 }
 22:
            tango = _closure1_slot33;
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun72952: for(var _fun72952_ip = 0; ; ) switch(_fun72952_ip) {
 0:
                    report = argFoo;
                    zulu = _closure1_slot27;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun72952_ip = 37; continue _fun72952 }
 19:
                    tango = _closure2_slot0;
                    zulu = tango.hasOwnProperty;
                    entity = zulu.bind(tango)(report);
 37:
                    if(!entity) { _fun72952_ip = 70; continue _fun72952 }
 40:
                    tango = _closure1_slot27;
                    zulu = tango.set;
                    entity = _closure2_slot0;
                    entity = entity[report];
                    entity = zulu.bind(tango)(report, entity);
                    _closure1_slot27 = entity;
 70:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            mike = function() { // Original name: validateUpdate
                _fun72953: for(var _fun72953_ip = 0; ; ) switch(_fun72953_ip) {
 0:
                    tango = _closure1_slot27;
                    zulu = null;
                    if(!(zulu != tango)) { _fun72953_ip = 88; continue _fun72953 }
 15:
                    tango = _closure1_slot27;
                    zulu = tango.toJS;
                    zulu = zulu.bind(tango)();
                    var _closure3_slot0 = zulu;
                    tango = _closure1_slot26;
                    zulu = tango.toJS;
                    zulu = zulu.bind(tango)();
                    var _closure3_slot1 = zulu;
                    tango = _closure1_slot33;
                    zulu = tango.some;
                    entity = function(argFoo) {
                        zulu = argFoo;
                        mike = _closure3_slot0;
                        mike = mike[zulu];
                        entity = _closure3_slot1;
                        entity = entity[zulu];
                        entity = mike !== entity;
                        return entity;
                    };
                    entity = zulu.bind(tango)(entity);
                    if(entity) { _fun72953_ip = 84; continue _fun72953 }
 76:
                    entity = _closure1_slot26;
                    _closure1_slot27 = entity;
 84:
                    entity = undefined;
                    return entity;
 88:
                    entity = false;
                    return entity;
                }
            };
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 58:
            entity = false;
            return entity;
        }
    };
    tango['GUILD_SETTINGS_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleProfileUpdate
        _fun72955: for(var _fun72955_ip = 0; ; ) switch(_fun72955_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            tango = mike.guildId;
            zulu = _closure1_slot29;
            report = null;
            if(!(report != zulu)) { _fun72955_ip = 73; continue _fun72955 }
 27:
            zulu = _closure1_slot27;
            if(!(report != zulu)) { _fun72955_ip = 73; continue _fun72955 }
 35:
            zulu = _closure1_slot27;
            zulu = zulu.id;
            if(!(zulu === tango)) { _fun72955_ip = 73; continue _fun72955 }
 48:
            zulu = _closure1_slot34;
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun72956: for(var _fun72956_ip = 0; ; ) switch(_fun72956_ip) {
 0:
                    tango = argFoo;
                    entity = _closure1_slot29;
                    oscar = null;
                    if(!(oscar != entity)) { _fun72956_ip = 86; continue _fun72956 }
 16:
                    report = _closure2_slot0;
                    zulu = report.hasOwnProperty;
                    zulu = zulu.bind(report)(tango);
                    if(!zulu) { _fun72956_ip = 86; continue _fun72956 }
 37:
                    zulu = _closure1_slot29;
                    zulu = zulu[tango];
                    entity = _closure2_slot0;
                    report = entity[tango];
                    if(!(oscar != report)) { _fun72956_ip = 86; continue _fun72956 }
 57:
                    entity = {};
                    options = _closure1_slot29;
                    verify = entity;
                    golf = copyDataProperties(verify, options);
                    if(!(oscar != report)) { _fun72956_ip = 77; continue _fun72956 }
 74:
                    zulu = report;
 77:
                    entity[tango] = zulu;
                    _closure1_slot29 = entity;
 86:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
 73:
            entity = false;
            return entity;
        }
    };
    tango['GUILD_SETTINGS_PROFILE_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleCancelChanges
        _fun72957: for(var _fun72957_ip = 0; ; ) switch(_fun72957_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            entity = {};
            _closure1_slot38 = entity;
            zulu = _closure1_slot13;
            entity = zulu.getGuild;
            entity = entity.bind(zulu)(tango);
            zulu = null;
            if(!(zulu != entity)) { _fun72957_ip = 45; continue _fun72957 }
 37:
            _closure1_slot27 = entity;
            _closure1_slot26 = entity;
 45:
            entity = undefined;
            return entity;
        }
    };
    tango['GUILD_SETTINGS_CANCEL_CHANGES'] = yankee;
    yankee = function(argFoo) { // Original name: handleSaveRouteStack
        entity = argFoo;
        mike = entity.state;
        _closure1_slot31 = mike;
        entity = false;
        return entity;
    };
    tango['GUILD_SETTINGS_SAVE_ROUTE_STACK'] = yankee;
    yankee = function() { // Original name: handleFormSubmit
        entity = _closure1_slot15;
        entity = entity.SUBMITTING;
        _closure1_slot37 = entity;
        entity = {};
        _closure1_slot38 = entity;
        entity = undefined;
        return entity;
    };
    tango['GUILD_SETTINGS_SUBMIT'] = yankee;
    yankee = function() { // Original name: handleSubmitSuccess
        entity = _closure1_slot15;
        entity = entity.OPEN;
        _closure1_slot37 = entity;
        entity = undefined;
        return entity;
    };
    tango['GUILD_SETTINGS_SUBMIT_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handleFormSubmitFailure
        _fun72961: for(var _fun72961_ip = 0; ; ) switch(_fun72961_ip) {
 0:
            entity = _closure1_slot15;
            entity = entity.OPEN;
            _closure1_slot37 = entity;
            entity = _closure1_slot23;
            zulu = null;
            if(!(zulu == entity)) { _fun72961_ip = 76; continue _fun72961 }
 27:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 20;
            report = report[tango];
            tango = undefined;
            oscar = oscar.bind(tango)(report);
            report = oscar.getDefaultGuildSettingsSection;
            golf = _closure1_slot27;
            options = zulu == golf;
            if(options) { _fun72961_ip = 71; continue _fun72961 }
 66:
            tango = golf.id;
 71:
            entity = report.bind(oscar)(tango);
 76:
            _closure1_slot23 = entity;
            _closure1_slot24 = zulu;
            entity = argFoo;
            entity = entity.errors;
            if(!(zulu == entity)) { _fun72961_ip = 99; continue _fun72961 }
 97:
            entity = {};
 99:
            _closure1_slot38 = entity;
            entity = undefined;
            return entity;
        }
    };
    tango['GUILD_SETTINGS_SUBMIT_FAILURE'] = yankee;
    yankee = function(argFoo) { // Original name: handleSetSection
        _fun72962: for(var _fun72962_ip = 0; ; ) switch(_fun72962_ip) {
 0:
            report = argFoo;
            tango = _closure1_slot27;
            zulu = null;
            if(!(zulu != tango)) { _fun72962_ip = 770; continue _fun72962 }
 21:
            tango = _closure1_slot23;
            oscar = report.section;
            _closure1_slot23 = oscar;
            oscar = report.subsection;
            _closure1_slot24 = oscar;
            golf = _closure1_slot23;
            oscar = _closure1_slot17;
            oscar = oscar.BANS;
            if(!(golf !== oscar)) { _fun72962_ip = 654; continue _fun72962 }
 65:
            golf = _closure1_slot23;
            oscar = _closure1_slot17;
            oscar = oscar.INSTANT_INVITES;
            if(!(golf !== oscar)) { _fun72962_ip = 558; continue _fun72962 }
 86:
            golf = _closure1_slot23;
            oscar = _closure1_slot17;
            oscar = oscar.INVITES;
            if(!(golf !== oscar)) { _fun72962_ip = 558; continue _fun72962 }
 107:
            golf = _closure1_slot23;
            oscar = _closure1_slot17;
            oscar = oscar.WIDGET;
            if(!(golf !== oscar)) { _fun72962_ip = 459; continue _fun72962 }
 128:
            golf = _closure1_slot23;
            oscar = _closure1_slot17;
            oscar = oscar.INTEGRATIONS;
            if(!(golf !== oscar)) { _fun72962_ip = 430; continue _fun72962 }
 149:
            golf = _closure1_slot23;
            oscar = _closure1_slot17;
            oscar = oscar.ROLES;
            if(!(golf !== oscar)) { _fun72962_ip = 430; continue _fun72962 }
 170:
            golf = _closure1_slot23;
            oscar = _closure1_slot17;
            oscar = oscar.MEMBERS;
            if(!(golf !== oscar)) { _fun72962_ip = 407; continue _fun72962 }
 191:
            golf = _closure1_slot23;
            oscar = _closure1_slot17;
            oscar = oscar.VANITY_URL;
            if(!(golf !== oscar)) { _fun72962_ip = 308; continue _fun72962 }
 209:
            golf = _closure1_slot23;
            oscar = _closure1_slot17;
            oscar = oscar.SAFETY;
            if(!(golf === oscar)) { _fun72962_ip = 766; continue _fun72962 }
 230:
            options = _closure1_slot1;
            golf = _closure1_slot2;
            oscar = 19;
            golf = golf[oscar];
            oscar = undefined;
            options = options.bind(oscar)(golf);
            golf = options.dispatch;
            oscar = {};
            verify = 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION';
            oscar['type'] = verify;
            verify = _closure1_slot24;
            if(!(zulu != verify)) { _fun72962_ip = 283; continue _fun72962 }
 277:
            verify = _closure1_slot24;
            _fun72962_ip = 293; continue _fun72962;
 283:
            offset = _closure1_slot18;
            verify = offset.SAFETY_OVERVIEW;
 293:
            oscar['subsection'] = verify;
            oscar = golf.bind(options)(oscar);
            _fun72962_ip = 766; continue _fun72962;
 308:
            options = _closure1_slot0;
            golf = _closure1_slot2;
            oscar = 18;
            golf = golf[oscar];
            oscar = undefined;
            oscar = options.bind(oscar)(golf);
            options = oscar.HTTP;
            golf = options.get;
            oscar = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
            yankee = _closure1_slot19;
            offset = yankee.GUILD_VANITY_URL;
            verify = _closure1_slot27;
            verify = verify.id;
            verify = offset.bind(yankee)(verify);
            oscar['url'] = verify;
            options = golf.bind(options)(oscar);
            golf = options.then;
            oscar = function(argFoo) {
                entity = argFoo;
                entity = entity.body;
                golf = entity.code;
                oscar = entity.uses;
                report = entity.error;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 19;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                options = 'GUILD_SETTINGS_SET_VANITY_URL';
                mike['type'] = options;
                mike['code'] = golf;
                mike['uses'] = oscar;
                mike['error'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            oscar = golf.bind(options)(oscar);
            _fun72962_ip = 766; continue _fun72962;
 407:
            golf = _closure1_slot27;
            oscar = golf.getEveryoneRoleId;
            oscar = oscar.bind(golf)();
            _closure1_slot30 = oscar;
            _fun72962_ip = 766; continue _fun72962;
 430:
            _closure1_slot30 = zulu;
            zulu = report.section;
            if(!(tango !== zulu)) { _fun72962_ip = 766; continue _fun72962 }
 446:
            tango = _closure1_slot60;
            zulu = undefined;
            zulu = tango.bind(zulu)(report);
            return zulu;
 459:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 18;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            report = zulu.HTTP;
            tango = report.get;
            zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
            options = _closure1_slot19;
            golf = options.GUILD_WIDGET;
            oscar = _closure1_slot27;
            oscar = oscar.id;
            oscar = golf.bind(options)(oscar);
            zulu['url'] = oscar;
            report = tango.bind(report)(zulu);
            tango = report.then;
            zulu = function(argFoo) {
                report = argFoo;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 19;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                oscar = 'GUILD_SETTINGS_SET_WIDGET';
                mike['type'] = oscar;
                oscar = report.body;
                oscar = oscar.enabled;
                mike['enabled'] = oscar;
                report = report.body;
                report = report.channel_id;
                mike['channelId'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu = tango.bind(report)(zulu);
            _fun72962_ip = 766; continue _fun72962;
 558:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 18;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            report = zulu.HTTP;
            tango = report.get;
            zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
            options = _closure1_slot19;
            golf = options.GUILD_INSTANT_INVITES;
            oscar = _closure1_slot27;
            oscar = oscar.id;
            oscar = golf.bind(options)(oscar);
            zulu['url'] = oscar;
            tango = tango.bind(report)(zulu);
            zulu = tango.then;
            mike = function(argFoo) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 19;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'GUILD_SETTINGS_LOADED_INVITES';
                mike['type'] = report;
                report = argFoo;
                report = report.body;
                mike['invites'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            _fun72962_ip = 766; continue _fun72962;
 654:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 16;
            mike = tango[mike];
            tango = undefined;
            mike = zulu.bind(tango)(mike);
            report = mike.GuildSettingsBansNewExperiment;
            zulu = report.getCurrentConfig;
            mike = {};
            oscar = _closure1_slot27;
            oscar = oscar.id;
            mike['guildId'] = oscar;
            oscar = '7f0c91_1';
            mike['location'] = oscar;
            mike = zulu.bind(report)(mike);
            mike = mike.enabled;
            if(mike) { _fun72962_ip = 766; continue _fun72962 }
 726:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 17;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.fetchGuildBans;
            entity = _closure1_slot27;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
 766:
            entity = undefined;
            return entity;
 770:
            entity = false;
            return entity;
        }
    };
    tango['GUILD_SETTINGS_SET_SECTION'] = yankee;
    yankee = function(argFoo) { // Original name: handleSetSearchQuery
        entity = argFoo;
        mike = entity.searchQuery;
        _closure1_slot25 = mike;
        entity = undefined;
        return entity;
    };
    tango['GUILD_SETTINGS_SET_SEARCH_QUERY'] = yankee;
    yankee = function(argFoo) { // Original name: handleLoadedBans
        entity = argFoo;
        tango = entity.bans;
        zulu = tango.reduce;
        entity = global;
        entity = entity.Map;
        mike = entity.prototype;
        mike = Object.create(mike, {constructor: {value: entity}});
        golf = mike;
        entity = new golf[entity](oscar);
        mike = entity instanceof Object ? entity : mike;
        entity = function(argFoo, argBar) {
            _fun72968: for(var _fun72968_ip = 0; ; ) switch(_fun72968_ip) {
 0:
                entity = argFoo;
                tango = argBar;
                mike = tango.user;
                report = null;
                mike = report != mike;
                if(!mike) { _fun72968_ip = 34; continue _fun72968 }
 20:
                zulu = tango.user;
                zulu = zulu.id;
                mike = report != zulu;
 34:
                if(!mike) { _fun72968_ip = 58; continue _fun72968 }
 37:
                zulu = entity.set;
                mike = tango.user;
                mike = mike.id;
                mike = zulu.bind(entity)(mike, tango);
 58:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        _closure1_slot49 = entity;
        entity = _closure1_slot50;
        entity = entity + 1;
        _closure1_slot50 = entity;
        entity = undefined;
        return entity;
    };
    tango['GUILD_SETTINGS_LOADED_BANS'] = yankee;
    yankee = function(argFoo) { // Original name: handleLoadedBansBatch
        _fun72969: for(var _fun72969_ip = 0; ; ) switch(_fun72969_ip) {
 0:
            entity = argFoo;
            report = entity.bans;
            entity = entity.guildId;
            zulu = _closure1_slot51;
            zulu = zulu === entity;
            if(!zulu) { _fun72969_ip = 38; continue _fun72969 }
 28:
            oscar = _closure1_slot49;
            tango = null;
            zulu = tango != oscar;
 38:
            if(zulu) { _fun72969_ip = 77; continue _fun72969 }
 41:
            _closure1_slot51 = entity;
            entity = global;
            entity = entity.Map;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            verify = zulu;
            entity = new verify[entity](options);
            entity = entity instanceof Object ? entity : zulu;
            _closure1_slot49 = entity;
 77:
            tango = report.reduce;
            zulu = _closure1_slot49;
            entity = function(argFoo, argBar) {
                _fun72970: for(var _fun72970_ip = 0; ; ) switch(_fun72970_ip) {
 0:
                    entity = argFoo;
                    tango = argBar;
                    mike = tango.user;
                    report = null;
                    mike = report != mike;
                    if(!mike) { _fun72970_ip = 34; continue _fun72970 }
 20:
                    zulu = tango.user;
                    zulu = zulu.id;
                    mike = report != zulu;
 34:
                    if(!mike) { _fun72970_ip = 58; continue _fun72970 }
 37:
                    zulu = entity.set;
                    mike = tango.user;
                    mike = mike.id;
                    mike = zulu.bind(entity)(mike, tango);
 58:
                    return entity;
                }
            };
            entity = tango.bind(report)(entity, zulu);
            _closure1_slot49 = entity;
            entity = _closure1_slot50;
            entity = entity + 1;
            _closure1_slot50 = entity;
            entity = undefined;
            return entity;
        }
    };
    tango['GUILD_SETTINGS_LOADED_BANS_BATCH'] = yankee;
    yankee = function(argFoo) { // Original name: handleLoadedInvites
        entity = argFoo;
        tango = entity.invites;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            entity = argFoo;
            report = argBar;
            zulu = report.code;
            tango = _closure1_slot59;
            mike = undefined;
            mike = tango.bind(mike)(report);
            entity[zulu] = mike;
            return entity;
        };
        entity = {};
        mike = zulu.bind(tango)(mike, entity);
        _closure1_slot52 = mike;
        entity = undefined;
        return entity;
    };
    tango['GUILD_SETTINGS_LOADED_INVITES'] = yankee;
    yankee = function(argFoo) { // Original name: handleSetEmbed
        entity = argFoo;
        zulu = entity.enabled;
        _closure1_slot39 = zulu;
        entity = entity.channelId;
        _closure1_slot40 = entity;
        entity = undefined;
        return entity;
    };
    tango['GUILD_SETTINGS_SET_WIDGET'] = yankee;
    yankee = function(argFoo) { // Original name: handleSetVanityURL
        _fun72974: for(var _fun72974_ip = 0; ; ) switch(_fun72974_ip) {
 0:
            entity = argFoo;
            mike = entity.code;
            zulu = null;
            tango = zulu != mike;
            if(!tango) { _fun72974_ip = 20; continue _fun72974 }
 17:
            zulu = mike;
 20:
            _closure1_slot41 = zulu;
            entity = entity.uses;
            _closure1_slot42 = entity;
            entity = undefined;
            return entity;
        }
    };
    tango['GUILD_SETTINGS_SET_VANITY_URL'] = yankee;
    yankee = function(argFoo) { // Original name: handleSetMFALevelSuccess
        entity = argFoo;
        mike = entity.level;
        _closure1_slot43 = mike;
        entity = undefined;
        return entity;
    };
    tango['GUILD_SETTINGS_SET_MFA_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handleRoleSelect
        _fun72976: for(var _fun72976_ip = 0; ; ) switch(_fun72976_ip) {
 0:
            entity = argFoo;
            entity = entity.roleId;
            mike = null;
            zulu = mike != entity;
            if(!zulu) { _fun72976_ip = 21; continue _fun72976 }
 18:
            mike = entity;
 21:
            _closure1_slot30 = mike;
            entity = undefined;
            return entity;
        }
    };
    tango['GUILD_SETTINGS_ROLE_SELECT'] = yankee;
    yankee = function(argFoo) { // Original name: handleLoadedIntegrations
        entity = argFoo;
        mike = entity.integrations;
        _closure1_slot53 = mike;
        entity = undefined;
        return entity;
    };
    tango['GUILD_SETTINGS_LOADED_INTEGRATIONS'] = yankee;
    yankee = function(argFoo) { // Original name: handleAddBan
        _fun72978: for(var _fun72978_ip = 0; ; ) switch(_fun72978_ip) {
 0:
            entity = argFoo;
            verify = entity.user;
            tango = entity.guildId;
            entity = _closure1_slot49;
            options = null;
            entity = options != entity;
            if(!entity) { _fun72978_ip = 106; continue _fun72978 }
 29:
            mike = _closure1_slot27;
            mike = options != mike;
            if(!mike) { _fun72978_ip = 53; continue _fun72978 }
 40:
            zulu = _closure1_slot27;
            zulu = zulu.id;
            mike = zulu === tango;
 53:
            if(!mike) { _fun72978_ip = 103; continue _fun72978 }
 56:
            golf = _closure1_slot49;
            oscar = golf.set;
            tango = verify.id;
            zulu = {};
            zulu['user'] = verify;
            zulu['reason'] = options;
            zulu = oscar.bind(golf)(tango, zulu);
            zulu = _closure1_slot50;
            zulu = parseFloat(zulu);
            tango = zulu + 1;
            _closure1_slot50 = tango;
            mike = undefined;
 103:
            entity = mike;
 106:
            return entity;
        }
    };
    tango['GUILD_BAN_ADD'] = yankee;
    yankee = function(argFoo) { // Original name: handleRemoveBan
        _fun72979: for(var _fun72979_ip = 0; ; ) switch(_fun72979_ip) {
 0:
            entity = argFoo;
            zulu = entity.user;
            oscar = entity.guildId;
            entity = _closure1_slot49;
            tango = null;
            entity = tango != entity;
            if(!entity) { _fun72979_ip = 94; continue _fun72979 }
 29:
            mike = _closure1_slot27;
            mike = tango != mike;
            if(!mike) { _fun72979_ip = 53; continue _fun72979 }
 40:
            tango = _closure1_slot27;
            tango = tango.id;
            mike = tango === oscar;
 53:
            if(!mike) { _fun72979_ip = 91; continue _fun72979 }
 56:
            oscar = _closure1_slot49;
            tango = oscar.delete;
            zulu = zulu.id;
            zulu = tango.bind(oscar)(zulu);
            zulu = _closure1_slot50;
            zulu = parseFloat(zulu);
            tango = zulu + 1;
            _closure1_slot50 = tango;
            mike = undefined;
 91:
            entity = mike;
 94:
            return entity;
        }
    };
    tango['GUILD_BAN_REMOVE'] = yankee;
    yankee = function(argFoo) { // Original name: handleRoleCreate
        _fun72980: for(var _fun72980_ip = 0; ; ) switch(_fun72980_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            mike = _closure1_slot56;
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            if(mike) { _fun72980_ip = 29; continue _fun72980 }
 25:
            mike = false;
            return mike;
 29:
            return entity;
        }
    };
    tango['GUILD_ROLE_CREATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleRoleUpdate
        _fun72981: for(var _fun72981_ip = 0; ; ) switch(_fun72981_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            mike = _closure1_slot56;
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            if(mike) { _fun72981_ip = 29; continue _fun72981 }
 25:
            mike = false;
            return mike;
 29:
            return entity;
        }
    };
    tango['GUILD_ROLE_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleRoleDelete
        _fun72982: for(var _fun72982_ip = 0; ; ) switch(_fun72982_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            tango = entity.roleId;
            mike = _closure1_slot56;
            entity = undefined;
            mike = mike.bind(entity)(report);
            if(mike) { _fun72982_ip = 35; continue _fun72982 }
 31:
            mike = false;
            return mike;
 35:
            mike = _closure1_slot30;
            if(!(mike === tango)) { _fun72982_ip = 49; continue _fun72982 }
 43:
            mike = null;
            _closure1_slot30 = mike;
 49:
            return entity;
        }
    };
    tango['GUILD_ROLE_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleGuildUpdate
        _fun72983: for(var _fun72983_ip = 0; ; ) switch(_fun72983_ip) {
 0:
            zulu = _closure1_slot27;
            tango = null;
            if(!(tango != zulu)) { _fun72983_ip = 131; continue _fun72983 }
 15:
            zulu = _closure1_slot27;
            report = zulu.id;
            zulu = argFoo;
            zulu = zulu.guild;
            zulu = zulu.id;
            if(!(report === zulu)) { _fun72983_ip = 131; continue _fun72983 }
 41:
            oscar = _closure1_slot13;
            report = oscar.getGuild;
            zulu = _closure1_slot27;
            zulu = zulu.id;
            zulu = report.bind(oscar)(zulu);
            if(!(tango != zulu)) { _fun72983_ip = 127; continue _fun72983 }
 68:
            _closure1_slot26 = zulu;
            var _closure2_slot0 = zulu;
            tango = _closure1_slot27;
            zulu = tango.toJS;
            zulu = zulu.bind(tango)();
            var _closure2_slot1 = zulu;
            report = _closure1_slot33;
            tango = report.forEach;
            zulu = function(argFoo) {
                _fun72984: for(var _fun72984_ip = 0; ; ) switch(_fun72984_ip) {
 0:
                    report = argFoo;
                    zulu = _closure1_slot35;
                    entity = zulu.has;
                    entity = entity.bind(zulu)(report);
                    if(entity) { _fun72984_ip = 164; continue _fun72984 }
 26:
                    entity = 'rulesChannelId';
                    entity = entity !== report;
                    if(!entity) { _fun72984_ip = 45; continue _fun72984 }
 37:
                    zulu = 'publicUpdatesChannelId';
                    entity = zulu !== report;
 45:
                    if(entity) { _fun72984_ip = 67; continue _fun72984 }
 48:
                    zulu = _closure2_slot1;
                    zulu = zulu[report];
                    mike = _closure1_slot22;
                    entity = zulu !== mike;
 67:
                    if(!entity) { _fun72984_ip = 164; continue _fun72984 }
 70:
                    entity = 'features';
                    if(!(entity === report)) { _fun72984_ip = 134; continue _fun72984 }
 78:
                    zulu = _closure2_slot0;
                    mike = zulu.set;
                    tango = global;
                    oscar = tango.Set;
                    entity = _closure2_slot1;
                    options = entity[report];
                    tango = oscar.prototype;
                    tango = Object.create(tango, {constructor: {value: oscar}});
                    verify = tango;
                    entity = new verify[oscar](options, golf);
                    entity = entity instanceof Object ? entity : tango;
                    entity = mike.bind(zulu)(report, entity);
                    _fun72984_ip = 164; continue _fun72984;
 134:
                    tango = _closure2_slot0;
                    zulu = tango.set;
                    entity = _closure2_slot1;
                    entity = entity[report];
                    entity = zulu.bind(tango)(report, entity);
                    _closure2_slot0 = entity;
 164:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu);
            entity = _closure2_slot0;
            _closure1_slot27 = entity;
            entity = undefined;
            return entity;
 127:
            entity = false;
            return entity;
 131:
            entity = false;
            return entity;
        }
    };
    tango['GUILD_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleGuildDelete
        _fun72985: for(var _fun72985_ip = 0; ; ) switch(_fun72985_ip) {
 0:
            zulu = _closure1_slot27;
            mike = null;
            if(!(mike != zulu)) { _fun72985_ip = 51; continue _fun72985 }
 13:
            mike = _closure1_slot27;
            zulu = mike.id;
            mike = argFoo;
            mike = mike.guild;
            mike = mike.id;
            if(!(zulu === mike)) { _fun72985_ip = 51; continue _fun72985 }
 39:
            mike = _closure1_slot58;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 51:
            entity = false;
            return entity;
        }
    };
    tango['GUILD_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleProfileFetch
        _fun72986: for(var _fun72986_ip = 0; ; ) switch(_fun72986_ip) {
 0:
            entity = argFoo;
            zulu = entity.profile;
            report = zulu.id;
            oscar = _closure1_slot27;
            entity = null;
            golf = entity == oscar;
            entity = undefined;
            tango = undefined;
            if(golf) { _fun72986_ip = 39; continue _fun72986 }
 34:
            tango = oscar.id;
 39:
            if(!(report === tango)) { _fun72986_ip = 51; continue _fun72986 }
 43:
            _closure1_slot29 = zulu;
            _closure1_slot28 = zulu;
 51:
            return entity;
        }
    };
    tango['GUILD_PROFILE_FETCH_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handleProfileApiUpdate
        _fun72987: for(var _fun72987_ip = 0; ; ) switch(_fun72987_ip) {
 0:
            entity = argFoo;
            tango = entity.profile;
            mike = _closure1_slot29;
            options = null;
            oscar = options == mike;
            zulu = undefined;
            entity = undefined;
            if(oscar) { _fun72987_ip = 34; continue _fun72987 }
 29:
            entity = mike.id;
 34:
            entity = options != entity;
            if(!entity) { _fun72987_ip = 114; continue _fun72987 }
 41:
            oscar = _closure1_slot56;
            mike = _closure1_slot29;
            mike = mike.id;
            oscar = oscar.bind(zulu)(mike);
            mike = !oscar;
            mike = !mike;
            if(!oscar) { _fun72987_ip = 111; continue _fun72987 }
 68:
            oscar = tango.id;
            golf = _closure1_slot27;
            options = options == golf;
            zulu = undefined;
            if(options) { _fun72987_ip = 91; continue _fun72987 }
 86:
            zulu = golf.id;
 91:
            zulu = oscar === zulu;
            if(!zulu) { _fun72987_ip = 109; continue _fun72987 }
 98:
            _closure1_slot29 = tango;
            _closure1_slot28 = tango;
            zulu = tango;
 109:
            mike = undefined;
 111:
            entity = mike;
 114:
            return entity;
        }
    };
    tango['GUILD_PROFILE_UPDATE_SUCCESS'] = yankee;
    tango['USER_CONNECTIONS_UPDATE'] = offset;
    tango['GUILD_INTEGRATIONS_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleInviteRevoke
        mike = {};
        tango = _closure1_slot52;
        report = mike;
        zulu = copyDataProperties(report, tango);
        _closure1_slot52 = mike;
        entity = argFoo;
        entity = entity.code;
        entity = delete mike[entity];
        entity = undefined;
        return entity;
    };
    tango['INSTANT_INVITE_REVOKE_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleInviteCreateSuccess
        entity = argFoo;
        zulu = {};
        golf = _closure1_slot52;
        options = zulu;
        tango = copyDataProperties(options, golf);
        tango = entity.invite;
        report = tango.code;
        oscar = _closure1_slot59;
        tango = entity.invite;
        entity = undefined;
        tango = oscar.bind(entity)(tango);
        zulu[report] = tango;
        _closure1_slot52 = zulu;
        return entity;
    };
    tango['INSTANT_INVITE_CREATE_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleGuildMetadataServerUpdate
        _fun72990: for(var _fun72990_ip = 0; ; ) switch(_fun72990_ip) {
 0:
            entity = argFoo;
            oscar = entity.guildId;
            tango = entity.metadata;
            entity = _closure1_slot27;
            zulu = null;
            entity = zulu != entity;
            if(!entity) { _fun72990_ip = 43; continue _fun72990 }
 30:
            report = _closure1_slot27;
            report = report.id;
            entity = oscar === report;
 43:
            if(!entity) { _fun72990_ip = 289; continue _fun72990 }
 49:
            report = _closure1_slot46;
            entity = false;
            if(!(entity === report)) { _fun72990_ip = 65; continue _fun72990 }
 59:
            entity = true;
            _closure1_slot46 = entity;
 65:
            entity = {};
            report = tango.primaryCategoryId;
            if(!(zulu == report)) { _fun72990_ip = 81; continue _fun72990 }
 77:
            report = _closure1_slot20;
 81:
            entity['primaryCategoryId'] = report;
            report = tango.secondaryCategoryIds;
            if(!(zulu == report)) { _fun72990_ip = 100; continue _fun72990 }
 96:
            report = new Array(0);
 100:
            entity['secondaryCategoryIds'] = report;
            report = tango.keywords;
            if(!(zulu == report)) { _fun72990_ip = 119; continue _fun72990 }
 115:
            report = new Array(0);
 119:
            entity['keywords'] = report;
            oscar = tango.emojiDiscoverabilityEnabled;
            report = zulu == oscar;
            if(report) { _fun72990_ip = 140; continue _fun72990 }
 137:
            report = oscar;
 140:
            entity['emojiDiscoverabilityEnabled'] = report;
            oscar = tango.partnerActionedTimestamp;
            golf = zulu != oscar;
            report = null;
            if(!golf) { _fun72990_ip = 163; continue _fun72990 }
 160:
            report = oscar;
 163:
            entity['partnerActionedTimestamp'] = report;
            oscar = tango.partnerApplicationTimestamp;
            golf = zulu != oscar;
            report = null;
            if(!golf) { _fun72990_ip = 186; continue _fun72990 }
 183:
            report = oscar;
 186:
            entity['partnerApplicationTimestamp'] = report;
            oscar = tango.isPublished;
            report = zulu != oscar;
            if(!report) { _fun72990_ip = 207; continue _fun72990 }
 204:
            report = oscar;
 207:
            entity['isPublished'] = report;
            report = tango.reasonsToJoin;
            if(!(zulu == report)) { _fun72990_ip = 226; continue _fun72990 }
 222:
            report = new Array(0);
 226:
            entity['reasonsToJoin'] = report;
            report = tango.socialLinks;
            if(!(zulu == report)) { _fun72990_ip = 245; continue _fun72990 }
 241:
            report = new Array(0);
 245:
            entity['socialLinks'] = report;
            tango = tango.about;
            report = zulu != tango;
            zulu = '';
            if(!report) { _fun72990_ip = 270; continue _fun72990 }
 267:
            zulu = tango;
 270:
            entity['about'] = zulu;
            _closure1_slot47 = entity;
            _closure1_slot48 = entity;
            entity = {};
            _closure1_slot38 = entity;
 289:
            entity = undefined;
            return entity;
        }
    };
    tango['GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER'] = offset;
    offset = function() { // Original name: handleGuildMetadataFetchFail
        entity = _closure1_slot45;
        _closure1_slot48 = entity;
        _closure1_slot47 = entity;
        entity = undefined;
        return entity;
    };
    tango['GUILD_DISCOVERY_METADATA_FETCH_FAIL'] = offset;
    offset = function(argFoo) { // Original name: handleGuildCategoryAdd
        _fun72992: for(var _fun72992_ip = 0; ; ) switch(_fun72992_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            golf = entity.categoryId;
            zulu = _closure1_slot27;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun72992_ip = 43; continue _fun72992 }
 30:
            zulu = _closure1_slot27;
            zulu = zulu.id;
            entity = tango === zulu;
 43:
            if(!entity) { _fun72992_ip = 159; continue _fun72992 }
 46:
            entity = {};
            offset = _closure1_slot48;
            yankee = entity;
            zulu = copyDataProperties(yankee, offset);
            zulu = _closure1_slot48;
            offset = zulu.secondaryCategoryIds;
            zulu = new Array(1);
            yankee = zulu;
            verify = 0;
            tango = arraySpread(yankee, offset, verify);
            zulu[tango] = golf;
            oscar = 1;
            tango = tango + oscar;
            tango = 'secondaryCategoryIds';
            entity[tango] = zulu;
            _closure1_slot48 = entity;
            entity = {};
            offset = _closure1_slot47;
            yankee = entity;
            zulu = copyDataProperties(yankee, offset);
            zulu = _closure1_slot47;
            offset = zulu.secondaryCategoryIds;
            zulu = new Array(1);
            yankee = zulu;
            report = arraySpread(yankee, offset, verify);
            zulu[report] = golf;
            report = report + oscar;
            entity[tango] = zulu;
            _closure1_slot47 = entity;
 159:
            entity = undefined;
            return entity;
        }
    };
    tango['GUILD_DISCOVERY_CATEGORY_ADD'] = offset;
    offset = function(argFoo) { // Original name: handleGuildCategoryDelete
        _fun72993: for(var _fun72993_ip = 0; ; ) switch(_fun72993_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            report = entity.categoryId;
            tango = _closure1_slot27;
            entity = null;
            if(!(entity != tango)) { _fun72993_ip = 228; continue _fun72993 }
 30:
            entity = _closure1_slot27;
            entity = entity.id;
            if(!(zulu === entity)) { _fun72993_ip = 228; continue _fun72993 }
 46:
            entity = _closure1_slot48;
            zulu = entity.secondaryCategoryIds;
            entity = zulu.indexOf;
            golf = entity.bind(zulu)(report);
            entity = -1;
            if(!(entity !== golf)) { _fun72993_ip = 140; continue _fun72993 }
 76:
            zulu = _closure1_slot48;
            verify = zulu.secondaryCategoryIds;
            oscar = new Array(0);
            options = 0;
            offset = oscar;
            zulu = arraySpread(offset, verify, options);
            tango = oscar.splice;
            zulu = 1;
            zulu = tango.bind(oscar)(golf, zulu);
            zulu = {};
            verify = _closure1_slot48;
            offset = zulu;
            tango = copyDataProperties(offset, verify);
            tango = 'secondaryCategoryIds';
            zulu[tango] = oscar;
            _closure1_slot48 = zulu;
 140:
            zulu = _closure1_slot47;
            tango = zulu.secondaryCategoryIds;
            zulu = tango.indexOf;
            report = zulu.bind(tango)(report);
            if(!(entity !== report)) { _fun72993_ip = 228; continue _fun72993 }
 164:
            entity = _closure1_slot47;
            verify = entity.secondaryCategoryIds;
            tango = new Array(0);
            options = 0;
            offset = tango;
            entity = arraySpread(offset, verify, options);
            zulu = tango.splice;
            entity = 1;
            entity = zulu.bind(tango)(report, entity);
            entity = {};
            verify = _closure1_slot47;
            offset = entity;
            zulu = copyDataProperties(offset, verify);
            zulu = 'secondaryCategoryIds';
            entity[zulu] = tango;
            _closure1_slot47 = entity;
 228:
            entity = undefined;
            return entity;
        }
    };
    tango['GUILD_DISCOVERY_CATEGORY_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildCategoryUpdateFail
        _fun72994: for(var _fun72994_ip = 0; ; ) switch(_fun72994_ip) {
 0:
            entity = argFoo;
            oscar = entity.guildId;
            mike = entity.errors;
            tango = _closure1_slot27;
            zulu = null;
            tango = zulu != tango;
            if(!tango) { _fun72994_ip = 43; continue _fun72994 }
 30:
            report = _closure1_slot27;
            report = report.id;
            tango = oscar === report;
 43:
            if(!tango) { _fun72994_ip = 56; continue _fun72994 }
 46:
            if(!(zulu == mike)) { _fun72994_ip = 52; continue _fun72994 }
 50:
            mike = {};
 52:
            _closure1_slot38 = mike;
 56:
            entity = undefined;
            return entity;
        }
    };
    tango['GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL'] = offset;
    offset = function(argFoo) { // Original name: handleGuildUpdateMetadata
        _fun72995: for(var _fun72995_ip = 0; ; ) switch(_fun72995_ip) {
 0:
            entity = argFoo;
            romeo = entity.guildId;
            yankee = entity.primaryCategoryId;
            offset = entity.keywords;
            verify = entity.emojiDiscoverabilityEnabled;
            options = entity.isPublished;
            golf = entity.reasonsToJoin;
            oscar = entity.socialLinks;
            tango = entity.about;
            entity = _closure1_slot27;
            zulu = null;
            entity = zulu != entity;
            if(!entity) { _fun72995_ip = 79; continue _fun72995 }
 66:
            report = _closure1_slot27;
            report = report.id;
            entity = romeo === report;
 79:
            if(!entity) { _fun72995_ip = 263; continue _fun72995 }
 85:
            entity = {};
            foxtrot = _closure1_slot48;
            backup = entity;
            report = copyDataProperties(backup, foxtrot);
            if(!(zulu == yankee)) { _fun72995_ip = 112; continue _fun72995 }
 102:
            report = _closure1_slot48;
            yankee = report.primaryCategoryId;
 112:
            report = 'primaryCategoryId';
            entity[report] = yankee;
            if(!(zulu == offset)) { _fun72995_ip = 135; continue _fun72995 }
 125:
            report = _closure1_slot48;
            offset = report.keywords;
 135:
            report = 'keywords';
            entity[report] = offset;
            if(!(zulu == verify)) { _fun72995_ip = 158; continue _fun72995 }
 148:
            report = _closure1_slot48;
            verify = report.emojiDiscoverabilityEnabled;
 158:
            report = 'emojiDiscoverabilityEnabled';
            entity[report] = verify;
            if(!(zulu == options)) { _fun72995_ip = 181; continue _fun72995 }
 171:
            report = _closure1_slot48;
            options = report.isPublished;
 181:
            report = 'isPublished';
            entity[report] = options;
            if(!(zulu == golf)) { _fun72995_ip = 204; continue _fun72995 }
 194:
            report = _closure1_slot48;
            golf = report.reasonsToJoin;
 204:
            report = 'reasonsToJoin';
            entity[report] = golf;
            if(!(zulu == oscar)) { _fun72995_ip = 227; continue _fun72995 }
 217:
            report = _closure1_slot48;
            oscar = report.socialLinks;
 227:
            report = 'socialLinks';
            entity[report] = oscar;
            if(!(zulu == tango)) { _fun72995_ip = 250; continue _fun72995 }
 240:
            zulu = _closure1_slot48;
            tango = zulu.about;
 250:
            zulu = 'about';
            entity[zulu] = tango;
            _closure1_slot48 = entity;
 263:
            entity = undefined;
            return entity;
        }
    };
    tango['GUILD_UPDATE_DISCOVERY_METADATA'] = offset;
    offset = function(argFoo) { // Original name: handleGuildUpdateMetadataFail
        _fun72996: for(var _fun72996_ip = 0; ; ) switch(_fun72996_ip) {
 0:
            entity = argFoo;
            oscar = entity.guildId;
            mike = entity.errors;
            tango = _closure1_slot27;
            zulu = null;
            tango = zulu != tango;
            if(!tango) { _fun72996_ip = 43; continue _fun72996 }
 30:
            report = _closure1_slot27;
            report = report.id;
            tango = oscar === report;
 43:
            if(!tango) { _fun72996_ip = 56; continue _fun72996 }
 46:
            if(!(zulu == mike)) { _fun72996_ip = 52; continue _fun72996 }
 50:
            mike = {};
 52:
            _closure1_slot38 = mike;
 56:
            entity = undefined;
            return entity;
        }
    };
    tango['GUILD_UPDATE_DISCOVERY_METADATA_FAIL'] = offset;
    offset = function(argFoo) { // Original name: handleGuildDiscoverySlugFetchSuccess
        entity = argFoo;
        mike = entity.slug;
        _closure1_slot32 = mike;
        entity = undefined;
        return entity;
    };
    tango['GUILD_DISCOVERY_SLUG_FETCH_SUCCESS'] = offset;
    report = function(argFoo) { // Original name: handleGuildDiscoverySlugFetchFail
        _fun72998: for(var _fun72998_ip = 0; ; ) switch(_fun72998_ip) {
 0:
            mike = argFoo;
            zulu = null;
            if(!(mike != zulu)) { _fun72998_ip = 20; continue _fun72998 }
 9:
            _closure1_slot32 = zulu;
            entity = undefined;
            return entity;
 20:
            tango = "Cannot destructure 'undefined' or 'null'.";
            report = mike;
            entity = throwTypeError(report, tango);
            entity = undefined;
            throw entity;
        }
    };
    tango['GUILD_DISCOVERY_SLUG_FETCH_FAIL'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    update = report;
    result = tango;
    tango = new update[verify](echo, result, output);
    tango = tango instanceof Object ? tango : report;
    report = 26;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_settings/GuildSettingsStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['EMPTY_METADATA'] = mike;
    return entity;
})();