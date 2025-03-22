// app/modules/application_commands/executeCommand.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot19;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot19;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _executeCommand
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 6291; continue _fun00007 }
 15:
                    golfie = michal.command;
                    variable69 = michal.optionValues;
                    var _closure4_slot0 = variable69;
                    oscard = michal.context;
                    echoed = michal.commandTargetId;
                    output = michal.maxSizeCallback;
                    backup = michal.commandOrigin;
                    foxtra = undefined;
                    if(!(backup === foxtra)) { _fun00008_ip = 95; continue _fun00007 }
 60:
                    report = _closure1_slot0;
                    option = _closure1_slot3;
                    tangon = 9;
                    tangon = option[tangon];
                    tangon = report.bind(foxtra)(tangon);
                    tangon = tangon.CommandOrigin;
                    backup = tangon.CHAT;
 95:
                    kiloes = michal.sectionName;
                    tangon = michal.interactionLifecycleOptionsFactory;
                    if(!(tangon === foxtra)) { _fun00008_ip = 118; continue _fun00007 }
 111:
                    tangon = _closure1_slot22;
 118:
                    yankee = michal.source;
                    option = michal.clientSupportsContextlessActivityLaunch;
                    SaveGenerator(address=133);
 131:
                    return foxtra;
 133:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 6288; continue _fun00007 }
 142:
                    zuuluu = oscard.channel;
                    offset = null;
                    if(!(offset != zuuluu)) { _fun00008_ip = 6176; continue _fun00007 }
 156:
                    verify = _closure1_slot10;
                    report = verify.getSource;
                    zuuluu = oscard.channel;
                    zuuluu = zuuluu.id;
                    zuuluu = report.bind(verify)(zuuluu);
                    if(!(offset != zuuluu)) { _fun00008_ip = 191; continue _fun00007 }
 188:
                    yankee = zuuluu;
 191:
                    verify = _closure1_slot10;
                    report = verify.getCommandOrigin;
                    zuuluu = oscard.channel;
                    zuuluu = zuuluu.id;
                    zuuluu = report.bind(verify)(zuuluu);
                    if(!(offset != zuuluu)) { _fun00008_ip = 225; continue _fun00007 }
 222:
                    backup = zuuluu;
 225:
                    zuuluu = oscard.autocomplete;
                    if(!(offset == zuuluu)) { _fun00008_ip = 289; continue _fun00007 }
 235:
                    report = _closure1_slot1;
                    verify = _closure1_slot3;
                    zuuluu = 10;
                    zuuluu = verify[zuuluu];
                    verify = report.bind(foxtra)(zuuluu);
                    report = verify.dispatch;
                    zuuluu = {};
                    result = 'APPLICATION_COMMAND_USED';
                    zuuluu['type'] = result;
                    zuuluu['context'] = oscard;
                    zuuluu['command'] = golfie;
                    zuuluu['commandOrigin'] = backup;
                    zuuluu = report.bind(verify)(zuuluu);
 289:
                    report = _closure1_slot1;
                    verify = _closure1_slot3;
                    zuuluu = 11;
                    zuuluu = verify[zuuluu];
                    verify = report.bind(foxtra)(zuuluu);
                    report = verify.unarchiveThreadIfNecessary;
                    zuuluu = oscard.channel;
                    zuuluu = zuuluu.id;
                    zuuluu = report.bind(verify)(zuuluu);
                    SaveGenerator(address=334);
 332:
                    return zuuluu;
 334:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 6285; continue _fun00007 }
 343:
                    sequen = new Array(0);
                    result = new Array(0);
                    verify = _closure1_slot0;
                    report = _closure1_slot3;
                    variable68 = 12;
                    report = report[variable68];
                    verify = verify.bind(foxtra)(report);
                    report = verify.getCommandAttachmentDraftType;
                    update = report.bind(verify)(backup);
                    report = golfie.options;
                    if(!(offset != report)) { _fun00008_ip = 5613; continue _fun00007 }
 394:
                    verify = _closure1_slot18;
                    report = golfie.options;
                    variable67 = verify.bind(foxtra)(report);
                    verify = variable67.bind(foxtra)();
                    report = verify.done;
                    variable66 = global;
                    variable65 = 'Unexpected value for option "';
                    variable64 = '"';
                    variable63 = 16;
                    variable62 = '';
                    variable61 = 'Failed to resolve ';
                    variable60 = 'channelMention';
                    variable59 = 17;
                    variable58 = 'text';
                    variable57 = 'roleMention';
                    variable56 = false;
                    variable55 = '@everyone';
                    variable54 = 'textMention';
                    variable53 = 'userMention';
                    variable52 = 15;
                    variable51 = 14;
                    variable50 = 13;
                    variable49 = 0;
                    variable48 = 'Option "';
                    variable47 = '" expects a single option type';
                    variable46 = 1;
                    variable45 = '" expects a value';
                    variable44 = verify;
                    variable43 = undefined;
                    variable42 = undefined;
                    variable41 = undefined;
                    variable40 = undefined;
                    variable39 = undefined;
                    variable38 = undefined;
                    variable37 = undefined;
                    variable36 = undefined;
                    quebec = undefined;
                    equals = undefined;
                    whisks = undefined;
                    limora = undefined;
                    sierra = undefined;
                    status = undefined;
                    target = undefined;
                    papara = undefined;
                    cntext = undefined;
                    record = undefined;
                    config = undefined;
                    vacuum = undefined;
                    ctrled = undefined;
                    source = undefined;
                    verify = undefined;
                    if(report) { _fun00008_ip = 5613; continue _fun00007 }
 564:
                    r112 = variable44.value;
                    variable93 = r112.type;
                    variable70 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable70.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.SUB_COMMAND;
                    variable92 = variable43;
                    variable91 = variable42;
                    variable90 = variable41;
                    variable89 = variable40;
                    variable88 = variable39;
                    variable87 = variable38;
                    variable86 = variable37;
                    variable85 = variable36;
                    variable84 = quebec;
                    variable83 = equals;
                    variable82 = whisks;
                    variable81 = limora;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papara;
                    variable76 = cntext;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = verify;
                    if(!(variable93 !== report)) { _fun00008_ip = 5526; continue _fun00007 }
 679:
                    variable93 = r112.type;
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.SUB_COMMAND_GROUP;
                    variable92 = variable43;
                    variable91 = variable42;
                    variable90 = variable41;
                    variable89 = variable40;
                    variable88 = variable39;
                    variable87 = variable38;
                    variable86 = variable37;
                    variable85 = variable36;
                    variable84 = quebec;
                    variable83 = equals;
                    variable82 = whisks;
                    variable81 = limora;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papara;
                    variable76 = cntext;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = verify;
                    if(!(variable93 !== report)) { _fun00008_ip = 5526; continue _fun00007 }
 789:
                    report = r112.name;
                    report = report in variable69;
                    variable92 = variable43;
                    variable91 = variable42;
                    variable90 = variable41;
                    variable89 = variable40;
                    variable88 = variable39;
                    variable87 = variable38;
                    variable86 = variable37;
                    variable85 = variable36;
                    variable84 = quebec;
                    variable83 = equals;
                    variable82 = whisks;
                    variable81 = limora;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papara;
                    variable76 = cntext;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = verify;
                    if(!report) { _fun00008_ip = 5526; continue _fun00007 }
 873:
                    r109 = oscard.autocomplete;
                    report = offset == r109;
                    variable93 = undefined;
                    if(report) { _fun00008_ip = 893; continue _fun00007 }
 888:
                    variable93 = r109.name;
 893:
                    report = r112.name;
                    r107 = variable93 === report;
                    if(r107) { _fun00008_ip = 907; continue _fun00007 }
 905:
                    r107 = undefined;
 907:
                    variable93 = r112.type;
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.STRING;
                    if(!(variable93 === report)) { _fun00008_ip = 1417; continue _fun00007 }
 948:
                    variable93 = _closure1_slot2;
                    report = _closure1_slot3;
                    report = report[variable51];
                    variable94 = variable93.bind(foxtra)(report);
                    variable93 = variable94.getOptionalString;
                    report = r112.name;
                    variable93 = variable93.bind(variable94)(variable69, report);
                    report = offset == variable93;
                    variable94 = undefined;
                    if(report) { _fun00008_ip = 1001; continue _fun00007 }
 991:
                    report = variable93.trim;
                    variable94 = report.bind(variable93)();
 1001:
                    variable95 = offset != variable94;
                    report = variable62;
                    if(!variable95) { _fun00008_ip = 1014; continue _fun00007 }
 1011:
                    report = variable94;
 1014:
                    variable95 = r112.choices;
                    if(!(offset == variable95)) { _fun00008_ip = 1111; continue _fun00007 }
 1024:
                    variable96 = r112.autocomplete;
                    variable95 = undefined;
                    if(!variable96) { _fun00008_ip = 1146; continue _fun00007 }
 1035:
                    variable96 = oscard.autocomplete;
                    if(!(offset != variable96)) { _fun00008_ip = 1048; continue _fun00007 }
 1045:
                    if(r107) { _fun00008_ip = 1095; continue _fun00007 }
 1048:
                    variable97 = _closure1_slot0;
                    variable96 = _closure1_slot3;
                    variable96 = variable96[variable52];
                    variable99 = variable97.bind(foxtra)(variable96);
                    variable98 = variable99.findAutocompleteChoiceStringValue;
                    variable96 = oscard.channel;
                    variable97 = variable96.id;
                    variable96 = r112.name;
                    variable96 = variable98.bind(variable99)(variable97, variable96, report);
                    _fun00008_ip = 1106; continue _fun00007;
 1095:
                    variable97 = oscard.autocomplete;
                    variable96 = variable97.query;
 1106:
                    variable95 = variable96;
                    _fun00008_ip = 1146; continue _fun00007;
 1111:
                    variable97 = _closure1_slot0;
                    variable96 = _closure1_slot3;
                    variable96 = variable96[variable52];
                    variable98 = variable97.bind(foxtra)(variable96);
                    variable97 = variable98.findChoiceStringValue;
                    variable96 = r112.choices;
                    variable95 = variable97.bind(variable98)(variable96, report);
 1146:
                    if(!(offset == variable95)) { _fun00008_ip = 1153; continue _fun00007 }
 1150:
                    variable95 = report;
 1153:
                    if(!(variable62 === variable95)) { _fun00008_ip = 1242; continue _fun00007 }
 1157:
                    variable96 = oscard.autocomplete;
                    if(!(offset != variable96)) { _fun00008_ip = 1242; continue _fun00007 }
 1167:
                    variable92 = r109;
                    variable91 = variable42;
                    variable90 = r107;
                    variable89 = variable95;
                    variable88 = variable39;
                    variable87 = variable38;
                    variable86 = variable37;
                    variable85 = variable36;
                    variable84 = quebec;
                    variable83 = equals;
                    variable82 = whisks;
                    variable81 = limora;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papara;
                    variable76 = cntext;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = variable94;
                    variable71 = variable93;
                    variable70 = report;
                    if(!r107) { _fun00008_ip = 5526; continue _fun00007 }
 1242:
                    variable97 = _closure1_slot1;
                    variable96 = _closure1_slot3;
                    variable96 = variable96[variable63];
                    variable98 = variable97.bind(foxtra)(variable96);
                    variable96 = oscard.autocomplete;
                    variable97 = offset != variable96;
                    if(variable97) { _fun00008_ip = 1276; continue _fun00007 }
 1272:
                    variable97 = offset != variable95;
 1276:
                    variable99 = r112.name;
                    variable96 = variable66.HermesInternal;
                    variable96 = variable96.concat;
                    variable96 = variable96.bind(variable48)(variable99, variable45);
                    variable96 = variable98.bind(foxtra)(variable97, variable96);
                    variable97 = sequen.push;
                    variable96 = {};
                    variable98 = r112.type;
                    variable96['type'] = variable98;
                    variable98 = r112.name;
                    variable96['name'] = variable98;
                    variable96['value'] = variable95;
                    variable96['focused'] = r107;
                    variable96 = variable97.bind(sequen)(variable96);
                    variable92 = r109;
                    variable91 = variable42;
                    variable90 = r107;
                    variable89 = variable95;
                    variable88 = variable39;
                    variable87 = variable38;
                    variable86 = variable37;
                    variable85 = variable36;
                    variable84 = quebec;
                    variable83 = equals;
                    variable82 = whisks;
                    variable81 = limora;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papara;
                    variable76 = cntext;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = variable94;
                    variable71 = variable93;
                    variable70 = report;
                    _fun00008_ip = 5526; continue _fun00007;
 1417:
                    variable93 = r112.type;
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.ATTACHMENT;
                    if(!(variable93 === report)) { _fun00008_ip = 1779; continue _fun00007 }
 1458:
                    report = oscard.autocomplete;
                    report = offset != report;
                    variable92 = r109;
                    variable91 = variable42;
                    variable90 = r107;
                    variable89 = undefined;
                    variable88 = variable39;
                    variable87 = variable38;
                    variable86 = variable37;
                    variable85 = variable36;
                    variable84 = quebec;
                    variable83 = equals;
                    variable82 = whisks;
                    variable81 = limora;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papara;
                    variable76 = cntext;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = verify;
                    if(report) { _fun00008_ip = 5526; continue _fun00007 }
 1542:
                    variable95 = _closure1_slot8;
                    variable94 = variable95.getUpload;
                    report = oscard.channel;
                    variable93 = report.id;
                    report = r112.name;
                    report = variable94.bind(variable95)(variable93, report, update);
                    variable93 = offset == report;
                    variable92 = r109;
                    variable91 = variable42;
                    variable90 = r107;
                    variable89 = undefined;
                    variable88 = variable39;
                    variable87 = variable38;
                    variable86 = variable37;
                    variable85 = variable36;
                    variable84 = quebec;
                    variable83 = equals;
                    variable82 = whisks;
                    variable81 = limora;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papara;
                    variable76 = cntext;
                    variable75 = record;
                    variable74 = config;
                    variable73 = report;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = verify;
                    if(variable93) { _fun00008_ip = 5526; continue _fun00007 }
 1652:
                    variable95 = result.length;
                    variable93 = result.push;
                    variable93 = variable93.bind(result)(report);
                    variable94 = sequen.push;
                    variable93 = {};
                    variable96 = r112.type;
                    variable93['type'] = variable96;
                    variable96 = r112.name;
                    variable93['name'] = variable96;
                    variable93['value'] = variable95;
                    variable93['focused'] = r107;
                    variable93 = variable94.bind(sequen)(variable93);
                    variable92 = r109;
                    variable91 = variable42;
                    variable90 = r107;
                    variable89 = undefined;
                    variable88 = variable39;
                    variable87 = variable38;
                    variable86 = variable37;
                    variable85 = variable36;
                    variable84 = quebec;
                    variable83 = equals;
                    variable82 = whisks;
                    variable81 = limora;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papara;
                    variable76 = cntext;
                    variable75 = record;
                    variable74 = config;
                    variable73 = report;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = verify;
                    _fun00008_ip = 5526; continue _fun00007;
 1779:
                    variable94 = _closure1_slot2;
                    report = _closure1_slot3;
                    variable93 = report[variable51];
                    variable95 = variable94.bind(foxtra)(variable93);
                    variable94 = variable95.filterEmpty;
                    variable93 = r112.name;
                    variable93 = variable69[variable93];
                    r105 = variable94.bind(variable95)(variable93);
                    variable93 = _closure1_slot1;
                    report = report[variable63];
                    variable94 = variable93.bind(foxtra)(report);
                    report = oscard.autocomplete;
                    variable93 = offset != report;
                    if(variable93) { _fun00008_ip = 1851; continue _fun00007 }
 1842:
                    report = r105.length;
                    variable93 = variable46 === report;
 1851:
                    variable95 = r112.name;
                    report = variable66.HermesInternal;
                    report = report.concat;
                    report = report.bind(variable48)(variable95, variable47);
                    report = variable94.bind(foxtra)(variable93, report);
                    report = r105[variable49];
                    if(!(offset == report)) { _fun00008_ip = 1961; continue _fun00007 }
 1887:
                    variable92 = r109;
                    variable91 = variable42;
                    variable90 = r107;
                    variable89 = undefined;
                    variable88 = r105;
                    variable87 = variable38;
                    variable86 = variable37;
                    variable85 = variable36;
                    variable84 = quebec;
                    variable83 = equals;
                    variable82 = whisks;
                    variable81 = limora;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papara;
                    variable76 = cntext;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = verify;
                    if(!r107) { _fun00008_ip = 5526; continue _fun00007 }
 1961:
                    r108 = r105[variable49];
                    r104 = r108;
                    if(!(offset == r108)) { _fun00008_ip = 1986; continue _fun00007 }
 1972:
                    r104 = {'type': 'text', 'text': ''};
 1986:
                    variable93 = r112.type;
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.CHANNEL;
                    if(!(report !== variable93)) { _fun00008_ip = 4809; continue _fun00007 }
 2027:
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.ROLE;
                    if(!(report !== variable93)) { _fun00008_ip = 4273; continue _fun00007 }
 2063:
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.USER;
                    if(!(report !== variable93)) { _fun00008_ip = 3870; continue _fun00007 }
 2099:
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.MENTIONABLE;
                    if(!(report !== variable93)) { _fun00008_ip = 3121; continue _fun00007 }
 2135:
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.BOOLEAN;
                    if(!(report !== variable93)) { _fun00008_ip = 2981; continue _fun00007 }
 2171:
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.INTEGER;
                    if(!(report !== variable93)) { _fun00008_ip = 2638; continue _fun00007 }
 2207:
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.NUMBER;
                    if(!(report !== variable93)) { _fun00008_ip = 2295; continue _fun00007 }
 2240:
                    variable94 = variable66.Error;
                    variable95 = r112.type;
                    report = variable66.HermesInternal;
                    variable93 = report.concat;
                    report = 'Unsupported option type: ';
                    r122 = variable93.bind(report)(variable95);
                    variable93 = variable94.prototype;
                    variable93 = Object.create(variable93, {constructor: {value: variable94}});
                    r123 = variable93;
                    report = new r123[variable94](r122, r121);
                    report = report instanceof Object ? report : variable93;
                    throw report;
 2295:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    if(!(variable58 === r110)) { _fun00008_ip = 5185; continue _fun00007 }
 2348:
                    r111 = r104.text;
                    r110 = r111.trim;
                    r110 = r110.bind(r111)();
                    r111 = r112.choices;
                    if(!(offset == r111)) { _fun00008_ip = 2460; continue _fun00007 }
 2373:
                    r113 = r112.autocomplete;
                    r111 = undefined;
                    if(!r113) { _fun00008_ip = 2495; continue _fun00007 }
 2384:
                    r113 = oscard.autocomplete;
                    if(!(offset != r113)) { _fun00008_ip = 2397; continue _fun00007 }
 2394:
                    if(r107) { _fun00008_ip = 2444; continue _fun00007 }
 2397:
                    r114 = _closure1_slot0;
                    r113 = _closure1_slot3;
                    r113 = r113[variable52];
                    r116 = r114.bind(foxtra)(r113);
                    r115 = r116.findAutocompleteChoiceNumberValue;
                    r113 = oscard.channel;
                    r114 = r113.id;
                    r113 = r112.name;
                    r113 = r115.bind(r116)(r114, r113, r110);
                    _fun00008_ip = 2455; continue _fun00007;
 2444:
                    r114 = oscard.autocomplete;
                    r113 = r114.query;
 2455:
                    r111 = r113;
                    _fun00008_ip = 2495; continue _fun00007;
 2460:
                    r114 = _closure1_slot0;
                    r113 = _closure1_slot3;
                    r113 = r113[variable52];
                    r115 = r114.bind(foxtra)(r113);
                    r114 = r115.findChoiceNumberValue;
                    r113 = r112.choices;
                    r111 = r114.bind(r115)(r113, r110);
 2495:
                    r106 = r111;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = r110;
                    if(!(offset == r106)) { _fun00008_ip = 5185; continue _fun00007 }
 2544:
                    r113 = variable66.Number;
                    r114 = _closure1_slot2;
                    r111 = _closure1_slot3;
                    r111 = r111[variable51];
                    r115 = r114.bind(foxtra)(r111);
                    r114 = r115.normalizeNumericString;
                    r111 = _closure1_slot6;
                    r111 = r111.locale;
                    r111 = r114.bind(r115)(r111, r110);
                    r106 = r113.bind(foxtra)(r111);
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = r110;
                    _fun00008_ip = 5185; continue _fun00007;
 2638:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    if(!(variable58 === r110)) { _fun00008_ip = 5185; continue _fun00007 }
 2691:
                    r111 = r104.text;
                    r110 = r111.trim;
                    r110 = r110.bind(r111)();
                    r111 = r112.choices;
                    if(!(offset == r111)) { _fun00008_ip = 2803; continue _fun00007 }
 2716:
                    r113 = r112.autocomplete;
                    r111 = undefined;
                    if(!r113) { _fun00008_ip = 2838; continue _fun00007 }
 2727:
                    r113 = oscard.autocomplete;
                    if(!(offset != r113)) { _fun00008_ip = 2740; continue _fun00007 }
 2737:
                    if(r107) { _fun00008_ip = 2787; continue _fun00007 }
 2740:
                    r114 = _closure1_slot0;
                    r113 = _closure1_slot3;
                    r113 = r113[variable52];
                    r116 = r114.bind(foxtra)(r113);
                    r115 = r116.findAutocompleteChoiceNumberValue;
                    r113 = oscard.channel;
                    r114 = r113.id;
                    r113 = r112.name;
                    r113 = r115.bind(r116)(r114, r113, r110);
                    _fun00008_ip = 2798; continue _fun00007;
 2787:
                    r114 = oscard.autocomplete;
                    r113 = r114.query;
 2798:
                    r111 = r113;
                    _fun00008_ip = 2838; continue _fun00007;
 2803:
                    r114 = _closure1_slot0;
                    r113 = _closure1_slot3;
                    r113 = r113[variable52];
                    r115 = r114.bind(foxtra)(r113);
                    r114 = r115.findChoiceNumberValue;
                    r113 = r112.choices;
                    r111 = r114.bind(r115)(r113, r110);
 2838:
                    r106 = r111;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = r110;
                    report = config;
                    if(!(offset == r106)) { _fun00008_ip = 5185; continue _fun00007 }
 2887:
                    r113 = variable66.Number;
                    r114 = _closure1_slot2;
                    r111 = _closure1_slot3;
                    r111 = r111[variable51];
                    r115 = r114.bind(foxtra)(r111);
                    r114 = r115.normalizeNumericString;
                    r111 = _closure1_slot6;
                    r111 = r111.locale;
                    r111 = r114.bind(r115)(r111, r110);
                    r106 = r113.bind(foxtra)(r111);
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = r110;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 2981:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    if(!(variable58 === r110)) { _fun00008_ip = 5185; continue _fun00007 }
 3034:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable52];
                    r113 = r111.bind(foxtra)(r110);
                    r111 = r113.toChoiceBooleanValue;
                    r114 = r104.text;
                    r110 = r114.trim;
                    r110 = r110.bind(r114)();
                    r106 = r111.bind(r113)(r110);
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 3121:
                    r110 = r104.type;
                    if(!(variable53 !== r110)) { _fun00008_ip = 3821; continue _fun00007 }
 3133:
                    r110 = r104.type;
                    if(!(variable57 !== r110)) { _fun00008_ip = 3771; continue _fun00007 }
 3145:
                    r110 = r104.type;
                    if(!(variable54 === r110)) { _fun00008_ip = 3166; continue _fun00007 }
 3154:
                    r110 = r104.text;
                    if(!(variable55 !== r110)) { _fun00008_ip = 3705; continue _fun00007 }
 3166:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    if(!(variable58 === r110)) { _fun00008_ip = 5185; continue _fun00007 }
 3219:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable68];
                    r113 = r111.bind(foxtra)(r110);
                    r111 = r113.isSnowflake;
                    r110 = r104.text;
                    r110 = r111.bind(r113)(r110);
                    if(r110) { _fun00008_ip = 3646; continue _fun00007 }
 3258:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable59];
                    r116 = r111.bind(foxtra)(r110);
                    r115 = r116.resolveApplicationCommandOption;
                    r114 = r104.text;
                    r111 = oscard.guild;
                    r110 = offset == r111;
                    r113 = undefined;
                    if(r110) { _fun00008_ip = 3305; continue _fun00007 }
 3300:
                    r113 = r111.id;
 3305:
                    r110 = oscard.channel;
                    r110 = r110.id;
                    r110 = r115.bind(r116)(r114, r113, r110);
                    r114 = offset == r110;
                    r113 = undefined;
                    if(r114) { _fun00008_ip = 3336; continue _fun00007 }
 3331:
                    r113 = r110.type;
 3336:
                    if(!(variable53 !== r113)) { _fun00008_ip = 3597; continue _fun00007 }
 3343:
                    r114 = offset == r110;
                    r113 = undefined;
                    if(r114) { _fun00008_ip = 3357; continue _fun00007 }
 3352:
                    r113 = r110.type;
 3357:
                    if(!(variable57 !== r113)) { _fun00008_ip = 3547; continue _fun00007 }
 3364:
                    r114 = offset == r110;
                    r113 = undefined;
                    if(r114) { _fun00008_ip = 3378; continue _fun00007 }
 3373:
                    r113 = r110.type;
 3378:
                    if(!(variable54 === r113)) { _fun00008_ip = 3391; continue _fun00007 }
 3382:
                    r113 = r110.text;
                    if(!(variable55 !== r113)) { _fun00008_ip = 3481; continue _fun00007 }
 3391:
                    r114 = _closure1_slot1;
                    r113 = _closure1_slot3;
                    r113 = r113[variable63];
                    r114 = r114.bind(foxtra)(r113);
                    r115 = r104.text;
                    r113 = variable66.HermesInternal;
                    r113 = r113.concat;
                    r113 = r113.bind(variable61)(r115);
                    r113 = r114.bind(foxtra)(variable56, r113);
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = r111;
                    variable95 = r110;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 3481:
                    r113 = oscard.guild;
                    r115 = offset == r113;
                    r114 = undefined;
                    if(r115) { _fun00008_ip = 3500; continue _fun00007 }
 3495:
                    r114 = r113.id;
 3500:
                    r106 = r114;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = r111;
                    variable95 = r110;
                    variable94 = r113;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 3547:
                    r106 = r110.roleId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = r111;
                    variable95 = r110;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 3597:
                    r106 = r110.userId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = r111;
                    variable95 = r110;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 3646:
                    r111 = r104.text;
                    r110 = r111.trim;
                    r106 = r110.bind(r111)();
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 3705:
                    r110 = oscard.guild;
                    r113 = offset == r110;
                    r111 = undefined;
                    if(r113) { _fun00008_ip = 3724; continue _fun00007 }
 3719:
                    r111 = r110.id;
 3724:
                    r106 = r111;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = r110;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 3771:
                    r106 = r104.roleId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 3821:
                    r106 = r104.userId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 3870:
                    r110 = r104.type;
                    if(!(variable53 !== r110)) { _fun00008_ip = 4224; continue _fun00007 }
 3882:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    if(!(variable58 === r110)) { _fun00008_ip = 5185; continue _fun00007 }
 3935:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable68];
                    r113 = r111.bind(foxtra)(r110);
                    r111 = r113.isSnowflake;
                    r110 = r104.text;
                    r110 = r111.bind(r113)(r110);
                    if(r110) { _fun00008_ip = 4165; continue _fun00007 }
 3974:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable59];
                    r117 = r111.bind(foxtra)(r110);
                    r116 = r117.resolveApplicationCommandOption;
                    r115 = r104.text;
                    r111 = oscard.guild;
                    r110 = offset == r111;
                    r114 = undefined;
                    if(r110) { _fun00008_ip = 4021; continue _fun00007 }
 4016:
                    r114 = r111.id;
 4021:
                    r110 = oscard.channel;
                    r120 = r110.id;
                    r110 = {};
                    r110['allowRoles'] = variable56;
                    r123 = r117;
                    r122 = r115;
                    r121 = r114;
                    r119 = r110;
                    r110 = r123[r116](r122, r121, r120, r119, r118);
                    r114 = _closure1_slot1;
                    r113 = _closure1_slot3;
                    r113 = r113[variable63];
                    r115 = r114.bind(foxtra)(r113);
                    r114 = offset == r110;
                    r113 = undefined;
                    if(r114) { _fun00008_ip = 4085; continue _fun00007 }
 4080:
                    r113 = r110.type;
 4085:
                    r116 = r104.text;
                    r114 = variable66.HermesInternal;
                    r114 = r114.concat;
                    r114 = r114.bind(variable61)(r116);
                    r113 = variable53 === r113;
                    r113 = r115.bind(foxtra)(r113, r114);
                    r106 = r110.userId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = r111;
                    variable98 = r110;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 4165:
                    r111 = r104.text;
                    r110 = r111.trim;
                    r106 = r110.bind(r111)();
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 4224:
                    r106 = r104.userId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 4273:
                    r110 = r104.type;
                    if(!(variable57 !== r110)) { _fun00008_ip = 4759; continue _fun00007 }
 4285:
                    r110 = r104.type;
                    if(!(variable58 !== r110)) { _fun00008_ip = 4469; continue _fun00007 }
 4297:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    if(!(variable54 === r110)) { _fun00008_ip = 5185; continue _fun00007 }
 4350:
                    r110 = r104.text;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    if(!(variable55 === r110)) { _fun00008_ip = 5185; continue _fun00007 }
 4403:
                    r110 = oscard.guild;
                    r113 = offset == r110;
                    r111 = undefined;
                    if(r113) { _fun00008_ip = 4422; continue _fun00007 }
 4417:
                    r111 = r110.id;
 4422:
                    r106 = r111;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = r110;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 4469:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable68];
                    r113 = r111.bind(foxtra)(r110);
                    r111 = r113.isSnowflake;
                    r110 = r104.text;
                    r110 = r111.bind(r113)(r110);
                    if(r110) { _fun00008_ip = 4700; continue _fun00007 }
 4508:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable59];
                    r117 = r111.bind(foxtra)(r110);
                    r116 = r117.resolveApplicationCommandOption;
                    r115 = r104.text;
                    r111 = oscard.guild;
                    r110 = offset == r111;
                    r114 = undefined;
                    if(r110) { _fun00008_ip = 4555; continue _fun00007 }
 4550:
                    r114 = r111.id;
 4555:
                    r110 = oscard.channel;
                    r120 = r110.id;
                    r110 = {};
                    r110['allowUsers'] = variable56;
                    r123 = r117;
                    r122 = r115;
                    r121 = r114;
                    r119 = r110;
                    r110 = r123[r116](r122, r121, r120, r119, r118);
                    r114 = _closure1_slot1;
                    r113 = _closure1_slot3;
                    r113 = r113[variable63];
                    r115 = r114.bind(foxtra)(r113);
                    r114 = offset == r110;
                    r113 = undefined;
                    if(r114) { _fun00008_ip = 4619; continue _fun00007 }
 4614:
                    r113 = r110.type;
 4619:
                    r116 = r104.text;
                    r114 = variable66.HermesInternal;
                    r114 = r114.concat;
                    r114 = r114.bind(variable61)(r116);
                    r113 = variable57 === r113;
                    r113 = r115.bind(foxtra)(r113, r114);
                    r106 = r110.roleId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = r111;
                    r100 = r110;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 4700:
                    r111 = r104.text;
                    r110 = r111.trim;
                    r106 = r110.bind(r111)();
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 4759:
                    r106 = r104.roleId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 4809:
                    r110 = r104.type;
                    if(!(variable60 !== r110)) { _fun00008_ip = 5141; continue _fun00007 }
 4821:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    if(!(variable58 === r110)) { _fun00008_ip = 5185; continue _fun00007 }
 4874:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable68];
                    r113 = r111.bind(foxtra)(r110);
                    r111 = r113.isSnowflake;
                    r110 = r104.text;
                    r110 = r111.bind(r113)(r110);
                    if(r110) { _fun00008_ip = 5085; continue _fun00007 }
 4913:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable59];
                    r116 = r111.bind(foxtra)(r110);
                    r115 = r116.resolveApplicationCommandOption;
                    r114 = r104.text;
                    r111 = oscard.guild;
                    r110 = offset == r111;
                    r113 = undefined;
                    if(r110) { _fun00008_ip = 4960; continue _fun00007 }
 4955:
                    r113 = r111.id;
 4960:
                    r110 = oscard.channel;
                    r110 = r110.id;
                    r110 = r115.bind(r116)(r114, r113, r110);
                    r114 = _closure1_slot1;
                    r113 = _closure1_slot3;
                    r113 = r113[variable63];
                    r115 = r114.bind(foxtra)(r113);
                    r114 = offset == r110;
                    r113 = undefined;
                    if(r114) { _fun00008_ip = 5008; continue _fun00007 }
 5003:
                    r113 = r110.type;
 5008:
                    r116 = r104.text;
                    r114 = variable66.HermesInternal;
                    r114 = r114.concat;
                    r114 = r114.bind(variable61)(r116);
                    r113 = variable60 === r113;
                    r113 = r115.bind(foxtra)(r113, r114);
                    r106 = r110.channelId;
                    r103 = r111;
                    r102 = r110;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 5085:
                    r111 = r104.text;
                    r110 = r111.trim;
                    r106 = r110.bind(r111)();
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
                    _fun00008_ip = 5185; continue _fun00007;
 5141:
                    r106 = r104.channelId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    report = config;
 5185:
                    r110 = variable62 !== r106;
                    if(r110) { _fun00008_ip = 5202; continue _fun00007 }
 5192:
                    r111 = oscard.autocomplete;
                    r110 = offset == r111;
 5202:
                    if(r110) { _fun00008_ip = 5208; continue _fun00007 }
 5205:
                    r110 = r107;
 5208:
                    variable92 = r109;
                    variable91 = r108;
                    variable90 = r107;
                    variable89 = r106;
                    variable88 = r105;
                    variable87 = r104;
                    variable86 = r103;
                    variable85 = r102;
                    variable84 = r101;
                    variable83 = r100;
                    variable82 = variable100;
                    variable81 = variable99;
                    variable80 = variable98;
                    variable79 = variable97;
                    variable78 = variable96;
                    variable77 = variable95;
                    variable76 = variable94;
                    variable75 = variable93;
                    variable74 = report;
                    variable73 = vacuum;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = verify;
                    if(!r110) { _fun00008_ip = 5526; continue _fun00007 }
 5283:
                    r111 = _closure1_slot1;
                    r110 = _closure1_slot3;
                    r110 = r110[variable63];
                    r113 = r111.bind(foxtra)(r110);
                    r110 = oscard.autocomplete;
                    r111 = offset != r110;
                    if(r111) { _fun00008_ip = 5317; continue _fun00007 }
 5313:
                    r111 = offset != r106;
 5317:
                    r114 = r112.name;
                    r110 = variable66.HermesInternal;
                    r110 = r110.concat;
                    r110 = r110.bind(variable65)(r114, variable64);
                    r110 = r113.bind(foxtra)(r111, r110);
                    variable92 = r109;
                    variable91 = r108;
                    variable90 = r107;
                    variable89 = r106;
                    variable88 = r105;
                    variable87 = r104;
                    variable86 = r103;
                    variable85 = r102;
                    variable84 = r101;
                    variable83 = r100;
                    variable82 = variable100;
                    variable81 = variable99;
                    variable80 = variable98;
                    variable79 = variable97;
                    variable78 = variable96;
                    variable77 = variable95;
                    variable76 = variable94;
                    variable75 = variable93;
                    variable74 = report;
                    variable73 = vacuum;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = verify;
                    if(!(offset != r106)) { _fun00008_ip = 5526; continue _fun00007 }
 5418:
                    r111 = sequen.push;
                    r110 = {};
                    r113 = r112.type;
                    r110['type'] = r113;
                    r112 = r112.name;
                    r110['name'] = r112;
                    r110['value'] = r106;
                    r110['focused'] = r107;
                    r110 = r111.bind(sequen)(r110);
                    variable92 = r109;
                    variable91 = r108;
                    variable90 = r107;
                    variable89 = r106;
                    variable88 = r105;
                    variable87 = r104;
                    variable86 = r103;
                    variable85 = r102;
                    variable84 = r101;
                    variable83 = r100;
                    variable82 = variable100;
                    variable81 = variable99;
                    variable80 = variable98;
                    variable79 = variable97;
                    variable78 = variable96;
                    variable77 = variable95;
                    variable76 = variable94;
                    variable75 = variable93;
                    variable74 = report;
                    variable73 = vacuum;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = verify;
 5526:
                    variable93 = variable67.bind(foxtra)();
                    report = variable93.done;
                    variable43 = variable92;
                    variable42 = variable91;
                    variable41 = variable90;
                    variable40 = variable89;
                    variable39 = variable88;
                    variable38 = variable87;
                    variable37 = variable86;
                    variable36 = variable85;
                    quebec = variable84;
                    equals = variable83;
                    whisks = variable82;
                    limora = variable81;
                    sierra = variable80;
                    status = variable79;
                    target = variable78;
                    papara = variable77;
                    cntext = variable76;
                    record = variable75;
                    config = variable74;
                    vacuum = variable73;
                    ctrled = variable72;
                    source = variable71;
                    verify = variable70;
                    variable44 = variable93;
                    if(!report) { _fun00008_ip = 564; continue _fun00007 }
 5613:
                    verify = golfie.subCommandPath;
                    report = sequen;
                    if(!(offset != verify)) { _fun00008_ip = 5712; continue _fun00007 }
 5626:
                    verify = golfie.subCommandPath;
                    verify = verify.length;
                    vacuum = 1;
                    ctrled = verify - vacuum;
                    source = 0;
                    verify = sequen;
                    report = verify;
                    if(!(ctrled >= source)) { _fun00008_ip = 5712; continue _fun00007 }
 5656:
                    sequen = golfie.subCommandPath;
                    record = sequen[ctrled];
                    sequen = record.name;
                    config = {};
                    record = record.type;
                    config['type'] = record;
                    config['name'] = sequen;
                    config['options'] = verify;
                    sequen = new Array(1);
                    sequen[0] = config;
                    ctrled = ctrled - vacuum;
                    verify = sequen;
                    report = verify;
                    if(ctrled >= source) { _fun00008_ip = 5656; continue _fun00007 }
 5712:
                    verify = golfie.execute;
                    if(!(offset == verify)) { _fun00008_ip = 6179; continue _fun00007 }
 5725:
                    source = golfie.inputType;
                    ctrled = _closure1_slot0;
                    verify = _closure1_slot3;
                    vacuum = 9;
                    verify = verify[vacuum];
                    verify = ctrled.bind(foxtra)(verify);
                    verify = verify.ApplicationCommandInputType;
                    verify = verify.BUILT_IN;
                    if(!(source !== verify)) { _fun00008_ip = 6176; continue _fun00007 }
 5770:
                    source = golfie.inputType;
                    ctrled = _closure1_slot0;
                    verify = _closure1_slot3;
                    verify = verify[vacuum];
                    verify = ctrled.bind(foxtra)(verify);
                    verify = verify.ApplicationCommandInputType;
                    verify = verify.BUILT_IN_TEXT;
                    if(!(source !== verify)) { _fun00008_ip = 6176; continue _fun00007 }
 5812:
                    source = golfie.inputType;
                    ctrled = _closure1_slot0;
                    verify = _closure1_slot3;
                    verify = verify[vacuum];
                    verify = ctrled.bind(foxtra)(verify);
                    verify = verify.ApplicationCommandInputType;
                    verify = verify.BUILT_IN_INTEGRATION;
                    if(!(source !== verify)) { _fun00008_ip = 6176; continue _fun00007 }
 5854:
                    verify = {};
                    source = golfie.version;
                    verify['version'] = source;
                    ctrled = golfie.rootCommand;
                    vacuum = offset == ctrled;
                    source = undefined;
                    if(vacuum) { _fun00008_ip = 5887; continue _fun00007 }
 5882:
                    source = ctrled.id;
 5887:
                    if(!(offset == source)) { _fun00008_ip = 5896; continue _fun00007 }
 5891:
                    source = golfie.id;
 5896:
                    verify['id'] = source;
                    source = golfie.guildId;
                    verify['guild_id'] = source;
                    ctrled = golfie.rootCommand;
                    vacuum = offset == ctrled;
                    source = undefined;
                    if(vacuum) { _fun00008_ip = 5929; continue _fun00007 }
 5924:
                    source = ctrled.name;
 5929:
                    if(!(offset == source)) { _fun00008_ip = 5939; continue _fun00007 }
 5933:
                    source = golfie.untranslatedName;
 5939:
                    verify['name'] = source;
                    source = golfie.type;
                    verify['type'] = source;
                    verify['options'] = report;
                    source = golfie.rootCommand;
                    verify['application_command'] = source;
                    if(!(offset != echoed)) { _fun00008_ip = 5977; continue _fun00007 }
 5971:
                    verify['target_id'] = echoed;
 5977:
                    if(!option) { _fun00008_ip = 5990; continue _fun00007 }
 5980:
                    option = true;
                    verify['client_supports_contextless_activity_launch'] = option;
 5990:
                    option = oscard.autocomplete;
                    if(!(offset == option)) { _fun00008_ip = 6143; continue _fun00007 }
 6003:
                    offset = _closure1_slot1;
                    echoed = _closure1_slot3;
                    option = 20;
                    option = echoed[option];
                    echoed = offset.bind(foxtra)(option);
                    offset = echoed.clearAll;
                    option = oscard.channel;
                    option = option.id;
                    option = offset.bind(echoed)(option, update);
                    offset = _closure1_slot17;
                    option = {};
                    echoed = golfie.applicationId;
                    option['applicationId'] = echoed;
                    option['data'] = verify;
                    option['context'] = oscard;
                    option['attachments'] = result;
                    option['maxSizeCallback'] = output;
                    sizing = function() { // Original name: onMessageSuccess
                        zuuluu = _closure1_slot16;
                        michal = _closure4_slot0;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    option['onMessageSuccess'] = sizing;
                    sizing = _closure1_slot24;
                    sizing = sizing.bind(foxtra)(backup);
                    option['analytics_location'] = sizing;
                    option['sectionName'] = kiloes;
                    option['source'] = yankee;
                    tangon = tangon.bind(foxtra)(golfie, oscard, verify);
                    SaveGenerator(address=6122);
 6120:
                    return tangon;
 6122:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=14);
                    if(kiloes) { _fun00008_ip = 6140; continue _fun00007 }
 6128:
                    option['interactionLifecycleOptions'] = tangon;
                    option = offset.bind(foxtra)(option);
                    _fun00008_ip = 6176; continue _fun00007;
 6140:
                    return tangon;
 6143:
                    option = _closure1_slot0;
                    offset = _closure1_slot3;
                    tangon = 19;
                    tangon = offset[tangon];
                    option = option.bind(foxtra)(tangon);
                    tangon = option.performAutocomplete;
                    tangon = tangon.bind(option)(golfie, oscard, verify);
 6176:
                    return foxtra;
 6179:
                    option = _closure1_slot1;
                    verify = _closure1_slot3;
                    tangon = 18;
                    tangon = verify[tangon];
                    offset = option.bind(foxtra)(tangon);
                    verify = offset.trackWithMetadata;
                    tangon = _closure1_slot12;
                    option = tangon.APPLICATION_COMMAND_USED;
                    tangon = {};
                    kiloes = golfie.id;
                    tangon['command_id'] = kiloes;
                    kiloes = golfie.applicationId;
                    tangon['application_id'] = kiloes;
                    kiloes = golfie.type;
                    tangon['command_type'] = kiloes;
                    romeon = _closure1_slot24;
                    romeon = romeon.bind(foxtra)(backup);
                    tangon['location'] = romeon;
                    tangon['source'] = yankee;
                    tangon = verify.bind(offset)(option, tangon);
                    tangon = golfie.execute;
                    tangon = tangon.bind(golfie)(report, oscard);
                    return tangon;
 6285:
                    return zuuluu;
 6288:
                    return michal;
 6291:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot20 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: queueCommand
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        entity = argBar;
        var _closure2_slot1 = entity;
        tangon = _closure1_slot1;
        verify = _closure1_slot3;
        golfie = 25;
        zuuluu = verify[golfie];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.enqueue;
        zuuluu = {};
        option = _closure1_slot0;
        golfie = verify[golfie];
        golfie = option.bind(entity)(golfie);
        golfie = golfie.MessageDataType;
        golfie = golfie.COMMAND;
        zuuluu['type'] = golfie;
        zuuluu['message'] = oscard;
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = argFoo;
                tangon = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 26;
                michal = michal[entity];
                entity = undefined;
                offset = tangon.bind(entity)(michal);
                verify = offset.handleInteractionResponse;
                tangon = _closure2_slot0;
                option = tangon.nonce;
                golfie = tangon.applicationId;
                oscard = tangon.channelId;
                yankee = tangon.guildId;
                report = null;
                romeon = report != yankee;
                tangon = null;
                if(!romeon) { _fun00010_ip = 76; continue _fun00009 }
 73:
                tangon = yankee;
 76:
                result = offset;
                output = option;
                sizing = zuuluu;
                kiloes = golfie;
                backup = oscard;
                foxtra = tangon;
                tangon = result[verify](output, sizing, kiloes, backup, foxtra, romeon);
                zuuluu = zuuluu.ok;
                if(!zuuluu) { _fun00010_ip = 115; continue _fun00009 }
 107:
                tangon = _closure2_slot1;
                zuuluu = report != tangon;
 115:
                if(!zuuluu) { _fun00010_ip = 126; continue _fun00009 }
 118:
                michal = _closure2_slot1;
                michal = michal.bind(entity)();
 126:
                return entity;
            }
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: displayInteractionLifecycleInChat
        entity = undefined;
        tangon = _closure1_slot23;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _displayInteractionLifecycleInChat
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    tangon = argBar;
                    offset = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(report) { _fun00012_ip = 674; continue _fun00011 }
 21:
                    var _closure4_slot0 = michal;
                    var _closure4_slot1 = tangon;
                    oscard = undefined;
                    option = undefined;
                    var _closure4_slot2 = oscard;
                    report = tangon.channel;
                    sizing = null;
                    if(!(sizing != report)) { _fun00012_ip = 669; continue _fun00011 }
 51:
                    verify = _closure1_slot2;
                    yankee = _closure1_slot3;
                    golfie = 27;
                    golfie = yankee[golfie];
                    foxtra = verify.bind(oscard)(golfie);
                    romeon = foxtra.getCachedApplicationSection;
                    yankee = {};
                    golfie = tangon.channel;
                    yankee['channel'] = golfie;
                    golfie = 'channel';
                    yankee['type'] = golfie;
                    verify = offset.type;
                    golfie = michal.applicationId;
                    golfie = romeon.bind(foxtra)(yankee, verify, golfie);
                    option = golfie;
                    if(!(sizing != golfie)) { _fun00012_ip = 664; continue _fun00011 }
 126:
                    golfie = option;
                    golfie = golfie.application;
                    verify = sizing == golfie;
                    backup = undefined;
                    if(verify) { _fun00012_ip = 149; continue _fun00011 }
 143:
                    backup = golfie.bot;
 149:
                    if(!(sizing == backup)) { _fun00012_ip = 223; continue _fun00011 }
 153:
                    golfie = option;
                    golfie = golfie.botId;
                    if(!(sizing != golfie)) { _fun00012_ip = 223; continue _fun00011 }
 166: // try_start_0
                    verify = _closure1_slot2;
                    yankee = _closure1_slot3;
                    golfie = 28;
                    golfie = yankee[golfie];
                    yankee = verify.bind(oscard)(golfie);
                    verify = yankee.getUser;
                    golfie = option;
                    golfie = golfie.botId;
                    golfie = verify.bind(yankee)(golfie);
                    SaveGenerator(address=210);
 208:
                    return golfie;
 210:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(verify) { _fun00012_ip = 218; continue _fun00011 }
 216: // try_end0
                    _fun00012_ip = 223; continue _fun00011;
 218:
                    return golfie;
 221: // catch_target0
                    CatchBlockStart(arg_register=6);
 223:
                    verify = {};
                    romeon = _closure1_slot1;
                    kiloes = _closure1_slot3;
                    golfie = 29;
                    yankee = kiloes[golfie];
                    romeon = romeon.bind(oscard)(yankee);
                    yankee = {};
                    foxtra = tangon.channel;
                    foxtra = foxtra.id;
                    yankee['channelId'] = foxtra;
                    foxtra = '';
                    yankee['content'] = foxtra;
                    output = offset.type;
                    result = _closure1_slot0;
                    foxtra = 13;
                    kiloes = kiloes[foxtra];
                    kiloes = result.bind(oscard)(kiloes);
                    kiloes = kiloes.ApplicationCommandType;
                    kiloes = kiloes.CHAT;
                    if(!(output !== kiloes)) { _fun00012_ip = 318; continue _fun00011 }
 306:
                    kiloes = _closure1_slot13;
                    kiloes = kiloes.CONTEXT_MENU_COMMAND;
                    _fun00012_ip = 328; continue _fun00011;
 318:
                    output = _closure1_slot13;
                    kiloes = output.CHAT_INPUT_COMMAND;
 328:
                    yankee['type'] = kiloes;
                    if(!(sizing == backup)) { _fun00012_ip = 383; continue _fun00011 }
 336:
                    kiloes = {};
                    output = option;
                    result = output.id;
                    kiloes['id'] = result;
                    output = output.name;
                    kiloes['username'] = output;
                    output = _closure1_slot14;
                    kiloes['discriminator'] = output;
                    kiloes['avatar'] = sizing;
                    sizing = true;
                    kiloes['bot'] = sizing;
                    backup = kiloes;
 383:
                    yankee['author'] = backup;
                    source = romeon.bind(oscard)(yankee);
                    ctrled = verify;
                    yankee = copyDataProperties(ctrled, source);
                    yankee = option.application;
                    option = 'application';
                    verify[option] = yankee;
                    yankee = {};
                    option = offset.id;
                    yankee['id'] = option;
                    option = offset.name;
                    yankee['name'] = option;
                    option = michal.displayName;
                    yankee['name_localized'] = option;
                    romeon = _closure1_slot0;
                    option = _closure1_slot3;
                    foxtra = option[foxtra];
                    foxtra = romeon.bind(oscard)(foxtra);
                    foxtra = foxtra.InteractionTypes;
                    foxtra = foxtra.APPLICATION_COMMAND;
                    yankee['type'] = foxtra;
                    golfie = option[golfie];
                    foxtra = romeon.bind(oscard)(golfie);
                    romeon = foxtra.userRecordToServer;
                    backup = _closure1_slot9;
                    golfie = backup.getCurrentUser;
                    golfie = golfie.bind(backup)();
                    golfie = romeon.bind(foxtra)(golfie);
                    yankee['user'] = golfie;
                    golfie = 'interaction';
                    verify[golfie] = yankee;
                    golfie = 'interaction_data';
                    verify[golfie] = offset;
                    _closure4_slot2 = verify;
                    golfie = _closure1_slot1;
                    report = 30;
                    report = option[report];
                    option = golfie.bind(oscard)(report);
                    golfie = option.receiveMessage;
                    tangon = tangon.channel;
                    ctrled = tangon.id;
                    tangon = {};
                    offset = michal.applicationId;
                    tangon['applicationId'] = offset;
                    tangon['command'] = michal;
                    update = true;
                    vacuum = option;
                    source = verify;
                    echoed = tangon;
                    michal = vacuum[golfie](ctrled, source, update, echoed, result);
                    michal = {};
                    report = function() { // Original name: get messageId
                        entity = _closure4_slot2;
                        entity = entity.id;
                        return entity;
                    };
                    tangon = 'messageId';
                    Object.defineProperty(michal, tangon, {get: report, set: oscard, enumerable: true});
                    report = function() { // Original name: get nonce
                        entity = _closure4_slot2;
                        entity = entity.id;
                        return entity;
                    };
                    tangon = 'nonce';
                    Object.defineProperty(michal, tangon, {get: report, set: oscard, enumerable: true});
                    tangon = function(argFoo) { // Original name: onCreate
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            michal = _closure4_slot2;
                            zuuluu = michal.interaction;
                            michal = null;
                            if(!(michal != zuuluu)) { _fun00014_ip = 38; continue _fun00013 }
 19:
                            entity = _closure4_slot2;
                            michal = entity.interaction;
                            entity = argFoo;
                            michal['id'] = entity;
 38:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal['onCreate'] = tangon;
                    tangon = function() { // Original name: onSuccess
                        entity = undefined;
                        return entity;
                    };
                    michal['onSuccess'] = tangon;
                    zuuluu = function(argFoo, argBar, argBaz, argCor) { // Original name: onFailure
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            option = argFoo;
                            tangon = argBar;
                            oscard = argCor;
                            entity = _closure4_slot1;
                            entity = entity.channel;
                            michal = null;
                            if(!(michal != entity)) { _fun00016_ip = 236; continue _fun00015 }
 30:
                            entity = michal == tangon;
                            if(!entity) { _fun00016_ip = 41; continue _fun00015 }
 37:
                            entity = michal != option;
 41:
                            if(!entity) { _fun00016_ip = 95; continue _fun00015 }
 44:
                            golfie = _closure1_slot1;
                            zuuluu = _closure1_slot3;
                            entity = 30;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            golfie = golfie.bind(entity)(zuuluu);
                            zuuluu = golfie.sendClydeError;
                            entity = _closure4_slot1;
                            entity = entity.channel;
                            entity = entity.id;
                            entity = zuuluu.bind(golfie)(entity, option);
 95:
                            entity = michal == tangon;
                            if(!entity) { _fun00016_ip = 106; continue _fun00015 }
 102:
                            entity = michal != oscard;
 106:
                            if(!entity) { _fun00016_ip = 155; continue _fun00015 }
 109:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot3;
                            entity = 26;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.interactionCallbackErrorReason;
                            entity = _closure4_slot0;
                            entity = entity.applicationId;
                            tangon = michal.bind(zuuluu)(oscard, entity);
 155:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot3;
                            entity = 10;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.dispatch;
                            entity = {};
                            oscard = 'MESSAGE_SEND_FAILED';
                            entity['type'] = oscard;
                            oscard = _closure4_slot2;
                            oscard = oscard.id;
                            entity['messageId'] = oscard;
                            report = _closure4_slot1;
                            report = report.channel;
                            report = report.id;
                            entity['channelId'] = report;
                            entity['reason'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 236:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal['onFailure'] = zuuluu;
                    return michal;
 664:
                    michal = {};
                    return michal;
 669:
                    michal = {};
                    return michal;
 674:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot23 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: getAnalyticsLocationFromCommandOrigin
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = argFoo;
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            tangon = 9;
            michal = michal[tangon];
            zuuluu = undefined;
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.CommandOrigin;
            michal = michal.APPLICATION_LAUNCHER;
            if(!(michal !== report)) { _fun00018_ip = 608; continue _fun00017 }
 47:
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.CommandOrigin;
            michal = michal.APP_LAUNCHER_APPLICATION_VIEW;
            if(!(michal !== report)) { _fun00018_ip = 577; continue _fun00017 }
 83:
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.CommandOrigin;
            michal = michal.IMAGE_RECS_MENU;
            if(!(michal !== report)) { _fun00018_ip = 546; continue _fun00017 }
 119:
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.CommandOrigin;
            michal = michal.IMAGE_RECS_SUBMENU;
            if(!(michal !== report)) { _fun00018_ip = 515; continue _fun00017 }
 155:
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.CommandOrigin;
            michal = michal.ACTIVITY_INSTANCE_EMBED;
            if(!(michal !== report)) { _fun00018_ip = 484; continue _fun00017 }
 191:
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.CommandOrigin;
            michal = michal.ACTIVITY_BOOKMARK_EMBED;
            if(!(michal !== report)) { _fun00018_ip = 453; continue _fun00017 }
 227:
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.CommandOrigin;
            michal = michal.MINI_SHELF;
            if(!(michal !== report)) { _fun00018_ip = 422; continue _fun00017 }
 263:
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.CommandOrigin;
            michal = michal.VOICE_TILE_ACTIVITY_SUGGESTIONS;
            if(!(michal !== report)) { _fun00018_ip = 391; continue _fun00017 }
 296:
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.CommandOrigin;
            michal = michal.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            if(!(michal !== report)) { _fun00018_ip = 360; continue _fun00017 }
 329:
            report = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ApplicationCommandTriggerLocations;
            michal = michal.SLASH_UI;
            return michal;
 360:
            report = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ApplicationCommandTriggerLocations;
            michal = michal.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            return michal;
 391:
            report = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ApplicationCommandTriggerLocations;
            michal = michal.VC_TILE_ACTIVITY_SUGGESTION;
            return michal;
 422:
            report = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ApplicationCommandTriggerLocations;
            michal = michal.ACTIVITIES_MINI_SHELF;
            return michal;
 453:
            report = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ApplicationCommandTriggerLocations;
            michal = michal.ACTIVITY_BOOKMARK_EMBED;
            return michal;
 484:
            report = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ApplicationCommandTriggerLocations;
            michal = michal.ACTIVITY_INSTANCE_EMBED;
            return michal;
 515:
            report = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ApplicationCommandTriggerLocations;
            michal = michal.IMAGE_RECS_SUBMENU;
            return michal;
 546:
            report = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ApplicationCommandTriggerLocations;
            michal = michal.IMAGE_RECS_MENU;
            return michal;
 577:
            report = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ApplicationCommandTriggerLocations;
            michal = michal.APP_LAUNCHER_APPLICATION_VIEW;
            return michal;
 608:
            michal = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[tangon];
            entity = michal.bind(zuuluu)(entity);
            entity = entity.ApplicationCommandTriggerLocations;
            entity = entity.APP_LAUNCHER;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: getMaxAndTotalFileSize
        entity = undefined;
        tangon = _closure1_slot26;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _getMaxAndTotalFileSize
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    foxtra = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00020_ip = 165; continue _fun00019 }
 13:
                    zuuluu = _closure1_slot18;
                    romeon = undefined;
                    michal = argFoo;
                    yankee = zuuluu.bind(romeon)(michal);
                    zuuluu = yankee.bind(romeon)();
                    michal = zuuluu.done;
                    verify = null;
                    option = zuuluu;
                    golfie = 0;
                    oscard = 0;
                    report = undefined;
                    tangon = 0;
                    zuuluu = 0;
                    if(michal) { _fun00020_ip = 150; continue _fun00019 }
 57:
                    backup = option.value;
                    if(foxtra) { _fun00020_ip = 94; continue _fun00019 }
 65:
                    michal = backup.getSize;
                    kiloes = michal.bind(backup)();
                    SaveGenerator(address=79);
 77:
                    return kiloes;
 79:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=1);
                    sizing = michal;
                    michal = kiloes;
                    if(!sizing) { _fun00020_ip = 118; continue _fun00019 }
 91:
                    return kiloes;
 94:
                    kiloes = backup.currentSize;
                    sizing = verify != kiloes;
                    backup = 0;
                    if(!sizing) { _fun00020_ip = 112; continue _fun00019 }
 109:
                    backup = kiloes;
 112:
                    michal = backup;
                    report = kiloes;
 118:
                    if(!(michal > oscard)) { _fun00020_ip = 125; continue _fun00019 }
 122:
                    oscard = michal;
 125:
                    golfie = golfie + michal;
                    sizing = yankee.bind(romeon)();
                    michal = sizing.done;
                    option = sizing;
                    tangon = golfie;
                    zuuluu = oscard;
                    if(!michal) { _fun00020_ip = 57; continue _fun00019 }
 150:
                    michal = {};
                    michal['totalSize'] = tangon;
                    michal['largestUploadedFileSize'] = zuuluu;
                    return michal;
 165:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot26 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _stageAttachments
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar, argBaz, argCor) {
            entity = function* (argFoo, argBar, argBaz, argCor) { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    michal = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00022_ip = 482; continue _fun00021 }
 18:
                    golfie = michal;
                    var _closure4_slot0 = michal;
                    michal = argCor;
                    var _closure4_slot1 = michal;
                    oscard = undefined;
                    var _closure4_slot2 = oscard;
                    report = undefined;
                    yankee = undefined;
                    tangon = undefined;
                    backup = option;
                    zuuluu = _closure1_slot0;
                    verify = _closure1_slot3;
                    michal = 31;
                    michal = verify[michal];
                    verify = zuuluu.bind(oscard)(michal);
                    zuuluu = verify.maxFileSize;
                    michal = argBaz;
                    sizing = zuuluu.bind(verify)(michal);
                    _closure4_slot2 = sizing;
                    report = function(argFoo) { // Original name: handleUploadsTooLarge
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            michal = _closure4_slot1;
                            entity = null;
                            if(!(entity != michal)) { _fun00024_ip = 32; continue _fun00023 }
 13:
                            tangon = _closure4_slot1;
                            zuuluu = _closure4_slot2;
                            michal = undefined;
                            entity = argFoo;
                            entity = tangon.bind(michal)(zuuluu, entity);
 32:
                            tangon = _closure1_slot2;
                            foxtra = _closure1_slot3;
                            entity = 24;
                            zuuluu = foxtra[entity];
                            entity = undefined;
                            oscard = tangon.bind(entity)(zuuluu);
                            report = oscard.setFailed;
                            tangon = _closure4_slot0;
                            zuuluu = _closure1_slot11;
                            zuuluu = zuuluu.ENTITY_TOO_LARGE;
                            romeon = _closure1_slot0;
                            michal = 32;
                            golfie = foxtra[michal];
                            golfie = romeon.bind(entity)(golfie);
                            verify = golfie.intl;
                            option = verify.formatToPlainString;
                            michal = foxtra[michal];
                            michal = romeon.bind(entity)(michal);
                            michal = michal.t;
                            golfie = michal.fxEKdX;
                            michal = {};
                            yankee = 31;
                            yankee = foxtra[yankee];
                            romeon = romeon.bind(entity)(yankee);
                            yankee = romeon.sizeString;
                            offset = _closure4_slot2;
                            offset = yankee.bind(romeon)(offset);
                            michal['maxSize'] = offset;
                            michal = option.bind(verify)(golfie, michal);
                            michal = report.bind(oscard)(tangon, zuuluu, michal);
                            return entity;
                        }
                    };
                    michal = _closure1_slot25;
                    zuuluu = false;
                    michal = michal.bind(oscard)(option, zuuluu);
                    SaveGenerator(address=109);
 107:
                    return michal;
 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(option) { _fun00022_ip = 479; continue _fun00021 }
 118:
                    yankee = michal.totalSize;
                    verify = michal.largestUploadedFileSize;
                    tangon = verify;
                    option = global;
                    kiloes = option.Math;
                    foxtra = kiloes.max;
                    option = _closure1_slot15;
                    option = foxtra.bind(kiloes)(sizing, option);
                    if(!(!(verify > option))) { _fun00022_ip = 471; continue _fun00021 }
 163:
                    verify = yankee;
                    kiloes = _closure1_slot0;
                    option = _closure1_slot3;
                    foxtra = 33;
                    option = option[foxtra];
                    option = kiloes.bind(oscard)(option);
                    option = option.MAX_TOTAL_ATTACHMENT_SIZE;
                    if(!(!(verify > option))) { _fun00022_ip = 471; continue _fun00021 }
 199: // try_start_0
                    verify = _closure1_slot0;
                    kiloes = _closure1_slot3;
                    option = 34;
                    option = kiloes[option];
                    kiloes = verify.bind(oscard)(option);
                    verify = kiloes.stageAttachmentFiles;
                    option = backup;
                    option = verify.bind(kiloes)(option);
                    SaveGenerator(address=237);
 235:
                    return option;
 237:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00022_ip = 245; continue _fun00021 }
 243: // try_end0
                    _fun00022_ip = 354; continue _fun00021;
 245:
                    return option;
 248: // catch_target0
                    CatchBlockStart(arg_register=7);
                    verify = _closure1_slot2;
                    echoed = _closure1_slot3;
                    option = 24;
                    option = echoed[option];
                    kiloes = verify.bind(oscard)(option);
                    verify = kiloes.setFailed;
                    option = golfie;
                    sizing = _closure1_slot0;
                    golfie = 32;
                    output = echoed[golfie];
                    output = sizing.bind(oscard)(output);
                    result = output.intl;
                    output = result.formatToPlainString;
                    golfie = echoed[golfie];
                    golfie = sizing.bind(oscard)(golfie);
                    golfie = golfie.t;
                    sizing = golfie.9h1/1t;
                    golfie = {};
                    echoed = backup;
                    echoed = echoed.length;
                    golfie['count'] = echoed;
                    golfie = output.bind(result)(sizing, golfie);
                    golfie = verify.bind(kiloes)(option, oscard, golfie);
 354:
                    verify = _closure1_slot25;
                    option = backup;
                    golfie = true;
                    golfie = verify.bind(oscard)(option, golfie);
                    SaveGenerator(address=373);
 371:
                    return golfie;
 373:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00022_ip = 468; continue _fun00021 }
 379:
                    yankee = golfie.totalSize;
                    tangon = golfie.largestUploadedFileSize;
                    kiloes = backup;
                    backup = kiloes.some;
                    romeon = function(argFoo) {
                        entity = argFoo;
                        michal = entity.error;
                        entity = _closure1_slot11;
                        entity = entity.ENTITY_TOO_LARGE;
                        entity = michal === entity;
                        return entity;
                    };
                    romeon = backup.bind(kiloes)(romeon);
                    verify = romeon;
                    if(romeon) { _fun00022_ip = 443; continue _fun00021 }
 416:
                    romeon = _closure1_slot0;
                    offset = _closure1_slot3;
                    offset = offset[foxtra];
                    offset = romeon.bind(oscard)(offset);
                    offset = offset.MAX_TOTAL_ATTACHMENT_SIZE;
                    verify = yankee > offset;
 443:
                    verify = !verify;
                    option = verify;
                    if(verify) { _fun00022_ip = 465; continue _fun00021 }
 452:
                    offset = report;
                    verify = tangon;
                    verify = offset.bind(oscard)(verify);
                    option = false;
 465:
                    return option;
 468:
                    return golfie;
 471:
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 479:
                    return michal;
 482:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot27 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 5;
    michal = golfie[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 6;
    michal = golfie[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 7;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.AbortCodes;
    var _closure1_slot11 = report;
    report = michal.AnalyticEvents;
    var _closure1_slot12 = report;
    report = michal.MessageTypes;
    var _closure1_slot13 = report;
    michal = michal.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot14 = michal;
    michal = 8;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE;
    var _closure1_slot15 = michal;
    michal = function(argFoo) { // Original name: trackEmojiUsage
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.values;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.flatMap;
            entity = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.map;
                entity = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        zuuluu = argFoo;
                        michal = zuuluu.type;
                        entity = 'emoji';
                        if(!(entity !== michal)) { _fun00028_ip = 57; continue _fun00027 }
 16:
                        tangon = zuuluu.type;
                        michal = 'customEmoji';
                        entity = null;
                        if(!(michal === tangon)) { _fun00028_ip = 55; continue _fun00027 }
 31:
                        report = _closure1_slot5;
                        tangon = report.getCustomEmojiById;
                        michal = zuuluu.emojiId;
                        entity = tangon.bind(report)(michal);
 55:
                        _fun00028_ip = 164; continue _fun00027;
 57:
                        report = _closure1_slot0;
                        tangon = _closure1_slot3;
                        michal = 21;
                        tangon = tangon[michal];
                        michal = undefined;
                        michal = report.bind(michal)(tangon);
                        tangon = michal.Emoji;
                        michal = {'names': null, 'surrogates': '', 'unicodeVersion': 6};
                        golfie = zuuluu.name;
                        oscard = golfie.replaceAll;
                        report = ':';
                        zuuluu = '';
                        report = oscard.bind(golfie)(report, zuuluu);
                        zuuluu = new Array(1);
                        zuuluu[0] = report;
                        michal['names'] = zuuluu;
                        zuuluu = tangon.prototype;
                        zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                        offset = zuuluu;
                        verify = michal;
                        michal = new offset[tangon](verify, option);
                        entity = michal instanceof Object ? michal : zuuluu;
 164:
                        return entity;
                    }
                };
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.filter;
                report = _closure1_slot0;
                tangon = _closure1_slot3;
                entity = 22;
                tangon = tangon[entity];
                entity = undefined;
                entity = report.bind(entity)(tangon);
                entity = entity.isNotNullish;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = michal.bind(zuuluu)(entity);
            michal = tangon.length;
            entity = 0;
            if(!(michal > entity)) { _fun00026_ip = 102; continue _fun00025 }
 50:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 10;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            report = 'EMOJI_TRACK_USAGE';
            entity['type'] = report;
            entity['emojiUsed'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 102:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = michal;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = undefined;
        michal = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    report = argBar;
                    zuuluu = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00030_ip = 200; continue _fun00029 }
 19:
                    tangon = michal.isCommandType;
                    tangon = tangon.bind(michal)();
                    if(!tangon) { _fun00030_ip = 192; continue _fun00029 }
 35:
                    oscard = michal.interactionData;
                    tangon = null;
                    if(!(tangon != oscard)) { _fun00030_ip = 192; continue _fun00029 }
 50:
                    oscard = zuuluu.command;
                    if(!(tangon != oscard)) { _fun00030_ip = 192; continue _fun00029 }
 63:
                    option = {};
                    option['channel'] = report;
                    oscard = report.guild_id;
                    oscard = tangon != oscard;
                    tangon = null;
                    if(!oscard) { _fun00030_ip = 105; continue _fun00029 }
 83:
                    golfie = _closure1_slot7;
                    oscard = golfie.getGuild;
                    report = report.guild_id;
                    tangon = oscard.bind(golfie)(report);
 105:
                    option['guild'] = tangon;
                    report = _closure1_slot17;
                    tangon = {};
                    golfie = zuuluu.command;
                    golfie = golfie.applicationId;
                    tangon['applicationId'] = golfie;
                    golfie = michal.interactionData;
                    tangon['data'] = golfie;
                    tangon['context'] = option;
                    golfie = _closure1_slot22;
                    oscard = zuuluu.command;
                    michal = michal.interactionData;
                    zuuluu = undefined;
                    michal = golfie.bind(zuuluu)(oscard, option, michal);
                    SaveGenerator(address=176);
 174:
                    return michal;
 176:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00030_ip = 197; continue _fun00029 }
 182:
                    tangon['interactionLifecycleOptions'] = michal;
                    zuuluu = report.bind(zuuluu)(tangon);
 192:
                    zuuluu = undefined;
                    return zuuluu;
 197:
                    return michal;
 200:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    michal = michal.bind(entity)();
    report = function(argFoo) { // Original name: enqueueCommandInteraction
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            sizing = entity.applicationId;
            romeon = entity.data;
            zuuluu = entity.context;
            golfie = entity.attachments;
            oscard = entity.maxSizeCallback;
            option = entity.onMessageSuccess;
            var _closure2_slot0 = option;
            yankee = entity.analytics_location;
            offset = entity.sectionName;
            tangon = entity.source;
            backup = entity.interactionLifecycleOptions;
            entity = undefined;
            var _closure2_slot1 = entity;
            report = zuuluu.channel;
            verify = null;
            if(!(verify != report)) { _fun00032_ip = 408; continue _fun00031 }
 85:
            report = zuuluu.channel;
            zuuluu = zuuluu.guild;
            kiloes = report.id;
            foxtra = verify == zuuluu;
            report = undefined;
            if(foxtra) { _fun00032_ip = 114; continue _fun00031 }
 109:
            report = zuuluu.id;
 114:
            zuuluu = {};
            zuuluu['applicationId'] = sizing;
            zuuluu['channelId'] = kiloes;
            zuuluu['guildId'] = report;
            zuuluu['data'] = romeon;
            romeon = backup.nonce;
            if(!(verify == romeon)) { _fun00032_ip = 175; continue _fun00031 }
 142:
            output = _closure1_slot0;
            result = _closure1_slot3;
            foxtra = 23;
            foxtra = result[foxtra];
            output = output.bind(entity)(foxtra);
            foxtra = output.createNonce;
            romeon = foxtra.bind(output)();
 175:
            zuuluu['nonce'] = romeon;
            zuuluu['attachments'] = golfie;
            zuuluu['maxSizeCallback'] = oscard;
            zuuluu['analytics_location'] = yankee;
            zuuluu['sectionName'] = offset;
            zuuluu['source'] = tangon;
            _closure2_slot1 = zuuluu;
            yankee = _closure1_slot2;
            echoed = _closure1_slot3;
            offset = 24;
            offset = echoed[offset];
            foxtra = yankee.bind(entity)(offset);
            romeon = foxtra.addQueued;
            yankee = zuuluu.nonce;
            offset = {};
            output = backup.messageId;
            offset['messageId'] = output;
            output = backup.onCreate;
            offset['onCreate'] = output;
            output = backup.onSuccess;
            offset['onSuccess'] = output;
            backup = backup.onFailure;
            offset['onFailure'] = backup;
            backup = {};
            result = _closure1_slot0;
            output = 13;
            output = echoed[output];
            output = result.bind(entity)(output);
            output = output.InteractionTypes;
            output = output.APPLICATION_COMMAND;
            backup['interactionType'] = output;
            backup['applicationId'] = sizing;
            backup['channelId'] = kiloes;
            offset['data'] = backup;
            offset = romeon.bind(foxtra)(yankee, offset);
            if(!(verify != golfie)) { _fun00032_ip = 355; continue _fun00031 }
 344:
            offset = golfie.length;
            verify = 0;
            if(!(!(offset > verify))) { _fun00032_ip = 367; continue _fun00031 }
 355:
            tangon = _closure1_slot21;
            tangon = tangon.bind(entity)(zuuluu, option);
            _fun00032_ip = 408; continue _fun00031;
 367:
            ctrled = zuuluu.nonce;
            zuuluu = function() { // Original name: stageAttachments
                entity = undefined;
                tangon = _closure1_slot27;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            sequen = undefined;
            vacuum = golfie;
            source = report;
            update = oscard;
            tangon = sequen[zuuluu](vacuum, ctrled, source, update, echoed);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    if(!entity) { _fun00034_ip = 32; continue _fun00033 }
 6:
                    tangon = _closure1_slot21;
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
 32:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
 408:
            return entity;
        }
    };
    var _closure1_slot17 = report;
    report = 35;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/application_commands/executeCommand.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() { // Original name: executeCommand
        entity = undefined;
        tangon = _closure1_slot20;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['retryCommandMessage'] = michal;
    return entity;
})();