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
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
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
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot19;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot19;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
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
 343:
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
                    if(zuuluu) { _fun00008_ip = 6272; continue _fun00007 }
 15:
                    golfie = michal.command;
                    variable68 = michal.optionValues;
                    var _closure4_slot0 = variable68;
                    oscard = michal.context;
                    option = michal.commandTargetId;
                    output = michal.maxSizeCallback;
                    backup = michal.commandOrigin;
                    foxtra = undefined;
                    if(!(backup === foxtra)) { _fun00008_ip = 95; continue _fun00007 }
 60:
                    report = _closure1_slot0;
                    verify = _closure1_slot3;
                    tangon = 9;
                    tangon = verify[tangon];
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
                    SaveGenerator(address=127);
 125:
                    return foxtra;
 127:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 6269; continue _fun00007 }
 136:
                    zuuluu = oscard.channel;
                    offset = null;
                    if(!(offset != zuuluu)) { _fun00008_ip = 6157; continue _fun00007 }
 150:
                    verify = _closure1_slot10;
                    report = verify.getSource;
                    zuuluu = oscard.channel;
                    zuuluu = zuuluu.id;
                    zuuluu = report.bind(verify)(zuuluu);
                    if(!(offset != zuuluu)) { _fun00008_ip = 185; continue _fun00007 }
 182:
                    yankee = zuuluu;
 185:
                    verify = _closure1_slot10;
                    report = verify.getCommandOrigin;
                    zuuluu = oscard.channel;
                    zuuluu = zuuluu.id;
                    zuuluu = report.bind(verify)(zuuluu);
                    if(!(offset != zuuluu)) { _fun00008_ip = 219; continue _fun00007 }
 216:
                    backup = zuuluu;
 219:
                    zuuluu = oscard.autocomplete;
                    if(!(offset == zuuluu)) { _fun00008_ip = 283; continue _fun00007 }
 229:
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
 283:
                    report = _closure1_slot1;
                    verify = _closure1_slot3;
                    zuuluu = 11;
                    zuuluu = verify[zuuluu];
                    verify = report.bind(foxtra)(zuuluu);
                    report = verify.unarchiveThreadIfNecessary;
                    zuuluu = oscard.channel;
                    zuuluu = zuuluu.id;
                    zuuluu = report.bind(verify)(zuuluu);
                    SaveGenerator(address=328);
 326:
                    return zuuluu;
 328:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 6266; continue _fun00007 }
 337:
                    vacuum = new Array(0);
                    result = new Array(0);
                    verify = _closure1_slot0;
                    report = _closure1_slot3;
                    variable67 = 12;
                    report = report[variable67];
                    verify = verify.bind(foxtra)(report);
                    report = verify.getCommandAttachmentDraftType;
                    update = report.bind(verify)(backup);
                    report = golfie.options;
                    if(!(offset != report)) { _fun00008_ip = 5607; continue _fun00007 }
 388:
                    verify = _closure1_slot18;
                    report = golfie.options;
                    variable66 = verify.bind(foxtra)(report);
                    verify = variable66.bind(foxtra)();
                    report = verify.done;
                    variable65 = global;
                    variable64 = 'Unexpected value for option "';
                    variable63 = '"';
                    variable62 = 16;
                    variable61 = '';
                    variable60 = 'Failed to resolve ';
                    variable59 = 'channelMention';
                    variable58 = 17;
                    variable57 = 'text';
                    variable56 = 'roleMention';
                    variable55 = false;
                    variable54 = '@everyone';
                    variable53 = 'textMention';
                    variable52 = 'userMention';
                    variable51 = 15;
                    variable50 = 14;
                    variable49 = 13;
                    variable48 = 0;
                    variable47 = 'Option "';
                    variable46 = '" expects a single option type';
                    variable45 = 1;
                    variable44 = '" expects a value';
                    variable43 = verify;
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
                    sequen = undefined;
                    ctrled = undefined;
                    source = undefined;
                    echoed = undefined;
                    verify = undefined;
                    if(report) { _fun00008_ip = 5607; continue _fun00007 }
 558:
                    r111 = variable43.value;
                    variable92 = r111.type;
                    variable69 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable49];
                    report = variable69.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.SUB_COMMAND;
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
                    variable73 = sequen;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = echoed;
                    variable69 = verify;
                    if(!(variable92 !== report)) { _fun00008_ip = 5520; continue _fun00007 }
 673:
                    variable92 = r111.type;
                    variable93 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable49];
                    report = variable93.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.SUB_COMMAND_GROUP;
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
                    variable73 = sequen;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = echoed;
                    variable69 = verify;
                    if(!(variable92 !== report)) { _fun00008_ip = 5520; continue _fun00007 }
 783:
                    report = r111.name;
                    report = report in variable68;
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
                    variable73 = sequen;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = echoed;
                    variable69 = verify;
                    if(!report) { _fun00008_ip = 5520; continue _fun00007 }
 867:
                    r108 = oscard.autocomplete;
                    report = offset == r108;
                    variable92 = undefined;
                    if(report) { _fun00008_ip = 887; continue _fun00007 }
 882:
                    variable92 = r108.name;
 887:
                    report = r111.name;
                    r106 = variable92 === report;
                    if(r106) { _fun00008_ip = 901; continue _fun00007 }
 899:
                    r106 = undefined;
 901:
                    variable92 = r111.type;
                    variable93 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable49];
                    report = variable93.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.STRING;
                    if(!(variable92 === report)) { _fun00008_ip = 1411; continue _fun00007 }
 942:
                    variable92 = _closure1_slot2;
                    report = _closure1_slot3;
                    report = report[variable50];
                    variable93 = variable92.bind(foxtra)(report);
                    variable92 = variable93.getOptionalString;
                    report = r111.name;
                    variable92 = variable92.bind(variable93)(variable68, report);
                    report = offset == variable92;
                    variable93 = undefined;
                    if(report) { _fun00008_ip = 995; continue _fun00007 }
 985:
                    report = variable92.trim;
                    variable93 = report.bind(variable92)();
 995:
                    variable94 = offset != variable93;
                    report = variable61;
                    if(!variable94) { _fun00008_ip = 1008; continue _fun00007 }
 1005:
                    report = variable93;
 1008:
                    variable94 = r111.choices;
                    if(!(offset == variable94)) { _fun00008_ip = 1105; continue _fun00007 }
 1018:
                    variable95 = r111.autocomplete;
                    variable94 = undefined;
                    if(!variable95) { _fun00008_ip = 1140; continue _fun00007 }
 1029:
                    variable95 = oscard.autocomplete;
                    if(!(offset != variable95)) { _fun00008_ip = 1042; continue _fun00007 }
 1039:
                    if(r106) { _fun00008_ip = 1089; continue _fun00007 }
 1042:
                    variable96 = _closure1_slot0;
                    variable95 = _closure1_slot3;
                    variable95 = variable95[variable51];
                    variable98 = variable96.bind(foxtra)(variable95);
                    variable97 = variable98.findAutocompleteChoiceStringValue;
                    variable95 = oscard.channel;
                    variable96 = variable95.id;
                    variable95 = r111.name;
                    variable95 = variable97.bind(variable98)(variable96, variable95, report);
                    _fun00008_ip = 1100; continue _fun00007;
 1089:
                    variable96 = oscard.autocomplete;
                    variable95 = variable96.query;
 1100:
                    variable94 = variable95;
                    _fun00008_ip = 1140; continue _fun00007;
 1105:
                    variable96 = _closure1_slot0;
                    variable95 = _closure1_slot3;
                    variable95 = variable95[variable51];
                    variable97 = variable96.bind(foxtra)(variable95);
                    variable96 = variable97.findChoiceStringValue;
                    variable95 = r111.choices;
                    variable94 = variable96.bind(variable97)(variable95, report);
 1140:
                    if(!(offset == variable94)) { _fun00008_ip = 1147; continue _fun00007 }
 1144:
                    variable94 = report;
 1147:
                    if(!(variable61 === variable94)) { _fun00008_ip = 1236; continue _fun00007 }
 1151:
                    variable95 = oscard.autocomplete;
                    if(!(offset != variable95)) { _fun00008_ip = 1236; continue _fun00007 }
 1161:
                    variable91 = r108;
                    variable90 = variable41;
                    variable89 = r106;
                    variable88 = variable94;
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
                    variable73 = sequen;
                    variable72 = ctrled;
                    variable71 = variable93;
                    variable70 = variable92;
                    variable69 = report;
                    if(!r106) { _fun00008_ip = 5520; continue _fun00007 }
 1236:
                    variable96 = _closure1_slot1;
                    variable95 = _closure1_slot3;
                    variable95 = variable95[variable62];
                    variable97 = variable96.bind(foxtra)(variable95);
                    variable95 = oscard.autocomplete;
                    variable96 = offset != variable95;
                    if(variable96) { _fun00008_ip = 1270; continue _fun00007 }
 1266:
                    variable96 = offset != variable94;
 1270:
                    variable98 = r111.name;
                    variable95 = variable65.HermesInternal;
                    variable95 = variable95.concat;
                    variable95 = variable95.bind(variable47)(variable98, variable44);
                    variable95 = variable97.bind(foxtra)(variable96, variable95);
                    variable96 = vacuum.push;
                    variable95 = {};
                    variable97 = r111.type;
                    variable95['type'] = variable97;
                    variable97 = r111.name;
                    variable95['name'] = variable97;
                    variable95['value'] = variable94;
                    variable95['focused'] = r106;
                    variable95 = variable96.bind(vacuum)(variable95);
                    variable91 = r108;
                    variable90 = variable41;
                    variable89 = r106;
                    variable88 = variable94;
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
                    variable73 = sequen;
                    variable72 = ctrled;
                    variable71 = variable93;
                    variable70 = variable92;
                    variable69 = report;
                    _fun00008_ip = 5520; continue _fun00007;
 1411:
                    variable92 = r111.type;
                    variable93 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable49];
                    report = variable93.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.ATTACHMENT;
                    if(!(variable92 === report)) { _fun00008_ip = 1773; continue _fun00007 }
 1452:
                    report = oscard.autocomplete;
                    report = offset != report;
                    variable91 = r108;
                    variable90 = variable41;
                    variable89 = r106;
                    variable88 = undefined;
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
                    variable73 = sequen;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = echoed;
                    variable69 = verify;
                    if(report) { _fun00008_ip = 5520; continue _fun00007 }
 1536:
                    variable94 = _closure1_slot8;
                    variable93 = variable94.getUpload;
                    report = oscard.channel;
                    variable92 = report.id;
                    report = r111.name;
                    report = variable93.bind(variable94)(variable92, report, update);
                    variable92 = offset == report;
                    variable91 = r108;
                    variable90 = variable41;
                    variable89 = r106;
                    variable88 = undefined;
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
                    variable73 = sequen;
                    variable72 = report;
                    variable71 = source;
                    variable70 = echoed;
                    variable69 = verify;
                    if(variable92) { _fun00008_ip = 5520; continue _fun00007 }
 1646:
                    variable94 = result.length;
                    variable92 = result.push;
                    variable92 = variable92.bind(result)(report);
                    variable93 = vacuum.push;
                    variable92 = {};
                    variable95 = r111.type;
                    variable92['type'] = variable95;
                    variable95 = r111.name;
                    variable92['name'] = variable95;
                    variable92['value'] = variable94;
                    variable92['focused'] = r106;
                    variable92 = variable93.bind(vacuum)(variable92);
                    variable91 = r108;
                    variable90 = variable41;
                    variable89 = r106;
                    variable88 = undefined;
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
                    variable73 = sequen;
                    variable72 = report;
                    variable71 = source;
                    variable70 = echoed;
                    variable69 = verify;
                    _fun00008_ip = 5520; continue _fun00007;
 1773:
                    variable93 = _closure1_slot2;
                    report = _closure1_slot3;
                    variable92 = report[variable50];
                    variable94 = variable93.bind(foxtra)(variable92);
                    variable93 = variable94.filterEmpty;
                    variable92 = r111.name;
                    variable92 = variable68[variable92];
                    r104 = variable93.bind(variable94)(variable92);
                    variable92 = _closure1_slot1;
                    report = report[variable62];
                    variable93 = variable92.bind(foxtra)(report);
                    report = oscard.autocomplete;
                    variable92 = offset != report;
                    if(variable92) { _fun00008_ip = 1845; continue _fun00007 }
 1836:
                    report = r104.length;
                    variable92 = variable45 === report;
 1845:
                    variable94 = r111.name;
                    report = variable65.HermesInternal;
                    report = report.concat;
                    report = report.bind(variable47)(variable94, variable46);
                    report = variable93.bind(foxtra)(variable92, report);
                    report = r104[variable48];
                    if(!(offset == report)) { _fun00008_ip = 1955; continue _fun00007 }
 1881:
                    variable91 = r108;
                    variable90 = variable41;
                    variable89 = r106;
                    variable88 = undefined;
                    variable87 = r104;
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
                    variable73 = sequen;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = echoed;
                    variable69 = verify;
                    if(!r106) { _fun00008_ip = 5520; continue _fun00007 }
 1955:
                    r107 = r104[variable48];
                    r103 = r107;
                    if(!(offset == r107)) { _fun00008_ip = 1980; continue _fun00007 }
 1966:
                    r103 = {'type': 'text', 'text': ''};
 1980:
                    variable92 = r111.type;
                    variable93 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable49];
                    report = variable93.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.CHANNEL;
                    if(!(report !== variable92)) { _fun00008_ip = 4803; continue _fun00007 }
 2021:
                    variable93 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable49];
                    report = variable93.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.ROLE;
                    if(!(report !== variable92)) { _fun00008_ip = 4267; continue _fun00007 }
 2057:
                    variable93 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable49];
                    report = variable93.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.USER;
                    if(!(report !== variable92)) { _fun00008_ip = 3864; continue _fun00007 }
 2093:
                    variable93 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable49];
                    report = variable93.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.MENTIONABLE;
                    if(!(report !== variable92)) { _fun00008_ip = 3115; continue _fun00007 }
 2129:
                    variable93 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable49];
                    report = variable93.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.BOOLEAN;
                    if(!(report !== variable92)) { _fun00008_ip = 2975; continue _fun00007 }
 2165:
                    variable93 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable49];
                    report = variable93.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.INTEGER;
                    if(!(report !== variable92)) { _fun00008_ip = 2632; continue _fun00007 }
 2201:
                    variable93 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable49];
                    report = variable93.bind(foxtra)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.NUMBER;
                    if(!(report !== variable92)) { _fun00008_ip = 2289; continue _fun00007 }
 2234:
                    variable93 = variable65.Error;
                    variable94 = r111.type;
                    report = variable65.HermesInternal;
                    variable92 = report.concat;
                    report = 'Unsupported option type: ';
                    r121 = variable92.bind(report)(variable94);
                    variable92 = variable93.prototype;
                    variable92 = Object.create(variable92, {constructor: {value: variable93}});
                    r122 = variable92;
                    report = new r122[variable93](r121, r120);
                    report = report instanceof Object ? report : variable92;
                    throw report;
 2289:
                    r109 = r103.type;
                    r105 = undefined;
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
                    variable92 = config;
                    report = sequen;
                    if(!(variable57 === r109)) { _fun00008_ip = 5179; continue _fun00007 }
 2342:
                    r110 = r103.text;
                    r109 = r110.trim;
                    r109 = r109.bind(r110)();
                    r110 = r111.choices;
                    if(!(offset == r110)) { _fun00008_ip = 2454; continue _fun00007 }
 2367:
                    r112 = r111.autocomplete;
                    r110 = undefined;
                    if(!r112) { _fun00008_ip = 2489; continue _fun00007 }
 2378:
                    r112 = oscard.autocomplete;
                    if(!(offset != r112)) { _fun00008_ip = 2391; continue _fun00007 }
 2388:
                    if(r106) { _fun00008_ip = 2438; continue _fun00007 }
 2391:
                    r113 = _closure1_slot0;
                    r112 = _closure1_slot3;
                    r112 = r112[variable51];
                    r115 = r113.bind(foxtra)(r112);
                    r114 = r115.findAutocompleteChoiceNumberValue;
                    r112 = oscard.channel;
                    r113 = r112.id;
                    r112 = r111.name;
                    r112 = r114.bind(r115)(r113, r112, r109);
                    _fun00008_ip = 2449; continue _fun00007;
 2438:
                    r113 = oscard.autocomplete;
                    r112 = r113.query;
 2449:
                    r110 = r112;
                    _fun00008_ip = 2489; continue _fun00007;
 2454:
                    r113 = _closure1_slot0;
                    r112 = _closure1_slot3;
                    r112 = r112[variable51];
                    r114 = r113.bind(foxtra)(r112);
                    r113 = r114.findChoiceNumberValue;
                    r112 = r111.choices;
                    r110 = r113.bind(r114)(r112, r109);
 2489:
                    r105 = r110;
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
                    variable92 = config;
                    report = r109;
                    if(!(offset == r105)) { _fun00008_ip = 5179; continue _fun00007 }
 2538:
                    r112 = variable65.Number;
                    r113 = _closure1_slot2;
                    r110 = _closure1_slot3;
                    r110 = r110[variable50];
                    r114 = r113.bind(foxtra)(r110);
                    r113 = r114.normalizeNumericString;
                    r110 = _closure1_slot6;
                    r110 = r110.locale;
                    r110 = r113.bind(r114)(r110, r109);
                    r105 = r112.bind(foxtra)(r110);
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
                    variable92 = config;
                    report = r109;
                    _fun00008_ip = 5179; continue _fun00007;
 2632:
                    r109 = r103.type;
                    r105 = undefined;
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
                    variable92 = config;
                    report = sequen;
                    if(!(variable57 === r109)) { _fun00008_ip = 5179; continue _fun00007 }
 2685:
                    r110 = r103.text;
                    r109 = r110.trim;
                    r109 = r109.bind(r110)();
                    r110 = r111.choices;
                    if(!(offset == r110)) { _fun00008_ip = 2797; continue _fun00007 }
 2710:
                    r112 = r111.autocomplete;
                    r110 = undefined;
                    if(!r112) { _fun00008_ip = 2832; continue _fun00007 }
 2721:
                    r112 = oscard.autocomplete;
                    if(!(offset != r112)) { _fun00008_ip = 2734; continue _fun00007 }
 2731:
                    if(r106) { _fun00008_ip = 2781; continue _fun00007 }
 2734:
                    r113 = _closure1_slot0;
                    r112 = _closure1_slot3;
                    r112 = r112[variable51];
                    r115 = r113.bind(foxtra)(r112);
                    r114 = r115.findAutocompleteChoiceNumberValue;
                    r112 = oscard.channel;
                    r113 = r112.id;
                    r112 = r111.name;
                    r112 = r114.bind(r115)(r113, r112, r109);
                    _fun00008_ip = 2792; continue _fun00007;
 2781:
                    r113 = oscard.autocomplete;
                    r112 = r113.query;
 2792:
                    r110 = r112;
                    _fun00008_ip = 2832; continue _fun00007;
 2797:
                    r113 = _closure1_slot0;
                    r112 = _closure1_slot3;
                    r112 = r112[variable51];
                    r114 = r113.bind(foxtra)(r112);
                    r113 = r114.findChoiceNumberValue;
                    r112 = r111.choices;
                    r110 = r113.bind(r114)(r112, r109);
 2832:
                    r105 = r110;
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
                    variable92 = r109;
                    report = sequen;
                    if(!(offset == r105)) { _fun00008_ip = 5179; continue _fun00007 }
 2881:
                    r112 = variable65.Number;
                    r113 = _closure1_slot2;
                    r110 = _closure1_slot3;
                    r110 = r110[variable50];
                    r114 = r113.bind(foxtra)(r110);
                    r113 = r114.normalizeNumericString;
                    r110 = _closure1_slot6;
                    r110 = r110.locale;
                    r110 = r113.bind(r114)(r110, r109);
                    r105 = r112.bind(foxtra)(r110);
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
                    variable92 = r109;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 2975:
                    r109 = r103.type;
                    r105 = undefined;
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
                    variable92 = config;
                    report = sequen;
                    if(!(variable57 === r109)) { _fun00008_ip = 5179; continue _fun00007 }
 3028:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[variable51];
                    r112 = r110.bind(foxtra)(r109);
                    r110 = r112.toChoiceBooleanValue;
                    r113 = r103.text;
                    r109 = r113.trim;
                    r109 = r109.bind(r113)();
                    r105 = r110.bind(r112)(r109);
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
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 3115:
                    r109 = r103.type;
                    if(!(variable52 !== r109)) { _fun00008_ip = 3815; continue _fun00007 }
 3127:
                    r109 = r103.type;
                    if(!(variable56 !== r109)) { _fun00008_ip = 3765; continue _fun00007 }
 3139:
                    r109 = r103.type;
                    if(!(variable53 === r109)) { _fun00008_ip = 3160; continue _fun00007 }
 3148:
                    r109 = r103.text;
                    if(!(variable54 !== r109)) { _fun00008_ip = 3699; continue _fun00007 }
 3160:
                    r109 = r103.type;
                    r105 = undefined;
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
                    variable92 = config;
                    report = sequen;
                    if(!(variable57 === r109)) { _fun00008_ip = 5179; continue _fun00007 }
 3213:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[variable67];
                    r112 = r110.bind(foxtra)(r109);
                    r110 = r112.isSnowflake;
                    r109 = r103.text;
                    r109 = r110.bind(r112)(r109);
                    if(r109) { _fun00008_ip = 3640; continue _fun00007 }
 3252:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[variable58];
                    r115 = r110.bind(foxtra)(r109);
                    r114 = r115.resolveApplicationCommandOption;
                    r113 = r103.text;
                    r110 = oscard.guild;
                    r109 = offset == r110;
                    r112 = undefined;
                    if(r109) { _fun00008_ip = 3299; continue _fun00007 }
 3294:
                    r112 = r110.id;
 3299:
                    r109 = oscard.channel;
                    r109 = r109.id;
                    r109 = r114.bind(r115)(r113, r112, r109);
                    r113 = offset == r109;
                    r112 = undefined;
                    if(r113) { _fun00008_ip = 3330; continue _fun00007 }
 3325:
                    r112 = r109.type;
 3330:
                    if(!(variable52 !== r112)) { _fun00008_ip = 3591; continue _fun00007 }
 3337:
                    r113 = offset == r109;
                    r112 = undefined;
                    if(r113) { _fun00008_ip = 3351; continue _fun00007 }
 3346:
                    r112 = r109.type;
 3351:
                    if(!(variable56 !== r112)) { _fun00008_ip = 3541; continue _fun00007 }
 3358:
                    r113 = offset == r109;
                    r112 = undefined;
                    if(r113) { _fun00008_ip = 3372; continue _fun00007 }
 3367:
                    r112 = r109.type;
 3372:
                    if(!(variable53 === r112)) { _fun00008_ip = 3385; continue _fun00007 }
 3376:
                    r112 = r109.text;
                    if(!(variable54 !== r112)) { _fun00008_ip = 3475; continue _fun00007 }
 3385:
                    r113 = _closure1_slot1;
                    r112 = _closure1_slot3;
                    r112 = r112[variable62];
                    r113 = r113.bind(foxtra)(r112);
                    r114 = r103.text;
                    r112 = variable65.HermesInternal;
                    r112 = r112.concat;
                    r112 = r112.bind(variable60)(r114);
                    r112 = r113.bind(foxtra)(variable55, r112);
                    r105 = undefined;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = r110;
                    variable94 = r109;
                    variable93 = record;
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 3475:
                    r112 = oscard.guild;
                    r114 = offset == r112;
                    r113 = undefined;
                    if(r114) { _fun00008_ip = 3494; continue _fun00007 }
 3489:
                    r113 = r112.id;
 3494:
                    r105 = r113;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = r110;
                    variable94 = r109;
                    variable93 = r112;
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 3541:
                    r105 = r109.roleId;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = r110;
                    variable94 = r109;
                    variable93 = record;
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 3591:
                    r105 = r109.userId;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = r110;
                    variable94 = r109;
                    variable93 = record;
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 3640:
                    r110 = r103.text;
                    r109 = r110.trim;
                    r105 = r109.bind(r110)();
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
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 3699:
                    r109 = oscard.guild;
                    r112 = offset == r109;
                    r110 = undefined;
                    if(r112) { _fun00008_ip = 3718; continue _fun00007 }
 3713:
                    r110 = r109.id;
 3718:
                    r105 = r110;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = r109;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 3765:
                    r105 = r103.roleId;
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
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 3815:
                    r105 = r103.userId;
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
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 3864:
                    r109 = r103.type;
                    if(!(variable52 !== r109)) { _fun00008_ip = 4218; continue _fun00007 }
 3876:
                    r109 = r103.type;
                    r105 = undefined;
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
                    variable92 = config;
                    report = sequen;
                    if(!(variable57 === r109)) { _fun00008_ip = 5179; continue _fun00007 }
 3929:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[variable67];
                    r112 = r110.bind(foxtra)(r109);
                    r110 = r112.isSnowflake;
                    r109 = r103.text;
                    r109 = r110.bind(r112)(r109);
                    if(r109) { _fun00008_ip = 4159; continue _fun00007 }
 3968:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[variable58];
                    r116 = r110.bind(foxtra)(r109);
                    r115 = r116.resolveApplicationCommandOption;
                    r114 = r103.text;
                    r110 = oscard.guild;
                    r109 = offset == r110;
                    r113 = undefined;
                    if(r109) { _fun00008_ip = 4015; continue _fun00007 }
 4010:
                    r113 = r110.id;
 4015:
                    r109 = oscard.channel;
                    r119 = r109.id;
                    r109 = {};
                    r109['allowRoles'] = variable55;
                    r122 = r116;
                    r121 = r114;
                    r120 = r113;
                    r118 = r109;
                    r109 = r122[r115](r121, r120, r119, r118, r117);
                    r113 = _closure1_slot1;
                    r112 = _closure1_slot3;
                    r112 = r112[variable62];
                    r114 = r113.bind(foxtra)(r112);
                    r113 = offset == r109;
                    r112 = undefined;
                    if(r113) { _fun00008_ip = 4079; continue _fun00007 }
 4074:
                    r112 = r109.type;
 4079:
                    r115 = r103.text;
                    r113 = variable65.HermesInternal;
                    r113 = r113.concat;
                    r113 = r113.bind(variable60)(r115);
                    r112 = variable52 === r112;
                    r112 = r114.bind(foxtra)(r112, r113);
                    r105 = r109.userId;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = r110;
                    variable97 = r109;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 4159:
                    r110 = r103.text;
                    r109 = r110.trim;
                    r105 = r109.bind(r110)();
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
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 4218:
                    r105 = r103.userId;
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
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 4267:
                    r109 = r103.type;
                    if(!(variable56 !== r109)) { _fun00008_ip = 4753; continue _fun00007 }
 4279:
                    r109 = r103.type;
                    if(!(variable57 !== r109)) { _fun00008_ip = 4463; continue _fun00007 }
 4291:
                    r109 = r103.type;
                    r105 = undefined;
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
                    variable92 = config;
                    report = sequen;
                    if(!(variable53 === r109)) { _fun00008_ip = 5179; continue _fun00007 }
 4344:
                    r109 = r103.text;
                    r105 = undefined;
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
                    variable92 = config;
                    report = sequen;
                    if(!(variable54 === r109)) { _fun00008_ip = 5179; continue _fun00007 }
 4397:
                    r109 = oscard.guild;
                    r112 = offset == r109;
                    r110 = undefined;
                    if(r112) { _fun00008_ip = 4416; continue _fun00007 }
 4411:
                    r110 = r109.id;
 4416:
                    r105 = r110;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = r109;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 4463:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[variable67];
                    r112 = r110.bind(foxtra)(r109);
                    r110 = r112.isSnowflake;
                    r109 = r103.text;
                    r109 = r110.bind(r112)(r109);
                    if(r109) { _fun00008_ip = 4694; continue _fun00007 }
 4502:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[variable58];
                    r116 = r110.bind(foxtra)(r109);
                    r115 = r116.resolveApplicationCommandOption;
                    r114 = r103.text;
                    r110 = oscard.guild;
                    r109 = offset == r110;
                    r113 = undefined;
                    if(r109) { _fun00008_ip = 4549; continue _fun00007 }
 4544:
                    r113 = r110.id;
 4549:
                    r109 = oscard.channel;
                    r119 = r109.id;
                    r109 = {};
                    r109['allowUsers'] = variable55;
                    r122 = r116;
                    r121 = r114;
                    r120 = r113;
                    r118 = r109;
                    r109 = r122[r115](r121, r120, r119, r118, r117);
                    r113 = _closure1_slot1;
                    r112 = _closure1_slot3;
                    r112 = r112[variable62];
                    r114 = r113.bind(foxtra)(r112);
                    r113 = offset == r109;
                    r112 = undefined;
                    if(r113) { _fun00008_ip = 4613; continue _fun00007 }
 4608:
                    r112 = r109.type;
 4613:
                    r115 = r103.text;
                    r113 = variable65.HermesInternal;
                    r113 = r113.concat;
                    r113 = r113.bind(variable60)(r115);
                    r112 = variable56 === r112;
                    r112 = r114.bind(foxtra)(r112, r113);
                    r105 = r109.roleId;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = r110;
                    variable100 = r109;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 4694:
                    r110 = r103.text;
                    r109 = r110.trim;
                    r105 = r109.bind(r110)();
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
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 4753:
                    r105 = r103.roleId;
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
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 4803:
                    r109 = r103.type;
                    if(!(variable59 !== r109)) { _fun00008_ip = 5135; continue _fun00007 }
 4815:
                    r109 = r103.type;
                    r105 = undefined;
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
                    variable92 = config;
                    report = sequen;
                    if(!(variable57 === r109)) { _fun00008_ip = 5179; continue _fun00007 }
 4868:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[variable67];
                    r112 = r110.bind(foxtra)(r109);
                    r110 = r112.isSnowflake;
                    r109 = r103.text;
                    r109 = r110.bind(r112)(r109);
                    if(r109) { _fun00008_ip = 5079; continue _fun00007 }
 4907:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[variable58];
                    r115 = r110.bind(foxtra)(r109);
                    r114 = r115.resolveApplicationCommandOption;
                    r113 = r103.text;
                    r110 = oscard.guild;
                    r109 = offset == r110;
                    r112 = undefined;
                    if(r109) { _fun00008_ip = 4954; continue _fun00007 }
 4949:
                    r112 = r110.id;
 4954:
                    r109 = oscard.channel;
                    r109 = r109.id;
                    r109 = r114.bind(r115)(r113, r112, r109);
                    r113 = _closure1_slot1;
                    r112 = _closure1_slot3;
                    r112 = r112[variable62];
                    r114 = r113.bind(foxtra)(r112);
                    r113 = offset == r109;
                    r112 = undefined;
                    if(r113) { _fun00008_ip = 5002; continue _fun00007 }
 4997:
                    r112 = r109.type;
 5002:
                    r115 = r103.text;
                    r113 = variable65.HermesInternal;
                    r113 = r113.concat;
                    r113 = r113.bind(variable60)(r115);
                    r112 = variable59 === r112;
                    r112 = r114.bind(foxtra)(r112, r113);
                    r105 = r109.channelId;
                    r102 = r110;
                    r101 = r109;
                    r100 = equals;
                    variable100 = whisks;
                    variable99 = limora;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papara;
                    variable94 = cntext;
                    variable93 = record;
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 5079:
                    r110 = r103.text;
                    r109 = r110.trim;
                    r105 = r109.bind(r110)();
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
                    variable92 = config;
                    report = sequen;
                    _fun00008_ip = 5179; continue _fun00007;
 5135:
                    r105 = r103.channelId;
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
                    variable92 = config;
                    report = sequen;
 5179:
                    r109 = variable61 !== r105;
                    if(r109) { _fun00008_ip = 5196; continue _fun00007 }
 5186:
                    r110 = oscard.autocomplete;
                    r109 = offset == r110;
 5196:
                    if(r109) { _fun00008_ip = 5202; continue _fun00007 }
 5199:
                    r109 = r106;
 5202:
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
                    variable74 = variable92;
                    variable73 = report;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = echoed;
                    variable69 = verify;
                    if(!r109) { _fun00008_ip = 5520; continue _fun00007 }
 5277:
                    r110 = _closure1_slot1;
                    r109 = _closure1_slot3;
                    r109 = r109[variable62];
                    r112 = r110.bind(foxtra)(r109);
                    r109 = oscard.autocomplete;
                    r110 = offset != r109;
                    if(r110) { _fun00008_ip = 5311; continue _fun00007 }
 5307:
                    r110 = offset != r105;
 5311:
                    r113 = r111.name;
                    r109 = variable65.HermesInternal;
                    r109 = r109.concat;
                    r109 = r109.bind(variable64)(r113, variable63);
                    r109 = r112.bind(foxtra)(r110, r109);
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
                    variable74 = variable92;
                    variable73 = report;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = echoed;
                    variable69 = verify;
                    if(!(offset != r105)) { _fun00008_ip = 5520; continue _fun00007 }
 5412:
                    r110 = vacuum.push;
                    r109 = {};
                    r112 = r111.type;
                    r109['type'] = r112;
                    r111 = r111.name;
                    r109['name'] = r111;
                    r109['value'] = r105;
                    r109['focused'] = r106;
                    r109 = r110.bind(vacuum)(r109);
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
                    variable74 = variable92;
                    variable73 = report;
                    variable72 = ctrled;
                    variable71 = source;
                    variable70 = echoed;
                    variable69 = verify;
 5520:
                    variable92 = variable66.bind(foxtra)();
                    report = variable92.done;
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
                    sequen = variable73;
                    ctrled = variable72;
                    source = variable71;
                    echoed = variable70;
                    verify = variable69;
                    variable43 = variable92;
                    if(!report) { _fun00008_ip = 558; continue _fun00007 }
 5607:
                    verify = golfie.subCommandPath;
                    report = vacuum;
                    if(!(offset != verify)) { _fun00008_ip = 5706; continue _fun00007 }
 5620:
                    verify = golfie.subCommandPath;
                    verify = verify.length;
                    ctrled = 1;
                    source = verify - ctrled;
                    echoed = 0;
                    verify = vacuum;
                    report = verify;
                    if(!(source >= echoed)) { _fun00008_ip = 5706; continue _fun00007 }
 5650:
                    vacuum = golfie.subCommandPath;
                    config = vacuum[source];
                    vacuum = config.name;
                    sequen = {};
                    config = config.type;
                    sequen['type'] = config;
                    sequen['name'] = vacuum;
                    sequen['options'] = verify;
                    vacuum = new Array(1);
                    vacuum[0] = sequen;
                    source = source - ctrled;
                    verify = vacuum;
                    report = verify;
                    if(source >= echoed) { _fun00008_ip = 5650; continue _fun00007 }
 5706:
                    verify = golfie.execute;
                    if(!(offset == verify)) { _fun00008_ip = 6160; continue _fun00007 }
 5719:
                    echoed = golfie.inputType;
                    source = _closure1_slot0;
                    verify = _closure1_slot3;
                    ctrled = 9;
                    verify = verify[ctrled];
                    verify = source.bind(foxtra)(verify);
                    verify = verify.ApplicationCommandInputType;
                    verify = verify.BUILT_IN;
                    if(!(echoed !== verify)) { _fun00008_ip = 6157; continue _fun00007 }
 5764:
                    echoed = golfie.inputType;
                    source = _closure1_slot0;
                    verify = _closure1_slot3;
                    verify = verify[ctrled];
                    verify = source.bind(foxtra)(verify);
                    verify = verify.ApplicationCommandInputType;
                    verify = verify.BUILT_IN_TEXT;
                    if(!(echoed !== verify)) { _fun00008_ip = 6157; continue _fun00007 }
 5806:
                    echoed = golfie.inputType;
                    source = _closure1_slot0;
                    verify = _closure1_slot3;
                    verify = verify[ctrled];
                    verify = source.bind(foxtra)(verify);
                    verify = verify.ApplicationCommandInputType;
                    verify = verify.BUILT_IN_INTEGRATION;
                    if(!(echoed !== verify)) { _fun00008_ip = 6157; continue _fun00007 }
 5848:
                    verify = {};
                    echoed = golfie.version;
                    verify['version'] = echoed;
                    source = golfie.rootCommand;
                    ctrled = offset == source;
                    echoed = undefined;
                    if(ctrled) { _fun00008_ip = 5881; continue _fun00007 }
 5876:
                    echoed = source.id;
 5881:
                    if(!(offset == echoed)) { _fun00008_ip = 5890; continue _fun00007 }
 5885:
                    echoed = golfie.id;
 5890:
                    verify['id'] = echoed;
                    echoed = golfie.guildId;
                    verify['guild_id'] = echoed;
                    source = golfie.rootCommand;
                    ctrled = offset == source;
                    echoed = undefined;
                    if(ctrled) { _fun00008_ip = 5923; continue _fun00007 }
 5918:
                    echoed = source.name;
 5923:
                    if(!(offset == echoed)) { _fun00008_ip = 5933; continue _fun00007 }
 5927:
                    echoed = golfie.untranslatedName;
 5933:
                    verify['name'] = echoed;
                    echoed = golfie.type;
                    verify['type'] = echoed;
                    verify['options'] = report;
                    echoed = golfie.rootCommand;
                    verify['application_command'] = echoed;
                    if(!(offset != option)) { _fun00008_ip = 5971; continue _fun00007 }
 5965:
                    verify['target_id'] = option;
 5971:
                    option = oscard.autocomplete;
                    if(!(offset == option)) { _fun00008_ip = 6124; continue _fun00007 }
 5984:
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
                    SaveGenerator(address=6103);
 6101:
                    return tangon;
 6103:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=14);
                    if(kiloes) { _fun00008_ip = 6121; continue _fun00007 }
 6109:
                    option['interactionLifecycleOptions'] = tangon;
                    option = offset.bind(foxtra)(option);
                    _fun00008_ip = 6157; continue _fun00007;
 6121:
                    return tangon;
 6124:
                    option = _closure1_slot0;
                    offset = _closure1_slot3;
                    tangon = 19;
                    tangon = offset[tangon];
                    option = option.bind(foxtra)(tangon);
                    tangon = option.performAutocomplete;
                    tangon = tangon.bind(option)(golfie, oscard, verify);
 6157:
                    return foxtra;
 6160:
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
 6266:
                    return zuuluu;
 6269:
                    return michal;
 6272:
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
                    if(zuuluu) { _fun00022_ip = 476; continue _fun00021 }
 18:
                    backup = option;
                    golfie = michal;
                    var _closure4_slot0 = michal;
                    michal = argCor;
                    var _closure4_slot1 = michal;
                    oscard = undefined;
                    var _closure4_slot2 = oscard;
                    report = undefined;
                    yankee = undefined;
                    tangon = undefined;
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
                    if(option) { _fun00022_ip = 473; continue _fun00021 }
 118:
                    yankee = michal.totalSize;
                    verify = michal.largestUploadedFileSize;
                    tangon = verify;
                    option = global;
                    kiloes = option.Math;
                    foxtra = kiloes.max;
                    option = _closure1_slot15;
                    option = foxtra.bind(kiloes)(sizing, option);
                    if(!(!(verify > option))) { _fun00022_ip = 465; continue _fun00021 }
 163:
                    verify = yankee;
                    kiloes = _closure1_slot0;
                    option = _closure1_slot3;
                    foxtra = 33;
                    option = option[foxtra];
                    option = kiloes.bind(oscard)(option);
                    option = option.MAX_TOTAL_ATTACHMENT_SIZE;
                    if(!(!(verify > option))) { _fun00022_ip = 465; continue _fun00021 }
 199: // try_start_0
                    verify = _closure1_slot1;
                    kiloes = _closure1_slot3;
                    option = 34;
                    option = kiloes[option];
                    verify = verify.bind(oscard)(option);
                    option = backup;
                    option = verify.bind(oscard)(option);
                    SaveGenerator(address=231);
 229:
                    return option;
 231:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00022_ip = 239; continue _fun00021 }
 237: // try_end0
                    _fun00022_ip = 348; continue _fun00021;
 239:
                    return option;
 242: // catch_target0
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
 348:
                    verify = _closure1_slot25;
                    option = backup;
                    golfie = true;
                    golfie = verify.bind(oscard)(option, golfie);
                    SaveGenerator(address=367);
 365:
                    return golfie;
 367:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00022_ip = 462; continue _fun00021 }
 373:
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
                    if(romeon) { _fun00022_ip = 437; continue _fun00021 }
 410:
                    romeon = _closure1_slot0;
                    offset = _closure1_slot3;
                    offset = offset[foxtra];
                    offset = romeon.bind(oscard)(offset);
                    offset = offset.MAX_TOTAL_ATTACHMENT_SIZE;
                    verify = yankee > offset;
 437:
                    verify = !verify;
                    option = verify;
                    if(verify) { _fun00022_ip = 459; continue _fun00021 }
 446:
                    offset = report;
                    verify = tangon;
                    verify = offset.bind(oscard)(verify);
                    option = false;
 459:
                    return option;
 462:
                    return golfie;
 465:
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 473:
                    return michal;
 476:
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