// app/records/GuildRecord.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = verify;
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
            entity = _closure1_slot16;
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
    var _closure1_slot15 = entity;
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
            _closure1_slot16 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    oscard = function(argFoo, argBar) { // Original name: isGuildOwner
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argBar;
            tangon = 'string';
            entity = typeof zuuluu;
            michal = zuuluu;
            if(!(tangon !== entity)) { _fun00006_ip = 34; continue _fun00005 }
 17:
            entity = null;
            tangon = entity != zuuluu;
            if(!tangon) { _fun00006_ip = 31; continue _fun00005 }
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
    var _closure1_slot17 = oscard;
    entity = global;
    offset = entity.Object;
    golfie = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = verify[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = verify[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = verify[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = verify[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = verify[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = verify[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = verify[michal];
    tangon = tangon.bind(entity)(michal);
    michal = 7;
    michal = verify[michal];
    michal = option.bind(entity)(michal);
    golfie = michal.GuildExplicitContentFilterTypes;
    var _closure1_slot9 = golfie;
    golfie = michal.MFALevels;
    var _closure1_slot10 = golfie;
    golfie = michal.BoostedGuildTiers;
    var _closure1_slot11 = golfie;
    golfie = michal.UserNotificationSettings;
    var _closure1_slot12 = golfie;
    golfie = michal.VerificationLevels;
    var _closure1_slot13 = golfie;
    michal = michal.GuildNSFWContentLevel;
    var _closure1_slot14 = michal;
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: GuildRecord
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                tangon = this;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                oscard = undefined;
                entity = entity.bind(oscard)(tangon, michal);
                entity = _closure1_slot15;
                entity = entity.bind(oscard)(tangon, michal);
                michal = zuuluu.id;
                entity['id'] = michal;
                michal = zuuluu.name;
                if(michal) { _fun00008_ip = 61; continue _fun00007 }
 57:
                michal = '';
 61:
                entity['name'] = michal;
                michal = zuuluu.description;
                if(michal) { _fun00008_ip = 77; continue _fun00007 }
 75:
                michal = null;
 77:
                entity['description'] = michal;
                michal = zuuluu.ownerId;
                if(michal) { _fun00008_ip = 94; continue _fun00007 }
 92:
                michal = null;
 94:
                entity['ownerId'] = michal;
                michal = zuuluu.icon;
                if(michal) { _fun00008_ip = 110; continue _fun00007 }
 108:
                michal = null;
 110:
                entity['icon'] = michal;
                michal = zuuluu.splash;
                if(michal) { _fun00008_ip = 127; continue _fun00007 }
 125:
                michal = null;
 127:
                entity['splash'] = michal;
                michal = zuuluu.banner;
                if(michal) { _fun00008_ip = 144; continue _fun00007 }
 142:
                michal = null;
 144:
                entity['banner'] = michal;
                michal = zuuluu.homeHeader;
                if(michal) { _fun00008_ip = 161; continue _fun00007 }
 159:
                michal = null;
 161:
                entity['homeHeader'] = michal;
                tangon = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 8;
                michal = golfie[michal];
                oscard = tangon.bind(oscard)(michal);
                tangon = oscard.toSetInplace;
                michal = zuuluu.features;
                michal = tangon.bind(oscard)(michal);
                entity['features'] = michal;
                michal = zuuluu.preferredLocale;
                if(michal) { _fun00008_ip = 223; continue _fun00007 }
 219:
                michal = 'en-US';
 223:
                entity['preferredLocale'] = michal;
                michal = zuuluu.afkChannelId;
                if(michal) { _fun00008_ip = 240; continue _fun00007 }
 238:
                michal = null;
 240:
                entity['afkChannelId'] = michal;
                michal = zuuluu.afkTimeout;
                entity['afkTimeout'] = michal;
                michal = zuuluu.systemChannelId;
                if(michal) { _fun00008_ip = 269; continue _fun00007 }
 267:
                michal = null;
 269:
                entity['systemChannelId'] = michal;
                michal = zuuluu.verificationLevel;
                if(michal) { _fun00008_ip = 294; continue _fun00007 }
 284:
                tangon = _closure1_slot13;
                michal = tangon.NONE;
 294:
                entity['verificationLevel'] = michal;
                tangon = zuuluu.joinedAt;
                oscard = global;
                michal = oscard.Date;
                michal = tangon instanceof michal;
                tangon = zuuluu.joinedAt;
                if(michal) { _fun00008_ip = 375; continue _fun00007 }
 327:
                michal = null;
                if(!(michal == tangon)) { _fun00008_ip = 341; continue _fun00007 }
 333:
                michal = zuuluu.joinedAt;
                _fun00008_ip = 373; continue _fun00007;
 341:
                option = oscard.Date;
                offset = zuuluu.joinedAt;
                golfie = option.prototype;
                golfie = Object.create(golfie, {constructor: {value: option}});
                yankee = golfie;
                oscard = new yankee[option](offset, verify);
                michal = oscard instanceof Object ? oscard : golfie;
 373:
                _fun00008_ip = 378; continue _fun00007;
 375:
                michal = tangon;
 378:
                entity['joinedAt'] = michal;
                michal = zuuluu.defaultMessageNotifications;
                if(michal) { _fun00008_ip = 403; continue _fun00007 }
 393:
                tangon = _closure1_slot12;
                michal = tangon.ALL_MESSAGES;
 403:
                entity['defaultMessageNotifications'] = michal;
                michal = zuuluu.mfaLevel;
                if(michal) { _fun00008_ip = 428; continue _fun00007 }
 418:
                tangon = _closure1_slot10;
                michal = tangon.NONE;
 428:
                entity['mfaLevel'] = michal;
                michal = zuuluu.application_id;
                if(michal) { _fun00008_ip = 445; continue _fun00007 }
 443:
                michal = null;
 445:
                entity['application_id'] = michal;
                michal = zuuluu.explicitContentFilter;
                if(michal) { _fun00008_ip = 470; continue _fun00007 }
 460:
                tangon = _closure1_slot9;
                michal = tangon.DISABLED;
 470:
                entity['explicitContentFilter'] = michal;
                michal = zuuluu.vanityURLCode;
                if(michal) { _fun00008_ip = 487; continue _fun00007 }
 485:
                michal = null;
 487:
                entity['vanityURLCode'] = michal;
                michal = zuuluu.premiumTier;
                if(michal) { _fun00008_ip = 512; continue _fun00007 }
 502:
                tangon = _closure1_slot11;
                michal = tangon.NONE;
 512:
                entity['premiumTier'] = michal;
                michal = zuuluu.premiumSubscriberCount;
                if(michal) { _fun00008_ip = 529; continue _fun00007 }
 527:
                michal = 0;
 529:
                entity['premiumSubscriberCount'] = michal;
                michal = zuuluu.premiumProgressBarEnabled;
                if(michal) { _fun00008_ip = 546; continue _fun00007 }
 544:
                michal = false;
 546:
                entity['premiumProgressBarEnabled'] = michal;
                michal = zuuluu.systemChannelFlags;
                entity['systemChannelFlags'] = michal;
                michal = zuuluu.discoverySplash;
                if(michal) { _fun00008_ip = 575; continue _fun00007 }
 573:
                michal = null;
 575:
                entity['discoverySplash'] = michal;
                michal = zuuluu.rulesChannelId;
                if(michal) { _fun00008_ip = 592; continue _fun00007 }
 590:
                michal = null;
 592:
                entity['rulesChannelId'] = michal;
                michal = zuuluu.safetyAlertsChannelId;
                if(michal) { _fun00008_ip = 609; continue _fun00007 }
 607:
                michal = null;
 609:
                entity['safetyAlertsChannelId'] = michal;
                michal = zuuluu.publicUpdatesChannelId;
                if(michal) { _fun00008_ip = 626; continue _fun00007 }
 624:
                michal = null;
 626:
                entity['publicUpdatesChannelId'] = michal;
                michal = zuuluu.maxStageVideoChannelUsers;
                if(michal) { _fun00008_ip = 647; continue _fun00007 }
 641:
                michal = -1;
 647:
                entity['maxStageVideoChannelUsers'] = michal;
                michal = zuuluu.maxVideoChannelUsers;
                if(michal) { _fun00008_ip = 668; continue _fun00007 }
 662:
                michal = -1;
 668:
                entity['maxVideoChannelUsers'] = michal;
                michal = zuuluu.maxMembers;
                if(michal) { _fun00008_ip = 689; continue _fun00007 }
 683:
                michal = -1;
 689:
                entity['maxMembers'] = michal;
                tangon = zuuluu.nsfwLevel;
                michal = null;
                if(!(michal == tangon)) { _fun00008_ip = 717; continue _fun00007 }
 707:
                report = _closure1_slot14;
                tangon = report.DEFAULT;
 717:
                entity['nsfwLevel'] = tangon;
                report = zuuluu.ownerConfiguredContentLevel;
                oscard = michal != report;
                tangon = null;
                if(!oscard) { _fun00008_ip = 741; continue _fun00007 }
 738:
                tangon = report;
 741:
                entity['ownerConfiguredContentLevel'] = tangon;
                tangon = zuuluu.hubType;
                entity['hubType'] = tangon;
                report = zuuluu.latestOnboardingQuestionId;
                oscard = michal != report;
                tangon = null;
                if(!oscard) { _fun00008_ip = 777; continue _fun00007 }
 774:
                tangon = report;
 777:
                entity['latestOnboardingQuestionId'] = tangon;
                report = zuuluu.profile;
                oscard = michal != report;
                tangon = null;
                if(!oscard) { _fun00008_ip = 801; continue _fun00007 }
 798:
                tangon = report;
 801:
                entity['profile'] = tangon;
                report = zuuluu.premiumFeatures;
                oscard = michal != report;
                tangon = null;
                if(!oscard) { _fun00008_ip = 825; continue _fun00007 }
 822:
                tangon = report;
 825:
                entity['premiumFeatures'] = tangon;
                zuuluu = zuuluu.moderatorReporting;
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00008_ip = 849; continue _fun00007 }
 846:
                michal = zuuluu;
 849:
                entity['moderatorReporting'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'merge';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                verify = tangon.features;
                entity = null;
                if(!(entity != verify)) { _fun00010_ip = 96; continue _fun00009 }
 18:
                report = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 8;
                oscard = golfie[entity];
                michal = undefined;
                option = report.bind(michal)(oscard);
                oscard = option.toSetInplace;
                oscard = oscard.bind(option)(verify);
                entity = golfie[entity];
                report = report.bind(michal)(entity);
                michal = report.setIsEqual;
                entity = zuuluu.features;
                entity = michal.bind(report)(oscard, entity);
                if(!entity) { _fun00010_ip = 96; continue _fun00009 }
 84:
                entity = zuuluu.features;
                tangon['features'] = entity;
 96:
                foxtra = _closure2_slot0;
                oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: _superPropGet
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        report = argFoo;
                        golfie = argBaz;
                        var _closure4_slot0 = golfie;
                        oscard = _closure1_slot7;
                        tangon = _closure1_slot6;
                        zuuluu = 1;
                        option = zuuluu & zuuluu;
                        entity = report;
                        if(!option) { _fun00012_ip = 41; continue _fun00011 }
 36:
                        entity = report.prototype;
 41:
                        report = undefined;
                        tangon = tangon.bind(report)(entity);
                        entity = 'merge';
                        report = oscard.bind(report)(tangon, entity, golfie);
                        var _closure4_slot1 = report;
                        entity = 2;
                        zuuluu = entity & zuuluu;
                        entity = report;
                        if(!zuuluu) { _fun00012_ip = 95; continue _fun00011 }
 76:
                        tangon = 'function';
                        zuuluu = typeof report;
                        entity = report;
                        if(!(tangon === zuuluu)) { _fun00012_ip = 95; continue _fun00011 }
 90:
                        entity = function(argFoo) {
                            tangon = _closure4_slot1;
                            zuuluu = tangon.apply;
                            michal = _closure4_slot0;
                            entity = argFoo;
                            entity = zuuluu.bind(tangon)(michal, entity);
                            return entity;
                        };
 95:
                        return entity;
                    }
                };
                backup = undefined;
                romeon = 'merge';
                offset = 1;
                yankee = zuuluu;
                michal = backup[oscard](foxtra, romeon, yankee, offset, verify);
                entity = michal.call;
                entity = entity.bind(michal)(zuuluu, tangon);
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'toString';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                report = 'GuildRecord.toString() should not be called, access GuildRecord.name instead';
                oscard = michal;
                entity = new oscard[zuuluu](report, tangon);
                zuuluu = entity instanceof Object ? entity : michal;
                tangon = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                entity = michal.captureException;
                entity = entity.bind(michal)(zuuluu);
                entity = this;
                michal = entity.name;
                entity = null;
                zuuluu = entity != michal;
                entity = '';
                if(!zuuluu) { _fun00014_ip = 94; continue _fun00013 }
 91:
                entity = michal;
 94:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: GuildRecordWithRoles
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = argFoo;
                oscard = this;
                michal = _closure1_slot3;
                report = _closure2_slot0;
                tangon = undefined;
                michal = michal.bind(tangon)(oscard, report);
                michal = _closure1_slot15;
                entity = new Array(1);
                entity[0] = zuuluu;
                entity = michal.bind(tangon)(oscard, report, entity);
                tangon = zuuluu.roles;
                michal = null;
                if(!(michal == tangon)) { _fun00016_ip = 61; continue _fun00015 }
 59:
                tangon = {};
 61:
                entity['roles'] = tangon;
                tangon = zuuluu.member;
                if(!tangon) { _fun00016_ip = 105; continue _fun00015 }
 76:
                tangon = zuuluu.member;
                tangon = tangon.userId;
                if(!tangon) { _fun00016_ip = 105; continue _fun00015 }
 90:
                tangon = zuuluu.member;
                tangon = tangon.roles;
                if(tangon) { _fun00016_ip = 113; continue _fun00015 }
 105:
                entity['member'] = michal;
                _fun00016_ip = 153; continue _fun00015;
 113:
                michal = {};
                tangon = zuuluu.member;
                tangon = tangon.roles;
                michal['roles'] = tangon;
                zuuluu = zuuluu.member;
                zuuluu = zuuluu.userId;
                michal['userId'] = zuuluu;
                entity['member'] = michal;
 153:
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot8;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot4;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    tangon = tangon.bind(entity)(michal);
    golfie = 13;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'records/GuildRecord.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = michal;
    golfie = function(argFoo, argBar) { // Original name: getGuildIconURL
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            oscard = argFoo;
            report = arguments[2];
            tangon = arguments[3];
            zuuluu = undefined;
            if(!(report === zuuluu)) { _fun00018_ip = 17; continue _fun00017 }
 15:
            report = false;
 17:
            if(!(tangon === zuuluu)) { _fun00018_ip = 23; continue _fun00017 }
 21:
            tangon = false;
 23:
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 10;
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
    zuuluu['getGuildIconURL'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: getGuildIconSource
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tangon = arguments[2];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            report = undefined;
            if(!(tangon === report)) { _fun00020_ip = 27; continue _fun00019 }
 25:
            tangon = false;
 27:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 10;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.getAnimatableSourceWithFallback;
            entity = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
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
    zuuluu['getGuildIconSource'] = golfie;
    golfie = function(argFoo) { // Original name: getGuildAcronym
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 11;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.getAcronym;
        entity = argFoo;
        entity = entity.name;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getGuildAcronym'] = golfie;
    zuuluu['isGuildOwner'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: isGuildOwnerWithRequiredMfaLevel
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            entity = tangon.mfaEnabled;
            michal = !entity;
            if(!michal) { _fun00022_ip = 41; continue _fun00021 }
 18:
            zuuluu = report.mfaLevel;
            entity = _closure1_slot10;
            entity = entity.ELEVATED;
            michal = zuuluu === entity;
 41:
            entity = !michal;
            if(michal) { _fun00022_ip = 62; continue _fun00021 }
 47:
            zuuluu = _closure1_slot17;
            michal = undefined;
            entity = zuuluu.bind(michal)(report, tangon);
 62:
            return entity;
        }
    };
    zuuluu['isGuildOwnerWithRequiredMfaLevel'] = oscard;
    oscard = function(argFoo) { // Original name: isGuildLurker
        entity = argFoo;
        michal = entity.joinedAt;
        entity = null;
        entity = entity == michal;
        return entity;
    };
    zuuluu['isGuildLurker'] = oscard;
    oscard = function(argFoo) { // Original name: getGuildEveryoneRoleId
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 12;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.castGuildIdAsEveryoneGuildRoleId;
        entity = argFoo;
        entity = entity.id;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getGuildEveryoneRoleId'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: updateJoinedAt
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tangon = argFoo;
            oscard = argBar;
            zuuluu = tangon.set;
            report = 'string';
            entity = typeof oscard;
            michal = oscard;
            if(!(report === entity)) { _fun00024_ip = 56; continue _fun00023 }
 25:
            entity = global;
            entity = entity.Date;
            report = entity.prototype;
            report = Object.create(report, {constructor: {value: entity}});
            verify = report;
            option = oscard;
            entity = new verify[entity](option, golfie);
            michal = entity instanceof Object ? entity : report;
 56:
            entity = 'joinedAt';
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['updateJoinedAt'] = oscard;
    report = function(argFoo) { // Original name: isGuildNSFW
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.nsfwLevel;
            entity = _closure1_slot14;
            entity = entity.EXPLICIT;
            entity = tangon === entity;
            if(entity) { _fun00026_ip = 49; continue _fun00025 }
 29:
            zuuluu = zuuluu.nsfwLevel;
            michal = _closure1_slot14;
            michal = michal.AGE_RESTRICTED;
            entity = zuuluu === michal;
 49:
            return entity;
        }
    };
    zuuluu['isGuildNSFW'] = report;
    zuuluu['GuildRecordWithRoles'] = tangon;
    zuuluu['GuildRecord'] = michal;
    return entity;
})();