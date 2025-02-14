// app/records/GuildRecord.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun36156: for(var _fun36156_ip = 0; ; ) switch(_fun36156_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun36156_ip = 46; continue _fun36156 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun36156_ip = 55; continue _fun36156 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun36156_ip = 343; continue _fun36156 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun36156_ip = 323; continue _fun36156 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun36156_ip = 283; continue _fun36156 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun36156_ip = 270; continue _fun36156 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun36156_ip = 163; continue _fun36156 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun36156_ip = 179; continue _fun36156 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun36156_ip = 249; continue _fun36156 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun36156_ip = 249; continue _fun36156 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun36156_ip = 234; continue _fun36156 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun36156_ip = 247; continue _fun36156 }
 234:
            verify = _closure1_slot19;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun36156_ip = 265; continue _fun36156;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun36156_ip = 283; continue _fun36156;
 270:
            golf = _closure1_slot19;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun36156_ip = 323; continue _fun36156 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun36156_ip = 330; continue _fun36156 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun36157: for(var _fun36157_ip = 0; ; ) switch(_fun36157_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun36157_ip = 56; continue _fun36157 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun36157_ip = 67; continue _fun36157;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun36158: for(var _fun36158_ip = 0; ; ) switch(_fun36158_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun36158_ip = 23; continue _fun36158 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun36158_ip = 33; continue _fun36158 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun36158_ip = 70; continue _fun36158 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun36158_ip = 55; continue _fun36158 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun36159: for(var _fun36159_ip = 0; ; ) switch(_fun36159_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot21;
            entity = entity.bind(zulu)();
            if(entity) { _fun36159_ip = 51; continue _fun36159 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun36159_ip = 92; continue _fun36159;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun36159_ip = 71; continue _fun36159 }
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
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun36160: for(var _fun36160_ip = 0; ; ) switch(_fun36160_ip) {
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
            _fun36160_ip = 74; continue _fun36160;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = golf[mike];
    report = report.bind(entity)(mike);
    mike = 7;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    options = mike.GuildExplicitContentFilterTypes;
    var _closure1_slot9 = options;
    options = mike.GuildFeatures;
    var _closure1_slot10 = options;
    options = mike.MFALevels;
    var _closure1_slot11 = options;
    options = mike.BoostedGuildTiers;
    var _closure1_slot12 = options;
    options = mike.UserNotificationSettings;
    var _closure1_slot13 = options;
    options = mike.VerificationLevels;
    var _closure1_slot14 = options;
    mike = mike.GuildNSFWContentLevel;
    var _closure1_slot15 = mike;
    mike = 8;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.EMOJI_MAX_SLOTS;
    var _closure1_slot16 = mike;
    mike = 9;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.BoostedGuildFeatures;
    var _closure1_slot17 = mike;
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: GuildRecord
            _fun36164: for(var _fun36164_ip = 0; ; ) switch(_fun36164_ip) {
 0:
                zulu = argFoo;
                oscar = this;
                entity = _closure1_slot3;
                mike = _closure2_slot0;
                tango = undefined;
                entity = entity.bind(tango)(oscar, mike);
                entity = _closure1_slot20;
                entity = entity.bind(tango)(oscar, mike);
                golf = zulu.features;
                mike = global;
                oscar = mike.Set;
                oscar = golf instanceof oscar;
                if(oscar) { _fun36164_ip = 116; continue _fun36164 }
 59:
                options = mike.Set;
                verify = mike.Array;
                golf = verify.from;
                oscar = zulu.features;
                if(oscar) { _fun36164_ip = 89; continue _fun36164 }
 85:
                oscar = new Array(0);
 89:
                romeo = golf.bind(verify)(oscar);
                golf = options.prototype;
                golf = Object.create(golf, {constructor: {value: options}});
                foxtrot = golf;
                oscar = new foxtrot[options](romeo, yankee);
                oscar = oscar instanceof Object ? oscar : golf;
                _fun36164_ip = 122; continue _fun36164;
 116:
                oscar = zulu.features;
 122:
                golf = zulu.id;
                entity['id'] = golf;
                golf = zulu.name;
                if(golf) { _fun36164_ip = 145; continue _fun36164 }
 141:
                golf = '';
 145:
                entity['name'] = golf;
                golf = zulu.description;
                if(golf) { _fun36164_ip = 161; continue _fun36164 }
 159:
                golf = null;
 161:
                entity['description'] = golf;
                golf = zulu.ownerId;
                if(golf) { _fun36164_ip = 178; continue _fun36164 }
 176:
                golf = null;
 178:
                entity['ownerId'] = golf;
                golf = zulu.icon;
                if(golf) { _fun36164_ip = 194; continue _fun36164 }
 192:
                golf = null;
 194:
                entity['icon'] = golf;
                golf = zulu.splash;
                if(golf) { _fun36164_ip = 211; continue _fun36164 }
 209:
                golf = null;
 211:
                entity['splash'] = golf;
                golf = zulu.banner;
                if(golf) { _fun36164_ip = 228; continue _fun36164 }
 226:
                golf = null;
 228:
                entity['banner'] = golf;
                golf = zulu.homeHeader;
                if(golf) { _fun36164_ip = 245; continue _fun36164 }
 243:
                golf = null;
 245:
                entity['homeHeader'] = golf;
                entity['features'] = oscar;
                oscar = zulu.preferredLocale;
                if(oscar) { _fun36164_ip = 270; continue _fun36164 }
 266:
                oscar = 'en-US';
 270:
                entity['preferredLocale'] = oscar;
                oscar = zulu.afkChannelId;
                if(oscar) { _fun36164_ip = 287; continue _fun36164 }
 285:
                oscar = null;
 287:
                entity['afkChannelId'] = oscar;
                oscar = zulu.afkTimeout;
                entity['afkTimeout'] = oscar;
                oscar = zulu.systemChannelId;
                if(oscar) { _fun36164_ip = 316; continue _fun36164 }
 314:
                oscar = null;
 316:
                entity['systemChannelId'] = oscar;
                oscar = zulu.verificationLevel;
                if(oscar) { _fun36164_ip = 341; continue _fun36164 }
 331:
                golf = _closure1_slot14;
                oscar = golf.NONE;
 341:
                entity['verificationLevel'] = oscar;
                golf = zulu.joinedAt;
                oscar = mike.Date;
                oscar = golf instanceof oscar;
                if(oscar) { _fun36164_ip = 400; continue _fun36164 }
 366:
                golf = mike.Date;
                romeo = zulu.joinedAt;
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                foxtrot = oscar;
                mike = new foxtrot[golf](romeo, yankee);
                mike = mike instanceof Object ? mike : oscar;
                _fun36164_ip = 406; continue _fun36164;
 400:
                mike = zulu.joinedAt;
 406:
                entity['joinedAt'] = mike;
                mike = zulu.defaultMessageNotifications;
                if(mike) { _fun36164_ip = 431; continue _fun36164 }
 421:
                oscar = _closure1_slot13;
                mike = oscar.ALL_MESSAGES;
 431:
                entity['defaultMessageNotifications'] = mike;
                mike = zulu.mfaLevel;
                if(mike) { _fun36164_ip = 456; continue _fun36164 }
 446:
                oscar = _closure1_slot11;
                mike = oscar.NONE;
 456:
                entity['mfaLevel'] = mike;
                mike = zulu.application_id;
                if(mike) { _fun36164_ip = 473; continue _fun36164 }
 471:
                mike = null;
 473:
                entity['application_id'] = mike;
                mike = zulu.explicitContentFilter;
                if(mike) { _fun36164_ip = 498; continue _fun36164 }
 488:
                oscar = _closure1_slot9;
                mike = oscar.DISABLED;
 498:
                entity['explicitContentFilter'] = mike;
                mike = zulu.vanityURLCode;
                if(mike) { _fun36164_ip = 515; continue _fun36164 }
 513:
                mike = undefined;
 515:
                entity['vanityURLCode'] = mike;
                mike = zulu.premiumTier;
                if(mike) { _fun36164_ip = 540; continue _fun36164 }
 530:
                tango = _closure1_slot12;
                mike = tango.NONE;
 540:
                entity['premiumTier'] = mike;
                mike = zulu.premiumSubscriberCount;
                if(mike) { _fun36164_ip = 557; continue _fun36164 }
 555:
                mike = 0;
 557:
                entity['premiumSubscriberCount'] = mike;
                mike = zulu.premiumProgressBarEnabled;
                if(mike) { _fun36164_ip = 574; continue _fun36164 }
 572:
                mike = false;
 574:
                entity['premiumProgressBarEnabled'] = mike;
                mike = zulu.systemChannelFlags;
                entity['systemChannelFlags'] = mike;
                mike = zulu.discoverySplash;
                if(mike) { _fun36164_ip = 603; continue _fun36164 }
 601:
                mike = null;
 603:
                entity['discoverySplash'] = mike;
                mike = zulu.rulesChannelId;
                if(mike) { _fun36164_ip = 620; continue _fun36164 }
 618:
                mike = null;
 620:
                entity['rulesChannelId'] = mike;
                mike = zulu.safetyAlertsChannelId;
                if(mike) { _fun36164_ip = 637; continue _fun36164 }
 635:
                mike = null;
 637:
                entity['safetyAlertsChannelId'] = mike;
                mike = zulu.publicUpdatesChannelId;
                if(mike) { _fun36164_ip = 654; continue _fun36164 }
 652:
                mike = null;
 654:
                entity['publicUpdatesChannelId'] = mike;
                mike = zulu.maxStageVideoChannelUsers;
                if(mike) { _fun36164_ip = 675; continue _fun36164 }
 669:
                mike = -1;
 675:
                entity['maxStageVideoChannelUsers'] = mike;
                mike = zulu.maxVideoChannelUsers;
                if(mike) { _fun36164_ip = 696; continue _fun36164 }
 690:
                mike = -1;
 696:
                entity['maxVideoChannelUsers'] = mike;
                mike = zulu.maxMembers;
                if(mike) { _fun36164_ip = 717; continue _fun36164 }
 711:
                mike = -1;
 717:
                entity['maxMembers'] = mike;
                tango = zulu.nsfwLevel;
                mike = null;
                if(!(mike == tango)) { _fun36164_ip = 745; continue _fun36164 }
 735:
                report = _closure1_slot15;
                tango = report.DEFAULT;
 745:
                entity['nsfwLevel'] = tango;
                tango = zulu.hubType;
                entity['hubType'] = tango;
                report = zulu.latestOnboardingQuestionId;
                oscar = mike != report;
                tango = null;
                if(!oscar) { _fun36164_ip = 781; continue _fun36164 }
 778:
                tango = report;
 781:
                entity['latestOnboardingQuestionId'] = tango;
                zulu = zulu.profile;
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun36164_ip = 805; continue _fun36164 }
 802:
                mike = zulu;
 805:
                entity['profile'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'merge';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun36165: for(var _fun36165_ip = 0; ; ) switch(_fun36165_ip) {
 0:
                tango = argFoo;
                zulu = this;
                report = tango.features;
                entity = null;
                if(!(entity != report)) { _fun36165_ip = 161; continue _fun36165 }
 21:
                entity = global;
                entity = entity.Set;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                sizing = mike;
                kilo = report;
                entity = new sizing[entity](kilo, backup);
                mike = entity instanceof Object ? entity : mike;
                report = mike.size;
                entity = zulu.features;
                entity = entity.size;
                if(!(report === entity)) { _fun36165_ip = 161; continue _fun36165 }
 72:
                entity = _closure1_slot18;
                verify = undefined;
                options = entity.bind(verify)(mike);
                entity = options.bind(verify)();
                mike = entity.done;
                report = entity;
                entity = false;
                if(mike) { _fun36165_ip = 146; continue _fun36165 }
 103:
                yankee = report.value;
                offset = zulu.features;
                mike = offset.has;
                mike = mike.bind(offset)(yankee);
                entity = true;
                if(!mike) { _fun36165_ip = 146; continue _fun36165 }
 129:
                offset = options.bind(verify)();
                mike = offset.done;
                report = offset;
                entity = false;
                if(!mike) { _fun36165_ip = 103; continue _fun36165 }
 146:
                if(entity) { _fun36165_ip = 161; continue _fun36165 }
 149:
                entity = zulu.features;
                tango['features'] = entity;
 161:
                kilo = _closure2_slot0;
                oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: _superPropGet
                    _fun36166: for(var _fun36166_ip = 0; ; ) switch(_fun36166_ip) {
 0:
                        report = argFoo;
                        golf = argBaz;
                        var _closure4_slot0 = golf;
                        oscar = _closure1_slot7;
                        zulu = _closure1_slot6;
                        tango = 1;
                        options = tango & tango;
                        entity = report;
                        if(!options) { _fun36166_ip = 41; continue _fun36166 }
 36:
                        entity = report.prototype;
 41:
                        report = undefined;
                        zulu = zulu.bind(report)(entity);
                        entity = 'merge';
                        entity = oscar.bind(report)(zulu, entity, golf);
                        var _closure4_slot1 = entity;
                        zulu = 2;
                        zulu = zulu & tango;
                        if(!zulu) { _fun36166_ip = 78; continue _fun36166 }
 73:
                        entity = function(argFoo) {
                            tango = _closure4_slot1;
                            zulu = tango.apply;
                            mike = _closure4_slot0;
                            entity = argFoo;
                            entity = zulu.bind(tango)(mike, entity);
                            return entity;
                        };
 78:
                        return entity;
                    }
                };
                sizing = undefined;
                backup = 'merge';
                romeo = 1;
                foxtrot = zulu;
                mike = sizing[oscar](kilo, backup, foxtrot, romeo, yankee);
                entity = mike.call;
                entity = entity.bind(mike)(zulu, tango);
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(21);
        entity[0] = report;
        report = {};
        golf = 'getSafetyAlertsChannelId';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun36168: for(var _fun36168_ip = 0; ; ) switch(_fun36168_ip) {
 0:
                mike = this;
                entity = mike.safetyAlertsChannelId;
                zulu = null;
                if(!(zulu == entity)) { _fun36168_ip = 21; continue _fun36168 }
 15:
                entity = mike.publicUpdatesChannelId;
 21:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getIconURL';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun36169: for(var _fun36169_ip = 0; ; ) switch(_fun36169_ip) {
 0:
                report = arguments[1];
                tango = arguments[2];
                oscar = this;
                zulu = undefined;
                if(!(report === zulu)) { _fun36169_ip = 17; continue _fun36169 }
 15:
                report = false;
 17:
                if(!(tango === zulu)) { _fun36169_ip = 23; continue _fun36169 }
 21:
                tango = false;
 23:
                mike = _closure1_slot1;
                golf = _closure1_slot2;
                entity = 10;
                entity = golf[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.getGuildIconURL;
                entity = {};
                golf = oscar.id;
                entity['id'] = golf;
                golf = argFoo;
                entity['size'] = golf;
                oscar = oscar.icon;
                entity['icon'] = oscar;
                entity['canAnimate'] = report;
                entity['lossless'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getIconSource';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun36170: for(var _fun36170_ip = 0; ; ) switch(_fun36170_ip) {
 0:
                tango = arguments[1];
                mike = this;
                var _closure3_slot0 = mike;
                mike = argFoo;
                var _closure3_slot1 = mike;
                report = undefined;
                if(!(tango === report)) { _fun36170_ip = 27; continue _fun36170 }
 25:
                tango = false;
 27:
                zulu = _closure1_slot1;
                oscar = _closure1_slot2;
                mike = 10;
                mike = oscar[mike];
                zulu = zulu.bind(report)(mike);
                mike = zulu.getAnimatableSourceWithFallback;
                entity = function(argFoo) {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.getGuildIconSource;
                    entity = {};
                    tango = _closure3_slot0;
                    oscar = tango.id;
                    entity['id'] = oscar;
                    report = _closure3_slot1;
                    entity['size'] = report;
                    tango = tango.icon;
                    entity['icon'] = tango;
                    tango = argFoo;
                    entity['canAnimate'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getApplicationId';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            entity = entity.application_id;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'toString';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun36173: for(var _fun36173_ip = 0; ; ) switch(_fun36173_ip) {
 0:
                entity = this;
                mike = entity.name;
                entity = null;
                zulu = entity != mike;
                entity = '';
                if(!zulu) { _fun36173_ip = 24; continue _fun36173 }
 21:
                entity = mike;
 24:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'acronym';
        report['key'] = golf;
        golf = function() { // Original name: get
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 11;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getAcronym;
            entity = this;
            entity = entity.name;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['get'] = golf;
        entity[6] = report;
        report = {};
        golf = 'isOwner';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun36175: for(var _fun36175_ip = 0; ; ) switch(_fun36175_ip) {
 0:
                zulu = argFoo;
                tango = 'string';
                entity = typeof zulu;
                mike = zulu;
                if(!(tango !== entity)) { _fun36175_ip = 34; continue _fun36175 }
 17:
                entity = null;
                tango = entity != zulu;
                if(!tango) { _fun36175_ip = 31; continue _fun36175 }
 26:
                entity = zulu.id;
 31:
                mike = entity;
 34:
                entity = this;
                entity = entity.ownerId;
                entity = entity === mike;
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'isOwnerWithRequiredMfaLevel';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun36176: for(var _fun36176_ip = 0; ; ) switch(_fun36176_ip) {
 0:
                tango = argFoo;
                zulu = this;
                entity = tango.mfaEnabled;
                mike = !entity;
                if(!mike) { _fun36176_ip = 41; continue _fun36176 }
 18:
                report = zulu.mfaLevel;
                entity = _closure1_slot11;
                entity = entity.ELEVATED;
                mike = report === entity;
 41:
                entity = !mike;
                if(mike) { _fun36176_ip = 58; continue _fun36176 }
 47:
                mike = zulu.isOwner;
                entity = mike.bind(zulu)(tango);
 58:
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'isNew';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun36177: for(var _fun36177_ip = 0; ; ) switch(_fun36177_ip) {
 0:
                zulu = arguments[0];
                tango = undefined;
                if(!(zulu === tango)) { _fun36177_ip = 12; continue _fun36177 }
 9:
                zulu = 7;
 12:
                mike = _closure1_slot1;
                report = _closure1_slot2;
                entity = 12;
                entity = report[entity];
                tango = mike.bind(tango)(entity);
                mike = tango.extractTimestamp;
                entity = this;
                entity = entity.id;
                mike = mike.bind(tango)(entity);
                entity = global;
                tango = entity.Date;
                entity = tango.now;
                entity = entity.bind(tango)();
                mike = entity - mike;
                entity = 86400000;
                entity = entity * zulu;
                entity = mike < entity;
                return entity;
            }
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'isLurker';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.joinedAt;
            entity = null;
            entity = entity == mike;
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'hasFeature';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.features;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'getEveryoneRoleId';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.castGuildIdAsEveryoneGuildRoleId;
            entity = this;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'getMaxEmojiSlots';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun36181: for(var _fun36181_ip = 0; ; ) switch(_fun36181_ip) {
 0:
                entity = this;
                mike = global;
                tango = mike.Math;
                zulu = tango.max;
                oscar = entity.hasFeature;
                mike = _closure1_slot10;
                mike = mike.MORE_EMOJI;
                oscar = oscar.bind(entity)(mike);
                mike = 200;
                if(oscar) { _fun36181_ip = 50; continue _fun36181 }
 46:
                mike = _closure1_slot16;
 50:
                report = _closure1_slot17;
                entity = entity.premiumTier;
                entity = report[entity];
                entity = entity.limits;
                entity = entity.emoji;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'getMaxRoleSubscriptionEmojiSlots';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = 25;
            return entity;
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'getMaxSoundboardSlots';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot17;
            entity = this;
            entity = entity.premiumTier;
            entity = mike[entity];
            entity = entity.limits;
            entity = entity.soundboardSounds;
            return entity;
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'isCommunity';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            mike = zulu.hasFeature;
            entity = _closure1_slot10;
            entity = entity.COMMUNITY;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'hasVerificationGate';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun36185: for(var _fun36185_ip = 0; ; ) switch(_fun36185_ip) {
 0:
                report = this;
                mike = report.hasFeature;
                entity = _closure1_slot10;
                entity = entity.MEMBER_VERIFICATION_GATE_ENABLED;
                entity = mike.bind(report)(entity);
                if(!entity) { _fun36185_ip = 78; continue _fun36185 }
 30:
                tango = report.hasFeature;
                mike = _closure1_slot10;
                mike = mike.COMMUNITY;
                mike = tango.bind(report)(mike);
                if(mike) { _fun36185_ip = 75; continue _fun36185 }
 54:
                tango = report.hasFeature;
                zulu = _closure1_slot10;
                zulu = zulu.CLAN;
                mike = tango.bind(report)(zulu);
 75:
                entity = mike;
 78:
                return entity;
            }
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'hasCommunityInfoSubheader';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun36186: for(var _fun36186_ip = 0; ; ) switch(_fun36186_ip) {
 0:
                tango = this;
                zulu = tango.hasFeature;
                entity = _closure1_slot10;
                entity = entity.COMMUNITY;
                entity = zulu.bind(tango)(entity);
                if(!entity) { _fun36186_ip = 51; continue _fun36186 }
 30:
                zulu = tango.hasFeature;
                mike = _closure1_slot10;
                mike = mike.DISCOVERABLE;
                entity = zulu.bind(tango)(mike);
 51:
                return entity;
            }
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'canHaveRaidActivityAlerts';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun36187: for(var _fun36187_ip = 0; ; ) switch(_fun36187_ip) {
 0:
                report = this;
                mike = report.hasFeature;
                entity = _closure1_slot10;
                entity = entity.COMMUNITY;
                entity = mike.bind(report)(entity);
                entity = !entity;
                if(!entity) { _fun36187_ip = 54; continue _fun36187 }
 33:
                tango = report.hasFeature;
                mike = _closure1_slot10;
                mike = mike.NON_COMMUNITY_RAID_ALERTS;
                entity = tango.bind(report)(mike);
 54:
                if(entity) { _fun36187_ip = 108; continue _fun36187 }
 57:
                tango = report.hasFeature;
                mike = _closure1_slot10;
                mike = mike.COMMUNITY;
                mike = tango.bind(report)(mike);
                if(!mike) { _fun36187_ip = 105; continue _fun36187 }
 81:
                tango = report.hasFeature;
                zulu = _closure1_slot10;
                zulu = zulu.RAID_ALERTS_DISABLED;
                zulu = tango.bind(report)(zulu);
                mike = !zulu;
 105:
                entity = mike;
 108:
                return entity;
            }
        };
        report['value'] = golf;
        entity[19] = report;
        report = {};
        golf = 'updateJoinedAt';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun36188: for(var _fun36188_ip = 0; ; ) switch(_fun36188_ip) {
 0:
                oscar = argFoo;
                tango = this;
                zulu = tango.set;
                report = 'string';
                entity = typeof oscar;
                mike = oscar;
                if(!(report === entity)) { _fun36188_ip = 56; continue _fun36188 }
 25:
                entity = global;
                entity = entity.Date;
                report = entity.prototype;
                report = Object.create(report, {constructor: {value: entity}});
                verify = report;
                options = oscar;
                entity = new verify[entity](options, golf);
                mike = entity instanceof Object ? entity : report;
 56:
                entity = 'joinedAt';
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            }
        };
        report['value'] = oscar;
        entity[20] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(report);
    tango = function(argFoo) {
        zulu = function(argFoo) { // Original name: GuildRecordWithRoles
            _fun36190: for(var _fun36190_ip = 0; ; ) switch(_fun36190_ip) {
 0:
                zulu = argFoo;
                oscar = this;
                mike = _closure1_slot3;
                report = _closure2_slot0;
                tango = undefined;
                mike = mike.bind(tango)(oscar, report);
                mike = _closure1_slot20;
                entity = new Array(1);
                entity[0] = zulu;
                entity = mike.bind(tango)(oscar, report, entity);
                tango = zulu.roles;
                mike = null;
                if(!(mike == tango)) { _fun36190_ip = 61; continue _fun36190 }
 59:
                tango = {};
 61:
                entity['roles'] = tango;
                tango = zulu.member;
                if(!tango) { _fun36190_ip = 105; continue _fun36190 }
 76:
                tango = zulu.member;
                tango = tango.userId;
                if(!tango) { _fun36190_ip = 105; continue _fun36190 }
 90:
                tango = zulu.member;
                tango = tango.roles;
                if(tango) { _fun36190_ip = 113; continue _fun36190 }
 105:
                entity['member'] = mike;
                _fun36190_ip = 153; continue _fun36190;
 113:
                mike = {};
                tango = zulu.member;
                tango = tango.roles;
                mike['roles'] = tango;
                zulu = zulu.member;
                zulu = zulu.userId;
                mike['userId'] = zulu;
                entity['member'] = mike;
 153:
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot8;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot4;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    tango = tango.bind(entity)(mike);
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'records/GuildRecord.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = mike;
    zulu['GuildRecordWithRoles'] = tango;
    zulu['GuildRecord'] = mike;
    return entity;
})();