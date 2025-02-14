// app/modules/forwarding/ForwardActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = {};
    golf = function(argFoo, argBar, argBaz) { // Original name: sendForward
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun86020: for(var _fun86020_ip = 0; ; ) switch(_fun86020_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun86020_ip = 635; continue _fun86020 }
 10:
                    report = _closure1_slot4;
                    zulu = report.getChannel;
                    mike = _closure2_slot1;
                    yankee = zulu.bind(report)(mike);
                    zulu = report.getChannel;
                    mike = _closure2_slot0;
                    mike = mike.channel_id;
                    zulu = zulu.bind(report)(mike);
                    mike = _closure2_slot2;
                    verify = null;
                    if(!(verify != mike)) { _fun86020_ip = 76; continue _fun86020 }
 63:
                    mike = _closure2_slot2;
                    mike = mike.isICYMIGameContentForwarding;
                    if(mike) { _fun86020_ip = 92; continue _fun86020 }
 76:
                    report = verify == zulu;
                    mike = undefined;
                    if(report) { _fun86020_ip = 90; continue _fun86020 }
 85:
                    mike = zulu.guild_id;
 90:
                    _fun86020_ip = 120; continue _fun86020;
 92:
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 3;
                    golf = golf[report];
                    report = undefined;
                    report = options.bind(report)(golf);
                    mike = report.GAME_CONTENT_GUILD_ID;
 120:
                    if(!(verify == zulu)) { _fun86020_ip = 131; continue _fun86020 }
 124:
                    if(!(verify != mike)) { _fun86020_ip = 599; continue _fun86020 }
 131:
                    if(!(verify != yankee)) { _fun86020_ip = 563; continue _fun86020 }
 138:
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    romeo = 4;
                    report = golf[romeo];
                    zulu = undefined;
                    offset = options.bind(zulu)(report);
                    options = offset.parse;
                    report = '';
                    backup = options.bind(offset)(yankee, report);
                    options = {};
                    options['guild_id'] = mike;
                    mike = _closure2_slot0;
                    report = mike.channel_id;
                    options['channel_id'] = report;
                    mike = mike.id;
                    options['message_id'] = mike;
                    report = _closure1_slot0;
                    mike = 5;
                    mike = golf[mike];
                    mike = report.bind(zulu)(mike);
                    mike = mike.MessageReferenceTypes;
                    mike = mike.FORWARD;
                    options['type'] = mike;
                    mike = _closure2_slot2;
                    report = verify == mike;
                    mike = undefined;
                    if(report) { _fun86020_ip = 260; continue _fun86020 }
 250:
                    report = _closure2_slot2;
                    mike = report.onlyAttachmentIds;
 260:
                    if(!(verify == mike)) { _fun86020_ip = 296; continue _fun86020 }
 264:
                    mike = _closure2_slot2;
                    report = verify == mike;
                    mike = undefined;
                    if(report) { _fun86020_ip = 287; continue _fun86020 }
 277:
                    report = _closure2_slot2;
                    mike = report.onlyEmbedIndices;
 287:
                    report = verify != mike;
                    mike = undefined;
                    if(!report) { _fun86020_ip = 329; continue _fun86020 }
 296:
                    report = {};
                    golf = _closure2_slot2;
                    offset = golf.onlyAttachmentIds;
                    report['attachment_ids'] = offset;
                    golf = golf.onlyEmbedIndices;
                    report['embed_indices'] = golf;
                    mike = report;
 329:
                    options['forward_only'] = mike;
                    golf = _closure1_slot1;
                    mike = _closure1_slot2;
                    report = 6;
                    mike = mike[report];
                    foxtrot = golf.bind(zulu)(mike);
                    offset = foxtrot.sendMessage;
                    echo = yankee.id;
                    mike = {};
                    mike['messageReference'] = options;
                    options = false;
                    mike['eagerDispatch'] = options;
                    update = foxtrot;
                    result = backup;
                    output = false;
                    sizing = mike;
                    mike = update[offset](echo, result, output, sizing, kilo);
                    SaveGenerator(address=400);
 398:
                    return mike;
 400:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golf) { _fun86020_ip = 560; continue _fun86020 }
 409:
                    golf = _closure2_slot2;
                    offset = verify == golf;
                    golf = undefined;
                    if(offset) { _fun86020_ip = 432; continue _fun86020 }
 422:
                    offset = _closure2_slot2;
                    golf = offset.withMessage;
 432:
                    golf = verify == golf;
                    if(golf) { _fun86020_ip = 475; continue _fun86020 }
 439:
                    offset = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    verify = 7;
                    verify = foxtrot[verify];
                    foxtrot = offset.bind(zulu)(verify);
                    offset = foxtrot.isRatelimitedInChannel;
                    verify = _closure1_slot5;
                    golf = offset.bind(foxtrot)(yankee, verify);
 475:
                    if(golf) { _fun86020_ip = 557; continue _fun86020 }
 478:
                    offset = _closure1_slot1;
                    verify = _closure1_slot2;
                    report = verify[report];
                    golf = offset.bind(zulu)(report);
                    oscar = golf.sendMessage;
                    report = yankee.id;
                    verify = verify[romeo];
                    offset = offset.bind(zulu)(verify);
                    verify = offset.parse;
                    tango = _closure2_slot2;
                    tango = tango.withMessage;
                    tango = verify.bind(offset)(yankee, tango);
                    tango = oscar.bind(golf)(report, tango, options);
                    SaveGenerator(address=548);
 546:
                    return tango;
 548:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(!report) { _fun86020_ip = 557; continue _fun86020 }
 554:
                    return tango;
 557:
                    return zulu;
 560:
                    return mike;
 563:
                    mike = global;
                    tango = mike.Error;
                    mike = tango.prototype;
                    zulu = Object.create(mike, {constructor: {value: tango}});
                    echo = 'Unable to find destination channel for message';
                    update = zulu;
                    mike = new update[tango](echo, result);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 599:
                    mike = global;
                    tango = mike.Error;
                    mike = tango.prototype;
                    zulu = Object.create(mike, {constructor: {value: tango}});
                    echo = 'Unable to find original channel for message';
                    update = zulu;
                    mike = new update[tango](echo, result);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 635:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['sendForward'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: sendForwards
        report = argBar;
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBaz;
        var _closure2_slot1 = mike;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 8;
        mike = zulu[mike];
        zulu = undefined;
        mike = tango.bind(zulu)(mike);
        tango = report.map;
        entity = function(argFoo) {
            report = _closure1_slot6;
            tango = report.sendForward;
            zulu = _closure2_slot0;
            mike = _closure2_slot1;
            entity = argFoo;
            entity = tango.bind(report)(zulu, entity, mike);
            return entity;
        };
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['sendForwards'] = golf;
    var _closure1_slot6 = mike;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forwarding/ForwardActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();