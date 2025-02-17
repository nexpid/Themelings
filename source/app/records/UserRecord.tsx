// app/records/UserRecord.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot19;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot19 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    report = 6;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.LOCAL_BOT_ID;
    var _closure1_slot9 = options;
    options = report.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot10 = options;
    options = report.PREMIUM_TYPE_NONE;
    var _closure1_slot11 = options;
    report = report.UserFlags;
    var _closure1_slot12 = report;
    report = 7;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ensureUserPrimaryGuild;
    var _closure1_slot13 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.CLYDE_AI_USER_ID;
    var _closure1_slot14 = report;
    report = 9;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.SKU_ID_PURCHASED_FLAGS;
    var _closure1_slot15 = options;
    options = report.PremiumSubscriptionSKUs;
    var _closure1_slot16 = options;
    report = report.PremiumTypes;
    var _closure1_slot17 = report;
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: UserRecord
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = argFoo;
                tango = this;
                entity = _closure1_slot4;
                mike = _closure2_slot0;
                zulu = undefined;
                entity = entity.bind(zulu)(tango, mike);
                entity = _closure1_slot18;
                entity = entity.bind(zulu)(tango, mike);
                var _closure3_slot0 = entity;
                mike = function() {
                    entity = false;
                    return entity;
                };
                entity['hasFlag'] = mike;
                mike = function() {
                    entity = false;
                    return entity;
                };
                entity['isStaff'] = mike;
                mike = function() {
                    entity = false;
                    return entity;
                };
                entity['isStaffPersonal'] = mike;
                mike = function() {
                    entity = false;
                    return entity;
                };
                entity['hasAnyStaffLevel'] = mike;
                golf = report.premium_type;
                mike = null;
                if(!(mike == golf)) { _fun00006_ip = 106; continue _fun00005 }
 100:
                golf = report.premiumType;
 106:
                tango = report.id;
                entity['id'] = tango;
                options = report.username;
                offset = mike != options;
                tango = '';
                if(!offset) { _fun00006_ip = 136; continue _fun00005 }
 133:
                tango = options;
 136:
                entity['username'] = tango;
                tango = report.discriminator;
                if(!(mike == tango)) { _fun00006_ip = 156; continue _fun00005 }
 152:
                tango = _closure1_slot10;
 156:
                entity['discriminator'] = tango;
                options = report.avatar;
                offset = mike != options;
                tango = null;
                if(!offset) { _fun00006_ip = 180; continue _fun00005 }
 177:
                tango = options;
 180:
                entity['avatar'] = tango;
                tango = report.avatar_decoration_data;
                if(!(mike == tango)) { _fun00006_ip = 202; continue _fun00005 }
 196:
                tango = report.avatarDecorationData;
 202:
                entity['avatarDecoration'] = tango;
                options = report.email;
                offset = mike != options;
                tango = null;
                if(!offset) { _fun00006_ip = 226; continue _fun00005 }
 223:
                tango = options;
 226:
                entity['email'] = tango;
                options = report.verified;
                tango = mike != options;
                if(!tango) { _fun00006_ip = 248; continue _fun00005 }
 245:
                tango = options;
 248:
                entity['verified'] = tango;
                options = report.bot;
                tango = mike != options;
                if(!tango) { _fun00006_ip = 270; continue _fun00005 }
 267:
                tango = options;
 270:
                entity['bot'] = tango;
                options = report.system;
                tango = mike != options;
                if(!tango) { _fun00006_ip = 292; continue _fun00005 }
 289:
                tango = options;
 292:
                entity['system'] = tango;
                options = report.mfa_enabled;
                if(!(mike == options)) { _fun00006_ip = 314; continue _fun00005 }
 308:
                options = report.mfaEnabled;
 314:
                tango = mike != options;
                if(!tango) { _fun00006_ip = 324; continue _fun00005 }
 321:
                tango = options;
 324:
                entity['mfaEnabled'] = tango;
                options = report.mobile;
                tango = mike != options;
                if(!tango) { _fun00006_ip = 346; continue _fun00005 }
 343:
                tango = options;
 346:
                entity['mobile'] = tango;
                options = report.desktop;
                tango = mike != options;
                if(!tango) { _fun00006_ip = 368; continue _fun00005 }
 365:
                tango = options;
 368:
                entity['desktop'] = tango;
                options = _closure1_slot11;
                tango = null;
                if(!(golf !== options)) { _fun00006_ip = 387; continue _fun00005 }
 384:
                tango = golf;
 387:
                entity['premiumType'] = tango;
                options = report.flags;
                offset = mike != options;
                tango = 0;
                golf = 0;
                if(!offset) { _fun00006_ip = 412; continue _fun00005 }
 409:
                golf = options;
 412:
                entity['flags'] = golf;
                options = report.public_flags;
                if(!(mike == options)) { _fun00006_ip = 434; continue _fun00005 }
 428:
                options = report.publicFlags;
 434:
                offset = mike != options;
                golf = 0;
                if(!offset) { _fun00006_ip = 446; continue _fun00005 }
 443:
                golf = options;
 446:
                entity['publicFlags'] = golf;
                options = report.purchased_flags;
                if(!(mike == options)) { _fun00006_ip = 468; continue _fun00005 }
 462:
                options = report.purchasedFlags;
 468:
                offset = mike != options;
                golf = 0;
                if(!offset) { _fun00006_ip = 480; continue _fun00005 }
 477:
                golf = options;
 480:
                entity['purchasedFlags'] = golf;
                options = report.premium_usage_flags;
                if(!(mike == options)) { _fun00006_ip = 502; continue _fun00005 }
 496:
                options = report.premiumUsageFlags;
 502:
                offset = mike != options;
                golf = 0;
                if(!offset) { _fun00006_ip = 514; continue _fun00005 }
 511:
                golf = options;
 514:
                entity['premiumUsageFlags'] = golf;
                options = report.phone;
                offset = mike != options;
                golf = null;
                if(!offset) { _fun00006_ip = 538; continue _fun00005 }
 535:
                golf = options;
 538:
                entity['phone'] = golf;
                golf = report.nsfw_allowed;
                if(!(mike == golf)) { _fun00006_ip = 560; continue _fun00005 }
 554:
                golf = report.nsfwAllowed;
 560:
                entity['nsfwAllowed'] = golf;
                golf = report.guildMemberAvatars;
                if(!(mike == golf)) { _fun00006_ip = 578; continue _fun00005 }
 576:
                golf = {};
 578:
                entity['guildMemberAvatars'] = golf;
                options = report.has_bounced_email;
                if(!(mike == options)) { _fun00006_ip = 600; continue _fun00005 }
 594:
                options = report.hasBouncedEmail;
 600:
                golf = mike != options;
                if(!golf) { _fun00006_ip = 610; continue _fun00005 }
 607:
                golf = options;
 610:
                entity['hasBouncedEmail'] = golf;
                options = report.personal_connection_id;
                if(!(mike == options)) { _fun00006_ip = 632; continue _fun00005 }
 626:
                options = report.personalConnectionId;
 632:
                offset = mike != options;
                golf = null;
                if(!offset) { _fun00006_ip = 644; continue _fun00005 }
 641:
                golf = options;
 644:
                entity['personalConnectionId'] = golf;
                golf = report.global_name;
                if(!(mike == golf)) { _fun00006_ip = 666; continue _fun00005 }
 660:
                golf = report.globalName;
 666:
                entity['globalName'] = golf;
                golf = report.banner;
                entity['banner'] = golf;
                oscar = _closure1_slot13;
                golf = report.primary_guild;
                if(!(mike == golf)) { _fun00006_ip = 704; continue _fun00005 }
 698:
                golf = report.primaryGuild;
 704:
                options = mike != golf;
                report = null;
                if(!options) { _fun00006_ip = 716; continue _fun00005 }
 713:
                report = golf;
 716:
                report = oscar.bind(zulu)(report);
                entity['primaryGuild'] = report;
                report = global;
                golf = report.Object;
                oscar = golf.defineProperties;
                report = {};
                options = {'writable': false, 'configurable': false};
                offset = function(argFoo) { // Original name: value
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        mike = argFoo;
                        entity = 1073741824;
                        if(!(!(mike <= entity))) { _fun00008_ip = 153; continue _fun00007 }
 16:
                        verify = _closure1_slot2;
                        offset = _closure1_slot3;
                        entity = 10;
                        zulu = offset[entity];
                        oscar = undefined;
                        golf = verify.bind(oscar)(zulu);
                        report = golf.deserialize;
                        zulu = _closure3_slot0;
                        tango = zulu.flags;
                        options = report.bind(golf)(tango);
                        tango = offset[entity];
                        report = verify.bind(oscar)(tango);
                        tango = report.deserialize;
                        zulu = zulu.publicFlags;
                        golf = tango.bind(report)(zulu);
                        zulu = offset[entity];
                        tango = verify.bind(oscar)(zulu);
                        zulu = tango.deserialize;
                        report = zulu.bind(tango)(mike);
                        zulu = offset[entity];
                        tango = verify.bind(oscar)(zulu);
                        zulu = tango.has;
                        entity = offset[entity];
                        oscar = verify.bind(oscar)(entity);
                        entity = oscar.combine;
                        entity = entity.bind(oscar)(options, golf);
                        entity = zulu.bind(tango)(entity, report);
                        return entity;
 153:
                        entity = _closure3_slot0;
                        zulu = entity.flags;
                        entity = entity.publicFlags;
                        entity = zulu | entity;
                        entity = entity & mike;
                        entity = entity === mike;
                        return entity;
                    }
                };
                options['value'] = offset;
                report['hasFlag'] = options;
                options = {'writable': false, 'configurable': false};
                offset = function() { // Original name: value
                    zulu = _closure3_slot0;
                    mike = zulu.hasFlag;
                    entity = _closure1_slot12;
                    entity = entity.STAFF;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                options['value'] = offset;
                report['isStaff'] = options;
                options = {'writable': false, 'configurable': false};
                offset = function() { // Original name: value
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        tango = _closure3_slot0;
                        zulu = tango.hasFlag;
                        entity = _closure1_slot12;
                        entity = entity.STAFF;
                        entity = zulu.bind(tango)(entity);
                        entity = !entity;
                        if(!entity) { _fun00010_ip = 53; continue _fun00009 }
 37:
                        mike = _closure3_slot0;
                        zulu = mike.personalConnectionId;
                        mike = null;
                        entity = mike != zulu;
 53:
                        return entity;
                    }
                };
                options['value'] = offset;
                report['isStaffPersonal'] = options;
                options = {'writable': false, 'configurable': false};
                verify = function() { // Original name: value
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        report = _closure3_slot0;
                        tango = report.hasFlag;
                        entity = _closure1_slot12;
                        entity = entity.STAFF;
                        entity = tango.bind(report)(entity);
                        if(entity) { _fun00012_ip = 59; continue _fun00011 }
 34:
                        oscar = _closure3_slot0;
                        report = oscar.hasFlag;
                        tango = _closure1_slot12;
                        tango = tango.COLLABORATOR;
                        entity = report.bind(oscar)(tango);
 59:
                        if(entity) { _fun00012_ip = 87; continue _fun00011 }
 62:
                        tango = _closure3_slot0;
                        zulu = tango.hasFlag;
                        mike = _closure1_slot12;
                        mike = mike.RESTRICTED_COLLABORATOR;
                        entity = zulu.bind(tango)(mike);
 87:
                        return entity;
                    }
                };
                options['value'] = verify;
                report['hasAnyStaffLevel'] = options;
                report = oscar.bind(golf)(entity, report);
                report = entity.globalName;
                oscar = mike == report;
                zulu = undefined;
                if(oscar) { _fun00006_ip = 865; continue _fun00005 }
 860:
                zulu = report.length;
 865:
                if(!(tango === zulu)) { _fun00006_ip = 875; continue _fun00005 }
 869:
                entity['globalName'] = mike;
 875:
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'createdAt';
        report['key'] = entity;
        entity = function() { // Original name: get
            entity = global;
            zulu = entity.Date;
            tango = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 11;
            mike = mike[entity];
            entity = undefined;
            tango = tango.bind(entity)(mike);
            mike = tango.extractTimestamp;
            entity = this;
            entity = entity.id;
            report = mike.bind(tango)(entity);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            oscar = mike;
            entity = new oscar[zulu](report, tango);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        report['get'] = entity;
        entity = new Array(25);
        entity[0] = report;
        report = {};
        golf = 'hasVerifiedEmailOrPhone';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = this;
                zulu = mike.verified;
                entity = true;
                entity = entity === zulu;
                if(entity) { _fun00014_ip = 30; continue _fun00013 }
 18:
                zulu = mike.phone;
                mike = null;
                entity = mike != zulu;
 30:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getAvatarURL';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                options = argFoo;
                report = arguments[2];
                oscar = this;
                tango = undefined;
                if(!(report === tango)) { _fun00016_ip = 17; continue _fun00015 }
 15:
                report = false;
 17:
                entity = null;
                mike = entity != options;
                golf = undefined;
                if(!mike) { _fun00016_ip = 38; continue _fun00015 }
 28:
                mike = oscar.guildMemberAvatars;
                golf = mike[options];
 38:
                if(!(entity != golf)) { _fun00016_ip = 46; continue _fun00015 }
 42:
                if(!(entity == options)) { _fun00016_ip = 87; continue _fun00015 }
 46:
                mike = _closure1_slot1;
                zulu = _closure1_slot3;
                entity = 12;
                entity = zulu[entity];
                zulu = mike.bind(tango)(entity);
                mike = zulu.getUserAvatarURL;
                entity = argBar;
                entity = mike.bind(zulu)(oscar, report, entity);
                _fun00016_ip = 146; continue _fun00015;
 87:
                zulu = _closure1_slot1;
                verify = _closure1_slot3;
                mike = 12;
                mike = verify[mike];
                tango = zulu.bind(tango)(mike);
                zulu = tango.getGuildMemberAvatarURLSimple;
                mike = {};
                mike['guildId'] = options;
                mike['avatar'] = golf;
                oscar = oscar.id;
                mike['userId'] = oscar;
                mike['canAnimate'] = report;
                entity = zulu.bind(tango)(mike);
 146:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'addGuildAvatarHash';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = argFoo;
                mike = argBar;
                entity = this;
                tango = entity.guildMemberAvatars;
                tango = tango[zulu];
                if(!(tango !== mike)) { _fun00018_ip = 63; continue _fun00017 }
 23:
                tango = {};
                oscar = entity.guildMemberAvatars;
                golf = tango;
                report = copyDataProperties(golf, oscar);
                tango[zulu] = mike;
                zulu = entity.merge;
                mike = {};
                mike['guildMemberAvatars'] = tango;
                mike = zulu.bind(entity)(mike);
                return mike;
 63:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'removeGuildAvatarHash';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zulu = argFoo;
                entity = this;
                mike = entity.guildMemberAvatars;
                tango = mike[zulu];
                mike = undefined;
                if(!(mike !== tango)) { _fun00020_ip = 62; continue _fun00019 }
 22:
                tango = {};
                oscar = entity.guildMemberAvatars;
                golf = tango;
                report = copyDataProperties(golf, oscar);
                tango[zulu] = mike;
                zulu = entity.merge;
                mike = {};
                mike['guildMemberAvatars'] = tango;
                mike = zulu.bind(entity)(mike);
                return mike;
 62:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getAvatarSource';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                oscar = argFoo;
                tango = arguments[1];
                mike = this;
                var _closure3_slot0 = mike;
                var _closure3_slot1 = oscar;
                report = undefined;
                if(!(tango === report)) { _fun00022_ip = 27; continue _fun00021 }
 25:
                tango = false;
 27:
                zulu = arguments[2];
                var _closure3_slot2 = zulu;
                var _closure3_slot3 = report;
                zulu = null;
                if(!(zulu != oscar)) { _fun00022_ip = 62; continue _fun00021 }
 44:
                mike = mike.guildMemberAvatars;
                mike = mike[oscar];
                _closure3_slot3 = mike;
                if(!(zulu == mike)) { _fun00022_ip = 104; continue _fun00021 }
 62:
                zulu = _closure1_slot1;
                oscar = _closure1_slot3;
                mike = 12;
                mike = oscar[mike];
                oscar = zulu.bind(report)(mike);
                zulu = oscar.getAnimatableSourceWithFallback;
                mike = function(argFoo) {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.getUserAvatarSource;
                    zulu = _closure3_slot0;
                    mike = _closure3_slot2;
                    entity = argFoo;
                    entity = tango.bind(report)(zulu, entity, mike);
                    return entity;
                };
                mike = zulu.bind(oscar)(tango, mike);
                return mike;
 104:
                zulu = _closure1_slot1;
                oscar = _closure1_slot3;
                mike = 12;
                mike = oscar[mike];
                zulu = zulu.bind(report)(mike);
                mike = zulu.getAnimatableSourceWithFallback;
                entity = function(argFoo) {
                    report = _closure1_slot1;
                    oscar = _closure1_slot3;
                    entity = 12;
                    mike = oscar[entity];
                    tango = undefined;
                    zulu = report.bind(tango)(mike);
                    mike = zulu.makeSource;
                    entity = oscar[entity];
                    report = report.bind(tango)(entity);
                    tango = report.getGuildMemberAvatarURLSimple;
                    entity = {};
                    golf = _closure3_slot1;
                    entity['guildId'] = golf;
                    golf = _closure3_slot3;
                    entity['avatar'] = golf;
                    golf = _closure3_slot0;
                    golf = golf.id;
                    entity['userId'] = golf;
                    golf = argFoo;
                    entity['canAnimate'] = golf;
                    oscar = _closure3_slot2;
                    entity['size'] = oscar;
                    entity = tango.bind(report)(entity);
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'isClaimed';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                mike = this;
                entity = mike.email;
                zulu = null;
                entity = zulu != entity;
                if(entity) { _fun00024_ip = 28; continue _fun00023 }
 18:
                mike = mike.phone;
                entity = zulu != mike;
 28:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'isPhoneVerified';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.phone;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'toString';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                mike = this;
                tango = mike.username;
                entity = '???';
                zulu = '';
                if(!(zulu !== tango)) { _fun00026_ip = 27; continue _fun00025 }
 22:
                entity = mike.username;
 27:
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'tag';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            report = entity.username;
            zulu = entity.discriminator;
            entity = global;
            mike = entity.HermesInternal;
            mike = mike.concat;
            tango = '';
            golf = mike.bind(tango)(zulu);
            oscar = golf.padStart;
            zulu = 4;
            mike = '0';
            zulu = oscar.bind(golf)(zulu, mike);
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = '#';
            entity = mike.bind(tango)(report, entity, zulu);
            return entity;
        };
        report['get'] = golf;
        entity[9] = report;
        report = {};
        golf = 'hasPurchasedFlag';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity = entity.purchasedFlags;
            entity = entity & mike;
            entity = entity === mike;
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'hasPremiumUsageFlag';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity = entity.premiumUsageFlags;
            entity = entity & mike;
            entity = entity === mike;
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'hasHadSKU';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tango = this;
                mike = _closure1_slot15;
                entity = argFoo;
                zulu = mike[entity];
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun00028_ip = 37; continue _fun00027 }
 26:
                mike = tango.hasPurchasedFlag;
                entity = mike.bind(tango)(zulu);
 37:
                return entity;
            }
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'hasHadPremium';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                options = arguments[0];
                tango = this;
                entity = undefined;
                if(!(options === entity)) { _fun00030_ip = 14; continue _fun00029 }
 12:
                options = null;
 14:
                report = tango.hasHadSKU;
                entity = _closure1_slot16;
                mike = entity.TIER_0;
                golf = report.bind(tango)(mike);
                report = tango.hasHadSKU;
                mike = entity.TIER_1;
                oscar = report.bind(tango)(mike);
                mike = tango.hasHadSKU;
                entity = entity.TIER_2;
                report = mike.bind(tango)(entity);
                entity = _closure1_slot17;
                mike = entity.TIER_1;
                entity = oscar;
                if(!(options !== mike)) { _fun00030_ip = 147; continue _fun00029 }
 89:
                mike = _closure1_slot17;
                tango = mike.TIER_2;
                mike = report;
                if(!(options !== tango)) { _fun00030_ip = 144; continue _fun00029 }
 106:
                zulu = _closure1_slot17;
                tango = zulu.TIER_0;
                zulu = golf;
                if(!(options !== tango)) { _fun00030_ip = 141; continue _fun00029 }
 123:
                tango = golf;
                if(golf) { _fun00030_ip = 132; continue _fun00029 }
 129:
                tango = oscar;
 132:
                if(tango) { _fun00030_ip = 138; continue _fun00029 }
 135:
                tango = report;
 138:
                zulu = tango;
 141:
                mike = zulu;
 144:
                entity = mike;
 147:
                return entity;
            }
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'hasFreePremium';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                zulu = this;
                entity = zulu.isStaff;
                entity = entity.bind(zulu)();
                if(entity) { _fun00032_ip = 40; continue _fun00031 }
 16:
                tango = zulu.hasFlag;
                mike = _closure1_slot12;
                mike = mike.PARTNER;
                entity = tango.bind(zulu)(mike);
 40:
                if(entity) { _fun00032_ip = 53; continue _fun00031 }
 43:
                mike = zulu.isStaffPersonal;
                entity = mike.bind(zulu)();
 53:
                return entity;
            }
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'hasUrgentMessages';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            mike = zulu.hasFlag;
            entity = _closure1_slot12;
            entity = entity.HAS_UNREAD_URGENT_MESSAGES;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'isNonUserBot';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                zulu = this;
                entity = zulu.isSystemUser;
                entity = entity.bind(zulu)();
                if(entity) { _fun00034_ip = 45; continue _fun00033 }
 16:
                mike = zulu.bot;
                if(!mike) { _fun00034_ip = 42; continue _fun00033 }
 25:
                tango = zulu.discriminator;
                zulu = _closure1_slot10;
                mike = tango === zulu;
 42:
                entity = mike;
 45:
                return entity;
            }
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'isLocalBot';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                mike = this;
                entity = mike.bot;
                if(!entity) { _fun00036_ip = 28; continue _fun00035 }
 12:
                zulu = mike.id;
                mike = _closure1_slot9;
                entity = zulu === mike;
 28:
                return entity;
            }
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'isVerifiedBot';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                tango = this;
                entity = tango.isSystemUser;
                entity = entity.bind(tango)();
                if(entity) { _fun00038_ip = 26; continue _fun00037 }
 16:
                mike = tango.isLocalBot;
                entity = mike.bind(tango)();
 26:
                if(entity) { _fun00038_ip = 53; continue _fun00037 }
 29:
                zulu = tango.hasFlag;
                mike = _closure1_slot12;
                mike = mike.VERIFIED_BOT;
                entity = zulu.bind(tango)(mike);
 53:
                return entity;
            }
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'isSystemUser';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.system;
            entity = true;
            entity = entity === mike;
            return entity;
        };
        report['value'] = golf;
        entity[19] = report;
        report = {};
        golf = 'isClyde';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.id;
            entity = _closure1_slot14;
            entity = mike === entity;
            return entity;
        };
        report['value'] = golf;
        entity[20] = report;
        report = {};
        golf = 'hasAvatarForGuild';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                tango = argFoo;
                zulu = null;
                entity = zulu != tango;
                if(!entity) { _fun00040_ip = 29; continue _fun00039 }
 12:
                mike = this;
                mike = mike.guildMemberAvatars;
                mike = mike[tango];
                entity = zulu != mike;
 29:
                return entity;
            }
        };
        report['value'] = golf;
        entity[21] = report;
        report = {};
        golf = 'isPomelo';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.discriminator;
            entity = '0';
            entity = entity === mike;
            return entity;
        };
        report['value'] = golf;
        entity[22] = report;
        report = {};
        golf = 'isProvisional';
        report['key'] = golf;
        golf = function() { // Original name: get
            zulu = this;
            mike = zulu.hasFlag;
            entity = _closure1_slot12;
            entity = entity.PROVISIONAL_ACCOUNT;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['get'] = golf;
        entity[23] = report;
        report = {};
        golf = 'avatarDecoration';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            entity = entity.avatarDecorationData;
            return entity;
        };
        report['get'] = golf;
        oscar = function(argFoo) { // Original name: set
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 13;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.parseAvatarDecorationData;
            mike = argFoo;
            zulu = zulu.bind(tango)(mike);
            mike = this;
            mike['avatarDecorationData'] = zulu;
            return entity;
        };
        report['set'] = oscar;
        entity[24] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = mike.bind(entity)(tango);
    mike = {};
    report = '0';
    mike['id'] = report;
    report = tango.prototype;
    report = Object.create(report, {constructor: {value: tango}});
    foxtrot = report;
    romeo = mike;
    mike = new foxtrot[tango](romeo, yankee);
    mike = mike instanceof Object ? mike : report;
    report = 14;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'records/UserRecord.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['PLACEHOLDER_USER_RECORD'] = mike;
    return entity;
})();