// discord_common/js/packages/rpc-schema/definitions.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    mike = {};
    tango = 0;
    options = oscar[tango];
    entity = undefined;
    options = report.bind(entity)(options);
    options = options.RPCCommand;
    verify = options.INITIATE_IMAGE_UPLOAD;
    options = {};
    options['request'] = entity;
    offset = function(argFoo) { // Original name: response
        zulu = argFoo;
        mike = zulu.object;
        entity = {};
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['image_url'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options['response'] = offset;
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.RPCCommand;
    verify = options.OPEN_SHARE_MOMENT_DIALOG;
    options = {};
    options['response'] = entity;
    offset = function(argFoo) { // Original name: request
        report = argFoo;
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.joiReqObj;
        tango = report.object;
        entity = {};
        oscar = report.string;
        golf = oscar.bind(report)();
        oscar = golf.required;
        options = oscar.bind(golf)();
        golf = options.max;
        oscar = 1024;
        oscar = golf.bind(options)(oscar);
        entity['mediaUrl'] = oscar;
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options['request'] = offset;
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.RPCCommand;
    verify = options.AUTHENTICATE;
    options = {};
    offset = function(argFoo) { // Original name: request
        report = argFoo;
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.joiReqObj;
        tango = report.object;
        entity = {};
        oscar = report.string;
        options = oscar.bind(report)();
        golf = options.allow;
        oscar = null;
        golf = golf.bind(options)(oscar);
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        entity['access_token'] = oscar;
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options['request'] = offset;
    offset = function(argFoo) { // Original name: response
        zulu = argFoo;
        mike = zulu.object;
        entity = {};
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['access_token'] = tango;
        report = zulu.object;
        tango = {};
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.required;
        oscar = oscar.bind(golf)();
        tango['username'] = oscar;
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.required;
        oscar = oscar.bind(golf)();
        tango['discriminator'] = oscar;
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.required;
        oscar = oscar.bind(golf)();
        tango['id'] = oscar;
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.allow;
        options = null;
        oscar = oscar.bind(golf)(options);
        tango['avatar'] = oscar;
        oscar = zulu.number;
        golf = oscar.bind(zulu)();
        oscar = golf.required;
        oscar = oscar.bind(golf)();
        tango['public_flags'] = oscar;
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.allow;
        oscar = oscar.bind(golf)(options);
        tango['global_name'] = oscar;
        report = report.bind(zulu)(tango);
        tango = report.required;
        tango = tango.bind(report)();
        entity['user'] = tango;
        tango = zulu.array;
        oscar = tango.bind(zulu)();
        report = oscar.items;
        tango = zulu.string;
        verify = tango.bind(zulu)();
        golf = verify.valid;
        backup = _closure1_slot0;
        kilo = _closure1_slot1;
        yankee = 0;
        tango = kilo[yankee];
        foxtrot = undefined;
        romeo = backup.bind(foxtrot)(tango);
        offset = romeo.joiEnum;
        tango = 1;
        tango = kilo[tango];
        tango = backup.bind(foxtrot)(tango);
        tango = tango.OAuth2Scopes;
        output = offset.bind(romeo)(tango);
        tango = new Array(0);
        result = tango;
        sizing = 0;
        offset = arraySpread(result, output, sizing);
        result = golf;
        output = tango;
        sizing = verify;
        tango = apply(result, output, sizing);
        report = report.bind(oscar)(tango);
        tango = report.required;
        tango = tango.bind(report)();
        entity['scopes'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['expires'] = tango;
        report = zulu.object;
        tango = {};
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.required;
        oscar = oscar.bind(golf)();
        tango['description'] = oscar;
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.allow;
        oscar = oscar.bind(golf)(options);
        tango['icon'] = oscar;
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.required;
        oscar = oscar.bind(golf)();
        tango['id'] = oscar;
        oscar = zulu.array;
        options = oscar.bind(zulu)();
        golf = options.items;
        oscar = zulu.string;
        oscar = oscar.bind(zulu)();
        golf = golf.bind(options)(oscar);
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        tango['rpc_origins'] = oscar;
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.required;
        oscar = oscar.bind(golf)();
        tango['name'] = oscar;
        report = report.bind(zulu)(tango);
        tango = report.required;
        tango = tango.bind(report)();
        entity['application'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options['response'] = offset;
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.RPCCommand;
    verify = options.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS;
    options = {};
    options['request'] = entity;
    offset = function(argFoo) { // Original name: response
        zulu = argFoo;
        mike = zulu.object;
        entity = {};
        tango = zulu.array;
        oscar = tango.bind(zulu)();
        report = oscar.items;
        golf = _closure1_slot3;
        tango = undefined;
        options = golf.bind(tango)(zulu);
        golf = options.keys;
        tango = {};
        verify = zulu.string;
        yankee = verify.bind(zulu)();
        offset = yankee.description;
        verify = 'Server nickname. Not unique.';
        verify = offset.bind(yankee)(verify);
        tango['nickname'] = verify;
        golf = golf.bind(options)(tango);
        tango = golf.required;
        tango = tango.bind(golf)();
        report = report.bind(oscar)(tango);
        tango = report.required;
        tango = tango.bind(report)();
        entity['participants'] = tango;
        mike = mike.bind(zulu)(entity);
        entity = mike.required;
        entity = entity.bind(mike)();
        return entity;
    };
    options['response'] = offset;
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.RPCCommand;
    verify = options.SHARE_INTERACTION;
    options = {};
    offset = function(argFoo) { // Original name: request
        report = argFoo;
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 0;
        entity = zulu[entity];
        verify = undefined;
        zulu = mike.bind(verify)(entity);
        mike = zulu.joiReqObj;
        tango = report.object;
        entity = {};
        golf = report.string;
        options = golf.bind(report)();
        golf = options.required;
        golf = golf.bind(options)();
        entity['command'] = golf;
        golf = report.string;
        offset = golf.bind(report)();
        options = offset.max;
        golf = 2000;
        golf = options.bind(offset)(golf);
        entity['content'] = golf;
        golf = report.boolean;
        golf = golf.bind(report)();
        entity['require_launch_channel'] = golf;
        options = report.object;
        golf = {};
        offset = report.number;
        yankee = offset.bind(report)();
        offset = yankee.required;
        offset = offset.bind(yankee)();
        golf['height'] = offset;
        offset = report.string;
        yankee = offset.bind(report)();
        offset = yankee.required;
        offset = offset.bind(yankee)();
        golf['url'] = offset;
        offset = report.number;
        yankee = offset.bind(report)();
        offset = yankee.required;
        offset = offset.bind(yankee)();
        golf['width'] = offset;
        golf = options.bind(report)(golf);
        entity['preview_image'] = golf;
        golf = report.array;
        options = golf.bind(report)();
        golf = options.items;
        oscar = _closure1_slot4;
        oscar = oscar.bind(verify)(report);
        oscar = golf.bind(options)(oscar);
        entity['components'] = oscar;
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options['request'] = offset;
    offset = function(argFoo) { // Original name: response
        zulu = argFoo;
        mike = zulu.object;
        entity = {};
        tango = zulu.boolean;
        report = tango.bind(zulu)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['success'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options['response'] = offset;
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.RPCCommand;
    verify = options.SHARE_LINK;
    options = {};
    offset = function(argFoo) { // Original name: request
        report = argFoo;
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.joiReqObj;
        tango = report.object;
        entity = {};
        oscar = report.string;
        golf = oscar.bind(report)();
        oscar = golf.max;
        options = 64;
        oscar = oscar.bind(golf)(options);
        entity['referrer_id'] = oscar;
        oscar = report.string;
        golf = oscar.bind(report)();
        oscar = golf.max;
        oscar = oscar.bind(golf)(options);
        entity['custom_id'] = oscar;
        oscar = report.string;
        options = oscar.bind(report)();
        golf = options.max;
        oscar = 1000;
        golf = golf.bind(options)(oscar);
        oscar = golf.required;
        oscar = oscar.bind(golf)();
        entity['message'] = oscar;
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options['request'] = offset;
    offset = function(argFoo) { // Original name: response
        zulu = argFoo;
        mike = zulu.object;
        entity = {};
        tango = zulu.boolean;
        report = tango.bind(zulu)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['success'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options['response'] = offset;
    mike[verify] = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RPCCommand;
    options = tango.GET_RELATIONSHIPS;
    tango = {};
    tango['request'] = entity;
    verify = function(argFoo) { // Original name: response
        zulu = argFoo;
        mike = zulu.object;
        entity = {};
        tango = zulu.array;
        report = tango.bind(zulu)();
        tango = report.required;
        oscar = tango.bind(report)();
        report = oscar.items;
        golf = zulu.object;
        tango = {};
        options = zulu.number;
        verify = options.bind(zulu)();
        options = verify.required;
        options = options.bind(verify)();
        tango['type'] = options;
        options = _closure1_slot3;
        yankee = undefined;
        verify = options.bind(yankee)(zulu);
        options = verify.allow;
        romeo = null;
        options = options.bind(verify)(romeo);
        tango['user'] = options;
        verify = zulu.object;
        options = {};
        foxtrot = zulu.string;
        backup = foxtrot.bind(zulu)();
        foxtrot = backup.required;
        foxtrot = foxtrot.bind(backup)();
        options['status'] = foxtrot;
        offset = _closure1_slot2;
        yankee = offset.bind(yankee)(zulu);
        offset = yankee.allow;
        offset = offset.bind(yankee)(romeo);
        options['activity'] = offset;
        options = verify.bind(zulu)(options);
        tango['presence'] = options;
        tango = golf.bind(zulu)(tango);
        tango = report.bind(oscar)(tango);
        entity['relationships'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['response'] = verify;
    mike[options] = tango;
    tango = function(argFoo) { // Original name: Activity
        zulu = argFoo;
        mike = zulu.object;
        entity = {};
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.optional;
        tango = tango.bind(report)();
        entity['session_id'] = tango;
        tango = zulu.number;
        report = tango.bind(zulu)();
        tango = report.optional;
        tango = tango.bind(report)();
        entity['type'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['name'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.allow;
        oscar = null;
        report = tango.bind(report)(oscar);
        tango = report.optional;
        tango = tango.bind(report)();
        entity['url'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.optional;
        tango = tango.bind(report)();
        entity['application_id'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.optional;
        tango = tango.bind(report)();
        entity['state'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.optional;
        tango = tango.bind(report)();
        entity['details'] = tango;
        report = zulu.object;
        tango = {};
        golf = zulu.string;
        options = golf.bind(zulu)();
        golf = options.required;
        golf = golf.bind(options)();
        tango['name'] = golf;
        golf = zulu.string;
        options = golf.bind(zulu)();
        golf = options.allow;
        options = golf.bind(options)(oscar);
        golf = options.optional;
        golf = golf.bind(options)();
        tango['id'] = golf;
        golf = zulu.bool;
        options = golf.bind(zulu)();
        golf = options.optional;
        options = golf.bind(options)();
        golf = options.allow;
        golf = golf.bind(options)(oscar);
        tango['animated'] = golf;
        report = report.bind(zulu)(tango);
        tango = report.allow;
        report = tango.bind(report)(oscar);
        tango = report.optional;
        tango = tango.bind(report)();
        entity['emoji'] = tango;
        report = zulu.object;
        tango = {};
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        tango['large_image'] = oscar;
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        tango['large_text'] = oscar;
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        tango['small_image'] = oscar;
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        tango['small_text'] = oscar;
        report = report.bind(zulu)(tango);
        tango = report.optional;
        tango = tango.bind(report)();
        entity['assets'] = tango;
        report = zulu.object;
        tango = {};
        oscar = zulu.number;
        golf = oscar.bind(zulu)();
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        tango['start'] = oscar;
        oscar = zulu.number;
        golf = oscar.bind(zulu)();
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        tango['end'] = oscar;
        report = report.bind(zulu)(tango);
        tango = report.optional;
        tango = tango.bind(report)();
        entity['timestamps'] = tango;
        report = zulu.object;
        tango = {};
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        tango['id'] = oscar;
        oscar = zulu.array;
        options = oscar.bind(zulu)();
        golf = options.items;
        oscar = zulu.number;
        oscar = oscar.bind(zulu)();
        options = golf.bind(options)(oscar);
        golf = options.length;
        oscar = 2;
        golf = golf.bind(options)(oscar);
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        tango['size'] = oscar;
        oscar = zulu.number;
        golf = oscar.bind(zulu)();
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        tango['privacy'] = oscar;
        report = report.bind(zulu)(tango);
        tango = report.optional;
        tango = tango.bind(report)();
        entity['party'] = tango;
        report = zulu.object;
        tango = {};
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        tango['match'] = oscar;
        oscar = zulu.string;
        golf = oscar.bind(zulu)();
        oscar = golf.optional;
        oscar = oscar.bind(golf)();
        tango['join'] = oscar;
        report = report.bind(zulu)(tango);
        tango = report.optional;
        tango = tango.bind(report)();
        entity['secrets'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.optional;
        tango = tango.bind(report)();
        entity['sync_id'] = tango;
        tango = zulu.number;
        report = tango.bind(zulu)();
        tango = report.optional;
        tango = tango.bind(report)();
        entity['created_at'] = tango;
        tango = zulu.bool;
        report = tango.bind(zulu)();
        tango = report.optional;
        tango = tango.bind(report)();
        entity['instance'] = tango;
        tango = zulu.number;
        report = tango.bind(zulu)();
        tango = report.optional;
        tango = tango.bind(report)();
        entity['flags'] = tango;
        tango = zulu.object;
        report = tango.bind(zulu)();
        tango = report.optional;
        tango = tango.bind(report)();
        entity['metadata'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.optional;
        tango = tango.bind(report)();
        entity['platform'] = tango;
        tango = zulu.array;
        oscar = tango.bind(zulu)();
        report = oscar.items;
        tango = zulu.string;
        tango = tango.bind(zulu)();
        report = report.bind(oscar)(tango);
        tango = report.optional;
        tango = tango.bind(report)();
        entity['supported_platforms'] = tango;
        tango = zulu.array;
        oscar = tango.bind(zulu)();
        report = oscar.items;
        tango = zulu.string;
        tango = tango.bind(zulu)();
        report = report.bind(oscar)(tango);
        tango = report.optional;
        tango = tango.bind(report)();
        entity['buttons'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.optional;
        tango = tango.bind(report)();
        entity['hangStatus'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot2 = tango;
    tango = function(argFoo) { // Original name: User
        zulu = argFoo;
        mike = zulu.object;
        entity = {};
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.required;
        oscar = tango.bind(report)();
        report = oscar.description;
        tango = 'User ID';
        tango = report.bind(oscar)(tango);
        entity['id'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['username'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.allow;
        oscar = null;
        golf = tango.bind(report)(oscar);
        report = golf.description;
        tango = 'Global Discord name. Not unique.';
        tango = report.bind(golf)(tango);
        entity['global_name'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.required;
        golf = tango.bind(report)();
        report = golf.description;
        tango = 'Global name discriminator. Will be 0 if a unique username';
        tango = report.bind(golf)(tango);
        entity['discriminator'] = tango;
        tango = zulu.string;
        report = tango.bind(zulu)();
        tango = report.allow;
        golf = tango.bind(report)(oscar);
        report = golf.description;
        tango = 'User Avatar ID';
        tango = report.bind(golf)(tango);
        entity['avatar'] = tango;
        tango = zulu.number;
        report = tango.bind(zulu)();
        tango = report.required;
        golf = tango.bind(report)();
        report = golf.description;
        tango = 'Public user flags';
        tango = report.bind(golf)(tango);
        entity['flags'] = tango;
        tango = zulu.bool;
        report = tango.bind(zulu)();
        tango = report.required;
        golf = tango.bind(report)();
        report = golf.description;
        tango = 'If a bot user.';
        tango = report.bind(golf)(tango);
        entity['bot'] = tango;
        report = zulu.object;
        tango = {};
        golf = zulu.string;
        options = golf.bind(zulu)();
        golf = options.required;
        golf = golf.bind(options)();
        tango['asset'] = golf;
        golf = zulu.string;
        golf = golf.bind(zulu)();
        tango['skuId'] = golf;
        golf = zulu.number;
        golf = golf.bind(zulu)();
        tango['expiresAt'] = golf;
        report = report.bind(zulu)(tango);
        tango = report.allow;
        golf = tango.bind(report)(oscar);
        report = golf.description;
        tango = 'Details about avatar decoration';
        tango = report.bind(golf)(tango);
        entity['avatar_decoration_data'] = tango;
        tango = zulu.number;
        report = tango.bind(zulu)();
        tango = report.allow;
        oscar = tango.bind(report)(oscar);
        report = oscar.description;
        tango = 'Nitro premium type';
        tango = report.bind(oscar)(tango);
        entity['premium_type'] = tango;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.description;
        entity = 'Discord User';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot3 = tango;
    tango = function(argFoo) { // Original name: ActionRowComponent
        zulu = argFoo;
        mike = zulu.object;
        entity = {};
        tango = zulu.number;
        oscar = tango.bind(zulu)();
        report = oscar.valid;
        tango = 1;
        report = report.bind(oscar)(tango);
        tango = report.required;
        tango = tango.bind(report)();
        entity['type'] = tango;
        tango = zulu.array;
        oscar = tango.bind(zulu)();
        report = oscar.max;
        tango = 5;
        oscar = report.bind(oscar)(tango);
        report = oscar.items;
        golf = _closure1_slot5;
        tango = undefined;
        tango = golf.bind(tango)(zulu);
        tango = report.bind(oscar)(tango);
        entity['components'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot4 = tango;
    tango = function(argFoo) { // Original name: ButtonComponent
        zulu = argFoo;
        mike = zulu.object;
        entity = {};
        tango = zulu.number;
        oscar = tango.bind(zulu)();
        report = oscar.valid;
        tango = 2;
        report = report.bind(oscar)(tango);
        tango = report.required;
        tango = tango.bind(report)();
        entity['type'] = tango;
        tango = zulu.number;
        oscar = tango.bind(zulu)();
        report = oscar.min;
        tango = 1;
        oscar = report.bind(oscar)(tango);
        report = oscar.max;
        tango = 5;
        report = report.bind(oscar)(tango);
        tango = report.required;
        tango = tango.bind(report)();
        entity['style'] = tango;
        tango = zulu.string;
        oscar = tango.bind(zulu)();
        report = oscar.max;
        tango = 80;
        oscar = report.bind(oscar)(tango);
        report = oscar.description;
        tango = 'Text that appears on the button';
        tango = report.bind(oscar)(tango);
        entity['label'] = tango;
        tango = zulu.string;
        oscar = tango.bind(zulu)();
        report = oscar.max;
        tango = 100;
        oscar = report.bind(oscar)(tango);
        report = oscar.description;
        tango = 'Developer-defined identifier for the button; max 100 characters';
        tango = report.bind(oscar)(tango);
        entity['custom_id'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/rpc-schema/definitions.tsx';
    tango = report.bind(oscar)(tango);
    zulu['RPCCommandSchemas'] = mike;
    return entity;
})();