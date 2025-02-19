// app/modules/rpc/server/commands/invites.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    foxtra = michal.RPC_SCOPE_CONFIG;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.RPCCommands;
    michal = michal.RPCErrors;
    var _closure1_slot5 = michal;
    michal = {};
    golfie = tangon.INVITE_USER_EMBEDDED;
    option = 5;
    option = oscard[option];
    offset = report.bind(entity)(option);
    verify = offset.createRPCCommand;
    option = tangon.INVITE_USER_EMBEDDED;
    tangon = {};
    romeon = {};
    backup = foxtra.ANY;
    foxtra = 6;
    foxtra = oscard[foxtra];
    foxtra = report.bind(entity)(foxtra);
    foxtra = foxtra.OAuth2Scopes;
    kiloes = foxtra.RELATIONSHIPS_READ;
    foxtra = new Array(1);
    foxtra[0] = kiloes;
    romeon[backup] = foxtra;
    tangon['scope'] = romeon;
    yankee = function(argFoo) { // Original name: handler
        michal = argFoo;
        zuuluu = michal.socket;
        var _closure2_slot0 = zuuluu;
        michal = michal.args;
        zuuluu = michal.user_id;
        var _closure2_slot1 = zuuluu;
        michal = michal.content;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot2;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 863; continue _fun00001 }
 10:
                    report = undefined;
                    option = undefined;
                    verify = undefined;
                    michal = _closure2_slot0;
                    michal = michal.application;
                    michal = michal.id;
                    option = michal;
                    tangon = null;
                    if(!(tangon != michal)) { _fun00002_ip = 786; continue _fun00001 }
 45:
                    oscard = _closure1_slot3;
                    zuuluu = oscard.getConnectedActivityLocation;
                    zuuluu = zuuluu.bind(oscard)();
                    if(!(tangon != zuuluu)) { _fun00002_ip = 712; continue _fun00001 }
 69:
                    offset = zuuluu.kind;
                    yankee = _closure1_slot0;
                    oscard = _closure1_slot1;
                    romeon = 8;
                    oscard = oscard[romeon];
                    oscard = yankee.bind(report)(oscard);
                    oscard = oscard.ActivityLocationKinds;
                    oscard = oscard.GUILD_CHANNEL;
                    if(!(oscard !== offset)) { _fun00002_ip = 512; continue _fun00001 }
 113:
                    yankee = _closure1_slot0;
                    oscard = _closure1_slot1;
                    oscard = oscard[romeon];
                    oscard = yankee.bind(report)(oscard);
                    oscard = oscard.ActivityLocationKinds;
                    oscard = oscard.GUILD_CHANNEL_MESSAGE;
                    if(!(oscard !== offset)) { _fun00002_ip = 512; continue _fun00001 }
 149:
                    yankee = _closure1_slot0;
                    oscard = _closure1_slot1;
                    oscard = oscard[romeon];
                    oscard = yankee.bind(report)(oscard);
                    oscard = oscard.ActivityLocationKinds;
                    oscard = oscard.PRIVATE_CHANNEL;
                    if(!(oscard !== offset)) { _fun00002_ip = 289; continue _fun00001 }
 182:
                    yankee = _closure1_slot0;
                    oscard = _closure1_slot1;
                    oscard = oscard[romeon];
                    oscard = yankee.bind(report)(oscard);
                    oscard = oscard.ActivityLocationKinds;
                    oscard = oscard.PRIVATE_CHANNEL_MESSAGE;
                    if(!(oscard !== offset)) { _fun00002_ip = 289; continue _fun00001 }
 215:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot1;
                    oscard = 7;
                    oscard = yankee[oscard];
                    oscard = offset.bind(report)(oscard);
                    romeon = oscard.RPCError;
                    yankee = {};
                    oscard = _closure1_slot5;
                    oscard = oscard.NO_ELIGIBLE_ACTIVITY;
                    yankee['errorCode'] = oscard;
                    oscard = romeon.prototype;
                    offset = Object.create(oscard, {constructor: {value: romeon}});
                    foxtra = 'Unsupported activity location';
                    kiloes = offset;
                    backup = yankee;
                    oscard = new kiloes[romeon](backup, foxtra, romeon);
                    oscard = oscard instanceof Object ? oscard : offset;
                    throw oscard;
 289:
                    offset = _closure1_slot4;
                    oscard = offset.getChannel;
                    zuuluu = zuuluu.channel_id;
                    zuuluu = oscard.bind(offset)(zuuluu);
                    if(!(tangon != zuuluu)) { _fun00002_ip = 438; continue _fun00001 }
 315:
                    oscard = zuuluu.type;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot1;
                    tangon = 10;
                    tangon = yankee[tangon];
                    tangon = offset.bind(report)(tangon);
                    tangon = tangon.ChannelTypes;
                    tangon = tangon.DM;
                    if(!(oscard !== tangon)) { _fun00002_ip = 364; continue _fun00001 }
 356:
                    verify = zuuluu;
                    _fun00002_ip = 547; continue _fun00001;
 364:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot1;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    offset = zuuluu.RPCError;
                    oscard = {};
                    zuuluu = _closure1_slot5;
                    zuuluu = zuuluu.INVALID_CHANNEL;
                    oscard['errorCode'] = zuuluu;
                    zuuluu = offset.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: offset}});
                    foxtra = 'Cannot send invite to a DM';
                    kiloes = tangon;
                    backup = oscard;
                    zuuluu = new kiloes[offset](backup, foxtra, romeon);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 438:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot1;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    offset = zuuluu.RPCError;
                    oscard = {};
                    zuuluu = _closure1_slot5;
                    zuuluu = zuuluu.INVALID_CHANNEL;
                    oscard['errorCode'] = zuuluu;
                    zuuluu = offset.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: offset}});
                    foxtra = 'Invalid channel';
                    kiloes = tangon;
                    backup = oscard;
                    zuuluu = new kiloes[offset](backup, foxtra, romeon);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 512:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot1;
                    zuuluu = 9;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.validateOpenInviteDialog;
                    zuuluu = zuuluu.bind(tangon)();
                    verify = zuuluu.channel;
 547: // try_start_0
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot1;
                    zuuluu = 11;
                    zuuluu = oscard[zuuluu];
                    oscard = tangon.bind(report)(zuuluu);
                    tangon = oscard.sendEmbeddedActivityInviteUser;
                    zuuluu = {};
                    verify = verify.id;
                    zuuluu['channelId'] = verify;
                    zuuluu['applicationId'] = option;
                    option = _closure2_slot1;
                    zuuluu['userId'] = option;
                    golfie = _closure2_slot2;
                    zuuluu['prefixedContent'] = golfie;
                    golfie = 'RPC_ACTIVITY_INVITE_USER';
                    zuuluu['location'] = golfie;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    SaveGenerator(address=624);
 622:
                    return zuuluu;
 624:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 633; continue _fun00001 }
 630: // try_end0
                    return report;
 633:
                    return zuuluu;
 636: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot1;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    golfie = zuuluu.RPCError;
                    oscard = {};
                    zuuluu = _closure1_slot5;
                    zuuluu = zuuluu.UNKNOWN_ERROR;
                    oscard['errorCode'] = zuuluu;
                    zuuluu = golfie.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: golfie}});
                    foxtra = 'Failed to invite user';
                    kiloes = tangon;
                    backup = oscard;
                    zuuluu = new kiloes[golfie](backup, foxtra, romeon);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 712:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot1;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    oscard = zuuluu.RPCError;
                    tangon = {};
                    michal = _closure1_slot5;
                    michal = michal.NO_ELIGIBLE_ACTIVITY;
                    tangon['errorCode'] = michal;
                    michal = oscard.prototype;
                    zuuluu = Object.create(michal, {constructor: {value: oscard}});
                    foxtra = 'No eligible activity for application. Ensure an activity was set using setActivity.';
                    kiloes = zuuluu;
                    backup = tangon;
                    michal = new kiloes[oscard](backup, foxtra, romeon);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 786:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot1;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    report = zuuluu.RPCError;
                    tangon = {};
                    michal = _closure1_slot5;
                    michal = michal.INVALID_COMMAND;
                    tangon['errorCode'] = michal;
                    michal = report.prototype;
                    zuuluu = Object.create(michal, {constructor: {value: report}});
                    foxtra = 'No application.';
                    kiloes = zuuluu;
                    backup = tangon;
                    michal = new kiloes[report](backup, foxtra, romeon);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 863:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['handler'] = yankee;
    tangon = verify.bind(offset)(option, tangon);
    michal[golfie] = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/invites.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();