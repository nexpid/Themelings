// app/stores/UserStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    verify = argBar;
    yankee = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = offset;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot22;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
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
            _closure1_slot22 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00006_ip = 46; continue _fun00005 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00006_ip = 55; continue _fun00005 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00006_ip = 343; continue _fun00005 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00006_ip = 323; continue _fun00005 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00006_ip = 283; continue _fun00005 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00006_ip = 270; continue _fun00005 }
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
            if(!golf) { _fun00006_ip = 163; continue _fun00005 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00006_ip = 179; continue _fun00005 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00006_ip = 234; continue _fun00005 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00006_ip = 247; continue _fun00005 }
 234:
            verify = _closure1_slot24;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00006_ip = 265; continue _fun00005;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00006_ip = 283; continue _fun00005;
 270:
            golf = _closure1_slot24;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00006_ip = 323; continue _fun00005 }
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
            if(!tango) { _fun00006_ip = 330; continue _fun00005 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00008_ip = 56; continue _fun00007 }
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
                    _fun00008_ip = 67; continue _fun00007;
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
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00010_ip = 23; continue _fun00009 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00010_ip = 33; continue _fun00009 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00010_ip = 70; continue _fun00009 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00010_ip = 55; continue _fun00009 }
 70:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: mergeGuildAvatar
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argBar;
            tango = argBaz;
            mike = _closure1_slot17;
            entity = argFoo;
            mike = mike[entity];
            entity = null;
            if(!(entity != mike)) { _fun00012_ip = 88; continue _fun00011 }
 26:
            if(!(entity != tango)) { _fun00012_ip = 44; continue _fun00011 }
 30:
            entity = mike.addGuildAvatarHash;
            entity = entity.bind(mike)(report, tango);
            _fun00012_ip = 55; continue _fun00011;
 44:
            tango = mike.removeGuildAvatarHash;
            entity = tango.bind(mike)(report);
 55:
            report = _closure1_slot17;
            tango = mike.id;
            report[tango] = entity;
            entity = mike !== entity;
            if(!entity) { _fun00012_ip = 86; continue _fun00011 }
 75:
            mike = _closure1_slot18;
            mike = mike + 1;
            _closure1_slot18 = mike;
 86:
            return entity;
 88:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar) { // Original name: mergeUserPrimaryGuild
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tango = argBar;
            mike = _closure1_slot17;
            entity = argFoo;
            golf = mike[entity];
            verify = null;
            entity = verify != golf;
            if(!entity) { _fun00014_ip = 135; continue _fun00013 }
 26:
            oscar = _closure1_slot15;
            zulu = golf.primaryGuild;
            mike = tango.primary_guild;
            options = undefined;
            mike = oscar.bind(options)(zulu, mike);
            mike = !mike;
            if(!mike) { _fun00014_ip = 132; continue _fun00013 }
 56:
            zulu = golf.primaryGuild;
            zulu = verify == zulu;
            if(zulu) { _fun00014_ip = 79; continue _fun00013 }
 69:
            oscar = tango.primary_guild;
            zulu = verify != oscar;
 79:
            if(!zulu) { _fun00014_ip = 129; continue _fun00013 }
 82:
            oscar = _closure1_slot14;
            tango = tango.primary_guild;
            tango = oscar.bind(options)(tango);
            golf['primaryGuild'] = tango;
            oscar = _closure1_slot17;
            tango = golf.id;
            oscar[tango] = golf;
            tango = _closure1_slot18;
            tango = tango + 1;
            _closure1_slot18 = tango;
            zulu = true;
 129:
            mike = zulu;
 132:
            entity = mike;
 135:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    tango = function(argFoo) { // Original name: transformUser
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            mike = entity.mfa_enabled;
            report = null;
            if(!(report != mike)) { _fun00016_ip = 26; continue _fun00015 }
 15:
            entity['mfaEnabled'] = mike;
            mike = delete entity.mfa_enabled;
 26:
            oscar = _closure1_slot0;
            tango = _closure1_slot3;
            zulu = 12;
            zulu = tango[zulu];
            tango = undefined;
            golf = oscar.bind(tango)(zulu);
            oscar = golf.getPremiumTypeFromRawValue;
            zulu = entity.premium_type;
            zulu = oscar.bind(golf)(zulu);
            if(!(tango !== zulu)) { _fun00016_ip = 83; continue _fun00015 }
 72:
            entity['premiumType'] = zulu;
            zulu = delete entity.premium_type;
 83:
            zulu = entity.nsfw_allowed;
            if(!(report != zulu)) { _fun00016_ip = 104; continue _fun00015 }
 93:
            entity['nsfwAllowed'] = zulu;
            zulu = delete entity.nsfw_allowed;
 104:
            zulu = entity.public_flags;
            if(!(report != zulu)) { _fun00016_ip = 125; continue _fun00015 }
 114:
            entity['publicFlags'] = zulu;
            zulu = delete entity.public_flags;
 125:
            zulu = entity.purchased_flags;
            if(!(tango !== zulu)) { _fun00016_ip = 146; continue _fun00015 }
 135:
            entity['purchasedFlags'] = zulu;
            zulu = delete entity.purchased_flags;
 146:
            zulu = entity.premium_usage_flags;
            if(!(tango !== zulu)) { _fun00016_ip = 167; continue _fun00015 }
 156:
            entity['premiumUsageFlags'] = zulu;
            zulu = delete entity.premium_usage_flags;
 167:
            zulu = entity.banner_color;
            if(!(report === zulu)) { _fun00016_ip = 182; continue _fun00015 }
 177:
            zulu = delete entity.banner_color;
 182:
            oscar = entity.avatar_decoration_data;
            if(!(tango !== oscar)) { _fun00016_ip = 234; continue _fun00015 }
 192:
            report = _closure1_slot0;
            golf = _closure1_slot3;
            zulu = 13;
            zulu = golf[zulu];
            report = report.bind(tango)(zulu);
            zulu = report.parseAvatarDecorationData;
            zulu = zulu.bind(report)(oscar);
            entity['avatarDecorationData'] = zulu;
            zulu = delete entity.avatar_decoration_data;
 234:
            zulu = entity.global_name;
            if(!(tango !== zulu)) { _fun00016_ip = 255; continue _fun00015 }
 244:
            entity['globalName'] = zulu;
            zulu = delete entity.global_name;
 255:
            zulu = entity.primary_guild;
            if(!(tango !== zulu)) { _fun00016_ip = 280; continue _fun00015 }
 265:
            mike = _closure1_slot14;
            mike = mike.bind(tango)(zulu);
            entity['primary_guild'] = mike;
 280:
            return entity;
        }
    };
    var _closure1_slot27 = tango;
    entity = function(argFoo) { // Original name: isNotCurrentUser
        entity = argFoo;
        mike = entity.id;
        zulu = _closure1_slot11;
        entity = zulu.getId;
        entity = entity.bind(zulu)();
        entity = mike !== entity;
        return entity;
    };
    var _closure1_slot28 = entity;
    mike = function(argFoo) { // Original name: mergeUser
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            mike = argFoo;
            entity = arguments[1];
            verify = undefined;
            if(!(entity === verify)) { _fun00018_ip = 14; continue _fun00017 }
 12:
            entity = true;
 14:
            report = _closure1_slot17;
            tango = mike.id;
            oscar = report[tango];
            tango = mike.id;
            golf = verify !== tango;
            if(!golf) { _fun00018_ip = 65; continue _fun00017 }
 42:
            report = mike.id;
            options = _closure1_slot11;
            tango = options.getId;
            tango = tango.bind(options)();
            golf = report === tango;
 65:
            romeo = null;
            if(!(romeo != oscar)) { _fun00018_ip = 381; continue _fun00017 }
 74:
            options = undefined;
            report = oscar;
            if(!entity) { _fun00018_ip = 492; continue _fun00017 }
 85:
            entity = _closure1_slot27;
            entity = entity.bind(verify)(mike);
            tango = mike.premium_type;
            if(!(romeo == tango)) { _fun00018_ip = 110; continue _fun00017 }
 104:
            tango = mike.premiumType;
 110:
            entity = verify !== tango;
            if(!entity) { _fun00018_ip = 120; continue _fun00017 }
 117:
            entity = golf;
 120:
            if(!entity) { _fun00018_ip = 154; continue _fun00017 }
 123:
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot3;
            offset = 12;
            offset = foxtrot[offset];
            yankee = yankee.bind(verify)(offset);
            offset = yankee.isStaffEnvRawData;
            entity = offset.bind(yankee)(mike);
 154:
            if(!entity) { _fun00018_ip = 248; continue _fun00017 }
 157:
            yankee = mike.premium_type;
            if(!(romeo == yankee)) { _fun00018_ip = 173; continue _fun00017 }
 167:
            yankee = mike.premiumType;
 173:
            offset = _closure1_slot30;
            foxtrot = _closure1_slot0;
            backup = _closure1_slot3;
            entity = 12;
            entity = backup[entity];
            foxtrot = foxtrot.bind(verify)(entity);
            entity = foxtrot.isStaffEnvRawData;
            entity = entity.bind(foxtrot)(mike);
            entity = offset.bind(verify)(entity, yankee);
            offset = mike.premiumType;
            if(!(verify === offset)) { _fun00018_ip = 242; continue _fun00017 }
 224:
            offset = mike.premium_type;
            if(!(verify !== offset)) { _fun00018_ip = 248; continue _fun00017 }
 234:
            mike['premium_type'] = entity;
            _fun00018_ip = 248; continue _fun00017;
 242:
            mike['premiumType'] = entity;
 248:
            entity = oscar.primaryGuild;
            entity = romeo == entity;
            if(!entity) { _fun00018_ip = 271; continue _fun00017 }
 261:
            offset = mike.primary_guild;
            entity = romeo == offset;
 271:
            offset = true;
            if(!(entity !== offset)) { _fun00018_ip = 365; continue _fun00017 }
 277:
            entity = oscar.primaryGuild;
            entity = romeo != entity;
            if(!entity) { _fun00018_ip = 300; continue _fun00017 }
 290:
            yankee = mike.primary_guild;
            entity = romeo == yankee;
 300:
            if(!(entity !== offset)) { _fun00018_ip = 353; continue _fun00017 }
 304:
            romeo = _closure1_slot15;
            yankee = oscar.primaryGuild;
            entity = mike.primary_guild;
            entity = romeo.bind(verify)(yankee, entity);
            if(!(entity !== offset)) { _fun00018_ip = 353; continue _fun00017 }
 330:
            offset = _closure1_slot14;
            entity = mike.primary_guild;
            entity = offset.bind(verify)(entity);
            mike['primary_guild'] = entity;
            _fun00018_ip = 365; continue _fun00017;
 353:
            entity = oscar.primaryGuild;
            mike['primary_guild'] = entity;
 365:
            entity = oscar.merge;
            report = entity.bind(oscar)(mike);
            options = tango;
            _fun00018_ip = 492; continue _fun00017;
 381:
            entity = _closure1_slot10;
            tango = entity.prototype;
            tango = Object.create(tango, {constructor: {value: entity}});
            result = tango;
            output = mike;
            entity = new result[entity](output, sizing);
            entity = entity instanceof Object ? entity : tango;
            tango = entity.premiumType;
            oscar = verify !== tango;
            if(!oscar) { _fun00018_ip = 424; continue _fun00017 }
 421:
            oscar = golf;
 424:
            options = tango;
            report = entity;
            if(!oscar) { _fun00018_ip = 492; continue _fun00017 }
 433:
            offset = _closure1_slot30;
            golf = _closure1_slot0;
            yankee = _closure1_slot3;
            oscar = 12;
            oscar = yankee[oscar];
            golf = golf.bind(verify)(oscar);
            oscar = golf.isStaffEnv;
            golf = oscar.bind(golf)(entity);
            oscar = entity.premiumType;
            oscar = offset.bind(verify)(golf, oscar);
            entity['premiumType'] = oscar;
            options = tango;
            report = entity;
 492:
            tango = _closure1_slot0;
            offset = _closure1_slot3;
            entity = 12;
            oscar = offset[entity];
            golf = tango.bind(verify)(oscar);
            oscar = golf.validatePremiumType;
            entity = offset[entity];
            tango = tango.bind(verify)(entity);
            entity = tango.isStaffEnv;
            tango = entity.bind(tango)(report);
            entity = report.premiumType;
            entity = oscar.bind(golf)(tango, options, entity);
            tango = _closure1_slot17;
            entity = mike.id;
            entity = tango[entity];
            entity = entity !== report;
            tango = _closure1_slot17;
            mike = mike.id;
            tango[mike] = report;
            if(!entity) { _fun00018_ip = 595; continue _fun00017 }
 584:
            mike = _closure1_slot18;
            mike = mike + 1;
            _closure1_slot18 = mike;
 595:
            return entity;
        }
    };
    var _closure1_slot29 = mike;
    entity = function(argFoo, argBar) { // Original name: getUserPremiumType
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            if(entity) { _fun00020_ip = 11; continue _fun00019 }
 6:
            entity = argBar;
            return entity;
 11:
            mike = _closure1_slot9;
            entity = mike.getPremiumTypeOverride;
            entity = entity.bind(mike)();
            tango = _closure1_slot9;
            mike = tango.getPremiumTypeActual;
            mike = mike.bind(tango)();
            zulu = _closure1_slot16;
            if(!(entity === zulu)) { _fun00020_ip = 53; continue _fun00019 }
 50:
            entity = mike;
 53:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo, argBar) { // Original name: mergeUsersFromMessage
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            mike = argFoo;
            tango = argBar;
            var _closure2_slot0 = tango;
            entity = mike.author;
            report = null;
            entity = report != entity;
            if(!entity) { _fun00022_ip = 40; continue _fun00021 }
 27:
            golf = mike.state;
            oscar = 'SENDING';
            entity = oscar !== golf;
 40:
            if(!entity) { _fun00022_ip = 63; continue _fun00021 }
 43:
            options = _closure1_slot28;
            golf = mike.author;
            oscar = undefined;
            entity = options.bind(oscar)(golf);
 63:
            if(!entity) { _fun00022_ip = 87; continue _fun00021 }
 66:
            golf = _closure1_slot29;
            oscar = mike.author;
            entity = undefined;
            entity = golf.bind(entity)(oscar, tango);
 87:
            golf = mike.mentions;
            if(!(report != golf)) { _fun00022_ip = 112; continue _fun00021 }
 97:
            oscar = golf.forEach;
            entity = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure1_slot28;
                    entity = undefined;
                    zulu = zulu.bind(entity)(tango);
                    if(!zulu) { _fun00024_ip = 37; continue _fun00023 }
 20:
                    zulu = _closure1_slot29;
                    mike = _closure2_slot0;
                    mike = zulu.bind(entity)(tango, mike);
 37:
                    return entity;
                }
            };
            entity = oscar.bind(golf)(entity);
 112:
            golf = mike.interaction;
            options = report == golf;
            entity = undefined;
            oscar = undefined;
            if(options) { _fun00022_ip = 134; continue _fun00021 }
 129:
            oscar = golf.user;
 134:
            oscar = report != oscar;
            if(!oscar) { _fun00022_ip = 173; continue _fun00021 }
 141:
            options = _closure1_slot28;
            verify = mike.interaction;
            offset = report == verify;
            golf = undefined;
            if(offset) { _fun00022_ip = 168; continue _fun00021 }
 163:
            golf = verify.user;
 168:
            oscar = options.bind(entity)(golf);
 173:
            if(!oscar) { _fun00022_ip = 200; continue _fun00021 }
 176:
            golf = _closure1_slot29;
            oscar = mike.interaction;
            oscar = oscar.user;
            oscar = golf.bind(entity)(oscar, tango);
 200:
            golf = mike.attachments;
            if(!(report != golf)) { _fun00022_ip = 225; continue _fun00021 }
 210:
            oscar = golf.forEach;
            zulu = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.clip_participants;
                    entity = null;
                    if(!(entity != zulu)) { _fun00026_ip = 32; continue _fun00025 }
 15:
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            tango = argFoo;
                            zulu = _closure1_slot28;
                            entity = undefined;
                            zulu = zulu.bind(entity)(tango);
                            if(!zulu) { _fun00028_ip = 37; continue _fun00027 }
 20:
                            zulu = _closure1_slot29;
                            mike = _closure2_slot0;
                            mike = zulu.bind(entity)(tango, mike);
 37:
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
 32:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = oscar.bind(golf)(zulu);
 225:
            oscar = mike.resolved;
            golf = report == oscar;
            zulu = undefined;
            if(golf) { _fun00022_ip = 246; continue _fun00021 }
 240:
            zulu = oscar.users;
 246:
            if(!(report != zulu)) { _fun00022_ip = 325; continue _fun00021 }
 250:
            zulu = mike.resolved;
            verify = zulu.users;
            for(oscar in verify)
 273:
            {
 282:
                romeo = oscar;
                yankee = mike.resolved;
                yankee = yankee.users;
                romeo = yankee[romeo];
                yankee = _closure1_slot28;
                yankee = yankee.bind(entity)(romeo);
                if(!yankee) { _fun00022_ip = 273; continue _fun00021 }
 313:
                yankee = _closure1_slot29;
                yankee = yankee.bind(entity)(romeo, tango);
                _fun00022_ip = 273; continue _fun00021;
            }
 325:
            oscar = mike.interaction_metadata;
            golf = report == oscar;
            zulu = undefined;
            if(golf) { _fun00022_ip = 345; continue _fun00021 }
 340:
            zulu = oscar.user;
 345:
            zulu = report != zulu;
            if(!zulu) { _fun00022_ip = 375; continue _fun00021 }
 352:
            oscar = _closure1_slot28;
            report = mike.interaction_metadata;
            report = report.user;
            zulu = oscar.bind(entity)(report);
 375:
            if(!zulu) { _fun00022_ip = 402; continue _fun00021 }
 378:
            zulu = _closure1_slot29;
            mike = mike.interaction_metadata;
            mike = mike.user;
            mike = zulu.bind(entity)(mike, tango);
 402:
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: handleConnectionOpen
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            oscar = entity.user;
            golf = entity.users;
            report = entity.guilds;
            entity = delete oscar.premium;
            entity = delete oscar.banner_color;
            tango = _closure1_slot29;
            entity = undefined;
            tango = tango.bind(entity)(oscar);
            oscar = golf.forEach;
            tango = function(argFoo) {
                zulu = _closure1_slot29;
                entity = undefined;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            tango = oscar.bind(golf)(tango);
            tango = report.forEach;
            zulu = function(argFoo) {
                mike = argFoo;
                var _closure3_slot0 = mike;
                zulu = mike.members;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    mike = argFoo;
                    golf = _closure1_slot25;
                    entity = mike.user;
                    oscar = entity.id;
                    entity = _closure3_slot0;
                    report = entity.id;
                    tango = mike.avatar;
                    entity = undefined;
                    tango = golf.bind(entity)(oscar, report, tango);
                    tango = _closure1_slot26;
                    zulu = mike.user;
                    zulu = zulu.id;
                    mike = mike.user;
                    mike = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            zulu = tango.bind(report)(zulu);
            tango = _closure1_slot17;
            report = _closure1_slot11;
            zulu = report.getId;
            zulu = zulu.bind(report)();
            tango = tango[zulu];
            zulu = null;
            if(!(zulu != tango)) { _fun00030_ip = 163; continue _fun00029 }
 104:
            tango = _closure1_slot17;
            zulu = _closure1_slot19;
            oscar = _closure1_slot10;
            mike = {'id': null, 'username': 'Wumpus', 'discriminator': '0', 'globalName': 'Wumpus', 'avatar': 'c1f86b313385cb97985f1b118851c28c'};
            mike['id'] = zulu;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            verify = report;
            options = mike;
            mike = new verify[oscar](options, golf);
            mike = mike instanceof Object ? mike : report;
            tango[zulu] = mike;
 163:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: handleConnectionOpenSupplemental
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            mike = argFoo;
            report = mike.guilds;
            zulu = mike.lazyPrivateChannels;
            tango = report.forEach;
            mike = function(argFoo) {
                mike = argFoo;
                var _closure3_slot0 = mike;
                zulu = mike.members;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    mike = argFoo;
                    golf = _closure1_slot25;
                    entity = mike.user;
                    oscar = entity.id;
                    entity = _closure3_slot0;
                    report = entity.id;
                    tango = mike.avatar;
                    entity = undefined;
                    tango = golf.bind(entity)(oscar, report, tango);
                    tango = _closure1_slot26;
                    zulu = mike.user;
                    zulu = zulu.id;
                    mike = mike.user;
                    mike = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = tango.bind(report)(mike);
            mike = null;
            if(!(mike != zulu)) { _fun00032_ip = 53; continue _fun00031 }
 38:
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.rawRecipients;
                    entity = null;
                    if(!(entity != zulu)) { _fun00034_ip = 32; continue _fun00033 }
 15:
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        zulu = _closure1_slot29;
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 32:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
 53:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: isIncompleteUser
        mike = 'incomplete';
        entity = argFoo;
        entity = mike in entity;
        entity = !entity;
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: handleInitialize
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            zulu = entity.users;
            mike = null;
            if(!(mike != zulu)) { _fun00036_ip = 135; continue _fun00035 }
 15:
            mike = _closure1_slot23;
            entity = entity.users;
            tango = undefined;
            zulu = mike.bind(tango)(entity);
            mike = zulu.bind(tango)();
            entity = mike.done;
            if(entity) { _fun00036_ip = 135; continue _fun00035 }
 47:
            verify = mike.value;
            oscar = verify.id;
            entity = _closure1_slot17;
            entity = oscar in entity;
            if(!entity) { _fun00036_ip = 77; continue _fun00035 }
 68:
            oscar = _closure1_slot34;
            entity = oscar.bind(tango)(verify);
 77:
            if(entity) { _fun00036_ip = 120; continue _fun00035 }
 80:
            golf = _closure1_slot17;
            oscar = verify.id;
            entity = _closure1_slot10;
            options = entity.prototype;
            options = Object.create(options, {constructor: {value: entity}});
            yankee = options;
            offset = verify;
            entity = new yankee[entity](offset, verify);
            entity = entity instanceof Object ? entity : options;
            golf[oscar] = entity;
 120:
            oscar = zulu.bind(tango)();
            entity = oscar.done;
            mike = oscar;
            if(!entity) { _fun00036_ip = 47; continue _fun00035 }
 135:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: handleUserUpdate
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            zulu = entity.user;
            tango = zulu.id;
            report = _closure1_slot11;
            mike = report.getId;
            mike = mike.bind(report)();
            if(!(tango !== mike)) { _fun00038_ip = 45; continue _fun00037 }
 34:
            mike = _closure1_slot29;
            entity = undefined;
            entity = mike.bind(entity)(zulu);
 45:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: handleCurrentUserUpdate
        entity = argFoo;
        zulu = entity.user;
        mike = _closure1_slot29;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: updatePremiumType
        entity = argFoo;
        zulu = entity.user;
        mike = _closure1_slot29;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: handleLoadMessages
        entity = argFoo;
        zulu = entity.messages;
        mike = zulu.forEach;
        entity = function(argFoo) {
            tango = _closure1_slot31;
            entity = undefined;
            zulu = argFoo;
            mike = true;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = false;
        return entity;
    };
    var _closure1_slot39 = entity;
    entity = function(argFoo) { // Original name: handleThreadListSync
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            entity = argFoo;
            zulu = entity.mostRecentMessages;
            entity = null;
            if(!(entity != zulu)) { _fun00040_ip = 32; continue _fun00039 }
 15:
            mike = zulu.forEach;
            entity = function(argFoo) {
                tango = _closure1_slot31;
                entity = undefined;
                zulu = argFoo;
                mike = false;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 32:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: handleLoadSearchResults
        entity = argFoo;
        zulu = entity.messages;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot39;
            mike = {};
            entity = argFoo;
            mike['messages'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = false;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = false;
        return entity;
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo) { // Original name: handleLoadThreadsSuccess
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            mike = argFoo;
            oscar = mike.firstMessages;
            zulu = mike.owners;
            mike = null;
            if(!(mike != oscar)) { _fun00042_ip = 38; continue _fun00041 }
 23:
            report = oscar.forEach;
            tango = function(argFoo) {
                tango = _closure1_slot31;
                entity = undefined;
                zulu = argFoo;
                mike = true;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            tango = report.bind(oscar)(tango);
 38:
            if(!(mike != zulu)) { _fun00042_ip = 57; continue _fun00041 }
 42:
            mike = zulu.forEach;
            entity = function(argFoo) {
                tango = _closure1_slot29;
                entity = argFoo;
                zulu = entity.user;
                mike = undefined;
                entity = true;
                entity = tango.bind(mike)(zulu, entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 57:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    entity = function(argFoo) { // Original name: handleLoadForumPosts
        entity = argFoo;
        zulu = entity.threads;
        entity = global;
        mike = entity.Object;
        entity = mike.values;
        zulu = entity.bind(mike)(zulu);
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                entity = argFoo;
                golf = entity.first_message;
                oscar = entity.most_recent_message;
                entity = entity.owner;
                tango = null;
                if(!(tango != golf)) { _fun00044_ip = 44; continue _fun00043 }
 27:
                report = _closure1_slot31;
                zulu = undefined;
                mike = true;
                mike = report.bind(zulu)(golf, mike);
 44:
                if(!(tango != oscar)) { _fun00044_ip = 65; continue _fun00043 }
 48:
                report = _closure1_slot31;
                zulu = undefined;
                mike = true;
                mike = report.bind(zulu)(oscar, mike);
 65:
                mike = tango != entity;
                if(!mike) { _fun00044_ip = 81; continue _fun00043 }
 72:
                zulu = entity.user;
                mike = tango != zulu;
 81:
                if(!mike) { _fun00044_ip = 106; continue _fun00043 }
 84:
                tango = _closure1_slot29;
                zulu = entity.user;
                mike = undefined;
                entity = true;
                entity = tango.bind(mike)(zulu, entity);
 106:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot43 = entity;
    entity = function(argFoo) { // Original name: handleLoadMessageRequestsSupplementalDataSuccess
        entity = argFoo;
        zulu = entity.supplementalData;
        entity = global;
        mike = entity.Object;
        entity = mike.values;
        zulu = entity.bind(mike)(zulu);
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                entity = argFoo;
                tango = entity.message_preview;
                entity = null;
                if(!(entity != tango)) { _fun00046_ip = 32; continue _fun00045 }
 15:
                zulu = _closure1_slot31;
                mike = undefined;
                entity = true;
                entity = zulu.bind(mike)(tango, entity);
 32:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot44 = entity;
    entity = function(argFoo) { // Original name: handleFetchUsersForGuildEventSuccess
        mike = argFoo;
        zulu = mike.guildScheduledEventUsers;
        mike = mike.guildId;
        var _closure2_slot0 = mike;
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                mike = argFoo;
                entity = mike.user;
                oscar = mike.member;
                zulu = null;
                if(!(zulu != entity)) { _fun00048_ip = 76; continue _fun00047 }
 20:
                tango = _closure1_slot29;
                report = undefined;
                tango = tango.bind(report)(entity);
                golf = zulu == oscar;
                tango = undefined;
                if(golf) { _fun00048_ip = 49; continue _fun00047 }
 43:
                tango = oscar.avatar;
 49:
                if(!(zulu != tango)) { _fun00048_ip = 76; continue _fun00047 }
 53:
                zulu = _closure1_slot25;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = zulu.bind(report)(mike, entity, tango);
 76:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot45 = entity;
    entity = function(argFoo) { // Original name: handleLoadNotificationCenterItems
        entity = argFoo;
        zulu = entity.items;
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                entity = argFoo;
                zulu = entity.other_user;
                mike = null;
                if(!(mike != zulu)) { _fun00050_ip = 35; continue _fun00049 }
 15:
                zulu = _closure1_slot29;
                mike = entity.other_user;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
 35:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot46 = entity;
    entity = function(argFoo) { // Original name: handleNotificationCenterItemCreate
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            entity = argFoo;
            entity = entity.item;
            zulu = entity.other_user;
            mike = null;
            if(!(mike != zulu)) { _fun00052_ip = 40; continue _fun00051 }
 20:
            zulu = _closure1_slot29;
            mike = entity.other_user;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
 40:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot47 = entity;
    entity = function(argFoo) { // Original name: handleIncomingMessage
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            entity = argFoo;
            tango = entity.message;
            entity = _closure1_slot31;
            offset = undefined;
            mike = true;
            entity = entity.bind(offset)(tango, mike);
            report = tango.flags;
            entity = null;
            if(!(entity != report)) { _fun00054_ip = 86; continue _fun00053 }
 36:
            oscar = _closure1_slot2;
            report = _closure1_slot3;
            yankee = 14;
            report = report[yankee];
            golf = oscar.bind(offset)(report);
            oscar = golf.hasFlag;
            report = tango.flags;
            tango = _closure1_slot13;
            tango = tango.URGENT;
            tango = oscar.bind(golf)(report, tango);
            if(tango) { _fun00054_ip = 90; continue _fun00053 }
 86:
            tango = false;
            return tango;
 90:
            report = _closure1_slot17;
            oscar = _closure1_slot11;
            tango = oscar.getId;
            tango = tango.bind(oscar)();
            options = report[tango];
            entity = entity != options;
            if(!entity) { _fun00054_ip = 203; continue _fun00053 }
 119:
            report = _closure1_slot17;
            oscar = _closure1_slot11;
            tango = oscar.getId;
            tango = tango.bind(oscar)();
            golf = options.set;
            verify = _closure1_slot2;
            oscar = _closure1_slot3;
            oscar = oscar[yankee];
            offset = verify.bind(offset)(oscar);
            verify = offset.setFlag;
            oscar = options.flags;
            zulu = _closure1_slot12;
            zulu = zulu.HAS_UNREAD_URGENT_MESSAGES;
            oscar = verify.bind(offset)(oscar, zulu, mike);
            zulu = 'flags';
            zulu = golf.bind(options)(zulu, oscar);
            report[tango] = zulu;
            entity = true;
 203:
            return entity;
        }
    };
    var _closure1_slot48 = entity;
    entity = function(argFoo) { // Original name: handleCreateChannel
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            zulu = entity.rawRecipients;
            entity = null;
            if(!(entity != zulu)) { _fun00056_ip = 37; continue _fun00055 }
 20:
            mike = zulu.forEach;
            entity = function(argFoo) {
                zulu = _closure1_slot29;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 37:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot49 = entity;
    entity = function(argFoo) { // Original name: handleUpdateChannels
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            entity = argFoo;
            mike = entity.channels;
            entity = _closure1_slot23;
            report = undefined;
            tango = entity.bind(report)(mike);
            mike = tango.bind(report)();
            entity = mike.done;
            zulu = null;
            if(entity) { _fun00058_ip = 84; continue _fun00057 }
 39:
            entity = mike.value;
            options = entity.rawRecipients;
            if(!(zulu != options)) { _fun00058_ip = 69; continue _fun00057 }
 54:
            golf = options.forEach;
            entity = function(argFoo) {
                zulu = _closure1_slot29;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            entity = golf.bind(options)(entity);
 69:
            golf = tango.bind(report)();
            entity = golf.done;
            mike = golf;
            if(!entity) { _fun00058_ip = 39; continue _fun00057 }
 84:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot50 = entity;
    entity = function(argFoo) { // Original name: handlePresenceUpdates
        mike = argFoo;
        tango = mike.updates;
        zulu = tango.map;
        mike = function(argFoo) {
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                mike = _closure1_slot17;
                entity = entity.user;
                entity = entity.id;
                mike = mike[entity];
                var _closure3_slot1 = mike;
                entity = null;
                if(!(entity != mike)) { _fun00060_ip = 98; continue _fun00059 }
 40:
                oscar = _closure1_slot20;
                report = oscar.reduce;
                mike = function(argFoo, argBar) {
                    _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                        report = argFoo;
                        options = argBar;
                        entity = _closure3_slot0;
                        mike = entity.user;
                        entity = mike.hasOwnProperty;
                        mike = entity.bind(mike)(options);
                        entity = report;
                        if(!mike) { _fun00062_ip = 120; continue _fun00061 }
 35:
                        golf = _closure3_slot1;
                        oscar = golf.set;
                        verify = _closure1_slot0;
                        zulu = _closure1_slot3;
                        mike = 15;
                        zulu = zulu[mike];
                        mike = undefined;
                        zulu = verify.bind(mike)(zulu);
                        mike = zulu.camelCase;
                        zulu = mike.bind(zulu)(options);
                        mike = _closure3_slot0;
                        mike = mike.user;
                        mike = mike[options];
                        zulu = oscar.bind(golf)(zulu, mike);
                        mike = report;
                        if(report) { _fun00062_ip = 113; continue _fun00061 }
 105:
                        report = _closure3_slot1;
                        mike = zulu !== report;
 113:
                        _closure3_slot1 = zulu;
                        entity = mike;
 120:
                        return entity;
                    }
                };
                entity = false;
                mike = report.bind(oscar)(mike, entity);
                report = !mike;
                entity = !report;
                if(report) { _fun00060_ip = 96; continue _fun00059 }
 72:
                report = _closure1_slot17;
                tango = _closure3_slot1;
                tango = tango.id;
                zulu = _closure3_slot1;
                report[tango] = zulu;
                entity = mike;
 96:
                return entity;
 98:
                entity = false;
                return entity;
            }
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.some;
        entity = function(argFoo) {
            entity = argFoo;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot51 = entity;
    entity = function(argFoo) { // Original name: handleLoadedBans
        entity = argFoo;
        zulu = entity.bans;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot29;
            entity = argFoo;
            mike = entity.user;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot52 = entity;
    entity = function(argFoo) { // Original name: handleLoadedBansBatch
        entity = argFoo;
        zulu = entity.bans;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot29;
            entity = argFoo;
            mike = entity.user;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot53 = entity;
    entity = function(argFoo) { // Original name: handleBan
        zulu = _closure1_slot29;
        entity = argFoo;
        mike = entity.user;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot54 = entity;
    entity = function(argFoo) { // Original name: handleRecipient
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            mike = argFoo;
            entity = mike.isMember;
            zulu = !entity;
            entity = !zulu;
            if(zulu) { _fun00064_ip = 37; continue _fun00063 }
 18:
            tango = _closure1_slot29;
            zulu = mike.user;
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 37:
            return entity;
        }
    };
    var _closure1_slot55 = entity;
    entity = function(argFoo) { // Original name: handleGuildMembers
        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
            entity = argFoo;
            tango = _closure1_slot29;
            mike = entity.user;
            oscar = undefined;
            mike = tango.bind(oscar)(mike);
            report = _closure1_slot25;
            zulu = entity.user;
            tango = zulu.id;
            zulu = entity.guildId;
            entity = entity.avatar;
            entity = report.bind(oscar)(tango, zulu, entity);
            if(entity) { _fun00066_ip = 60; continue _fun00065 }
 57:
            entity = mike;
 60:
            return entity;
        }
    };
    var _closure1_slot56 = entity;
    entity = function(argFoo) { // Original name: handleGuildMemberListUpdate
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            entity = argFoo;
            mike = entity.ops;
            entity = _closure1_slot23;
            verify = undefined;
            options = entity.bind(verify)(mike);
            mike = options.bind(verify)();
            entity = mike.done;
            golf = null;
            oscar = 'UPDATE';
            report = 'INSERT';
            tango = mike;
            zulu = undefined;
            mike = undefined;
            if(entity) { _fun00068_ip = 146; continue _fun00067 }
 52:
            entity = tango.value;
            yankee = entity.op;
            if(!(report !== yankee)) { _fun00068_ip = 75; continue _fun00067 }
 66:
            yankee = entity.op;
            if(!(oscar === yankee)) { _fun00068_ip = 131; continue _fun00067 }
 75:
            entity = entity.item;
            yankee = entity.member;
            romeo = golf == yankee;
            entity = undefined;
            if(romeo) { _fun00068_ip = 100; continue _fun00067 }
 95:
            entity = yankee.user;
 100:
            zulu = yankee;
            mike = entity;
            if(!(golf != entity)) { _fun00068_ip = 131; continue _fun00067 }
 110:
            foxtrot = _closure1_slot26;
            romeo = entity.id;
            romeo = foxtrot.bind(verify)(romeo, entity);
            zulu = yankee;
            mike = entity;
 131:
            yankee = options.bind(verify)();
            entity = yankee.done;
            tango = yankee;
            if(!entity) { _fun00068_ip = 52; continue _fun00067 }
 146:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot57 = entity;
    entity = function(argFoo) { // Original name: handleGuildMembersChunkBatch
        _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
            mike = argFoo;
            zulu = mike.chunks;
            mike = false;
            var _closure2_slot0 = mike;
            oscar = function(argFoo) { // Original name: _loop
                _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                    mike = argFoo;
                    var _closure3_slot0 = mike;
                    tango = mike.members;
                    zulu = tango.reduce;
                    mike = function(argFoo, argBar) {
                        _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                            mike = argFoo;
                            entity = argBar;
                            report = _closure1_slot29;
                            zulu = entity.user;
                            golf = undefined;
                            zulu = report.bind(golf)(zulu);
                            oscar = _closure1_slot25;
                            tango = entity.user;
                            report = tango.id;
                            tango = _closure3_slot0;
                            tango = tango.guildId;
                            entity = entity.avatar;
                            entity = oscar.bind(golf)(report, tango, entity);
                            if(entity) { _fun00074_ip = 70; continue _fun00073 }
 67:
                            entity = zulu;
 70:
                            if(entity) { _fun00074_ip = 76; continue _fun00073 }
 73:
                            entity = mike;
 76:
                            return entity;
                        }
                    };
                    entity = false;
                    mike = zulu.bind(tango)(mike, entity);
                    if(mike) { _fun00072_ip = 44; continue _fun00071 }
 37:
                    mike = _closure2_slot0;
 44:
                    _closure2_slot0 = mike;
                    entity = undefined;
                    return entity;
                }
            };
            mike = _closure1_slot23;
            report = undefined;
            tango = mike.bind(report)(zulu);
            zulu = tango.bind(report)();
            mike = zulu.done;
            if(mike) { _fun00070_ip = 73; continue _fun00069 }
 48:
            mike = zulu.value;
            mike = oscar.bind(report)(mike);
            golf = tango.bind(report)();
            mike = golf.done;
            zulu = golf;
            if(!mike) { _fun00070_ip = 48; continue _fun00069 }
 73:
            entity = _closure2_slot0;
            return entity;
        }
    };
    var _closure1_slot58 = entity;
    entity = function(argFoo) { // Original name: handlePassiveUpdateV2
        _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
            verify = argFoo;
            mike = _closure1_slot23;
            entity = verify.members;
            golf = undefined;
            oscar = mike.bind(golf)(entity);
            zulu = oscar.bind(golf)();
            mike = zulu.done;
            tango = zulu;
            zulu = false;
            entity = false;
            if(mike) { _fun00076_ip = 121; continue _fun00075 }
 42:
            mike = tango.value;
            yankee = _closure1_slot29;
            offset = mike.user;
            offset = yankee.bind(golf)(offset);
            if(!offset) { _fun00076_ip = 66; continue _fun00075 }
 64:
            zulu = true;
 66:
            romeo = _closure1_slot25;
            offset = mike.user;
            yankee = offset.id;
            offset = verify.guildId;
            mike = mike.avatar;
            mike = romeo.bind(golf)(yankee, offset, mike);
            if(!mike) { _fun00076_ip = 103; continue _fun00075 }
 101:
            zulu = true;
 103:
            yankee = oscar.bind(golf)();
            mike = yankee.done;
            tango = yankee;
            entity = zulu;
            if(!mike) { _fun00076_ip = 42; continue _fun00075 }
 121:
            return entity;
        }
    };
    var _closure1_slot59 = entity;
    entity = function(argFoo) { // Original name: handleLocalMessagesLoaded
        _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
            mike = _closure1_slot23;
            entity = argFoo;
            entity = entity.users;
            zulu = null;
            if(!(zulu == entity)) { _fun00078_ip = 26; continue _fun00077 }
 22:
            entity = new Array(0);
 26:
            golf = undefined;
            oscar = mike.bind(golf)(entity);
            zulu = oscar.bind(golf)();
            mike = zulu.done;
            report = global;
            tango = zulu;
            zulu = false;
            entity = false;
            if(mike) { _fun00078_ip = 131; continue _fun00077 }
 54:
            offset = tango.value;
            romeo = report.Object;
            yankee = romeo.hasOwn;
            verify = _closure1_slot17;
            mike = offset.id;
            mike = yankee.bind(romeo)(verify, mike);
            verify = zulu;
            if(mike) { _fun00078_ip = 110; continue _fun00077 }
 92:
            mike = _closure1_slot29;
            mike = mike.bind(golf)(offset);
            if(mike) { _fun00078_ip = 107; continue _fun00077 }
 104:
            mike = zulu;
 107:
            verify = mike;
 110:
            offset = oscar.bind(golf)();
            mike = offset.done;
            zulu = verify;
            tango = offset;
            entity = zulu;
            if(!mike) { _fun00078_ip = 54; continue _fun00077 }
 131:
            return entity;
        }
    };
    var _closure1_slot60 = entity;
    entity = function(argFoo) { // Original name: handleThreadMemberListUpdate
        mike = argFoo;
        tango = mike.members;
        mike = false;
        var _closure2_slot0 = mike;
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                mike = argFoo;
                entity = mike.member;
                zulu = null;
                entity = zulu != entity;
                if(!entity) { _fun00080_ip = 43; continue _fun00079 }
 18:
                oscar = _closure1_slot29;
                tango = mike.member;
                report = tango.user;
                tango = undefined;
                entity = oscar.bind(tango)(report);
 43:
                if(!entity) { _fun00080_ip = 55; continue _fun00079 }
 46:
                entity = true;
                _closure2_slot0 = entity;
 55:
                entity = mike.presence;
                entity = zulu != entity;
                if(!entity) { _fun00080_ip = 93; continue _fun00079 }
 68:
                tango = _closure1_slot29;
                mike = mike.presence;
                zulu = mike.user;
                mike = undefined;
                entity = tango.bind(mike)(zulu);
 93:
                if(!entity) { _fun00080_ip = 105; continue _fun00079 }
 96:
                entity = true;
                _closure2_slot0 = entity;
 105:
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        entity = _closure2_slot0;
        return entity;
    };
    var _closure1_slot61 = entity;
    entity = function(argFoo) { // Original name: handleThreadMembersUpdate
        _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
            mike = argFoo;
            tango = mike.addedMembers;
            mike = false;
            var _closure2_slot0 = mike;
            mike = null;
            if(!(mike != tango)) { _fun00082_ip = 38; continue _fun00081 }
 23:
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                    mike = argFoo;
                    entity = mike.member;
                    zulu = null;
                    entity = zulu != entity;
                    if(!entity) { _fun00084_ip = 43; continue _fun00083 }
 18:
                    oscar = _closure1_slot29;
                    tango = mike.member;
                    report = tango.user;
                    tango = undefined;
                    entity = oscar.bind(tango)(report);
 43:
                    if(!entity) { _fun00084_ip = 55; continue _fun00083 }
 46:
                    entity = true;
                    _closure2_slot0 = entity;
 55:
                    entity = mike.presence;
                    entity = zulu != entity;
                    if(!entity) { _fun00084_ip = 93; continue _fun00083 }
 68:
                    tango = _closure1_slot29;
                    mike = mike.presence;
                    zulu = mike.user;
                    mike = undefined;
                    entity = tango.bind(mike)(zulu);
 93:
                    if(!entity) { _fun00084_ip = 105; continue _fun00083 }
 96:
                    entity = true;
                    _closure2_slot0 = entity;
 105:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
 38:
            entity = _closure2_slot0;
            return entity;
        }
    };
    var _closure1_slot62 = entity;
    entity = function(argFoo) { // Original name: handleGuildCreate
        mike = argFoo;
        mike = mike.guild;
        var _closure2_slot0 = mike;
        zulu = mike.members;
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                entity = argFoo;
                mike = entity.user;
                report = mike.id;
                verify = mike.username;
                options = mike.avatar;
                golf = mike.discriminator;
                mike = mike.bot;
                tango = entity.avatar;
                oscar = _closure1_slot11;
                zulu = oscar.getId;
                zulu = zulu.bind(oscar)();
                if(!(report !== zulu)) { _fun00086_ip = 99; continue _fun00085 }
 63:
                oscar = _closure1_slot29;
                zulu = {};
                zulu['id'] = report;
                zulu['username'] = verify;
                zulu['avatar'] = options;
                zulu['discriminator'] = golf;
                zulu['bot'] = mike;
                mike = undefined;
                mike = oscar.bind(mike)(zulu);
 99:
                zulu = _closure1_slot25;
                entity = _closure2_slot0;
                mike = entity.id;
                entity = undefined;
                mike = zulu.bind(entity)(report, mike, tango);
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot63 = entity;
    entity = function(argFoo) { // Original name: handleRelationshipAdd
        zulu = _closure1_slot29;
        entity = argFoo;
        entity = entity.relationship;
        mike = entity.user;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot64 = entity;
    entity = function(argFoo) { // Original name: handleGameRelationshipAdd
        zulu = _closure1_slot29;
        entity = argFoo;
        entity = entity.gameRelationship;
        mike = entity.user;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot65 = entity;
    entity = function(argFoo) { // Original name: handleLoadRelationships
        entity = argFoo;
        tango = entity.relationships;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
                mike = argFoo;
                tango = _closure1_slot29;
                entity = argBar;
                zulu = entity.user;
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                if(entity) { _fun00088_ip = 31; continue _fun00087 }
 28:
                entity = mike;
 31:
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot66 = entity;
    entity = function(argFoo) { // Original name: handleFriendSuggestionCreate
        zulu = _closure1_slot29;
        entity = argFoo;
        entity = entity.suggestion;
        mike = entity.suggested_user;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot67 = entity;
    entity = function(argFoo) { // Original name: handleLoadFriendSuggestions
        entity = argFoo;
        tango = entity.suggestions;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
                mike = argFoo;
                tango = _closure1_slot29;
                entity = argBar;
                zulu = entity.suggested_user;
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                if(entity) { _fun00090_ip = 32; continue _fun00089 }
 29:
                entity = mike;
 32:
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot68 = entity;
    entity = function(argFoo) { // Original name: handleAuditLogFetched
        entity = argFoo;
        zulu = entity.users;
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
                report = argFoo;
                zulu = _closure1_slot17;
                mike = report.id;
                zulu = zulu[mike];
                mike = null;
                if(!(mike == zulu)) { _fun00092_ip = 65; continue _fun00091 }
 25:
                zulu = _closure1_slot17;
                mike = report.id;
                entity = _closure1_slot10;
                tango = entity.prototype;
                tango = Object.create(tango, {constructor: {value: entity}});
                golf = tango;
                oscar = report;
                entity = new golf[entity](oscar, report);
                entity = entity instanceof Object ? entity : tango;
                zulu[mike] = entity;
 65:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot69 = entity;
    entity = function(argFoo) { // Original name: handleGiftCodeResolve
        _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
            entity = argFoo;
            mike = entity.giftCode;
            zulu = mike.user;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun00094_ip = 42; continue _fun00093 }
 23:
            tango = _closure1_slot29;
            zulu = mike.user;
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 42:
            return entity;
        }
    };
    var _closure1_slot70 = entity;
    entity = function(argFoo) { // Original name: handleGuildPremiumSubscriptionsFetchSuccess
        entity = argFoo;
        zulu = entity.appliedBoosts;
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                entity = argFoo;
                zulu = entity.user;
                entity = null;
                if(!(entity != zulu)) { _fun00096_ip = 28; continue _fun00095 }
 14:
                mike = _closure1_slot29;
                entity = undefined;
                entity = mike.bind(entity)(zulu);
 28:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot71 = entity;
    entity = function(argFoo) { // Original name: handleGuildJoinRequest
        _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
            entity = argFoo;
            entity = entity.request;
            oscar = entity.user;
            report = entity.actioned_by_user;
            mike = null;
            entity = mike != oscar;
            zulu = false;
            if(!entity) { _fun00098_ip = 45; continue _fun00097 }
 31:
            tango = _closure1_slot29;
            entity = undefined;
            zulu = tango.bind(entity)(oscar);
 45:
            entity = zulu;
            if(!(mike != report)) { _fun00098_ip = 75; continue _fun00097 }
 52:
            mike = zulu;
            if(zulu) { _fun00098_ip = 72; continue _fun00097 }
 58:
            tango = _closure1_slot29;
            zulu = undefined;
            mike = tango.bind(zulu)(report);
 72:
            entity = mike;
 75:
            return entity;
        }
    };
    var _closure1_slot72 = entity;
    entity = function(argFoo) { // Original name: handleInitialFamilyCenterLoad
        entity = argFoo;
        oscar = entity.users;
        entity = entity.familyCenterTeenActivity;
        tango = new Array(0);
        report = 0;
        golf = tango;
        report = arraySpread(golf, oscar, report);
        oscar = entity.users;
        golf = tango;
        entity = arraySpread(golf, oscar, report);
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
                mike = argFoo;
                tango = _closure1_slot29;
                zulu = undefined;
                entity = argBar;
                entity = tango.bind(zulu)(entity);
                if(entity) { _fun00100_ip = 26; continue _fun00099 }
 23:
                entity = mike;
 26:
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot73 = entity;
    entity = function(argFoo) { // Original name: handleLinkedUserFetch
        entity = argFoo;
        tango = entity.users;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00101: for(var _fun00102_ip = 0; ; ) switch(_fun00102_ip) {
 0:
                mike = argFoo;
                tango = _closure1_slot29;
                zulu = undefined;
                entity = argBar;
                entity = tango.bind(zulu)(entity);
                if(entity) { _fun00102_ip = 26; continue _fun00101 }
 23:
                entity = mike;
 26:
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot74 = entity;
    entity = function(argFoo) { // Original name: handleRequestLinkSuccess
        entity = argFoo;
        tango = entity.users;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00103: for(var _fun00104_ip = 0; ; ) switch(_fun00104_ip) {
 0:
                mike = argFoo;
                tango = _closure1_slot29;
                zulu = undefined;
                entity = argBar;
                entity = tango.bind(zulu)(entity);
                if(entity) { _fun00104_ip = 26; continue _fun00103 }
 23:
                entity = mike;
 26:
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot75 = entity;
    entity = function(argFoo) { // Original name: handleTeenActivityFetch
        _fun00105: for(var _fun00106_ip = 0; ; ) switch(_fun00106_ip) {
 0:
            entity = argFoo;
            entity = entity.familyCenterTeenActivity;
            mike = undefined;
            if(!(mike === entity)) { _fun00106_ip = 17; continue _fun00105 }
 15:
            return mike;
 17:
            tango = entity.users;
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                _fun00107: for(var _fun00108_ip = 0; ; ) switch(_fun00108_ip) {
 0:
                    mike = argFoo;
                    tango = _closure1_slot29;
                    zulu = undefined;
                    entity = argBar;
                    entity = tango.bind(zulu)(entity);
                    if(entity) { _fun00108_ip = 26; continue _fun00107 }
 23:
                    entity = mike;
 26:
                    return entity;
                }
            };
            entity = false;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot76 = entity;
    entity = function(argFoo) { // Original name: handleTeenActivityMoreFetch
        entity = argFoo;
        entity = entity.familyCenterTeenActivity;
        tango = entity.users;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00109: for(var _fun00110_ip = 0; ; ) switch(_fun00110_ip) {
 0:
                mike = argFoo;
                tango = _closure1_slot29;
                zulu = undefined;
                entity = argBar;
                entity = tango.bind(zulu)(entity);
                if(entity) { _fun00110_ip = 26; continue _fun00109 }
 23:
                entity = mike;
 26:
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot77 = entity;
    entity = function(argFoo) { // Original name: handleMemberSafetyGuildMemberSearchSuccess
        mike = argFoo;
        tango = mike.members;
        zulu = _closure1_slot11;
        mike = zulu.getId;
        mike = mike.bind(zulu)();
        var _closure2_slot0 = mike;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00111: for(var _fun00112_ip = 0; ; ) switch(_fun00112_ip) {
 0:
                zulu = argFoo;
                mike = argBar;
                entity = mike.member;
                entity = entity.user;
                report = entity.id;
                tango = _closure2_slot0;
                entity = zulu;
                if(!(report !== tango)) { _fun00112_ip = 70; continue _fun00111 }
 36:
                report = _closure1_slot29;
                mike = mike.member;
                tango = mike.user;
                mike = undefined;
                mike = report.bind(mike)(tango);
                if(mike) { _fun00112_ip = 67; continue _fun00111 }
 64:
                mike = zulu;
 67:
                entity = mike;
 70:
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot78 = entity;
    entity = function(argFoo) { // Original name: handleLoadGravityHydratedItems
        entity = argFoo;
        tango = entity.messageItems;
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun00113: for(var _fun00114_ip = 0; ; ) switch(_fun00114_ip) {
 0:
                entity = argFoo;
                zulu = entity.message;
                mike = null;
                if(!(mike != zulu)) { _fun00114_ip = 36; continue _fun00113 }
 14:
                tango = _closure1_slot31;
                zulu = entity.message;
                mike = undefined;
                entity = true;
                entity = tango.bind(mike)(zulu, entity);
 36:
                entity = undefined;
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot79 = entity;
    entity = function(argFoo) { // Original name: handleEmbeddedActivityUpdateV2
        entity = argFoo;
        tango = entity.participants;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00115: for(var _fun00116_ip = 0; ; ) switch(_fun00116_ip) {
 0:
                mike = argFoo;
                zulu = argBar;
                oscar = _closure1_slot1;
                report = _closure1_slot3;
                entity = 16;
                entity = report[entity];
                report = undefined;
                entity = oscar.bind(report)(entity);
                entity = entity.bind(report)(zulu);
                if(!entity) { _fun00116_ip = 59; continue _fun00115 }
 39:
                tango = _closure1_slot29;
                zulu = zulu.member;
                zulu = zulu.user;
                entity = tango.bind(report)(zulu);
 59:
                if(entity) { _fun00116_ip = 65; continue _fun00115 }
 62:
                entity = mike;
 65:
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot80 = entity;
    entity = global;
    options = entity.Object;
    oscar = options.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(options)(zulu, entity, report);
    report = 0;
    oscar = offset[report];
    entity = undefined;
    oscar = yankee.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    options = 1;
    oscar = offset[options];
    oscar = yankee.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 2;
    oscar = offset[oscar];
    oscar = yankee.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 3;
    oscar = offset[oscar];
    oscar = yankee.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 4;
    oscar = offset[oscar];
    oscar = yankee.bind(entity)(oscar);
    var _closure1_slot8 = oscar;
    oscar = 5;
    oscar = offset[oscar];
    oscar = yankee.bind(entity)(oscar);
    var _closure1_slot9 = oscar;
    oscar = 6;
    oscar = offset[oscar];
    oscar = yankee.bind(entity)(oscar);
    var _closure1_slot10 = oscar;
    oscar = 7;
    oscar = offset[oscar];
    oscar = yankee.bind(entity)(oscar);
    var _closure1_slot11 = oscar;
    oscar = 8;
    oscar = offset[oscar];
    yankee = yankee.bind(entity)(oscar);
    oscar = 9;
    oscar = offset[oscar];
    oscar = verify.bind(entity)(oscar);
    romeo = oscar.UserFlags;
    var _closure1_slot12 = romeo;
    oscar = oscar.MessageFlags;
    var _closure1_slot13 = oscar;
    oscar = 10;
    oscar = offset[oscar];
    oscar = verify.bind(entity)(oscar);
    romeo = oscar.ensureUserPrimaryGuild;
    var _closure1_slot14 = romeo;
    oscar = oscar.isUserPrimaryGuildEqual;
    var _closure1_slot15 = oscar;
    oscar = 11;
    oscar = offset[oscar];
    oscar = verify.bind(entity)(oscar);
    oscar = oscar.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    var _closure1_slot16 = oscar;
    oscar = {};
    var _closure1_slot17 = oscar;
    var _closure1_slot18 = report;
    report = '47835198259242069';
    var _closure1_slot19 = report;
    romeo = ['username', 'avatar', 'global_name', 'discriminator', 'bot', 'primary_guild'];
    var _closure1_slot20 = romeo;
    golf = function(argFoo) {
        tango = function() { // Original name: UserStore
            oscar = this;
            zulu = _closure1_slot4;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot21;
            golf = {};
            options = _closure1_slot32;
            golf['CONNECTION_OPEN'] = options;
            options = _closure1_slot33;
            golf['CONNECTION_OPEN_SUPPLEMENTAL'] = options;
            options = _closure1_slot38;
            golf['UPDATE_CLIENT_PREMIUM_TYPE'] = options;
            options = _closure1_slot35;
            golf['OVERLAY_INITIALIZE'] = options;
            options = function(argFoo) { // Original name: CACHE_LOADED
                zulu = _closure3_slot0;
                mike = zulu.handleLoadCache;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf['CACHE_LOADED'] = options;
            options = _closure1_slot36;
            golf['USER_UPDATE'] = options;
            options = _closure1_slot37;
            golf['CURRENT_USER_UPDATE'] = options;
            options = _closure1_slot51;
            golf['PRESENCE_UPDATES'] = options;
            options = _closure1_slot41;
            golf['SEARCH_FINISH'] = options;
            golf['MOD_VIEW_SEARCH_FINISH'] = options;
            options = _closure1_slot39;
            golf['LOAD_MESSAGES_SUCCESS'] = options;
            golf['LOAD_MESSAGES_AROUND_SUCCESS'] = options;
            golf['LOAD_PINNED_MESSAGES_SUCCESS'] = options;
            golf['LOAD_RECENT_MENTIONS_SUCCESS'] = options;
            options = _closure1_slot40;
            golf['THREAD_LIST_SYNC'] = options;
            options = _closure1_slot48;
            golf['MESSAGE_CREATE'] = options;
            golf['MESSAGE_UPDATE'] = options;
            options = _closure1_slot52;
            golf['GUILD_SETTINGS_LOADED_BANS'] = options;
            options = _closure1_slot53;
            golf['GUILD_SETTINGS_LOADED_BANS_BATCH'] = options;
            options = _closure1_slot63;
            golf['GUILD_CREATE'] = options;
            options = _closure1_slot54;
            golf['GUILD_BAN_ADD'] = options;
            golf['GUILD_BAN_REMOVE'] = options;
            options = _closure1_slot55;
            golf['CHANNEL_RECIPIENT_ADD'] = options;
            golf['CHANNEL_RECIPIENT_REMOVE'] = options;
            options = _closure1_slot72;
            golf['GUILD_JOIN_REQUEST_CREATE'] = options;
            golf['GUILD_JOIN_REQUEST_UPDATE'] = options;
            options = _closure1_slot56;
            golf['GUILD_MEMBER_ADD'] = options;
            golf['GUILD_MEMBER_UPDATE'] = options;
            options = _closure1_slot58;
            golf['GUILD_MEMBERS_CHUNK_BATCH'] = options;
            options = _closure1_slot57;
            golf['GUILD_MEMBER_LIST_UPDATE'] = options;
            options = _closure1_slot61;
            golf['THREAD_MEMBER_LIST_UPDATE'] = options;
            options = _closure1_slot62;
            golf['THREAD_MEMBERS_UPDATE'] = options;
            options = _closure1_slot49;
            golf['CHANNEL_CREATE'] = options;
            options = _closure1_slot50;
            golf['CHANNEL_UPDATES'] = options;
            options = _closure1_slot64;
            golf['RELATIONSHIP_ADD'] = options;
            options = _closure1_slot65;
            golf['GAME_RELATIONSHIP_ADD'] = options;
            options = _closure1_slot66;
            golf['LOAD_RELATIONSHIPS_SUCCESS'] = options;
            options = _closure1_slot67;
            golf['FRIEND_SUGGESTION_CREATE'] = options;
            options = _closure1_slot68;
            golf['LOAD_FRIEND_SUGGESTIONS_SUCCESS'] = options;
            options = _closure1_slot69;
            golf['AUDIT_LOG_FETCH_SUCCESS'] = options;
            golf['AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS'] = options;
            options = _closure1_slot70;
            golf['GIFT_CODE_RESOLVE_SUCCESS'] = options;
            options = _closure1_slot71;
            golf['GUILD_APPLIED_BOOSTS_FETCH_SUCCESS'] = options;
            options = _closure1_slot42;
            golf['LOAD_THREADS_SUCCESS'] = options;
            golf['LOAD_ARCHIVED_THREADS_SUCCESS'] = options;
            options = _closure1_slot43;
            golf['LOAD_FORUM_POSTS'] = options;
            options = _closure1_slot45;
            golf['GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS'] = options;
            options = _closure1_slot46;
            golf['LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS'] = options;
            options = _closure1_slot47;
            golf['NOTIFICATION_CENTER_ITEM_CREATE'] = options;
            options = _closure1_slot44;
            golf['LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS'] = options;
            options = _closure1_slot59;
            golf['PASSIVE_UPDATE_V2'] = options;
            options = _closure1_slot60;
            golf['LOCAL_MESSAGES_LOADED'] = options;
            options = _closure1_slot73;
            golf['FAMILY_CENTER_INITIAL_LOAD'] = options;
            options = _closure1_slot74;
            golf['FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS'] = options;
            options = _closure1_slot76;
            golf['FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS'] = options;
            options = _closure1_slot77;
            golf['FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS'] = options;
            options = _closure1_slot75;
            golf['FAMILY_CENTER_REQUEST_LINK_SUCCESS'] = options;
            options = _closure1_slot78;
            golf['MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS'] = options;
            options = _closure1_slot79;
            golf['LOAD_GRAVITY_HYDRATED'] = options;
            entity = _closure1_slot80;
            golf['EMBEDDED_ACTIVITY_UPDATE_V2'] = entity;
            entity = new Array(1);
            entity[0] = golf;
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: initialize
            tango = this;
            zulu = tango.waitFor;
            mike = _closure1_slot11;
            entity = _closure1_slot9;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(10);
        entity[0] = report;
        report = {};
        golf = 'takeSnapshot';
        report['key'] = golf;
        golf = function() { // Original name: takeSnapshot
            mike = this;
            entity = mike.getCurrentUser;
            zulu = entity.bind(mike)();
            entity = {};
            mike = _closure2_slot0;
            mike = mike.LATEST_SNAPSHOT_VERSION;
            entity['version'] = mike;
            mike = {};
            report = new Array(1);
            report[0] = zulu;
            tango = report.filter;
            golf = _closure1_slot0;
            oscar = _closure1_slot3;
            zulu = 17;
            oscar = oscar[zulu];
            zulu = undefined;
            zulu = golf.bind(zulu)(oscar);
            zulu = zulu.isNotNullish;
            zulu = tango.bind(report)(zulu);
            mike['users'] = zulu;
            entity['data'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'handleLoadCache';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: handleLoadCache
            _fun00117: for(var _fun00118_ip = 0; ; ) switch(_fun00118_ip) {
 0:
                entity = argFoo;
                tango = this;
                zulu = tango.readSnapshot;
                mike = _closure2_slot0;
                mike = mike.LATEST_SNAPSHOT_VERSION;
                mike = zulu.bind(tango)(mike);
                golf = null;
                if(!(golf != mike)) { _fun00118_ip = 130; continue _fun00117 }
 38:
                zulu = _closure1_slot23;
                mike = mike.users;
                report = undefined;
                tango = zulu.bind(report)(mike);
                zulu = tango.bind(report)();
                mike = zulu.done;
                if(mike) { _fun00118_ip = 130; continue _fun00117 }
 70:
                romeo = zulu.value;
                offset = _closure1_slot17;
                verify = romeo.id;
                mike = _closure1_slot10;
                yankee = mike.prototype;
                yankee = Object.create(yankee, {constructor: {value: mike}});
                backup = yankee;
                foxtrot = romeo;
                mike = new backup[mike](foxtrot, romeo);
                mike = mike instanceof Object ? mike : yankee;
                offset[verify] = mike;
                verify = tango.bind(report)();
                mike = verify.done;
                zulu = verify;
                if(!mike) { _fun00118_ip = 70; continue _fun00117 }
 130:
                mike = entity.users;
                if(!(golf != mike)) { _fun00118_ip = 260; continue _fun00117 }
 140:
                zulu = _closure1_slot23;
                mike = entity.users;
                report = undefined;
                tango = zulu.bind(report)(mike);
                zulu = tango.bind(report)();
                mike = zulu.done;
                if(mike) { _fun00118_ip = 260; continue _fun00117 }
 172:
                romeo = zulu.value;
                verify = romeo.id;
                mike = _closure1_slot17;
                mike = verify in mike;
                if(!mike) { _fun00118_ip = 202; continue _fun00117 }
 193:
                verify = _closure1_slot34;
                mike = verify.bind(report)(romeo);
 202:
                if(mike) { _fun00118_ip = 245; continue _fun00117 }
 205:
                offset = _closure1_slot17;
                verify = romeo.id;
                mike = _closure1_slot10;
                yankee = mike.prototype;
                yankee = Object.create(yankee, {constructor: {value: mike}});
                backup = yankee;
                foxtrot = romeo;
                mike = new backup[mike](foxtrot, romeo);
                mike = mike instanceof Object ? mike : yankee;
                offset[verify] = mike;
 245:
                verify = tango.bind(report)();
                mike = verify.done;
                zulu = verify;
                if(!mike) { _fun00118_ip = 172; continue _fun00117 }
 260:
                mike = entity.privateChannels;
                oscar = new Array(2);
                oscar[0] = mike;
                entity = entity.initialGuildChannels;
                oscar[1] = entity;
                entity = oscar.length;
                report = 0;
                mike = report < entity;
                entity = undefined;
                zulu = undefined;
                if(!mike) { _fun00118_ip = 390; continue _fun00117 }
 305:
                verify = _closure1_slot23;
                mike = oscar[report];
                offset = verify.bind(entity)(mike);
                verify = offset.bind(entity)();
                mike = verify.done;
                if(mike) { _fun00118_ip = 378; continue _fun00117 }
 330:
                mike = verify.value;
                yankee = mike.rawRecipients;
                if(!(golf != yankee)) { _fun00118_ip = 360; continue _fun00117 }
 345:
                romeo = yankee.forEach;
                mike = function(argFoo) {
                    tango = _closure1_slot29;
                    zulu = undefined;
                    mike = argFoo;
                    entity = false;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
                mike = romeo.bind(yankee)(mike);
 360:
                romeo = offset.bind(entity)();
                mike = romeo.done;
                verify = romeo;
                zulu = yankee;
                if(!mike) { _fun00118_ip = 330; continue _fun00117 }
 378:
                report = report + 1;
                mike = oscar.length;
                if(report < mike) { _fun00118_ip = 305; continue _fun00117 }
 390:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getUserStoreVersion';
        report['key'] = golf;
        golf = function() { // Original name: getUserStoreVersion
            entity = _closure1_slot18;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getUser';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: getUser
            _fun00119: for(var _fun00120_ip = 0; ; ) switch(_fun00120_ip) {
 0:
                mike = argFoo;
                entity = null;
                if(!(entity == mike)) { _fun00120_ip = 13; continue _fun00119 }
 9:
                entity = undefined;
                return entity;
 13:
                entity = _closure1_slot17;
                entity = entity[mike];
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getUsers';
        report['key'] = golf;
        golf = function() { // Original name: getUsers
            entity = _closure1_slot17;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'forEach';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: forEach
            _fun00121: for(var _fun00122_ip = 0; ; ) switch(_fun00122_ip) {
 0:
                offset = argFoo;
                options = _closure1_slot17;
                entity = undefined;
                zulu = false;
                for(tango in options)
 22:
                {
 31:
                    yankee = tango;
                    mike = _closure1_slot17;
                    mike = mike[yankee];
                    mike = offset.bind(entity)(mike);
                    if(zulu !== mike) { _fun00122_ip = 22; continue _fun00121 }
                }
 51:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'findByTag';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: findByTag
            _fun00123: for(var _fun00124_ip = 0; ; ) switch(_fun00124_ip) {
 0:
                yankee = argFoo;
                offset = argBar;
                options = _closure1_slot17;
                zulu = null;
                for(tango in options)
 23:
                {
 32:
                    mike = tango;
                    entity = _closure1_slot17;
                    entity = entity[mike];
                    if(!(zulu != offset)) { _fun00124_ip = 66; continue _fun00123 }
 47:
                    mike = entity.username;
                    if(!(mike === yankee)) { _fun00124_ip = 66; continue _fun00123 }
 56:
                    mike = entity.discriminator;
                    if(!(mike !== offset)) { _fun00124_ip = 94; continue _fun00123 }
 66:
                    if(zulu != offset) { _fun00124_ip = 23; continue _fun00123 }
 70:
                    mike = entity.username;
                    if(mike !== yankee) { _fun00124_ip = 23; continue _fun00123 }
 79:
                    mike = entity.isPomelo;
                    mike = mike.bind(entity)();
                    if(!mike) { _fun00124_ip = 23; continue _fun00123 }
 92:
                    return entity;
 94:
                    return entity;
                }
 96:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'filter';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: filter
            _fun00125: for(var _fun00126_ip = 0; ; ) switch(_fun00126_ip) {
 0:
                offset = argFoo;
                mike = arguments[1];
                verify = undefined;
                if(!(mike === verify)) { _fun00126_ip = 14; continue _fun00125 }
 12:
                mike = false;
 14:
                entity = new Array(0);
                golf = _closure1_slot17;
                for(zulu in golf)
 33:
                {
 42:
                    romeo = zulu;
                    yankee = _closure1_slot17;
                    romeo = yankee[romeo];
                    yankee = offset.bind(verify)(romeo);
                    if(!yankee) { _fun00126_ip = 33; continue _fun00125 }
 61:
                    yankee = entity.push;
                    yankee = yankee.bind(entity)(romeo);
                    _fun00126_ip = 33; continue _fun00125;
                }
 73:
                if(!mike) { _fun00126_ip = 94; continue _fun00125 }
 76:
                zulu = entity.sort;
                mike = function(argFoo, argBar) {
                    _fun00127: for(var _fun00128_ip = 0; ; ) switch(_fun00128_ip) {
 0:
                        zulu = argFoo;
                        mike = argBar;
                        tango = zulu.username;
                        entity = mike.username;
                        tango = tango > entity;
                        entity = 1;
                        if(tango) { _fun00128_ip = 54; continue _fun00127 }
 26:
                        zulu = zulu.username;
                        mike = mike.username;
                        zulu = zulu < mike;
                        mike = 0;
                        if(!zulu) { _fun00128_ip = 51; continue _fun00127 }
 45:
                        mike = -1;
 51:
                        entity = mike;
 54:
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
 94:
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getCurrentUser';
        report['key'] = golf;
        oscar = function() { // Original name: getCurrentUser
            mike = _closure1_slot17;
            zulu = _closure1_slot11;
            entity = zulu.getId;
            entity = entity.bind(zulu)();
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[9] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = golf.bind(entity)(yankee);
    yankee = 'UserStore';
    golf['displayName'] = yankee;
    golf['LATEST_SNAPSHOT_VERSION'] = options;
    options = golf.prototype;
    options = Object.create(options, {constructor: {value: golf}});
    sizing = options;
    golf = new sizing[golf](kilo);
    golf = golf instanceof Object ? golf : options;
    options = 18;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'stores/UserStore.tsx';
    options = verify.bind(offset)(options);
    zulu['default'] = golf;
    zulu['users'] = oscar;
    zulu['ASSISTANT_WUMPUS_VOICE_USER'] = report;
    zulu['transformUser'] = tango;
    zulu['mergeUser'] = mike;
    return entity;
})();