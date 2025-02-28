// app/modules/guild_settings/GuildSettingsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot57;
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
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot56 = entity;
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
            _closure1_slot57 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot57 = entity;
    entity = function(argFoo) { // Original name: syncGuild
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot27;
            entity = null;
            if(!(entity != michal)) { _fun00006_ip = 90; continue _fun00005 }
 16:
            michal = _closure1_slot26;
            if(!(entity != michal)) { _fun00006_ip = 90; continue _fun00005 }
 24:
            michal = _closure1_slot26;
            michal = michal.id;
            if(!(michal === report)) { _fun00006_ip = 90; continue _fun00005 }
 37:
            tangon = _closure1_slot13;
            michal = tangon.getGuild;
            michal = michal.bind(tangon)(report);
            entity = entity != michal;
            if(!entity) { _fun00006_ip = 88; continue _fun00005 }
 58:
            report = _closure1_slot26;
            tangon = _closure1_slot27;
            if(!(report !== tangon)) { _fun00006_ip = 78; continue _fun00005 }
 70:
            var _closure1_slot26 = michal;
            entity = true;
            _fun00006_ip = 88; continue _fun00005;
 78:
            _closure1_slot26 = michal;
            var _closure1_slot27 = michal;
            entity = true;
 88:
            return entity;
 90:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot58 = entity;
    romeon = function(argFoo) { // Original name: handleFormInit
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            option = entity.guildId;
            oscard = entity.section;
            michal = entity.subsection;
            tangon = entity.location;
            zuuluu = _closure1_slot13;
            michal = zuuluu.getGuild;
            report = michal.bind(zuuluu)(option);
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00008_ip = 245; continue _fun00007 }
 50:
            golfie = _closure1_slot8;
            michal = golfie.getProfile;
            michal = michal.bind(golfie)(option);
            _closure1_slot27 = report;
            _closure1_slot26 = report;
            var _closure1_slot29 = michal;
            var _closure1_slot28 = michal;
            michal = _closure1_slot15;
            michal = michal.OPEN;
            _closure1_slot37 = michal;
            michal = {};
            _closure1_slot38 = michal;
            _closure1_slot39 = zuuluu;
            golfie = _closure1_slot1;
            report = _closure1_slot2;
            michal = 15;
            report = report[michal];
            michal = undefined;
            golfie = golfie.bind(michal)(report);
            report = golfie.castGuildIdAsEveryoneGuildRoleId;
            report = report.bind(golfie)(option);
            var _closure1_slot30 = report;
            report = _closure1_slot27;
            report = report.mfaLevel;
            _closure1_slot45 = report;
            report = _closure1_slot49;
            _closure1_slot50 = report;
            var _closure1_slot32 = zuuluu;
            _closure1_slot46 = tangon;
            if(!(zuuluu != oscard)) { _fun00008_ip = 243; continue _fun00007 }
 176:
            zuuluu = {};
            tangon = 'stack';
            zuuluu['type'] = tangon;
            report = {};
            tangon = 'landing';
            report['key'] = tangon;
            tangon = _closure1_slot17;
            tangon = tangon.LANDING;
            report['name'] = tangon;
            tangon = new Array(2);
            tangon[0] = report;
            report = {};
            report['key'] = oscard;
            report['name'] = oscard;
            tangon[1] = report;
            zuuluu['routes'] = tangon;
            var _closure1_slot31 = zuuluu;
 243:
            return michal;
 245:
            michal = _closure1_slot60;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot59 = romeon;
    yankee = function() { // Original name: handleFormClose
        zuuluu = false;
        _closure1_slot36 = zuuluu;
        entity = _closure1_slot15;
        entity = entity.CLOSED;
        _closure1_slot37 = entity;
        entity = null;
        _closure1_slot27 = entity;
        _closure1_slot26 = entity;
        _closure1_slot40 = zuuluu;
        _closure1_slot41 = zuuluu;
        _closure1_slot42 = entity;
        _closure1_slot43 = entity;
        zuuluu = 0;
        _closure1_slot44 = zuuluu;
        _closure1_slot51 = entity;
        _closure1_slot54 = entity;
        _closure1_slot55 = entity;
        var _closure1_slot23 = entity;
        var _closure1_slot24 = entity;
        var _closure1_slot25 = entity;
        entity = _closure1_slot16;
        entity = entity.NONE;
        _closure1_slot45 = entity;
        entity = undefined;
        _closure1_slot31 = entity;
        return entity;
    };
    var _closure1_slot60 = yankee;
    entity = function(argFoo) { // Original name: _createInvite
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot11;
            entity = {};
            tangon = michal.code;
            entity['code'] = tangon;
            tangon = michal.temporary;
            entity['temporary'] = tangon;
            tangon = michal.revoked;
            entity['revoked'] = tangon;
            oscard = michal.inviter;
            tangon = null;
            golfie = tangon != oscard;
            oscard = null;
            if(!golfie) { _fun00010_ip = 90; continue _fun00009 }
 60:
            verify = _closure1_slot12;
            yankee = michal.inviter;
            option = verify.prototype;
            option = Object.create(option, {constructor: {value: verify}});
            romeon = option;
            golfie = new romeon[verify](yankee, offset);
            oscard = golfie instanceof Object ? golfie : option;
 90:
            entity['inviter'] = oscard;
            option = _closure1_slot9;
            golfie = michal.channel;
            oscard = undefined;
            golfie = option.bind(oscard)(golfie);
            entity['channel'] = golfie;
            golfie = michal.guild;
            option = tangon != golfie;
            golfie = null;
            if(!option) { _fun00010_ip = 158; continue _fun00009 }
 129:
            offset = _closure1_slot10;
            yankee = michal.guild;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            romeon = verify;
            option = new romeon[offset](yankee, offset);
            golfie = option instanceof Object ? option : verify;
 158:
            entity['guild'] = golfie;
            golfie = michal.uses;
            entity['uses'] = golfie;
            golfie = michal.max_uses;
            entity['maxUses'] = golfie;
            golfie = michal.max_age;
            entity['maxAge'] = golfie;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            report = 23;
            report = option[report];
            report = golfie.bind(oscard)(report);
            golfie = michal.created_at;
            option = tangon != golfie;
            tangon = undefined;
            if(!option) { _fun00010_ip = 233; continue _fun00009 }
 230:
            tangon = golfie;
 233:
            tangon = report.bind(oscard)(tangon);
            entity['createdAt'] = tangon;
            michal = michal.flags;
            entity['flags'] = michal;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            romeon = michal;
            yankee = entity;
            entity = new romeon[zuuluu](yankee, offset);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    var _closure1_slot61 = entity;
    offset = function(argFoo) { // Original name: handleIntegrationsUpdate
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot27;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00012_ip = 37; continue _fun00011 }
 19:
            report = _closure1_slot37;
            michal = _closure1_slot15;
            michal = michal.OPEN;
            entity = report === michal;
 37:
            if(!entity) { _fun00012_ip = 126; continue _fun00011 }
 40:
            report = tangon.type;
            michal = 'GUILD_INTEGRATIONS_UPDATE';
            michal = michal !== report;
            if(michal) { _fun00012_ip = 76; continue _fun00011 }
 58:
            report = tangon.guildId;
            tangon = _closure1_slot27;
            tangon = tangon.id;
            michal = report === tangon;
 76:
            if(!michal) { _fun00012_ip = 123; continue _fun00011 }
 79:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 20;
            report = report[tangon];
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            tangon = report.fetchGuildIntegrationsApplications;
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(report)(zuuluu);
            michal = undefined;
 123:
            entity = michal;
 126:
            return entity;
        }
    };
    var _closure1_slot62 = offset;
    foxtra = global;
    verify = foxtra.Object;
    tangon = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(verify)(zuuluu, entity, michal);
    verify = 0;
    michal = golfie[verify];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.createChannelRecordFromInvite;
    var _closure1_slot9 = michal;
    michal = 7;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 8;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 9;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot12 = michal;
    michal = 10;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot13 = michal;
    michal = 11;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot14 = michal;
    michal = 12;
    michal = golfie[michal];
    backup = oscard.bind(entity)(michal);
    tangon = backup.FormStates;
    var _closure1_slot15 = tangon;
    michal = backup.MFALevels;
    var _closure1_slot16 = michal;
    kiloes = backup.GuildSettingsSections;
    var _closure1_slot17 = kiloes;
    kiloes = backup.GuildSettingsSubsections;
    var _closure1_slot18 = kiloes;
    backup = backup.Endpoints;
    var _closure1_slot19 = backup;
    backup = 13;
    backup = golfie[backup];
    backup = oscard.bind(entity)(backup);
    backup = backup.DEFAULT_DISCOVERY_CATEGORY_ID;
    var _closure1_slot20 = backup;
    kiloes = 14;
    kiloes = golfie[kiloes];
    kiloes = oscard.bind(entity)(kiloes);
    sizing = kiloes.PUBLIC_SUCCESS_MODAL_SEEN_KEY;
    var _closure1_slot21 = sizing;
    kiloes = kiloes.CREATE_NEW_CHANNEL_VALUE;
    var _closure1_slot22 = kiloes;
    kiloes = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'profile'];
    var _closure1_slot33 = kiloes;
    kiloes = ['brandColorPrimary', 'description', 'icon', 'name', 'traits', 'visibility', 'gameApplicationIds', 'customBanner'];
    var _closure1_slot34 = kiloes;
    sizing = foxtra.Set;
    foxtra = sizing.prototype;
    kiloes = Object.create(foxtra, {constructor: {value: sizing}});
    echoed = ['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader'];
    update = kiloes;
    foxtra = new update[sizing](echoed, result);
    foxtra = foxtra instanceof Object ? foxtra : kiloes;
    var _closure1_slot35 = foxtra;
    foxtra = false;
    var _closure1_slot36 = foxtra;
    tangon = tangon.CLOSED;
    var _closure1_slot37 = tangon;
    tangon = {};
    var _closure1_slot38 = tangon;
    tangon = null;
    var _closure1_slot39 = tangon;
    var _closure1_slot40 = foxtra;
    var _closure1_slot41 = foxtra;
    var _closure1_slot42 = tangon;
    var _closure1_slot43 = tangon;
    var _closure1_slot44 = verify;
    michal = michal.NONE;
    var _closure1_slot45 = michal;
    var _closure1_slot46 = tangon;
    michal = {'primaryCategoryId': null, 'secondaryCategoryIds': null, 'keywords': null, 'emojiDiscoverabilityEnabled': true, 'partnerActionedTimestamp': null, 'partnerApplicationTimestamp': null, 'isPublished': false};
    michal['primaryCategoryId'] = backup;
    backup = new Array(0);
    michal['secondaryCategoryIds'] = backup;
    backup = new Array(0);
    michal['keywords'] = backup;
    backup = new Array(0);
    michal['reasonsToJoin'] = backup;
    backup = new Array(0);
    michal['socialLinks'] = backup;
    backup = '';
    michal['about'] = backup;
    var _closure1_slot47 = michal;
    var _closure1_slot48 = foxtra;
    var _closure1_slot49 = michal;
    var _closure1_slot50 = michal;
    var _closure1_slot51 = tangon;
    var _closure1_slot52 = verify;
    var _closure1_slot53 = tangon;
    var _closure1_slot54 = tangon;
    var _closure1_slot55 = tangon;
    tangon = 26;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    verify = tangon.Store;
    tangon = function(argFoo) {
        tangon = function() { // Original name: GuildSettingsStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot56;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            report = this;
            tangon = report.waitFor;
            zuuluu = _closure1_slot13;
            michal = _closure1_slot8;
            entity = _closure1_slot14;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(20);
        entity[0] = report;
        report = {};
        golfie = 'getMetadata';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot50;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'hasChanges';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = _closure1_slot1;
                entity = _closure1_slot2;
                oscard = 24;
                entity = entity[oscard];
                report = undefined;
                golfie = zuuluu.bind(report)(entity);
                tangon = golfie.isEqual;
                zuuluu = _closure1_slot27;
                entity = _closure1_slot26;
                entity = tangon.bind(golfie)(zuuluu, entity);
                entity = !entity;
                if(entity) { _fun00014_ip = 91; continue _fun00013 }
 51:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[oscard];
                option = tangon.bind(report)(zuuluu);
                golfie = option.isEqual;
                tangon = _closure1_slot50;
                zuuluu = _closure1_slot49;
                zuuluu = golfie.bind(option)(tangon, zuuluu);
                entity = !zuuluu;
 91:
                if(entity) { _fun00014_ip = 134; continue _fun00013 }
 94:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[oscard];
                report = tangon.bind(report)(zuuluu);
                tangon = report.isEqual;
                zuuluu = _closure1_slot29;
                michal = _closure1_slot28;
                michal = tangon.bind(report)(zuuluu, michal);
                entity = !michal;
 134:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'isOpen';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot36;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getSavedRouteState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot31;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getSection';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot23;
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'showNotice';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = this;
            entity = michal.hasChanges;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getGuildId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = _closure1_slot27;
                entity = null;
                zuuluu = entity != zuuluu;
                if(!zuuluu) { _fun00016_ip = 25; continue _fun00015 }
 16:
                michal = _closure1_slot27;
                entity = michal.id;
 25:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'showPublicSuccessModal';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 25;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            zuuluu = michal.Storage;
            michal = zuuluu.get;
            entity = _closure1_slot21;
            entity = michal.bind(zuuluu)(entity);
            entity = !entity;
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getGuild';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot27;
            return entity;
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'getGuildProfile';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot29;
            return entity;
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'isSubmitting';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot37;
            entity = _closure1_slot15;
            entity = entity.SUBMITTING;
            entity = michal === entity;
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'isGuildMetadataLoaded';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot48;
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'getErrors';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot38;
            return entity;
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'getError';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = _closure1_slot38;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00018_ip = 26; continue _fun00017 }
 23:
                entity = michal;
 26:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'getProfileError';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot39;
            return entity;
        };
        report['value'] = golfie;
        entity[15] = report;
        report = {};
        golfie = 'getSelectedRoleId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot30;
            return entity;
        };
        report['value'] = golfie;
        entity[16] = report;
        report = {};
        golfie = 'getSlug';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot32;
            return entity;
        };
        report['value'] = golfie;
        entity[17] = report;
        report = {};
        golfie = 'getBans';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = _closure1_slot51;
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = _closure1_slot52;
            entity[1] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[18] = report;
        report = {};
        golfie = 'getProps';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            tangon = this;
            entity = {};
            michal = tangon.isSubmitting;
            michal = michal.bind(tangon)();
            entity['submitting'] = michal;
            zuuluu = _closure1_slot55;
            entity['integrations'] = zuuluu;
            zuuluu = _closure1_slot23;
            entity['section'] = zuuluu;
            zuuluu = _closure1_slot24;
            entity['subsection'] = zuuluu;
            zuuluu = _closure1_slot38;
            entity['errors'] = zuuluu;
            zuuluu = _closure1_slot27;
            entity['guild'] = zuuluu;
            zuuluu = _closure1_slot51;
            entity['bans'] = zuuluu;
            zuuluu = _closure1_slot52;
            entity['bansVersion'] = zuuluu;
            zuuluu = _closure1_slot54;
            entity['invites'] = zuuluu;
            zuuluu = _closure1_slot30;
            entity['selectedRoleId'] = zuuluu;
            zuuluu = _closure1_slot40;
            entity['fetchedEmbed'] = zuuluu;
            zuuluu = _closure1_slot41;
            entity['embedEnabled'] = zuuluu;
            zuuluu = _closure1_slot42;
            entity['embedChannelId'] = zuuluu;
            zuuluu = _closure1_slot45;
            entity['mfaLevel'] = zuuluu;
            zuuluu = _closure1_slot25;
            entity['searchQuery'] = zuuluu;
            zuuluu = _closure1_slot43;
            entity['vanityURLCode'] = zuuluu;
            zuuluu = _closure1_slot44;
            entity['vanityURLUses'] = zuuluu;
            zuuluu = _closure1_slot26;
            entity['originalGuild'] = zuuluu;
            zuuluu = tangon.hasChanges;
            zuuluu = zuuluu.bind(tangon)();
            entity['hasChanges'] = zuuluu;
            zuuluu = _closure1_slot50;
            entity['guildMetadata'] = zuuluu;
            zuuluu = _closure1_slot46;
            entity['analyticsLocation'] = zuuluu;
            zuuluu = _closure1_slot48;
            entity['isGuildMetadataLoaded'] = zuuluu;
            michal = _closure1_slot29;
            entity['profile'] = michal;
            return entity;
        };
        report['value'] = oscard;
        entity[19] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = tangon.bind(entity)(verify);
    tangon = 'GuildSettingsStore';
    verify['displayName'] = tangon;
    tangon = 19;
    tangon = golfie[tangon];
    echoed = option.bind(entity)(tangon);
    tangon = {};
    tangon['GUILD_SETTINGS_INIT'] = romeon;
    romeon = function(argFoo) { // Original name: handleFormOpen
        michal = true;
        _closure1_slot36 = michal;
        zuuluu = _closure1_slot59;
        entity = undefined;
        michal = argFoo;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon['GUILD_SETTINGS_OPEN'] = romeon;
    tangon['GUILD_SETTINGS_CLOSE'] = yankee;
    yankee = function(argFoo) { // Original name: handleUpdate
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            tangon = _closure1_slot27;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00020_ip = 54; continue _fun00019 }
 22:
            tangon = _closure1_slot33;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    report = argFoo;
                    zuuluu = _closure1_slot27;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00022_ip = 37; continue _fun00021 }
 19:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.hasOwnProperty;
                    entity = zuuluu.bind(tangon)(report);
 37:
                    if(!entity) { _fun00022_ip = 70; continue _fun00021 }
 40:
                    tangon = _closure1_slot27;
                    zuuluu = tangon.set;
                    entity = _closure2_slot0;
                    entity = entity[report];
                    entity = zuuluu.bind(tangon)(report, entity);
                    _closure1_slot27 = entity;
 70:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            michal = function() { // Original name: validateUpdate
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    tangon = _closure1_slot27;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00024_ip = 86; continue _fun00023 }
 15:
                    tangon = _closure1_slot27;
                    zuuluu = tangon.toJS;
                    zuuluu = zuuluu.bind(tangon)();
                    var _closure3_slot0 = zuuluu;
                    tangon = _closure1_slot26;
                    zuuluu = tangon.toJS;
                    zuuluu = zuuluu.bind(tangon)();
                    var _closure3_slot1 = zuuluu;
                    tangon = _closure1_slot33;
                    zuuluu = tangon.some;
                    entity = function(argFoo) {
                        zuuluu = argFoo;
                        michal = _closure3_slot0;
                        michal = michal[zuuluu];
                        entity = _closure3_slot1;
                        entity = entity[zuuluu];
                        entity = michal !== entity;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(entity);
                    if(entity) { _fun00024_ip = 82; continue _fun00023 }
 74:
                    entity = _closure1_slot26;
                    _closure1_slot27 = entity;
 82:
                    entity = undefined;
                    return entity;
 86:
                    entity = false;
                    return entity;
                }
            };
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 54:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleSettingsProfileUpdate
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            tangon = michal.guildId;
            zuuluu = _closure1_slot29;
            report = null;
            if(!(report != zuuluu)) { _fun00026_ip = 71; continue _fun00025 }
 27:
            zuuluu = _closure1_slot27;
            if(!(report != zuuluu)) { _fun00026_ip = 71; continue _fun00025 }
 35:
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.id;
            if(!(zuuluu === tangon)) { _fun00026_ip = 71; continue _fun00025 }
 48:
            zuuluu = _closure1_slot34;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure1_slot29;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00028_ip = 73; continue _fun00027 }
 16:
                    report = _closure2_slot0;
                    zuuluu = report.hasOwnProperty;
                    zuuluu = zuuluu.bind(report)(tangon);
                    if(!zuuluu) { _fun00028_ip = 73; continue _fun00027 }
 37:
                    entity = _closure2_slot0;
                    zuuluu = entity[tangon];
                    entity = undefined;
                    if(!(entity !== zuuluu)) { _fun00028_ip = 73; continue _fun00027 }
 51:
                    entity = {};
                    oscard = _closure1_slot29;
                    golfie = entity;
                    report = copyDataProperties(golfie, oscard);
                    entity[tangon] = zuuluu;
                    _closure1_slot29 = entity;
 73:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
 71:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_PROFILE_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleCancelChanges
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            entity = {};
            _closure1_slot38 = entity;
            zuuluu = _closure1_slot13;
            entity = zuuluu.getGuild;
            entity = entity.bind(zuuluu)(tangon);
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00030_ip = 45; continue _fun00029 }
 37:
            _closure1_slot27 = entity;
            _closure1_slot26 = entity;
 45:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_CANCEL_CHANGES'] = yankee;
    yankee = function(argFoo) { // Original name: handleSaveRouteStack
        entity = argFoo;
        michal = entity.state;
        _closure1_slot31 = michal;
        entity = false;
        return entity;
    };
    tangon['GUILD_SETTINGS_SAVE_ROUTE_STACK'] = yankee;
    yankee = function() { // Original name: handleFormSubmit
        entity = _closure1_slot15;
        entity = entity.SUBMITTING;
        _closure1_slot37 = entity;
        entity = {};
        _closure1_slot38 = entity;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_SETTINGS_SUBMIT'] = yankee;
    yankee = function() { // Original name: handleSubmitSuccess
        entity = _closure1_slot15;
        entity = entity.OPEN;
        _closure1_slot37 = entity;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_SETTINGS_SUBMIT_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handleFormSubmitFailure
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = _closure1_slot15;
            entity = entity.OPEN;
            _closure1_slot37 = entity;
            entity = _closure1_slot23;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00032_ip = 76; continue _fun00031 }
 27:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 22;
            report = report[tangon];
            tangon = undefined;
            oscard = oscard.bind(tangon)(report);
            report = oscard.getDefaultGuildSettingsSection;
            golfie = _closure1_slot27;
            option = zuuluu == golfie;
            if(option) { _fun00032_ip = 71; continue _fun00031 }
 66:
            tangon = golfie.id;
 71:
            entity = report.bind(oscard)(tangon);
 76:
            _closure1_slot23 = entity;
            _closure1_slot24 = zuuluu;
            entity = argFoo;
            entity = entity.errors;
            if(!(zuuluu == entity)) { _fun00032_ip = 99; continue _fun00031 }
 97:
            entity = {};
 99:
            _closure1_slot38 = entity;
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_SUBMIT_FAILURE'] = yankee;
    yankee = function(argFoo) { // Original name: handleSetSection
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot27;
            michal = null;
            if(!(michal != zuuluu)) { _fun00034_ip = 664; continue _fun00033 }
 19:
            zuuluu = _closure1_slot23;
            report = tangon.section;
            _closure1_slot23 = report;
            report = tangon.subsection;
            _closure1_slot24 = report;
            oscard = _closure1_slot23;
            report = _closure1_slot17;
            report = report.BANS;
            if(!(oscard !== report)) { _fun00034_ip = 548; continue _fun00033 }
 63:
            oscard = _closure1_slot23;
            report = _closure1_slot17;
            report = report.INSTANT_INVITES;
            if(!(oscard !== report)) { _fun00034_ip = 452; continue _fun00033 }
 84:
            oscard = _closure1_slot23;
            report = _closure1_slot17;
            report = report.INVITES;
            if(!(oscard !== report)) { _fun00034_ip = 452; continue _fun00033 }
 105:
            oscard = _closure1_slot23;
            report = _closure1_slot17;
            report = report.WIDGET;
            if(!(oscard !== report)) { _fun00034_ip = 405; continue _fun00033 }
 126:
            oscard = _closure1_slot23;
            report = _closure1_slot17;
            report = report.INTEGRATIONS;
            if(!(oscard !== report)) { _fun00034_ip = 376; continue _fun00033 }
 147:
            oscard = _closure1_slot23;
            report = _closure1_slot17;
            report = report.ROLES;
            if(!(oscard !== report)) { _fun00034_ip = 376; continue _fun00033 }
 168:
            oscard = _closure1_slot23;
            report = _closure1_slot17;
            report = report.MEMBERS;
            if(!(oscard !== report)) { _fun00034_ip = 353; continue _fun00033 }
 189:
            oscard = _closure1_slot23;
            report = _closure1_slot17;
            report = report.VANITY_URL;
            if(!(oscard !== report)) { _fun00034_ip = 306; continue _fun00033 }
 207:
            oscard = _closure1_slot23;
            report = _closure1_slot17;
            report = report.SAFETY;
            if(!(oscard === report)) { _fun00034_ip = 660; continue _fun00033 }
 228:
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            report = 19;
            oscard = oscard[report];
            report = undefined;
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.dispatch;
            report = {};
            option = 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION';
            report['type'] = option;
            option = _closure1_slot24;
            if(!(michal != option)) { _fun00034_ip = 281; continue _fun00033 }
 275:
            option = _closure1_slot24;
            _fun00034_ip = 291; continue _fun00033;
 281:
            verify = _closure1_slot18;
            option = verify.SAFETY_OVERVIEW;
 291:
            report['subsection'] = option;
            report = oscard.bind(golfie)(report);
            _fun00034_ip = 660; continue _fun00033;
 306:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            report = 21;
            oscard = oscard[report];
            report = undefined;
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.fetchVanityUrl;
            report = _closure1_slot27;
            report = report.id;
            report = oscard.bind(golfie)(report);
            _fun00034_ip = 660; continue _fun00033;
 353:
            oscard = _closure1_slot27;
            report = oscard.getEveryoneRoleId;
            report = report.bind(oscard)();
            _closure1_slot30 = report;
            _fun00034_ip = 660; continue _fun00033;
 376:
            _closure1_slot30 = michal;
            michal = tangon.section;
            if(!(zuuluu !== michal)) { _fun00034_ip = 660; continue _fun00033 }
 392:
            zuuluu = _closure1_slot62;
            michal = undefined;
            michal = zuuluu.bind(michal)(tangon);
            return michal;
 405:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 20;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.fetchGuildEmbed;
            michal = _closure1_slot27;
            michal = michal.id;
            michal = zuuluu.bind(tangon)(michal);
            _fun00034_ip = 660; continue _fun00033;
 452:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 18;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            tangon = michal.HTTP;
            zuuluu = tangon.get;
            michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
            golfie = _closure1_slot19;
            oscard = golfie.GUILD_INSTANT_INVITES;
            report = _closure1_slot27;
            report = report.id;
            report = oscard.bind(golfie)(report);
            michal['url'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 19;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'GUILD_SETTINGS_LOADED_INVITES';
                michal['type'] = report;
                report = argFoo;
                report = report.body;
                michal['invites'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            _fun00034_ip = 660; continue _fun00033;
 548:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 16;
            michal = tangon[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            report = michal.GuildSettingsBansNewExperiment;
            zuuluu = report.getCurrentConfig;
            michal = {};
            oscard = _closure1_slot27;
            oscard = oscard.id;
            michal['guildId'] = oscard;
            oscard = '7f0c91_1';
            michal['location'] = oscard;
            michal = zuuluu.bind(report)(michal);
            michal = michal.enabled;
            if(michal) { _fun00034_ip = 660; continue _fun00033 }
 620:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 17;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.fetchGuildBans;
            entity = _closure1_slot27;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity);
 660:
            entity = undefined;
            return entity;
 664:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_SET_SECTION'] = yankee;
    yankee = function(argFoo) { // Original name: handleSetSearchQuery
        entity = argFoo;
        michal = entity.searchQuery;
        _closure1_slot25 = michal;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_SETTINGS_SET_SEARCH_QUERY'] = yankee;
    yankee = function(argFoo) { // Original name: handleLoadedBans
        entity = argFoo;
        tangon = entity.bans;
        zuuluu = tangon.reduce;
        entity = global;
        entity = entity.Map;
        michal = entity.prototype;
        michal = Object.create(michal, {constructor: {value: entity}});
        golfie = michal;
        entity = new golfie[entity](oscard);
        michal = entity instanceof Object ? entity : michal;
        entity = function(argFoo, argBar) {
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                entity = argFoo;
                tangon = argBar;
                michal = tangon.user;
                report = null;
                michal = report != michal;
                if(!michal) { _fun00036_ip = 34; continue _fun00035 }
 20:
                zuuluu = tangon.user;
                zuuluu = zuuluu.id;
                michal = report != zuuluu;
 34:
                if(!michal) { _fun00036_ip = 58; continue _fun00035 }
 37:
                zuuluu = entity.set;
                michal = tangon.user;
                michal = michal.id;
                michal = zuuluu.bind(entity)(michal, tangon);
 58:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        _closure1_slot51 = entity;
        entity = _closure1_slot52;
        entity = entity + 1;
        _closure1_slot52 = entity;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_SETTINGS_LOADED_BANS'] = yankee;
    yankee = function(argFoo) { // Original name: handleLoadedBansBatch
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            report = entity.bans;
            entity = entity.guildId;
            zuuluu = _closure1_slot53;
            zuuluu = zuuluu === entity;
            if(!zuuluu) { _fun00038_ip = 38; continue _fun00037 }
 28:
            oscard = _closure1_slot51;
            tangon = null;
            zuuluu = tangon != oscard;
 38:
            if(zuuluu) { _fun00038_ip = 77; continue _fun00037 }
 41:
            _closure1_slot53 = entity;
            entity = global;
            entity = entity.Map;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            verify = zuuluu;
            entity = new verify[entity](option);
            entity = entity instanceof Object ? entity : zuuluu;
            _closure1_slot51 = entity;
 77:
            tangon = report.reduce;
            zuuluu = _closure1_slot51;
            entity = function(argFoo, argBar) {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = argFoo;
                    tangon = argBar;
                    michal = tangon.user;
                    report = null;
                    michal = report != michal;
                    if(!michal) { _fun00040_ip = 34; continue _fun00039 }
 20:
                    zuuluu = tangon.user;
                    zuuluu = zuuluu.id;
                    michal = report != zuuluu;
 34:
                    if(!michal) { _fun00040_ip = 58; continue _fun00039 }
 37:
                    zuuluu = entity.set;
                    michal = tangon.user;
                    michal = michal.id;
                    michal = zuuluu.bind(entity)(michal, tangon);
 58:
                    return entity;
                }
            };
            entity = tangon.bind(report)(entity, zuuluu);
            _closure1_slot51 = entity;
            entity = _closure1_slot52;
            entity = entity + 1;
            _closure1_slot52 = entity;
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_LOADED_BANS_BATCH'] = yankee;
    yankee = function(argFoo) { // Original name: handleLoadedInvites
        entity = argFoo;
        tangon = entity.invites;
        zuuluu = tangon.reduce;
        michal = function(argFoo, argBar) {
            entity = argFoo;
            report = argBar;
            zuuluu = report.code;
            tangon = _closure1_slot61;
            michal = undefined;
            michal = tangon.bind(michal)(report);
            entity[zuuluu] = michal;
            return entity;
        };
        entity = {};
        michal = zuuluu.bind(tangon)(michal, entity);
        _closure1_slot54 = michal;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_SETTINGS_LOADED_INVITES'] = yankee;
    yankee = function(argFoo) { // Original name: handleSetEmbed
        entity = argFoo;
        zuuluu = true;
        _closure1_slot40 = zuuluu;
        zuuluu = entity.enabled;
        _closure1_slot41 = zuuluu;
        entity = entity.channelId;
        _closure1_slot42 = entity;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_SETTINGS_SET_WIDGET'] = yankee;
    yankee = function(argFoo) { // Original name: handleSetVanityURL
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            entity = argFoo;
            michal = entity.code;
            zuuluu = null;
            tangon = zuuluu != michal;
            if(!tangon) { _fun00042_ip = 20; continue _fun00041 }
 17:
            zuuluu = michal;
 20:
            _closure1_slot43 = zuuluu;
            entity = entity.uses;
            _closure1_slot44 = entity;
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_SET_VANITY_URL'] = yankee;
    yankee = function(argFoo) { // Original name: handleSetMFALevelSuccess
        entity = argFoo;
        michal = entity.level;
        _closure1_slot45 = michal;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_SETTINGS_SET_MFA_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handleRoleSelect
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            entity = entity.roleId;
            michal = null;
            zuuluu = michal != entity;
            if(!zuuluu) { _fun00044_ip = 21; continue _fun00043 }
 18:
            michal = entity;
 21:
            _closure1_slot30 = michal;
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_ROLE_SELECT'] = yankee;
    yankee = function(argFoo) { // Original name: handleLoadedIntegrations
        entity = argFoo;
        michal = entity.integrations;
        _closure1_slot55 = michal;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_SETTINGS_LOADED_INTEGRATIONS'] = yankee;
    yankee = function(argFoo) { // Original name: handleAddBan
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            verify = entity.user;
            tangon = entity.guildId;
            entity = _closure1_slot51;
            option = null;
            entity = option != entity;
            if(!entity) { _fun00046_ip = 106; continue _fun00045 }
 29:
            michal = _closure1_slot27;
            michal = option != michal;
            if(!michal) { _fun00046_ip = 53; continue _fun00045 }
 40:
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.id;
            michal = zuuluu === tangon;
 53:
            if(!michal) { _fun00046_ip = 103; continue _fun00045 }
 56:
            golfie = _closure1_slot51;
            oscard = golfie.set;
            tangon = verify.id;
            zuuluu = {};
            zuuluu['user'] = verify;
            zuuluu['reason'] = option;
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            zuuluu = _closure1_slot52;
            zuuluu = parseFloat(zuuluu);
            tangon = zuuluu + 1;
            _closure1_slot52 = tangon;
            michal = undefined;
 103:
            entity = michal;
 106:
            return entity;
        }
    };
    tangon['GUILD_BAN_ADD'] = yankee;
    yankee = function(argFoo) { // Original name: handleRemoveBan
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.user;
            oscard = entity.guildId;
            entity = _closure1_slot51;
            tangon = null;
            entity = tangon != entity;
            if(!entity) { _fun00048_ip = 94; continue _fun00047 }
 29:
            michal = _closure1_slot27;
            michal = tangon != michal;
            if(!michal) { _fun00048_ip = 53; continue _fun00047 }
 40:
            tangon = _closure1_slot27;
            tangon = tangon.id;
            michal = tangon === oscard;
 53:
            if(!michal) { _fun00048_ip = 91; continue _fun00047 }
 56:
            oscard = _closure1_slot51;
            tangon = oscard.delete;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(oscard)(zuuluu);
            zuuluu = _closure1_slot52;
            zuuluu = parseFloat(zuuluu);
            tangon = zuuluu + 1;
            _closure1_slot52 = tangon;
            michal = undefined;
 91:
            entity = michal;
 94:
            return entity;
        }
    };
    tangon['GUILD_BAN_REMOVE'] = yankee;
    yankee = function(argFoo) { // Original name: handleRoleCreate
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            michal = _closure1_slot58;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            if(michal) { _fun00050_ip = 29; continue _fun00049 }
 25:
            michal = false;
            return michal;
 29:
            return entity;
        }
    };
    tangon['GUILD_ROLE_CREATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleRoleUpdate
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            michal = _closure1_slot58;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            if(michal) { _fun00052_ip = 29; continue _fun00051 }
 25:
            michal = false;
            return michal;
 29:
            return entity;
        }
    };
    tangon['GUILD_ROLE_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleRoleDelete
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            tangon = entity.roleId;
            michal = _closure1_slot58;
            entity = undefined;
            michal = michal.bind(entity)(report);
            if(michal) { _fun00054_ip = 35; continue _fun00053 }
 31:
            michal = false;
            return michal;
 35:
            michal = _closure1_slot30;
            if(!(michal === tangon)) { _fun00054_ip = 49; continue _fun00053 }
 43:
            michal = null;
            _closure1_slot30 = michal;
 49:
            return entity;
        }
    };
    tangon['GUILD_ROLE_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleGuildUpdate
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            zuuluu = _closure1_slot27;
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00056_ip = 189; continue _fun00055 }
 18:
            zuuluu = _closure1_slot27;
            report = zuuluu.id;
            zuuluu = argFoo;
            zuuluu = zuuluu.guild;
            zuuluu = zuuluu.id;
            if(!(report === zuuluu)) { _fun00056_ip = 189; continue _fun00055 }
 47:
            oscard = _closure1_slot13;
            report = oscard.getGuild;
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.id;
            zuuluu = report.bind(oscard)(zuuluu);
            if(!(tangon != zuuluu)) { _fun00056_ip = 185; continue _fun00055 }
 74:
            oscard = _closure1_slot8;
            report = oscard.getProfile;
            tangon = _closure1_slot27;
            tangon = tangon.id;
            tangon = report.bind(oscard)(tangon);
            _closure1_slot28 = tangon;
            report = _closure1_slot23;
            tangon = _closure1_slot17;
            tangon = tangon.PROFILE;
            if(!(report !== tangon)) { _fun00056_ip = 128; continue _fun00055 }
 120:
            tangon = _closure1_slot28;
            _closure1_slot29 = tangon;
 128:
            _closure1_slot26 = zuuluu;
            var _closure2_slot0 = zuuluu;
            tangon = _closure1_slot27;
            zuuluu = tangon.toJS;
            zuuluu = zuuluu.bind(tangon)();
            var _closure2_slot1 = zuuluu;
            report = _closure1_slot33;
            tangon = report.forEach;
            zuuluu = function(argFoo) {
                _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                    report = argFoo;
                    zuuluu = _closure1_slot35;
                    entity = zuuluu.has;
                    entity = entity.bind(zuuluu)(report);
                    if(entity) { _fun00058_ip = 164; continue _fun00057 }
 26:
                    entity = 'rulesChannelId';
                    entity = entity !== report;
                    if(!entity) { _fun00058_ip = 45; continue _fun00057 }
 37:
                    zuuluu = 'publicUpdatesChannelId';
                    entity = zuuluu !== report;
 45:
                    if(entity) { _fun00058_ip = 67; continue _fun00057 }
 48:
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu[report];
                    michal = _closure1_slot22;
                    entity = zuuluu !== michal;
 67:
                    if(!entity) { _fun00058_ip = 164; continue _fun00057 }
 70:
                    entity = 'features';
                    if(!(entity === report)) { _fun00058_ip = 134; continue _fun00057 }
 78:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.set;
                    tangon = global;
                    oscard = tangon.Set;
                    entity = _closure2_slot1;
                    option = entity[report];
                    tangon = oscard.prototype;
                    tangon = Object.create(tangon, {constructor: {value: oscard}});
                    verify = tangon;
                    entity = new verify[oscard](option, golfie);
                    entity = entity instanceof Object ? entity : tangon;
                    entity = michal.bind(zuuluu)(report, entity);
                    _fun00058_ip = 164; continue _fun00057;
 134:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.set;
                    entity = _closure2_slot1;
                    entity = entity[report];
                    entity = zuuluu.bind(tangon)(report, entity);
                    _closure2_slot0 = entity;
 164:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = tangon.bind(report)(zuuluu);
            entity = _closure2_slot0;
            _closure1_slot27 = entity;
            entity = undefined;
            return entity;
 185:
            entity = false;
            return entity;
 189:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleGuildDelete
        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
            zuuluu = _closure1_slot27;
            michal = null;
            if(!(michal != zuuluu)) { _fun00060_ip = 51; continue _fun00059 }
 13:
            michal = _closure1_slot27;
            zuuluu = michal.id;
            michal = argFoo;
            michal = michal.guild;
            michal = michal.id;
            if(!(zuuluu === michal)) { _fun00060_ip = 51; continue _fun00059 }
 39:
            michal = _closure1_slot60;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 51:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleProfileFetch
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.profile;
            report = zuuluu.id;
            oscard = _closure1_slot27;
            entity = null;
            golfie = entity == oscard;
            entity = undefined;
            tangon = undefined;
            if(golfie) { _fun00062_ip = 39; continue _fun00061 }
 34:
            tangon = oscard.id;
 39:
            if(!(report === tangon)) { _fun00062_ip = 51; continue _fun00061 }
 43:
            _closure1_slot29 = zuuluu;
            _closure1_slot28 = zuuluu;
 51:
            return entity;
        }
    };
    tangon['GUILD_PROFILE_FETCH_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handleProfileUpdateStart
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            zuuluu = _closure1_slot27;
            entity = null;
            if(!(entity != zuuluu)) { _fun00064_ip = 42; continue _fun00063 }
 21:
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.id;
            if(!(zuuluu === tangon)) { _fun00064_ip = 42; continue _fun00063 }
 34:
            _closure1_slot39 = entity;
            entity = undefined;
            return entity;
 42:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_PROFILE_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleProfileApiUpdate
        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
            entity = argFoo;
            oscard = entity.profile;
            michal = _closure1_slot29;
            tangon = null;
            golfie = tangon == michal;
            zuuluu = undefined;
            entity = undefined;
            if(golfie) { _fun00066_ip = 34; continue _fun00065 }
 29:
            entity = michal.id;
 34:
            entity = tangon != entity;
            if(!entity) { _fun00066_ip = 117; continue _fun00065 }
 41:
            golfie = _closure1_slot58;
            michal = _closure1_slot29;
            michal = michal.id;
            golfie = golfie.bind(zuuluu)(michal);
            michal = !golfie;
            michal = !michal;
            if(!golfie) { _fun00066_ip = 114; continue _fun00065 }
 68:
            golfie = oscard.id;
            option = _closure1_slot27;
            verify = tangon == option;
            zuuluu = undefined;
            if(verify) { _fun00066_ip = 91; continue _fun00065 }
 86:
            zuuluu = option.id;
 91:
            zuuluu = golfie === zuuluu;
            if(!zuuluu) { _fun00066_ip = 112; continue _fun00065 }
 98:
            _closure1_slot29 = oscard;
            _closure1_slot28 = oscard;
            _closure1_slot39 = tangon;
            zuuluu = null;
 112:
            michal = undefined;
 114:
            entity = michal;
 117:
            return entity;
        }
    };
    tangon['GUILD_PROFILE_UPDATE_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handleProfileApiUpdateFailure
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            michal = entity.error;
            report = _closure1_slot27;
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00068_ip = 47; continue _fun00067 }
 26:
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.id;
            if(!(zuuluu === tangon)) { _fun00068_ip = 47; continue _fun00067 }
 39:
            _closure1_slot39 = michal;
            entity = undefined;
            return entity;
 47:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_PROFILE_UPDATE_FAILURE'] = yankee;
    tangon['USER_CONNECTIONS_UPDATE'] = offset;
    tangon['GUILD_INTEGRATIONS_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleInviteRevoke
        michal = {};
        tangon = _closure1_slot54;
        report = michal;
        zuuluu = copyDataProperties(report, tangon);
        _closure1_slot54 = michal;
        entity = argFoo;
        entity = entity.code;
        entity = delete michal[entity];
        entity = undefined;
        return entity;
    };
    tangon['INSTANT_INVITE_REVOKE_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleInviteCreateSuccess
        entity = argFoo;
        zuuluu = {};
        golfie = _closure1_slot54;
        option = zuuluu;
        tangon = copyDataProperties(option, golfie);
        tangon = entity.invite;
        report = tangon.code;
        oscard = _closure1_slot61;
        tangon = entity.invite;
        entity = undefined;
        tangon = oscard.bind(entity)(tangon);
        zuuluu[report] = tangon;
        _closure1_slot54 = zuuluu;
        return entity;
    };
    tangon['INSTANT_INVITE_CREATE_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleGuildMetadataServerUpdate
        _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
            entity = argFoo;
            oscard = entity.guildId;
            tangon = entity.metadata;
            entity = _closure1_slot27;
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00070_ip = 43; continue _fun00069 }
 30:
            report = _closure1_slot27;
            report = report.id;
            entity = oscard === report;
 43:
            if(!entity) { _fun00070_ip = 289; continue _fun00069 }
 49:
            report = _closure1_slot48;
            entity = false;
            if(!(entity === report)) { _fun00070_ip = 65; continue _fun00069 }
 59:
            entity = true;
            _closure1_slot48 = entity;
 65:
            entity = {};
            report = tangon.primaryCategoryId;
            if(!(zuuluu == report)) { _fun00070_ip = 81; continue _fun00069 }
 77:
            report = _closure1_slot20;
 81:
            entity['primaryCategoryId'] = report;
            report = tangon.secondaryCategoryIds;
            if(!(zuuluu == report)) { _fun00070_ip = 100; continue _fun00069 }
 96:
            report = new Array(0);
 100:
            entity['secondaryCategoryIds'] = report;
            report = tangon.keywords;
            if(!(zuuluu == report)) { _fun00070_ip = 119; continue _fun00069 }
 115:
            report = new Array(0);
 119:
            entity['keywords'] = report;
            oscard = tangon.emojiDiscoverabilityEnabled;
            report = zuuluu == oscard;
            if(report) { _fun00070_ip = 140; continue _fun00069 }
 137:
            report = oscard;
 140:
            entity['emojiDiscoverabilityEnabled'] = report;
            oscard = tangon.partnerActionedTimestamp;
            golfie = zuuluu != oscard;
            report = null;
            if(!golfie) { _fun00070_ip = 163; continue _fun00069 }
 160:
            report = oscard;
 163:
            entity['partnerActionedTimestamp'] = report;
            oscard = tangon.partnerApplicationTimestamp;
            golfie = zuuluu != oscard;
            report = null;
            if(!golfie) { _fun00070_ip = 186; continue _fun00069 }
 183:
            report = oscard;
 186:
            entity['partnerApplicationTimestamp'] = report;
            oscard = tangon.isPublished;
            report = zuuluu != oscard;
            if(!report) { _fun00070_ip = 207; continue _fun00069 }
 204:
            report = oscard;
 207:
            entity['isPublished'] = report;
            report = tangon.reasonsToJoin;
            if(!(zuuluu == report)) { _fun00070_ip = 226; continue _fun00069 }
 222:
            report = new Array(0);
 226:
            entity['reasonsToJoin'] = report;
            report = tangon.socialLinks;
            if(!(zuuluu == report)) { _fun00070_ip = 245; continue _fun00069 }
 241:
            report = new Array(0);
 245:
            entity['socialLinks'] = report;
            tangon = tangon.about;
            report = zuuluu != tangon;
            zuuluu = '';
            if(!report) { _fun00070_ip = 270; continue _fun00069 }
 267:
            zuuluu = tangon;
 270:
            entity['about'] = zuuluu;
            _closure1_slot49 = entity;
            _closure1_slot50 = entity;
            entity = {};
            _closure1_slot38 = entity;
 289:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER'] = offset;
    offset = function() { // Original name: handleGuildMetadataFetchFail
        entity = _closure1_slot47;
        _closure1_slot50 = entity;
        _closure1_slot49 = entity;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_DISCOVERY_METADATA_FETCH_FAIL'] = offset;
    offset = function(argFoo) { // Original name: handleGuildCategoryAdd
        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            golfie = entity.categoryId;
            zuuluu = _closure1_slot27;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00072_ip = 43; continue _fun00071 }
 30:
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.id;
            entity = tangon === zuuluu;
 43:
            if(!entity) { _fun00072_ip = 159; continue _fun00071 }
 46:
            entity = {};
            offset = _closure1_slot50;
            yankee = entity;
            zuuluu = copyDataProperties(yankee, offset);
            zuuluu = _closure1_slot50;
            offset = zuuluu.secondaryCategoryIds;
            zuuluu = new Array(1);
            yankee = zuuluu;
            verify = 0;
            tangon = arraySpread(yankee, offset, verify);
            zuuluu[tangon] = golfie;
            oscard = 1;
            tangon = tangon + oscard;
            tangon = 'secondaryCategoryIds';
            entity[tangon] = zuuluu;
            _closure1_slot50 = entity;
            entity = {};
            offset = _closure1_slot49;
            yankee = entity;
            zuuluu = copyDataProperties(yankee, offset);
            zuuluu = _closure1_slot49;
            offset = zuuluu.secondaryCategoryIds;
            zuuluu = new Array(1);
            yankee = zuuluu;
            report = arraySpread(yankee, offset, verify);
            zuuluu[report] = golfie;
            report = report + oscard;
            entity[tangon] = zuuluu;
            _closure1_slot49 = entity;
 159:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_DISCOVERY_CATEGORY_ADD'] = offset;
    offset = function(argFoo) { // Original name: handleGuildCategoryDelete
        _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            report = entity.categoryId;
            tangon = _closure1_slot27;
            entity = null;
            if(!(entity != tangon)) { _fun00074_ip = 228; continue _fun00073 }
 30:
            entity = _closure1_slot27;
            entity = entity.id;
            if(!(zuuluu === entity)) { _fun00074_ip = 228; continue _fun00073 }
 46:
            entity = _closure1_slot50;
            zuuluu = entity.secondaryCategoryIds;
            entity = zuuluu.indexOf;
            golfie = entity.bind(zuuluu)(report);
            entity = -1;
            if(!(entity !== golfie)) { _fun00074_ip = 140; continue _fun00073 }
 76:
            zuuluu = _closure1_slot50;
            verify = zuuluu.secondaryCategoryIds;
            oscard = new Array(0);
            option = 0;
            offset = oscard;
            zuuluu = arraySpread(offset, verify, option);
            tangon = oscard.splice;
            zuuluu = 1;
            zuuluu = tangon.bind(oscard)(golfie, zuuluu);
            zuuluu = {};
            verify = _closure1_slot50;
            offset = zuuluu;
            tangon = copyDataProperties(offset, verify);
            tangon = 'secondaryCategoryIds';
            zuuluu[tangon] = oscard;
            _closure1_slot50 = zuuluu;
 140:
            zuuluu = _closure1_slot49;
            tangon = zuuluu.secondaryCategoryIds;
            zuuluu = tangon.indexOf;
            report = zuuluu.bind(tangon)(report);
            if(!(entity !== report)) { _fun00074_ip = 228; continue _fun00073 }
 164:
            entity = _closure1_slot49;
            verify = entity.secondaryCategoryIds;
            tangon = new Array(0);
            option = 0;
            offset = tangon;
            entity = arraySpread(offset, verify, option);
            zuuluu = tangon.splice;
            entity = 1;
            entity = zuuluu.bind(tangon)(report, entity);
            entity = {};
            verify = _closure1_slot49;
            offset = entity;
            zuuluu = copyDataProperties(offset, verify);
            zuuluu = 'secondaryCategoryIds';
            entity[zuuluu] = tangon;
            _closure1_slot49 = entity;
 228:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_DISCOVERY_CATEGORY_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildCategoryUpdateFail
        _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
            entity = argFoo;
            oscard = entity.guildId;
            michal = entity.errors;
            tangon = _closure1_slot27;
            zuuluu = null;
            tangon = zuuluu != tangon;
            if(!tangon) { _fun00076_ip = 43; continue _fun00075 }
 30:
            report = _closure1_slot27;
            report = report.id;
            tangon = oscard === report;
 43:
            if(!tangon) { _fun00076_ip = 56; continue _fun00075 }
 46:
            if(!(zuuluu == michal)) { _fun00076_ip = 52; continue _fun00075 }
 50:
            michal = {};
 52:
            _closure1_slot38 = michal;
 56:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL'] = offset;
    offset = function(argFoo) { // Original name: handleGuildUpdateMetadata
        _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
            entity = argFoo;
            romeon = entity.guildId;
            yankee = entity.primaryCategoryId;
            offset = entity.keywords;
            verify = entity.emojiDiscoverabilityEnabled;
            option = entity.isPublished;
            golfie = entity.reasonsToJoin;
            oscard = entity.socialLinks;
            tangon = entity.about;
            entity = _closure1_slot27;
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00078_ip = 79; continue _fun00077 }
 66:
            report = _closure1_slot27;
            report = report.id;
            entity = romeon === report;
 79:
            if(!entity) { _fun00078_ip = 263; continue _fun00077 }
 85:
            entity = {};
            foxtra = _closure1_slot50;
            backup = entity;
            report = copyDataProperties(backup, foxtra);
            if(!(zuuluu == yankee)) { _fun00078_ip = 112; continue _fun00077 }
 102:
            report = _closure1_slot50;
            yankee = report.primaryCategoryId;
 112:
            report = 'primaryCategoryId';
            entity[report] = yankee;
            if(!(zuuluu == offset)) { _fun00078_ip = 135; continue _fun00077 }
 125:
            report = _closure1_slot50;
            offset = report.keywords;
 135:
            report = 'keywords';
            entity[report] = offset;
            if(!(zuuluu == verify)) { _fun00078_ip = 158; continue _fun00077 }
 148:
            report = _closure1_slot50;
            verify = report.emojiDiscoverabilityEnabled;
 158:
            report = 'emojiDiscoverabilityEnabled';
            entity[report] = verify;
            if(!(zuuluu == option)) { _fun00078_ip = 181; continue _fun00077 }
 171:
            report = _closure1_slot50;
            option = report.isPublished;
 181:
            report = 'isPublished';
            entity[report] = option;
            if(!(zuuluu == golfie)) { _fun00078_ip = 204; continue _fun00077 }
 194:
            report = _closure1_slot50;
            golfie = report.reasonsToJoin;
 204:
            report = 'reasonsToJoin';
            entity[report] = golfie;
            if(!(zuuluu == oscard)) { _fun00078_ip = 227; continue _fun00077 }
 217:
            report = _closure1_slot50;
            oscard = report.socialLinks;
 227:
            report = 'socialLinks';
            entity[report] = oscard;
            if(!(zuuluu == tangon)) { _fun00078_ip = 250; continue _fun00077 }
 240:
            zuuluu = _closure1_slot50;
            tangon = zuuluu.about;
 250:
            zuuluu = 'about';
            entity[zuuluu] = tangon;
            _closure1_slot50 = entity;
 263:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_UPDATE_DISCOVERY_METADATA'] = offset;
    offset = function(argFoo) { // Original name: handleGuildUpdateMetadataFail
        _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
            entity = argFoo;
            oscard = entity.guildId;
            michal = entity.errors;
            tangon = _closure1_slot27;
            zuuluu = null;
            tangon = zuuluu != tangon;
            if(!tangon) { _fun00080_ip = 43; continue _fun00079 }
 30:
            report = _closure1_slot27;
            report = report.id;
            tangon = oscard === report;
 43:
            if(!tangon) { _fun00080_ip = 56; continue _fun00079 }
 46:
            if(!(zuuluu == michal)) { _fun00080_ip = 52; continue _fun00079 }
 50:
            michal = {};
 52:
            _closure1_slot38 = michal;
 56:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_UPDATE_DISCOVERY_METADATA_FAIL'] = offset;
    offset = function(argFoo) { // Original name: handleGuildDiscoverySlugFetchSuccess
        entity = argFoo;
        michal = entity.slug;
        _closure1_slot32 = michal;
        entity = undefined;
        return entity;
    };
    tangon['GUILD_DISCOVERY_SLUG_FETCH_SUCCESS'] = offset;
    report = function(argFoo) { // Original name: handleGuildDiscoverySlugFetchFail
        _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
            michal = argFoo;
            zuuluu = null;
            if(!(michal != zuuluu)) { _fun00082_ip = 20; continue _fun00081 }
 9:
            _closure1_slot32 = zuuluu;
            entity = undefined;
            return entity;
 20:
            tangon = "Cannot destructure 'undefined' or 'null'.";
            report = michal;
            entity = throwTypeError(report, tangon);
            entity = undefined;
            throw entity;
        }
    };
    tangon['GUILD_DISCOVERY_SLUG_FETCH_FAIL'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    update = report;
    result = tangon;
    tangon = new update[verify](echoed, result, output);
    tangon = tangon instanceof Object ? tangon : report;
    report = 27;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_settings/GuildSettingsStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['EMPTY_METADATA'] = michal;
    return entity;
})();