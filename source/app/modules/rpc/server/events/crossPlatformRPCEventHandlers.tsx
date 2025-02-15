// app/modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = oscar;
    kilo = function(argFoo) { // Original name: messageEvents
        _fun109875: for(var _fun109875_ip = 0; ; ) switch(_fun109875_ip) {
 0:
            entity = argFoo;
            mike = entity.args;
            report = mike.channel_id;
            zulu = entity.socket;
            tango = _closure1_slot6;
            mike = tango.getChannel;
            mike = mike.bind(tango)(report);
            tango = null;
            if(!(tango != mike)) { _fun109875_ip = 249; continue _fun109875 }
 46:
            options = _closure1_slot0;
            golf = _closure1_slot2;
            oscar = 13;
            golf = golf[oscar];
            oscar = undefined;
            verify = options.bind(oscar)(golf);
            options = verify.hasMessageReadPermission;
            golf = zulu.application;
            golf = golf.id;
            zulu = zulu.authorization;
            zulu = zulu.scopes;
            zulu = options.bind(verify)(mike, golf, zulu);
            if(!zulu) { _fun109875_ip = 249; continue _fun109875 }
 109:
            zulu = mike.isNSFW;
            zulu = zulu.bind(mike)();
            if(!zulu) { _fun109875_ip = 156; continue _fun109875 }
 122:
            golf = _closure1_slot11;
            zulu = golf.getCurrentUser;
            zulu = zulu.bind(golf)();
            golf = tango == zulu;
            tango = undefined;
            if(golf) { _fun109875_ip = 150; continue _fun109875 }
 144:
            tango = zulu.nsfwAllowed;
 150:
            zulu = true;
            if(!(zulu === tango)) { _fun109875_ip = 158; continue _fun109875 }
 156:
            return oscar;
 158:
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 14;
            zulu = golf[zulu];
            oscar = tango.bind(oscar)(zulu);
            tango = {};
            zulu = _closure1_slot13;
            zulu = zulu.INVALID_CHANNEL;
            tango['errorCode'] = zulu;
            golf = mike.id;
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = 'Invalid nsfw channel id: ';
            yankee = zulu.bind(mike)(golf);
            zulu = oscar.prototype;
            zulu = Object.create(zulu, {constructor: {value: oscar}});
            foxtrot = zulu;
            romeo = tango;
            mike = new foxtrot[oscar](romeo, yankee, offset);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 249:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 14;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot13;
            entity = entity.INVALID_CHANNEL;
            zulu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Invalid channel id: ';
            yankee = mike.bind(entity)(report);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            foxtrot = mike;
            romeo = zulu;
            entity = new foxtrot[tango](romeo, yankee, offset);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    yankee = function(argFoo) { // Original name: speakingEvents
        _fun109876: for(var _fun109876_ip = 0; ; ) switch(_fun109876_ip) {
 0:
            entity = argFoo;
            entity = entity.args;
            report = entity.channel_id;
            zulu = null;
            if(!(zulu != report)) { _fun109876_ip = 41; continue _fun109876 }
 20:
            tango = _closure1_slot6;
            mike = tango.getChannel;
            mike = mike.bind(tango)(report);
            if(!(zulu != mike)) { _fun109876_ip = 45; continue _fun109876 }
 41:
            mike = undefined;
            return mike;
 45:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 14;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot13;
            entity = entity.INVALID_CHANNEL;
            zulu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Invalid channel id: ';
            oscar = mike.bind(entity)(report);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            options = mike;
            golf = zulu;
            entity = new options[tango](golf, oscar, report);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    offset = mike.RPC_SCOPE_CONFIG;
    foxtrot = mike.RPC_LOCAL_SCOPE;
    sizing = mike.RPC_AUTHENTICATED_SCOPE;
    mike = 11;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.RPCEvents;
    mike = mike.RPCErrors;
    var _closure1_slot13 = mike;
    output = function(argFoo) { // Original name: messageEventsValidation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 12;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        report = tango.bind(report)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['channel_id'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    backup = function(argFoo) { // Original name: speakingEventsValidation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 12;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        zulu = entity.bind(mike)(report);
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        oscar = tango.bind(report)();
        report = oscar.allow;
        tango = null;
        tango = report.bind(oscar)(tango);
        entity['channel_id'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike = {};
    verify = tango.GUILD_STATUS;
    golf = {};
    romeo = 15;
    result = oscar[romeo];
    result = report.bind(entity)(result);
    result = result.OAuth2Scopes;
    result = result.RPC;
    golf['scope'] = result;
    result = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 12;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        report = tango.bind(report)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['guild_id'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['validation'] = result;
    result = function(argFoo) { // Original name: handler
        _fun109880: for(var _fun109880_ip = 0; ; ) switch(_fun109880_ip) {
 0:
            entity = argFoo;
            entity = entity.args;
            report = entity.guild_id;
            var _closure2_slot0 = report;
            tango = _closure1_slot8;
            zulu = tango.getGuild;
            tango = zulu.bind(tango)(report);
            zulu = null;
            if(!(zulu != tango)) { _fun109880_ip = 52; continue _fun109880 }
 43:
            mike = function(argFoo) {
                _fun109881: for(var _fun109881_ip = 0; ; ) switch(_fun109881_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.prevState;
                    zulu = entity.dispatch;
                    report = _closure1_slot8;
                    tango = report.getGuild;
                    entity = _closure2_slot0;
                    verify = tango.bind(report)(entity);
                    report = null;
                    if(!(report == verify)) { _fun109881_ip = 48; continue _fun109881 }
 44:
                    entity = undefined;
                    return entity;
 48:
                    entity = {};
                    tango = {};
                    golf = verify.id;
                    tango['id'] = golf;
                    golf = verify.name;
                    tango['name'] = golf;
                    options = verify.getIconURL;
                    golf = 128;
                    golf = options.bind(verify)(golf);
                    options = report != golf;
                    report = null;
                    if(!options) { _fun109881_ip = 96; continue _fun109881 }
 93:
                    report = golf;
 96:
                    tango['icon_url'] = report;
                    entity['guild'] = tango;
                    tango = 0;
                    entity['online'] = tango;
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 16;
                    tango = tango[mike];
                    mike = undefined;
                    report = report.bind(mike)(tango);
                    tango = report.isEqual;
                    tango = tango.bind(report)(oscar, entity);
                    if(tango) { _fun109881_ip = 154; continue _fun109881 }
 149:
                    mike = zulu.bind(mike)(entity);
 154:
                    return entity;
                }
            };
            return mike;
 52:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 14;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot13;
            entity = entity.INVALID_GUILD;
            zulu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Invalid guild id: ';
            oscar = mike.bind(entity)(report);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            options = mike;
            golf = zulu;
            entity = new options[tango](golf, oscar, report);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    golf['handler'] = result;
    mike[verify] = golf;
    verify = tango.VOICE_STATE_CREATE;
    golf = {};
    result = {};
    update = offset.ANY;
    echo = oscar[romeo];
    echo = report.bind(entity)(echo);
    echo = echo.OAuth2Scopes;
    source = echo.RPC;
    echo = new Array(2);
    echo[0] = source;
    source = oscar[romeo];
    source = report.bind(entity)(source);
    source = source.OAuth2Scopes;
    source = source.RPC_VOICE_READ;
    echo[1] = source;
    result[update] = echo;
    golf['scope'] = result;
    result = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 12;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        report = tango.bind(report)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['channel_id'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['validation'] = result;
    result = function(argFoo) { // Original name: handler
        _fun109883: for(var _fun109883_ip = 0; ; ) switch(_fun109883_ip) {
 0:
            entity = argFoo;
            entity = entity.args;
            report = entity.channel_id;
            var _closure2_slot0 = report;
            tango = _closure1_slot6;
            zulu = tango.getChannel;
            tango = zulu.bind(tango)(report);
            zulu = null;
            if(!(zulu != tango)) { _fun109883_ip = 52; continue _fun109883 }
 43:
            mike = function(argFoo) {
                _fun109884: for(var _fun109884_ip = 0; ; ) switch(_fun109884_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.prevState;
                    entity = entity.dispatch;
                    var _closure3_slot0 = entity;
                    report = undefined;
                    var _closure3_slot2 = report;
                    golf = _closure1_slot6;
                    tango = golf.getChannel;
                    entity = _closure2_slot0;
                    entity = tango.bind(golf)(entity);
                    var _closure3_slot1 = entity;
                    tango = null;
                    if(!(tango == entity)) { _fun109884_ip = 62; continue _fun109884 }
 60:
                    return report;
 62:
                    tango = entity.getGuildId;
                    tango = tango.bind(entity)();
                    _closure3_slot2 = tango;
                    tango = global;
                    golf = tango.Object;
                    tango = golf.values;
                    verify = _closure1_slot12;
                    options = verify.getVoiceStatesForChannel;
                    entity = entity.id;
                    entity = options.bind(verify)(entity);
                    entity = tango.bind(golf)(entity);
                    if(!oscar) { _fun109884_ip = 174; continue _fun109884 }
 117:
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 16;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.differenceBy;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.userId;
                        return entity;
                    };
                    tango = tango.bind(report)(entity, oscar, zulu);
                    zulu = tango.forEach;
                    mike = function(argFoo) {
                        zulu = _closure3_slot0;
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        mike = 13;
                        tango = tango[mike];
                        mike = undefined;
                        golf = report.bind(mike)(tango);
                        oscar = golf.transformVoiceState;
                        report = _closure3_slot2;
                        entity = _closure3_slot1;
                        tango = entity.id;
                        entity = argFoo;
                        entity = oscar.bind(golf)(report, tango, entity);
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 174:
                    return entity;
                }
            };
            return mike;
 52:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 14;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot13;
            entity = entity.INVALID_CHANNEL;
            zulu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Invalid channel id: ';
            oscar = mike.bind(entity)(report);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            options = mike;
            golf = zulu;
            entity = new options[tango](golf, oscar, report);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    golf['handler'] = result;
    mike[verify] = golf;
    verify = tango.VOICE_STATE_DELETE;
    golf = {};
    result = {};
    update = offset.ANY;
    echo = oscar[romeo];
    echo = report.bind(entity)(echo);
    echo = echo.OAuth2Scopes;
    source = echo.RPC;
    echo = new Array(2);
    echo[0] = source;
    source = oscar[romeo];
    source = report.bind(entity)(source);
    source = source.OAuth2Scopes;
    source = source.RPC_VOICE_READ;
    echo[1] = source;
    result[update] = echo;
    golf['scope'] = result;
    result = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 12;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        report = tango.bind(report)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['channel_id'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['validation'] = result;
    result = function(argFoo) { // Original name: handler
        _fun109888: for(var _fun109888_ip = 0; ; ) switch(_fun109888_ip) {
 0:
            entity = argFoo;
            entity = entity.args;
            report = entity.channel_id;
            var _closure2_slot0 = report;
            tango = _closure1_slot6;
            zulu = tango.getChannel;
            tango = zulu.bind(tango)(report);
            zulu = null;
            if(!(zulu != tango)) { _fun109888_ip = 52; continue _fun109888 }
 43:
            mike = function(argFoo) {
                _fun109889: for(var _fun109889_ip = 0; ; ) switch(_fun109889_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.prevState;
                    entity = entity.dispatch;
                    var _closure3_slot0 = entity;
                    report = undefined;
                    var _closure3_slot2 = report;
                    golf = _closure1_slot6;
                    tango = golf.getChannel;
                    entity = _closure2_slot0;
                    entity = tango.bind(golf)(entity);
                    var _closure3_slot1 = entity;
                    tango = null;
                    if(!(tango == entity)) { _fun109889_ip = 62; continue _fun109889 }
 60:
                    return report;
 62:
                    tango = entity.getGuildId;
                    tango = tango.bind(entity)();
                    _closure3_slot2 = tango;
                    tango = global;
                    golf = tango.Object;
                    tango = golf.values;
                    verify = _closure1_slot12;
                    options = verify.getVoiceStatesForChannel;
                    entity = entity.id;
                    entity = options.bind(verify)(entity);
                    entity = tango.bind(golf)(entity);
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 16;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.differenceBy;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.userId;
                        return entity;
                    };
                    tango = tango.bind(report)(oscar, entity, zulu);
                    zulu = tango.forEach;
                    mike = function(argFoo) {
                        zulu = _closure3_slot0;
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        mike = 13;
                        tango = tango[mike];
                        mike = undefined;
                        golf = report.bind(mike)(tango);
                        oscar = golf.transformVoiceState;
                        report = _closure3_slot2;
                        entity = _closure3_slot1;
                        tango = entity.id;
                        entity = argFoo;
                        entity = oscar.bind(golf)(report, tango, entity);
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            return mike;
 52:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 14;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot13;
            entity = entity.INVALID_CHANNEL;
            zulu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Invalid channel id: ';
            oscar = mike.bind(entity)(report);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            options = mike;
            golf = zulu;
            entity = new options[tango](golf, oscar, report);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    golf['handler'] = result;
    mike[verify] = golf;
    verify = tango.VOICE_STATE_UPDATE;
    golf = {};
    result = {};
    update = offset.ANY;
    echo = oscar[romeo];
    echo = report.bind(entity)(echo);
    echo = echo.OAuth2Scopes;
    source = echo.RPC;
    echo = new Array(2);
    echo[0] = source;
    source = oscar[romeo];
    source = report.bind(entity)(source);
    source = source.OAuth2Scopes;
    source = source.RPC_VOICE_READ;
    echo[1] = source;
    result[update] = echo;
    golf['scope'] = result;
    result = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 12;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        report = tango.bind(report)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['channel_id'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['validation'] = result;
    result = function(argFoo) { // Original name: handler
        _fun109893: for(var _fun109893_ip = 0; ; ) switch(_fun109893_ip) {
 0:
            entity = argFoo;
            entity = entity.args;
            report = entity.channel_id;
            var _closure2_slot0 = report;
            tango = _closure1_slot6;
            zulu = tango.getChannel;
            tango = zulu.bind(tango)(report);
            zulu = null;
            if(!(zulu != tango)) { _fun109893_ip = 52; continue _fun109893 }
 43:
            mike = function(argFoo) {
                _fun109894: for(var _fun109894_ip = 0; ; ) switch(_fun109894_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.prevState;
                    entity = entity.dispatch;
                    var _closure3_slot0 = entity;
                    options = undefined;
                    var _closure3_slot2 = options;
                    report = _closure1_slot6;
                    tango = report.getChannel;
                    entity = _closure2_slot0;
                    entity = tango.bind(report)(entity);
                    var _closure3_slot1 = entity;
                    tango = null;
                    if(!(tango == entity)) { _fun109894_ip = 62; continue _fun109894 }
 60:
                    return options;
 62:
                    tango = entity.getGuildId;
                    tango = tango.bind(entity)();
                    _closure3_slot2 = tango;
                    tango = global;
                    report = tango.Object;
                    tango = report.values;
                    verify = _closure1_slot12;
                    golf = verify.getVoiceStatesForChannel;
                    entity = entity.id;
                    entity = golf.bind(verify)(entity);
                    report = tango.bind(report)(entity);
                    tango = report.map;
                    entity = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.transformVoiceState;
                        zulu = _closure3_slot2;
                        entity = _closure3_slot1;
                        mike = entity.id;
                        entity = argFoo;
                        entity = tango.bind(report)(zulu, mike, entity);
                        return entity;
                    };
                    entity = tango.bind(report)(entity);
                    golf = _closure1_slot1;
                    verify = _closure1_slot2;
                    zulu = 16;
                    tango = verify[zulu];
                    report = golf.bind(options)(tango);
                    tango = report.differenceWith;
                    zulu = verify[zulu];
                    zulu = golf.bind(options)(zulu);
                    zulu = zulu.isEqual;
                    tango = tango.bind(report)(entity, oscar, zulu);
                    zulu = tango.forEach;
                    mike = function(argFoo) {
                        zulu = _closure3_slot0;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            return mike;
 52:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 14;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot13;
            entity = entity.INVALID_CHANNEL;
            zulu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Invalid channel id: ';
            oscar = mike.bind(entity)(report);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            options = mike;
            golf = zulu;
            entity = new options[tango](golf, oscar, report);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    golf['handler'] = result;
    mike[verify] = golf;
    verify = tango.VOICE_CONNECTION_STATUS;
    golf = {};
    result = {};
    update = offset.ANY;
    echo = oscar[romeo];
    echo = report.bind(entity)(echo);
    echo = echo.OAuth2Scopes;
    source = echo.RPC;
    echo = new Array(2);
    echo[0] = source;
    source = oscar[romeo];
    source = report.bind(entity)(source);
    source = source.OAuth2Scopes;
    source = source.RPC_VOICE_READ;
    echo[1] = source;
    result[update] = echo;
    golf['scope'] = result;
    result = function() { // Original name: handler
        entity = function(argFoo) {
            _fun109898: for(var _fun109898_ip = 0; ; ) switch(_fun109898_ip) {
 0:
                entity = argFoo;
                oscar = entity.prevState;
                zulu = entity.dispatch;
                entity = {};
                options = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 13;
                report = golf[mike];
                mike = undefined;
                offset = options.bind(mike)(report);
                verify = offset.getVoiceConnectionState;
                options = _closure1_slot10;
                report = options.getState;
                report = report.bind(options)();
                report = verify.bind(offset)(report);
                entity['state'] = report;
                report = options.getHostname;
                report = report.bind(options)();
                entity['hostname'] = report;
                report = options.getPings;
                report = report.bind(options)();
                entity['pings'] = report;
                report = options.getAveragePing;
                report = report.bind(options)();
                entity['average_ping'] = report;
                report = options.getLastPing;
                report = report.bind(options)();
                entity['last_ping'] = report;
                report = _closure1_slot1;
                tango = 16;
                tango = golf[tango];
                report = report.bind(mike)(tango);
                tango = report.isEqual;
                tango = tango.bind(report)(entity, oscar);
                if(tango) { _fun109898_ip = 170; continue _fun109898 }
 165:
                mike = zulu.bind(mike)(entity);
 170:
                return entity;
            }
        };
        return entity;
    };
    golf['handler'] = result;
    mike[verify] = golf;
    verify = tango.MESSAGE_CREATE;
    golf = {};
    result = oscar[romeo];
    result = report.bind(entity)(result);
    result = result.OAuth2Scopes;
    result = result.RPC;
    golf['scope'] = result;
    golf['validation'] = output;
    golf['handler'] = kilo;
    mike[verify] = golf;
    verify = tango.MESSAGE_UPDATE;
    golf = {};
    result = oscar[romeo];
    result = report.bind(entity)(result);
    result = result.OAuth2Scopes;
    result = result.RPC;
    golf['scope'] = result;
    golf['validation'] = output;
    golf['handler'] = kilo;
    mike[verify] = golf;
    verify = tango.MESSAGE_DELETE;
    golf = {};
    result = oscar[romeo];
    result = report.bind(entity)(result);
    result = result.OAuth2Scopes;
    result = result.RPC;
    golf['scope'] = result;
    golf['validation'] = output;
    golf['handler'] = kilo;
    mike[verify] = golf;
    verify = tango.SPEAKING_START;
    golf = {};
    kilo = {};
    result = offset.ANY;
    output = oscar[romeo];
    output = report.bind(entity)(output);
    output = output.OAuth2Scopes;
    echo = output.RPC;
    output = new Array(3);
    output[0] = echo;
    echo = oscar[romeo];
    echo = report.bind(entity)(echo);
    echo = echo.OAuth2Scopes;
    echo = echo.RPC_VOICE_READ;
    output[1] = echo;
    output[2] = foxtrot;
    kilo[result] = output;
    golf['scope'] = kilo;
    golf['validation'] = backup;
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.SPEAKING_STOP;
    golf = {};
    kilo = {};
    result = offset.ANY;
    output = oscar[romeo];
    output = report.bind(entity)(output);
    output = output.OAuth2Scopes;
    echo = output.RPC;
    output = new Array(3);
    output[0] = echo;
    echo = oscar[romeo];
    echo = report.bind(entity)(echo);
    echo = echo.OAuth2Scopes;
    echo = echo.RPC_VOICE_READ;
    output[1] = echo;
    output[2] = foxtrot;
    kilo[result] = output;
    golf['scope'] = kilo;
    golf['validation'] = backup;
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.GUILD_CREATE;
    golf = {};
    yankee = oscar[romeo];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.OAuth2Scopes;
    yankee = yankee.RPC;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.CHANNEL_CREATE;
    golf = {};
    yankee = oscar[romeo];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.OAuth2Scopes;
    yankee = yankee.RPC;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.GAME_JOIN;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = oscar[romeo];
    backup = report.bind(entity)(backup);
    backup = backup.OAuth2Scopes;
    output = backup.RPC;
    backup = new Array(2);
    backup[0] = output;
    backup[1] = foxtrot;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.GAME_SPECTATE;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = oscar[romeo];
    backup = report.bind(entity)(backup);
    backup = backup.OAuth2Scopes;
    output = backup.RPC;
    backup = new Array(2);
    backup[0] = output;
    backup[1] = foxtrot;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.ACTIVITY_JOIN;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = oscar[romeo];
    backup = report.bind(entity)(backup);
    backup = backup.OAuth2Scopes;
    output = backup.RPC;
    backup = new Array(3);
    backup[0] = output;
    backup[1] = sizing;
    backup[2] = foxtrot;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.ACTIVITY_JOIN_REQUEST;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = oscar[romeo];
    backup = report.bind(entity)(backup);
    backup = backup.OAuth2Scopes;
    output = backup.RPC;
    backup = new Array(2);
    backup[0] = output;
    backup[1] = foxtrot;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.ACTIVITY_SPECTATE;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = oscar[romeo];
    backup = report.bind(entity)(backup);
    backup = backup.OAuth2Scopes;
    output = backup.RPC;
    backup = new Array(3);
    backup[0] = output;
    backup[1] = sizing;
    backup[2] = foxtrot;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.ACTIVITY_INVITE;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = oscar[romeo];
    backup = report.bind(entity)(backup);
    backup = backup.OAuth2Scopes;
    output = backup.RPC;
    backup = new Array(2);
    backup[0] = output;
    backup[1] = foxtrot;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.ACTIVITY_PIP_MODE_UPDATE;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = oscar[romeo];
    backup = report.bind(entity)(backup);
    backup = backup.OAuth2Scopes;
    output = backup.RPC;
    backup = new Array(3);
    backup[0] = output;
    backup[1] = sizing;
    backup[2] = foxtrot;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.ACTIVITY_LAYOUT_MODE_UPDATE;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = oscar[romeo];
    backup = report.bind(entity)(backup);
    backup = backup.OAuth2Scopes;
    output = backup.RPC;
    backup = new Array(3);
    backup[0] = output;
    backup[1] = sizing;
    backup[2] = foxtrot;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
    golf = 17;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.activityInstanceConnectedParticipantsUpdateEvent;
    mike[verify] = golf;
    verify = tango.THERMAL_STATE_UPDATE;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = new Array(1);
    backup[0] = sizing;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.ORIENTATION_UPDATE;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = new Array(1);
    backup[0] = sizing;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.VOICE_CHANNEL_SELECT;
    golf = {};
    yankee = oscar[romeo];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.OAuth2Scopes;
    yankee = yankee.RPC;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.NOTIFICATION_CREATE;
    golf = {};
    yankee = {};
    kilo = offset.ALL;
    backup = oscar[romeo];
    backup = report.bind(entity)(backup);
    backup = backup.OAuth2Scopes;
    output = backup.RPC;
    backup = new Array(2);
    backup[0] = output;
    output = oscar[romeo];
    output = report.bind(entity)(output);
    output = output.OAuth2Scopes;
    output = output.RPC_NOTIFICATIONS_READ;
    backup[1] = output;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.RELATIONSHIP_UPDATE;
    golf = {};
    yankee = oscar[romeo];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.OAuth2Scopes;
    yankee = yankee.RELATIONSHIPS_READ;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.CURRENT_USER_UPDATE;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = new Array(2);
    backup[0] = foxtrot;
    output = oscar[romeo];
    output = report.bind(entity)(output);
    output = output.OAuth2Scopes;
    output = output.IDENTIFY;
    backup[1] = output;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = function(argFoo) {
            _fun109915: for(var _fun109915_ip = 0; ; ) switch(_fun109915_ip) {
 0:
                entity = argFoo;
                options = entity.prevState;
                tango = entity.dispatch;
                entity = {};
                report = _closure1_slot11;
                zulu = report.getCurrentUser;
                zulu = zulu.bind(report)();
                entity['currentUser'] = zulu;
                zulu = entity.currentUser;
                report = null;
                zulu = report == zulu;
                if(zulu) { _fun109915_ip = 90; continue _fun109915 }
 52:
                report = report != options;
                if(!report) { _fun109915_ip = 87; continue _fun109915 }
 59:
                verify = _closure1_slot1;
                golf = _closure1_slot2;
                oscar = 18;
                oscar = golf[oscar];
                golf = undefined;
                oscar = verify.bind(golf)(oscar);
                report = oscar.bind(golf)(entity, options);
 87:
                zulu = report;
 90:
                if(zulu) { _fun109915_ip = 131; continue _fun109915 }
 93:
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 19;
                mike = zulu[mike];
                zulu = undefined;
                report = report.bind(zulu)(mike);
                mike = entity.currentUser;
                mike = report.bind(zulu)(mike);
                mike = tango.bind(zulu)(mike);
 131:
                return entity;
            }
        };
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.CURRENT_GUILD_MEMBER_UPDATE;
    golf = {};
    yankee = {};
    kilo = offset.ALL;
    backup = oscar[romeo];
    backup = report.bind(entity)(backup);
    backup = backup.OAuth2Scopes;
    output = backup.IDENTIFY;
    backup = new Array(2);
    backup[0] = output;
    output = oscar[romeo];
    output = report.bind(entity)(output);
    output = output.OAuth2Scopes;
    output = output.GUILDS_MEMBERS_READ;
    backup[1] = output;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        mike = argFoo;
        mike = mike.args;
        mike = mike.guild_id;
        var _closure2_slot0 = mike;
        entity = function(argFoo) {
            _fun109917: for(var _fun109917_ip = 0; ; ) switch(_fun109917_ip) {
 0:
                entity = argFoo;
                options = entity.prevState;
                tango = entity.dispatch;
                entity = {};
                oscar = _closure1_slot7;
                report = oscar.getSelfMember;
                zulu = _closure2_slot0;
                zulu = report.bind(oscar)(zulu);
                entity['currentGuildMember'] = zulu;
                zulu = entity.currentGuildMember;
                report = null;
                zulu = report == zulu;
                if(zulu) { _fun109917_ip = 99; continue _fun109917 }
 61:
                report = report != options;
                if(!report) { _fun109917_ip = 96; continue _fun109917 }
 68:
                verify = _closure1_slot1;
                golf = _closure1_slot2;
                oscar = 18;
                oscar = golf[oscar];
                golf = undefined;
                oscar = verify.bind(golf)(oscar);
                report = oscar.bind(golf)(entity, options);
 96:
                zulu = report;
 99:
                if(zulu) { _fun109917_ip = 140; continue _fun109917 }
 102:
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 20;
                mike = zulu[mike];
                zulu = undefined;
                report = report.bind(zulu)(mike);
                mike = entity.currentGuildMember;
                mike = report.bind(zulu)(mike);
                mike = tango.bind(zulu)(mike);
 140:
                return entity;
            }
        };
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.ENTITLEMENT_CREATE;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = new Array(2);
    backup[0] = foxtrot;
    backup[1] = sizing;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.ENTITLEMENT_DELETE;
    golf = {};
    yankee = {};
    kilo = offset.ANY;
    backup = new Array(2);
    backup[0] = foxtrot;
    backup[1] = sizing;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = undefined;
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    verify = tango.SCREENSHARE_STATE_UPDATE;
    golf = {};
    yankee = {};
    kilo = offset.ALL;
    backup = new Array(2);
    backup[0] = foxtrot;
    sizing = oscar[romeo];
    sizing = report.bind(entity)(sizing);
    sizing = sizing.OAuth2Scopes;
    sizing = sizing.RPC_SCREENSHARE_READ;
    backup[1] = sizing;
    yankee[kilo] = backup;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        entity = function(argFoo) {
            _fun109921: for(var _fun109921_ip = 0; ; ) switch(_fun109921_ip) {
 0:
                entity = argFoo;
                oscar = entity.prevState;
                zulu = entity.dispatch;
                mike = _closure1_slot5;
                entity = mike.getStreamerActiveStreamMetadata;
                verify = entity.bind(mike)();
                report = null;
                golf = report == verify;
                mike = undefined;
                entity = undefined;
                if(golf) { _fun109921_ip = 52; continue _fun109921 }
 46:
                entity = verify.pid;
 52:
                golf = report != entity;
                entity = null;
                if(!golf) { _fun109921_ip = 82; continue _fun109921 }
 61:
                offset = _closure1_slot4;
                options = offset.getGameForPID;
                golf = verify.pid;
                entity = options.bind(offset)(golf);
 82:
                options = report == entity;
                golf = undefined;
                if(options) { _fun109921_ip = 96; continue _fun109921 }
 91:
                golf = entity.id;
 96:
                golf = report != golf;
                options = null;
                if(!golf) { _fun109921_ip = 125; continue _fun109921 }
 105:
                offset = _closure1_slot3;
                golf = offset.getApplication;
                entity = entity.id;
                options = golf.bind(offset)(entity);
 125:
                entity = report != options;
                golf = null;
                if(!entity) { _fun109921_ip = 159; continue _fun109921 }
 134:
                offset = _closure1_slot1;
                yankee = _closure1_slot2;
                entity = 21;
                entity = yankee[entity];
                entity = offset.bind(mike)(entity);
                golf = entity.bind(mike)(options);
 159:
                entity = report == verify;
                options = undefined;
                if(entity) { _fun109921_ip = 174; continue _fun109921 }
 168:
                options = verify.sourceName;
 174:
                entity = {};
                offset = report != verify;
                entity['active'] = offset;
                yankee = report == verify;
                offset = undefined;
                if(yankee) { _fun109921_ip = 200; continue _fun109921 }
 194:
                offset = verify.pid;
 200:
                yankee = report != offset;
                verify = null;
                if(!yankee) { _fun109921_ip = 212; continue _fun109921 }
 209:
                verify = offset;
 212:
                entity['pid'] = verify;
                golf = report != golf;
                if(!(report == golf)) { _fun109921_ip = 229; continue _fun109921 }
 225:
                golf = report != options;
 229:
                report = null;
                if(!golf) { _fun109921_ip = 243; continue _fun109921 }
 234:
                golf = {};
                golf['name'] = options;
                report = golf;
 243:
                entity['application'] = report;
                report = _closure1_slot1;
                golf = _closure1_slot2;
                tango = 16;
                tango = golf[tango];
                report = report.bind(mike)(tango);
                tango = report.isEqual;
                tango = tango.bind(report)(entity, oscar);
                if(tango) { _fun109921_ip = 287; continue _fun109921 }
 282:
                mike = zulu.bind(mike)(entity);
 287:
                return entity;
            }
        };
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    golf = tango.VIDEO_STATE_UPDATE;
    tango = {};
    verify = {};
    yankee = offset.ALL;
    offset = new Array(2);
    offset[0] = foxtrot;
    romeo = oscar[romeo];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.OAuth2Scopes;
    romeo = romeo.RPC_VIDEO_READ;
    offset[1] = romeo;
    verify[yankee] = offset;
    tango['scope'] = verify;
    options = function() { // Original name: handler
        entity = function(argFoo) {
            _fun109923: for(var _fun109923_ip = 0; ; ) switch(_fun109923_ip) {
 0:
                entity = argFoo;
                oscar = entity.prevState;
                zulu = entity.dispatch;
                entity = {};
                report = _closure1_slot9;
                tango = report.isVideoEnabled;
                tango = tango.bind(report)();
                entity['active'] = tango;
                report = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 16;
                tango = tango[mike];
                mike = undefined;
                report = report.bind(mike)(tango);
                tango = report.isEqual;
                tango = tango.bind(report)(entity, oscar);
                if(tango) { _fun109923_ip = 80; continue _fun109923 }
 75:
                mike = zulu.bind(mike)(entity);
 80:
                return entity;
            }
        };
        return entity;
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 22;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();