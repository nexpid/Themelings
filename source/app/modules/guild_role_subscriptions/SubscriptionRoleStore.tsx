// app/modules/guild_role_subscriptions/SubscriptionRoleStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
            entity = _closure1_slot20;
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
    var _closure1_slot19 = entity;
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
            _closure1_slot20 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: _isAdminRole
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 9;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.has;
        michal = argFoo;
        michal = michal.permissions;
        entity = _closure1_slot11;
        entity = entity.ADMINISTRATOR;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: computeRolesForGuild
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot10;
            michal = zuuluu.getCurrentUser;
            verify = michal.bind(zuuluu)();
            zuuluu = _closure1_slot9;
            michal = zuuluu.getGuild;
            michal = michal.bind(zuuluu)(tangon);
            option = null;
            if(!(option != michal)) { _fun00006_ip = 517; continue _fun00005 }
 42:
            if(!(option != verify)) { _fun00006_ip = 517; continue _fun00005 }
 49:
            report = global;
            zuuluu = report.Set;
            oscard = zuuluu.prototype;
            oscard = Object.create(oscard, {constructor: {value: zuuluu}});
            ctrled = oscard;
            zuuluu = new ctrled[zuuluu](source);
            golfie = zuuluu instanceof Object ? zuuluu : oscard;
            zuuluu = report.Set;
            oscard = zuuluu.prototype;
            oscard = Object.create(oscard, {constructor: {value: zuuluu}});
            ctrled = oscard;
            zuuluu = new ctrled[zuuluu](source);
            zuuluu = zuuluu instanceof Object ? zuuluu : oscard;
            oscard = report.Set;
            offset = oscard.prototype;
            offset = Object.create(offset, {constructor: {value: oscard}});
            ctrled = offset;
            oscard = new ctrled[oscard](source);
            oscard = oscard instanceof Object ? oscard : offset;
            romeon = _closure1_slot17;
            yankee = romeon.set;
            offset = michal.isOwner;
            offset = offset.bind(michal)(verify);
            offset = yankee.bind(romeon)(tangon, offset);
            yankee = michal.hasFeature;
            offset = _closure1_slot12;
            offset = offset.ROLE_SUBSCRIPTIONS_ENABLED;
            offset = yankee.bind(michal)(offset);
            if(!offset) { _fun00006_ip = 468; continue _fun00005 }
 182:
            yankee = _closure1_slot8;
            offset = yankee.getMember;
            verify = verify.id;
            offset = offset.bind(yankee)(tangon, verify);
            verify = report.Set;
            yankee = option == offset;
            kiloes = undefined;
            report = undefined;
            if(yankee) { _fun00006_ip = 226; continue _fun00005 }
 220:
            report = offset.roles;
 226:
            if(!(option == report)) { _fun00006_ip = 234; continue _fun00005 }
 230:
            report = new Array(0);
 234:
            option = verify.prototype;
            option = Object.create(option, {constructor: {value: verify}});
            ctrled = option;
            source = report;
            report = new ctrled[verify](source, update);
            backup = report instanceof Object ? report : option;
            option = _closure1_slot9;
            report = option.getRoles;
            michal = michal.id;
            foxtra = report.bind(option)(michal);
            yankee = foxtra;
            report = true;
            michal = 10;
            for(option in yankee)
 296:
            {
 308:
                output = option;
                result = foxtra[output];
                echoed = _closure1_slot0;
                sizing = _closure1_slot2;
                sizing = sizing[michal];
                echoed = echoed.bind(kiloes)(sizing);
                sizing = echoed.isSubscriptionRole;
                sizing = sizing.bind(echoed)(result);
                if(!sizing) { _fun00006_ip = 420; continue _fun00005 }
 346:
                sizing = golfie.add;
                sizing = sizing.bind(golfie)(output);
                echoed = _closure1_slot0;
                sizing = _closure1_slot2;
                sizing = sizing[michal];
                echoed = echoed.bind(kiloes)(sizing);
                sizing = echoed.isSubscriptionRoleAvailableForPurchase;
                sizing = sizing.bind(echoed)(result);
                if(!sizing) { _fun00006_ip = 420; continue _fun00005 }
 387:
                sizing = zuuluu.add;
                sizing = sizing.bind(zuuluu)(output);
                sizing = backup.has;
                sizing = sizing.bind(backup)(output);
                if(!sizing) { _fun00006_ip = 420; continue _fun00005 }
 410:
                sizing = oscard.add;
                sizing = sizing.bind(oscard)(output);
 420:
                sizing = backup.has;
                sizing = sizing.bind(backup)(output);
                if(!sizing) { _fun00006_ip = 442; continue _fun00005 }
 433:
                output = _closure1_slot21;
                sizing = output.bind(kiloes)(result);
 442:
                if(!sizing) { _fun00006_ip = 296; continue _fun00005 }
 448:
                output = _closure1_slot17;
                sizing = output.set;
                sizing = sizing.bind(output)(tangon, report);
                _fun00006_ip = 296; continue _fun00005;
            }
 468:
            report = _closure1_slot14;
            michal = report.set;
            michal = michal.bind(report)(tangon, golfie);
            report = _closure1_slot16;
            michal = report.set;
            michal = michal.bind(report)(tangon, oscard);
            michal = _closure1_slot15;
            entity = michal.set;
            entity = entity.bind(michal)(tangon, zuuluu);
            entity = true;
            return entity;
 517:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    yankee = function() { // Original name: deleteEverything
        zuuluu = _closure1_slot14;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot16;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot15;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot17;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
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
            tangon = entity.id;
            zuuluu = _closure1_slot18;
            entity = null;
            if(!(entity != zuuluu)) { _fun00008_ip = 219; continue _fun00007 }
 29:
            report = _closure1_slot9;
            zuuluu = report.getGuild;
            report = zuuluu.bind(report)(tangon);
            if(!(entity != report)) { _fun00008_ip = 215; continue _fun00007 }
 50:
            zuuluu = report.hasFeature;
            entity = _closure1_slot12;
            entity = entity.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
            entity = zuuluu.bind(report)(entity);
            if(!entity) { _fun00008_ip = 141; continue _fun00007 }
 74:
            report = _closure1_slot18;
            zuuluu = report.has;
            zuuluu = zuuluu.bind(report)(tangon);
            if(zuuluu) { _fun00008_ip = 141; continue _fun00007 }
 91:
            zuuluu = global;
            oscard = zuuluu.Set;
            golfie = _closure1_slot18;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            option = report;
            zuuluu = new option[oscard](golfie, oscard);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            report = zuuluu.add;
            report = report.bind(zuuluu)(tangon);
            _closure1_slot18 = zuuluu;
            zuuluu = true;
            return zuuluu;
 141:
            if(entity) { _fun00008_ip = 211; continue _fun00007 }
 144:
            zuuluu = _closure1_slot18;
            entity = zuuluu.has;
            entity = entity.bind(zuuluu)(tangon);
            if(!entity) { _fun00008_ip = 211; continue _fun00007 }
 161:
            entity = global;
            report = entity.Set;
            golfie = _closure1_slot18;
            zuuluu = report.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: report}});
            option = zuuluu;
            entity = new option[report](golfie, oscard);
            entity = entity instanceof Object ? entity : zuuluu;
            zuuluu = entity.delete;
            zuuluu = zuuluu.bind(entity)(tangon);
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
            tangon = entity.guildId;
            zuuluu = _closure1_slot14;
            entity = zuuluu.has;
            entity = entity.bind(zuuluu)(tangon);
            zuuluu = !entity;
            entity = !zuuluu;
            if(zuuluu) { _fun00010_ip = 45; continue _fun00009 }
 34:
            zuuluu = _closure1_slot22;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 45:
            return entity;
        }
    };
    michal = global;
    foxtra = michal.Object;
    romeon = foxtra.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 7;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 8;
    option = oscard[option];
    option = report.bind(entity)(option);
    romeon = option.Permissions;
    var _closure1_slot11 = romeon;
    option = option.GuildFeatures;
    var _closure1_slot12 = option;
    option = michal.Set;
    romeon = option.prototype;
    romeon = Object.create(romeon, {constructor: {value: option}});
    output = romeon;
    option = new output[option](sizing);
    option = option instanceof Object ? option : romeon;
    var _closure1_slot13 = option;
    option = michal.Map;
    romeon = option.prototype;
    romeon = Object.create(romeon, {constructor: {value: option}});
    output = romeon;
    option = new output[option](sizing);
    option = option instanceof Object ? option : romeon;
    var _closure1_slot14 = option;
    option = michal.Map;
    romeon = option.prototype;
    romeon = Object.create(romeon, {constructor: {value: option}});
    output = romeon;
    option = new output[option](sizing);
    option = option instanceof Object ? option : romeon;
    var _closure1_slot15 = option;
    option = michal.Map;
    romeon = option.prototype;
    romeon = Object.create(romeon, {constructor: {value: option}});
    output = romeon;
    option = new output[option](sizing);
    option = option instanceof Object ? option : romeon;
    var _closure1_slot16 = option;
    michal = michal.Map;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    output = option;
    michal = new output[michal](sizing);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot17 = michal;
    michal = null;
    var _closure1_slot18 = michal;
    michal = 11;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: SubscriptionRoleStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot19;
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
            zuuluu = this;
            michal = zuuluu.waitFor;
            entity = _closure1_slot9;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'getGuildIdsWithPurchasableRoles';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = _closure1_slot18;
                entity = null;
                if(!(entity != michal)) { _fun00012_ip = 19; continue _fun00011 }
 13:
                entity = _closure1_slot18;
                _fun00012_ip = 131; continue _fun00011;
 19:
                tangon = _closure1_slot9;
                michal = tangon.getGuilds;
                verify = michal.bind(tangon)();
                michal = global;
                michal = michal.Set;
                tangon = michal.prototype;
                tangon = Object.create(tangon, {constructor: {value: michal}});
                kiloes = tangon;
                michal = new kiloes[michal](backup);
                michal = michal instanceof Object ? michal : tangon;
                golfie = verify;
                for(tangon in golfie)
 72:
                {
 81:
                    yankee = tangon;
                    foxtra = verify[yankee];
                    romeon = foxtra.hasFeature;
                    offset = _closure1_slot12;
                    offset = offset.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
                    offset = romeon.bind(foxtra)(offset);
                    if(!offset) { _fun00012_ip = 72; continue _fun00011 }
 112:
                    offset = michal.add;
                    offset = offset.bind(michal)(yankee);
                    _fun00012_ip = 72; continue _fun00011;
                }
 124:
                _closure1_slot18 = michal;
                entity = michal;
 131:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'buildRoles';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argFoo;
                tangon = _closure1_slot14;
                michal = tangon.has;
                michal = michal.bind(tangon)(zuuluu);
                if(michal) { _fun00014_ip = 34; continue _fun00013 }
 23:
                michal = _closure1_slot22;
                entity = undefined;
                entity = michal.bind(entity)(zuuluu);
 34:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getSubscriptionRoles';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = argFoo;
                michal = this;
                entity = michal.buildRoles;
                entity = entity.bind(michal)(tangon);
                zuuluu = _closure1_slot14;
                entity = zuuluu.get;
                entity = entity.bind(zuuluu)(tangon);
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00016_ip = 44; continue _fun00015 }
 40:
                entity = _closure1_slot13;
 44:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getPurchasableSubscriptionRoles';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tangon = argFoo;
                michal = this;
                entity = michal.buildRoles;
                entity = entity.bind(michal)(tangon);
                zuuluu = _closure1_slot15;
                entity = zuuluu.get;
                entity = entity.bind(zuuluu)(tangon);
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00018_ip = 44; continue _fun00017 }
 40:
                entity = _closure1_slot13;
 44:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getUserSubscriptionRoles';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                tangon = argFoo;
                michal = this;
                entity = michal.buildRoles;
                entity = entity.bind(michal)(tangon);
                zuuluu = _closure1_slot16;
                entity = zuuluu.get;
                entity = entity.bind(zuuluu)(tangon);
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00020_ip = 44; continue _fun00019 }
 40:
                entity = _closure1_slot13;
 44:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getUserIsAdmin';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                entity = michal.buildRoles;
                entity = entity.bind(michal)(zuuluu);
                michal = _closure1_slot17;
                entity = michal.get;
                michal = entity.bind(michal)(zuuluu);
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00022_ip = 46; continue _fun00021 }
 43:
                entity = michal;
 46:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'SubscriptionRoleStore';
    option['displayName'] = michal;
    michal = 12;
    michal = oscard[michal];
    sizing = golfie.bind(entity)(michal);
    michal = {};
    michal['CONNECTION_OPEN'] = yankee;
    michal['LOGOUT'] = yankee;
    michal['GUILD_CREATE'] = offset;
    yankee = function(argFoo) { // Original name: handleGuildDelete
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            entity = entity.guild;
            report = entity.id;
            oscard = _closure1_slot18;
            entity = null;
            michal = entity == oscard;
            entity = undefined;
            tangon = undefined;
            if(michal) { _fun00024_ip = 43; continue _fun00023 }
 33:
            michal = oscard.has;
            tangon = michal.bind(oscard)(report);
 43:
            michal = true;
            if(!(michal === tangon)) { _fun00024_ip = 97; continue _fun00023 }
 49:
            michal = global;
            oscard = michal.Set;
            golfie = _closure1_slot18;
            tangon = oscard.prototype;
            tangon = Object.create(tangon, {constructor: {value: oscard}});
            option = tangon;
            michal = new option[oscard](golfie, oscard);
            michal = michal instanceof Object ? michal : tangon;
            tangon = michal.delete;
            tangon = tangon.bind(michal)(report);
            _closure1_slot18 = michal;
            return entity;
 97:
            entity = false;
            return entity;
        }
    };
    michal['GUILD_DELETE'] = yankee;
    michal['GUILD_UPDATE'] = offset;
    michal['GUILD_ROLE_CREATE'] = verify;
    michal['GUILD_ROLE_UPDATE'] = verify;
    michal['GUILD_ROLE_DELETE'] = verify;
    tangon = function(argFoo) { // Original name: handleGuildMemberUpdate
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            entity = entity.user;
            report = _closure1_slot10;
            zuuluu = report.getCurrentUser;
            oscard = zuuluu.bind(report)();
            report = entity.id;
            entity = null;
            golfie = entity == oscard;
            zuuluu = undefined;
            entity = undefined;
            if(golfie) { _fun00026_ip = 52; continue _fun00025 }
 47:
            entity = oscard.id;
 52:
            report = report !== entity;
            if(report) { _fun00026_ip = 76; continue _fun00025 }
 59:
            oscard = _closure1_slot14;
            entity = oscard.has;
            entity = entity.bind(oscard)(tangon);
            report = !entity;
 76:
            entity = !report;
            if(report) { _fun00026_ip = 91; continue _fun00025 }
 82:
            michal = _closure1_slot22;
            entity = michal.bind(zuuluu)(tangon);
 91:
            return entity;
        }
    };
    michal['GUILD_MEMBER_UPDATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    output = tangon;
    kiloes = michal;
    michal = new output[option](sizing, kiloes, backup);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/SubscriptionRoleStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();