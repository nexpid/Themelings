// app/records/GuildRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    tangon = function(argFoo, argBar) { // Original name: isGuildOwner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argBar;
            tangon = 'string';
            entity = typeof zuuluu;
            michal = zuuluu;
            if(!(tangon !== entity)) { _fun00002_ip = 34; continue _fun00001 }
 17:
            entity = null;
            tangon = entity != zuuluu;
            if(!tangon) { _fun00002_ip = 31; continue _fun00001 }
 26:
            entity = zuuluu.id;
 31:
            michal = entity;
 34:
            entity = argFoo;
            entity = entity.ownerId;
            entity = entity === michal;
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    offset = global;
    verify = offset.Object;
    oscard = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, report);
    yankee = 0;
    report = option[yankee];
    entity = undefined;
    report = golfie.bind(entity)(report);
    oscard = report.set;
    var _closure1_slot3 = oscard;
    report = report.TypeTag;
    report = 1;
    report = option[report];
    report = golfie.bind(entity)(report);
    backup = report.GuildExplicitContentFilterTypes;
    output = report.MFALevels;
    var _closure1_slot4 = output;
    foxtra = report.BoostedGuildTiers;
    sizing = report.UserNotificationSettings;
    kiloes = report.VerificationLevels;
    romeon = report.GuildNSFWContentLevel;
    var _closure1_slot5 = romeon;
    verify = offset.Object;
    oscard = verify.freeze;
    report = {'mfaLevel': null, 'preferredLocale': 'en-US', 'afkTimeout': 0};
    output = output.NONE;
    report['mfaLevel'] = output;
    sizing = sizing.ALL_MESSAGES;
    report['defaultMessageNotifications'] = sizing;
    kiloes = kiloes.NONE;
    report['verificationLevel'] = kiloes;
    backup = backup.DISABLED;
    report['explicitContentFilter'] = backup;
    backup = false;
    report['premiumProgressBarEnabled'] = backup;
    report['systemChannelFlags'] = yankee;
    backup = -1;
    report['maxStageVideoChannelUsers'] = backup;
    report['maxVideoChannelUsers'] = backup;
    report['maxMembers'] = backup;
    foxtra = foxtra.NONE;
    report['premiumTier'] = foxtra;
    romeon = romeon.DEFAULT;
    report['nsfwLevel'] = romeon;
    report['premiumSubscriberCount'] = yankee;
    offset = offset.Set;
    yankee = offset.prototype;
    yankee = Object.create(yankee, {constructor: {value: offset}});
    source = yankee;
    offset = new source[offset](update);
    offset = offset instanceof Object ? offset : yankee;
    report['features'] = offset;
    offset = null;
    report['description'] = offset;
    report['icon'] = offset;
    report['ownerId'] = offset;
    report['systemChannelId'] = offset;
    report['joinedAt'] = offset;
    report['discoverySplash'] = offset;
    report['splash'] = offset;
    report['banner'] = offset;
    report['homeHeader'] = offset;
    report['afkChannelId'] = offset;
    report['application_id'] = offset;
    report['vanityURLCode'] = offset;
    report['rulesChannelId'] = offset;
    report['safetyAlertsChannelId'] = offset;
    report['publicUpdatesChannelId'] = offset;
    report['ownerConfiguredContentLevel'] = offset;
    report['hubType'] = offset;
    report['latestOnboardingQuestionId'] = offset;
    report['profile'] = offset;
    report['premiumFeatures'] = offset;
    report['moderatorReporting'] = offset;
    report = oscard.bind(verify)(report);
    oscard = 5;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'records/GuildRecord.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = 'Guild';
    zuuluu['GuildRecordTypeTag'] = oscard;
    zuuluu['GUILD_DEFAULT_PROPERTY_VALUES'] = report;
    report = function(argFoo, argBar) { // Original name: getGuildIconURL
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            report = arguments[2];
            tangon = arguments[3];
            zuuluu = undefined;
            if(!(report === zuuluu)) { _fun00004_ip = 17; continue _fun00003 }
 15:
            report = false;
 17:
            if(!(tangon === zuuluu)) { _fun00004_ip = 23; continue _fun00003 }
 21:
            tangon = false;
 23:
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 2;
            entity = golfie[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.getGuildIconURL;
            entity = {};
            golfie = oscard.id;
            entity['id'] = golfie;
            golfie = argBar;
            entity['size'] = golfie;
            oscard = oscard.icon;
            entity['icon'] = oscard;
            entity['canAnimate'] = report;
            entity['lossless'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getGuildIconURL'] = report;
    report = function(argFoo, argBar) { // Original name: getGuildIconSource
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = arguments[2];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            report = undefined;
            if(!(tangon === report)) { _fun00006_ip = 27; continue _fun00005 }
 25:
            tangon = false;
 27:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 2;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.getAnimatableSourceWithFallback;
            entity = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getGuildIconSource;
                entity = {};
                tangon = _closure2_slot0;
                oscard = tangon.id;
                entity['id'] = oscard;
                report = _closure2_slot1;
                entity['size'] = report;
                tangon = tangon.icon;
                entity['icon'] = tangon;
                tangon = argFoo;
                entity['canAnimate'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    zuuluu['getGuildIconSource'] = report;
    report = function(argFoo) { // Original name: getGuildAcronym
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.getAcronym;
        entity = argFoo;
        entity = entity.name;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getGuildAcronym'] = report;
    zuuluu['isGuildOwner'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: isGuildOwnerWithRequiredMfaLevel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            entity = tangon.mfaEnabled;
            michal = !entity;
            if(!michal) { _fun00008_ip = 41; continue _fun00007 }
 18:
            zuuluu = report.mfaLevel;
            entity = _closure1_slot4;
            entity = entity.ELEVATED;
            michal = zuuluu === entity;
 41:
            entity = !michal;
            if(michal) { _fun00008_ip = 62; continue _fun00007 }
 47:
            zuuluu = _closure1_slot6;
            michal = undefined;
            entity = zuuluu.bind(michal)(report, tangon);
 62:
            return entity;
        }
    };
    zuuluu['isGuildOwnerWithRequiredMfaLevel'] = tangon;
    tangon = function(argFoo) { // Original name: isGuildLurker
        entity = argFoo;
        michal = entity.joinedAt;
        entity = null;
        entity = entity == michal;
        return entity;
    };
    zuuluu['isGuildLurker'] = tangon;
    tangon = function(argFoo) { // Original name: getGuildEveryoneRoleId
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.castGuildIdAsEveryoneGuildRoleId;
        entity = argFoo;
        entity = entity.id;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getGuildEveryoneRoleId'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateJoinedAt
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argBar;
            report = _closure1_slot3;
            michal = 'string';
            entity = typeof zuuluu;
            tangon = zuuluu;
            if(!(michal === entity)) { _fun00010_ip = 55; continue _fun00009 }
 24:
            entity = global;
            entity = entity.Date;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            verify = michal;
            option = zuuluu;
            entity = new verify[entity](option, golfie);
            tangon = entity instanceof Object ? entity : michal;
 55:
            zuuluu = undefined;
            michal = argFoo;
            entity = 'joinedAt';
            entity = report.bind(zuuluu)(michal, entity, tangon);
            return entity;
        }
    };
    zuuluu['updateJoinedAt'] = tangon;
    michal = function(argFoo) { // Original name: isGuildNSFW
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00012_ip = 61; continue _fun00011 }
 12:
            report = tangon.ownerConfiguredContentLevel;
            michal = _closure1_slot5;
            michal = michal.EXPLICIT;
            michal = report === michal;
            if(michal) { _fun00012_ip = 58; continue _fun00011 }
 38:
            tangon = tangon.ownerConfiguredContentLevel;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.AGE_RESTRICTED;
            michal = tangon === zuuluu;
 58:
            entity = michal;
 61:
            return entity;
        }
    };
    zuuluu['isGuildNSFW'] = michal;
    return entity;
})();