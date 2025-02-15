// app/modules/guild_role_subscriptions/SubscriptionRoleStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot20;
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
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
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
            _closure1_slot20 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: _isAdminRole
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 9;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.has;
        mike = argFoo;
        mike = mike.permissions;
        entity = _closure1_slot11;
        entity = entity.ADMINISTRATOR;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: computeRolesForGuild
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot10;
            mike = zulu.getCurrentUser;
            verify = mike.bind(zulu)();
            zulu = _closure1_slot9;
            mike = zulu.getGuild;
            mike = mike.bind(zulu)(tango);
            options = null;
            if(!(options != mike)) { _fun00006_ip = 517; continue _fun00005 }
 42:
            if(!(options != verify)) { _fun00006_ip = 517; continue _fun00005 }
 49:
            report = global;
            zulu = report.Set;
            oscar = zulu.prototype;
            oscar = Object.create(oscar, {constructor: {value: zulu}});
            control = oscar;
            zulu = new control[zulu](source);
            golf = zulu instanceof Object ? zulu : oscar;
            zulu = report.Set;
            oscar = zulu.prototype;
            oscar = Object.create(oscar, {constructor: {value: zulu}});
            control = oscar;
            zulu = new control[zulu](source);
            zulu = zulu instanceof Object ? zulu : oscar;
            oscar = report.Set;
            offset = oscar.prototype;
            offset = Object.create(offset, {constructor: {value: oscar}});
            control = offset;
            oscar = new control[oscar](source);
            oscar = oscar instanceof Object ? oscar : offset;
            romeo = _closure1_slot17;
            yankee = romeo.set;
            offset = mike.isOwner;
            offset = offset.bind(mike)(verify);
            offset = yankee.bind(romeo)(tango, offset);
            yankee = mike.hasFeature;
            offset = _closure1_slot12;
            offset = offset.ROLE_SUBSCRIPTIONS_ENABLED;
            offset = yankee.bind(mike)(offset);
            if(!offset) { _fun00006_ip = 468; continue _fun00005 }
 182:
            yankee = _closure1_slot8;
            offset = yankee.getMember;
            verify = verify.id;
            offset = offset.bind(yankee)(tango, verify);
            verify = report.Set;
            yankee = options == offset;
            kilo = undefined;
            report = undefined;
            if(yankee) { _fun00006_ip = 226; continue _fun00005 }
 220:
            report = offset.roles;
 226:
            if(!(options == report)) { _fun00006_ip = 234; continue _fun00005 }
 230:
            report = new Array(0);
 234:
            options = verify.prototype;
            options = Object.create(options, {constructor: {value: verify}});
            control = options;
            source = report;
            report = new control[verify](source, update);
            backup = report instanceof Object ? report : options;
            options = _closure1_slot9;
            report = options.getRoles;
            mike = mike.id;
            foxtrot = report.bind(options)(mike);
            yankee = foxtrot;
            report = true;
            mike = 10;
            for(options in yankee)
 296:
            {
 308:
                output = options;
                result = foxtrot[output];
                echo = _closure1_slot0;
                sizing = _closure1_slot2;
                sizing = sizing[mike];
                echo = echo.bind(kilo)(sizing);
                sizing = echo.isSubscriptionRole;
                sizing = sizing.bind(echo)(result);
                if(!sizing) { _fun00006_ip = 420; continue _fun00005 }
 346:
                sizing = golf.add;
                sizing = sizing.bind(golf)(output);
                echo = _closure1_slot0;
                sizing = _closure1_slot2;
                sizing = sizing[mike];
                echo = echo.bind(kilo)(sizing);
                sizing = echo.isSubscriptionRoleAvailableForPurchase;
                sizing = sizing.bind(echo)(result);
                if(!sizing) { _fun00006_ip = 420; continue _fun00005 }
 387:
                sizing = zulu.add;
                sizing = sizing.bind(zulu)(output);
                sizing = backup.has;
                sizing = sizing.bind(backup)(output);
                if(!sizing) { _fun00006_ip = 420; continue _fun00005 }
 410:
                sizing = oscar.add;
                sizing = sizing.bind(oscar)(output);
 420:
                sizing = backup.has;
                sizing = sizing.bind(backup)(output);
                if(!sizing) { _fun00006_ip = 442; continue _fun00005 }
 433:
                output = _closure1_slot21;
                sizing = output.bind(kilo)(result);
 442:
                if(!sizing) { _fun00006_ip = 296; continue _fun00005 }
 448:
                output = _closure1_slot17;
                sizing = output.set;
                sizing = sizing.bind(output)(tango, report);
                _fun00006_ip = 296; continue _fun00005;
            }
 468:
            report = _closure1_slot14;
            mike = report.set;
            mike = mike.bind(report)(tango, golf);
            report = _closure1_slot16;
            mike = report.set;
            mike = mike.bind(report)(tango, oscar);
            mike = _closure1_slot15;
            entity = mike.set;
            entity = entity.bind(mike)(tango, zulu);
            entity = true;
            return entity;
 517:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    yankee = function() { // Original name: deleteEverything
        zulu = _closure1_slot14;
        entity = zulu.clear;
        entity = entity.bind(zulu)();
        zulu = _closure1_slot16;
        entity = zulu.clear;
        entity = entity.bind(zulu)();
        zulu = _closure1_slot15;
        entity = zulu.clear;
        entity = entity.bind(zulu)();
        zulu = _closure1_slot17;
        entity = zulu.clear;
        entity = entity.bind(zulu)();
        entity = null;
        _closure1_slot18 = entity;
        entity = undefined;
        return entity;
    };
    offset = function(argFoo) { // Original name: handleGuildUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            entity = entity.guild;
            tango = entity.id;
            zulu = _closure1_slot18;
            entity = null;
            if(!(entity != zulu)) { _fun00008_ip = 219; continue _fun00007 }
 29:
            report = _closure1_slot9;
            zulu = report.getGuild;
            report = zulu.bind(report)(tango);
            if(!(entity != report)) { _fun00008_ip = 215; continue _fun00007 }
 50:
            zulu = report.hasFeature;
            entity = _closure1_slot12;
            entity = entity.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
            entity = zulu.bind(report)(entity);
            if(!entity) { _fun00008_ip = 141; continue _fun00007 }
 74:
            report = _closure1_slot18;
            zulu = report.has;
            zulu = zulu.bind(report)(tango);
            if(zulu) { _fun00008_ip = 141; continue _fun00007 }
 91:
            zulu = global;
            oscar = zulu.Set;
            golf = _closure1_slot18;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            options = report;
            zulu = new options[oscar](golf, oscar);
            zulu = zulu instanceof Object ? zulu : report;
            report = zulu.add;
            report = report.bind(zulu)(tango);
            _closure1_slot18 = zulu;
            zulu = true;
            return zulu;
 141:
            if(entity) { _fun00008_ip = 211; continue _fun00007 }
 144:
            zulu = _closure1_slot18;
            entity = zulu.has;
            entity = entity.bind(zulu)(tango);
            if(!entity) { _fun00008_ip = 211; continue _fun00007 }
 161:
            entity = global;
            report = entity.Set;
            golf = _closure1_slot18;
            zulu = report.prototype;
            zulu = Object.create(zulu, {constructor: {value: report}});
            options = zulu;
            entity = new options[report](golf, oscar);
            entity = entity instanceof Object ? entity : zulu;
            zulu = entity.delete;
            zulu = zulu.bind(entity)(tango);
            _closure1_slot18 = entity;
            entity = true;
            return entity;
 211:
            entity = false;
            return entity;
 215:
            entity = false;
            return entity;
 219:
            entity = false;
            return entity;
        }
    };
    verify = function(argFoo) { // Original name: handleRoleUpdate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            zulu = _closure1_slot14;
            entity = zulu.has;
            entity = entity.bind(zulu)(tango);
            zulu = !entity;
            entity = !zulu;
            if(zulu) { _fun00010_ip = 45; continue _fun00009 }
 34:
            zulu = _closure1_slot22;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 45:
            return entity;
        }
    };
    mike = global;
    foxtrot = mike.Object;
    romeo = foxtrot.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = romeo.bind(foxtrot)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 7;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 8;
    options = oscar[options];
    options = report.bind(entity)(options);
    romeo = options.Permissions;
    var _closure1_slot11 = romeo;
    options = options.GuildFeatures;
    var _closure1_slot12 = options;
    options = mike.Set;
    romeo = options.prototype;
    romeo = Object.create(romeo, {constructor: {value: options}});
    output = romeo;
    options = new output[options](sizing);
    options = options instanceof Object ? options : romeo;
    var _closure1_slot13 = options;
    options = mike.Map;
    romeo = options.prototype;
    romeo = Object.create(romeo, {constructor: {value: options}});
    output = romeo;
    options = new output[options](sizing);
    options = options instanceof Object ? options : romeo;
    var _closure1_slot14 = options;
    options = mike.Map;
    romeo = options.prototype;
    romeo = Object.create(romeo, {constructor: {value: options}});
    output = romeo;
    options = new output[options](sizing);
    options = options instanceof Object ? options : romeo;
    var _closure1_slot15 = options;
    options = mike.Map;
    romeo = options.prototype;
    romeo = Object.create(romeo, {constructor: {value: options}});
    output = romeo;
    options = new output[options](sizing);
    options = options instanceof Object ? options : romeo;
    var _closure1_slot16 = options;
    mike = mike.Map;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    output = options;
    mike = new output[mike](sizing);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot17 = mike;
    mike = null;
    var _closure1_slot18 = mike;
    mike = 11;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: SubscriptionRoleStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot19;
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
            zulu = this;
            mike = zulu.waitFor;
            entity = _closure1_slot9;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'getGuildIdsWithPurchasableRoles';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = _closure1_slot18;
                entity = null;
                if(!(entity != mike)) { _fun00012_ip = 19; continue _fun00011 }
 13:
                entity = _closure1_slot18;
                _fun00012_ip = 131; continue _fun00011;
 19:
                tango = _closure1_slot9;
                mike = tango.getGuilds;
                verify = mike.bind(tango)();
                mike = global;
                mike = mike.Set;
                tango = mike.prototype;
                tango = Object.create(tango, {constructor: {value: mike}});
                kilo = tango;
                mike = new kilo[mike](backup);
                mike = mike instanceof Object ? mike : tango;
                golf = verify;
                for(tango in golf)
 72:
                {
 81:
                    yankee = tango;
                    foxtrot = verify[yankee];
                    romeo = foxtrot.hasFeature;
                    offset = _closure1_slot12;
                    offset = offset.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
                    offset = romeo.bind(foxtrot)(offset);
                    if(!offset) { _fun00012_ip = 72; continue _fun00011 }
 112:
                    offset = mike.add;
                    offset = offset.bind(mike)(yankee);
                    _fun00012_ip = 72; continue _fun00011;
                }
 124:
                _closure1_slot18 = mike;
                entity = mike;
 131:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'buildRoles';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zulu = argFoo;
                tango = _closure1_slot14;
                mike = tango.has;
                mike = mike.bind(tango)(zulu);
                if(mike) { _fun00014_ip = 34; continue _fun00013 }
 23:
                mike = _closure1_slot22;
                entity = undefined;
                entity = mike.bind(entity)(zulu);
 34:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getSubscriptionRoles';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tango = argFoo;
                mike = this;
                entity = mike.buildRoles;
                entity = entity.bind(mike)(tango);
                zulu = _closure1_slot14;
                entity = zulu.get;
                entity = entity.bind(zulu)(tango);
                zulu = null;
                if(!(zulu == entity)) { _fun00016_ip = 44; continue _fun00015 }
 40:
                entity = _closure1_slot13;
 44:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getPurchasableSubscriptionRoles';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tango = argFoo;
                mike = this;
                entity = mike.buildRoles;
                entity = entity.bind(mike)(tango);
                zulu = _closure1_slot15;
                entity = zulu.get;
                entity = entity.bind(zulu)(tango);
                zulu = null;
                if(!(zulu == entity)) { _fun00018_ip = 44; continue _fun00017 }
 40:
                entity = _closure1_slot13;
 44:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getUserSubscriptionRoles';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                tango = argFoo;
                mike = this;
                entity = mike.buildRoles;
                entity = entity.bind(mike)(tango);
                zulu = _closure1_slot16;
                entity = zulu.get;
                entity = entity.bind(zulu)(tango);
                zulu = null;
                if(!(zulu == entity)) { _fun00020_ip = 44; continue _fun00019 }
 40:
                entity = _closure1_slot13;
 44:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getUserIsAdmin';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zulu = argFoo;
                mike = this;
                entity = mike.buildRoles;
                entity = entity.bind(mike)(zulu);
                mike = _closure1_slot17;
                entity = mike.get;
                mike = entity.bind(mike)(zulu);
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00022_ip = 46; continue _fun00021 }
 43:
                entity = mike;
 46:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'SubscriptionRoleStore';
    options['displayName'] = mike;
    mike = 12;
    mike = oscar[mike];
    sizing = golf.bind(entity)(mike);
    mike = {};
    mike['CONNECTION_OPEN'] = yankee;
    mike['LOGOUT'] = yankee;
    mike['GUILD_CREATE'] = offset;
    yankee = function(argFoo) { // Original name: handleGuildDelete
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            entity = entity.guild;
            report = entity.id;
            oscar = _closure1_slot18;
            entity = null;
            mike = entity == oscar;
            entity = undefined;
            tango = undefined;
            if(mike) { _fun00024_ip = 43; continue _fun00023 }
 33:
            mike = oscar.has;
            tango = mike.bind(oscar)(report);
 43:
            mike = true;
            if(!(mike === tango)) { _fun00024_ip = 97; continue _fun00023 }
 49:
            mike = global;
            oscar = mike.Set;
            golf = _closure1_slot18;
            tango = oscar.prototype;
            tango = Object.create(tango, {constructor: {value: oscar}});
            options = tango;
            mike = new options[oscar](golf, oscar);
            mike = mike instanceof Object ? mike : tango;
            tango = mike.delete;
            tango = tango.bind(mike)(report);
            _closure1_slot18 = mike;
            return entity;
 97:
            entity = false;
            return entity;
        }
    };
    mike['GUILD_DELETE'] = yankee;
    mike['GUILD_UPDATE'] = offset;
    mike['GUILD_ROLE_CREATE'] = verify;
    mike['GUILD_ROLE_UPDATE'] = verify;
    mike['GUILD_ROLE_DELETE'] = verify;
    tango = function(argFoo) { // Original name: handleGuildMemberUpdate
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            entity = entity.user;
            report = _closure1_slot10;
            zulu = report.getCurrentUser;
            oscar = zulu.bind(report)();
            report = entity.id;
            entity = null;
            golf = entity == oscar;
            zulu = undefined;
            entity = undefined;
            if(golf) { _fun00026_ip = 52; continue _fun00025 }
 47:
            entity = oscar.id;
 52:
            report = report !== entity;
            if(report) { _fun00026_ip = 76; continue _fun00025 }
 59:
            oscar = _closure1_slot14;
            entity = oscar.has;
            entity = entity.bind(oscar)(tango);
            report = !entity;
 76:
            entity = !report;
            if(report) { _fun00026_ip = 91; continue _fun00025 }
 82:
            mike = _closure1_slot22;
            entity = mike.bind(zulu)(tango);
 91:
            return entity;
        }
    };
    mike['GUILD_MEMBER_UPDATE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    output = tango;
    kilo = mike;
    mike = new output[options](sizing, kilo, backup);
    mike = mike instanceof Object ? mike : tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/SubscriptionRoleStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();