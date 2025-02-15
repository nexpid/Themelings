// app/modules/application_commands/executeCommand.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun70878: for(var _fun70878_ip = 0; ; ) switch(_fun70878_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun70878_ip = 46; continue _fun70878 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun70878_ip = 55; continue _fun70878 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun70878_ip = 345; continue _fun70878 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun70878_ip = 323; continue _fun70878 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun70878_ip = 283; continue _fun70878 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun70878_ip = 270; continue _fun70878 }
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
            if(!golf) { _fun70878_ip = 163; continue _fun70878 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun70878_ip = 179; continue _fun70878 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun70878_ip = 249; continue _fun70878 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun70878_ip = 249; continue _fun70878 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun70878_ip = 234; continue _fun70878 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun70878_ip = 247; continue _fun70878 }
 234:
            verify = _closure1_slot19;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun70878_ip = 265; continue _fun70878;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun70878_ip = 283; continue _fun70878;
 270:
            golf = _closure1_slot19;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun70878_ip = 323; continue _fun70878 }
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
            if(!tango) { _fun70878_ip = 330; continue _fun70878 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun70879: for(var _fun70879_ip = 0; ; ) switch(_fun70879_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun70879_ip = 56; continue _fun70879 }
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
                    _fun70879_ip = 67; continue _fun70879;
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
 345:
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
        _fun70880: for(var _fun70880_ip = 0; ; ) switch(_fun70880_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun70880_ip = 23; continue _fun70880 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun70880_ip = 33; continue _fun70880 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun70880_ip = 70; continue _fun70880 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun70880_ip = 55; continue _fun70880 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _executeCommand
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun70883: for(var _fun70883_ip = 0; ; ) switch(_fun70883_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun70883_ip = 6291; continue _fun70883 }
 15:
                    golf = mike.command;
                    variable69 = mike.optionValues;
                    var _closure4_slot0 = variable69;
                    oscar = mike.context;
                    echo = mike.commandTargetId;
                    output = mike.maxSizeCallback;
                    backup = mike.commandOrigin;
                    foxtrot = undefined;
                    if(!(backup === foxtrot)) { _fun70883_ip = 95; continue _fun70883 }
 60:
                    report = _closure1_slot0;
                    options = _closure1_slot3;
                    tango = 9;
                    tango = options[tango];
                    tango = report.bind(foxtrot)(tango);
                    tango = tango.CommandOrigin;
                    backup = tango.CHAT;
 95:
                    kilo = mike.sectionName;
                    tango = mike.interactionLifecycleOptionsFactory;
                    if(!(tango === foxtrot)) { _fun70883_ip = 118; continue _fun70883 }
 111:
                    tango = _closure1_slot22;
 118:
                    yankee = mike.source;
                    options = mike.clientSupportsContextlessActivityLaunch;
                    SaveGenerator(address=133);
 131:
                    return foxtrot;
 133:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun70883_ip = 6288; continue _fun70883 }
 142:
                    zulu = oscar.channel;
                    offset = null;
                    if(!(offset != zulu)) { _fun70883_ip = 6176; continue _fun70883 }
 156:
                    verify = _closure1_slot10;
                    report = verify.getSource;
                    zulu = oscar.channel;
                    zulu = zulu.id;
                    zulu = report.bind(verify)(zulu);
                    if(!(offset != zulu)) { _fun70883_ip = 191; continue _fun70883 }
 188:
                    yankee = zulu;
 191:
                    verify = _closure1_slot10;
                    report = verify.getCommandOrigin;
                    zulu = oscar.channel;
                    zulu = zulu.id;
                    zulu = report.bind(verify)(zulu);
                    if(!(offset != zulu)) { _fun70883_ip = 225; continue _fun70883 }
 222:
                    backup = zulu;
 225:
                    zulu = oscar.autocomplete;
                    if(!(offset == zulu)) { _fun70883_ip = 289; continue _fun70883 }
 235:
                    report = _closure1_slot1;
                    verify = _closure1_slot3;
                    zulu = 10;
                    zulu = verify[zulu];
                    verify = report.bind(foxtrot)(zulu);
                    report = verify.dispatch;
                    zulu = {};
                    result = 'APPLICATION_COMMAND_USED';
                    zulu['type'] = result;
                    zulu['context'] = oscar;
                    zulu['command'] = golf;
                    zulu['commandOrigin'] = backup;
                    zulu = report.bind(verify)(zulu);
 289:
                    report = _closure1_slot1;
                    verify = _closure1_slot3;
                    zulu = 11;
                    zulu = verify[zulu];
                    verify = report.bind(foxtrot)(zulu);
                    report = verify.unarchiveThreadIfNecessary;
                    zulu = oscar.channel;
                    zulu = zulu.id;
                    zulu = report.bind(verify)(zulu);
                    SaveGenerator(address=334);
 332:
                    return zulu;
 334:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun70883_ip = 6285; continue _fun70883 }
 343:
                    sequence = new Array(0);
                    result = new Array(0);
                    verify = _closure1_slot0;
                    report = _closure1_slot3;
                    variable68 = 12;
                    report = report[variable68];
                    verify = verify.bind(foxtrot)(report);
                    report = verify.getCommandAttachmentDraftType;
                    update = report.bind(verify)(backup);
                    report = golf.options;
                    if(!(offset != report)) { _fun70883_ip = 5611; continue _fun70883 }
 394:
                    verify = _closure1_slot18;
                    report = golf.options;
                    variable67 = verify.bind(foxtrot)(report);
                    verify = variable67.bind(foxtrot)();
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
                    equality = undefined;
                    whiskey = undefined;
                    lima = undefined;
                    sierra = undefined;
                    status = undefined;
                    target = undefined;
                    papa = undefined;
                    context = undefined;
                    record = undefined;
                    config = undefined;
                    vacuum = undefined;
                    control = undefined;
                    source = undefined;
                    verify = undefined;
                    if(report) { _fun70883_ip = 5611; continue _fun70883 }
 564:
                    r112 = variable44.value;
                    variable93 = r112.type;
                    variable70 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable70.bind(foxtrot)(report);
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
                    variable83 = equality;
                    variable82 = whiskey;
                    variable81 = lima;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papa;
                    variable76 = context;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = control;
                    variable71 = source;
                    variable70 = verify;
                    if(!(variable93 !== report)) { _fun70883_ip = 5524; continue _fun70883 }
 679:
                    variable93 = r112.type;
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtrot)(report);
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
                    variable83 = equality;
                    variable82 = whiskey;
                    variable81 = lima;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papa;
                    variable76 = context;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = control;
                    variable71 = source;
                    variable70 = verify;
                    if(!(variable93 !== report)) { _fun70883_ip = 5524; continue _fun70883 }
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
                    variable83 = equality;
                    variable82 = whiskey;
                    variable81 = lima;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papa;
                    variable76 = context;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = control;
                    variable71 = source;
                    variable70 = verify;
                    if(!report) { _fun70883_ip = 5524; continue _fun70883 }
 873:
                    r109 = oscar.autocomplete;
                    report = offset == r109;
                    variable93 = undefined;
                    if(report) { _fun70883_ip = 893; continue _fun70883 }
 888:
                    variable93 = r109.name;
 893:
                    report = r112.name;
                    r107 = variable93 === report;
                    if(r107) { _fun70883_ip = 907; continue _fun70883 }
 905:
                    r107 = undefined;
 907:
                    variable93 = r112.type;
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtrot)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.STRING;
                    if(!(variable93 === report)) { _fun70883_ip = 1417; continue _fun70883 }
 948:
                    variable93 = _closure1_slot2;
                    report = _closure1_slot3;
                    report = report[variable51];
                    variable94 = variable93.bind(foxtrot)(report);
                    variable93 = variable94.getOptionalString;
                    report = r112.name;
                    variable93 = variable93.bind(variable94)(variable69, report);
                    report = offset == variable93;
                    variable94 = undefined;
                    if(report) { _fun70883_ip = 1001; continue _fun70883 }
 991:
                    report = variable93.trim;
                    variable94 = report.bind(variable93)();
 1001:
                    variable95 = offset != variable94;
                    report = variable62;
                    if(!variable95) { _fun70883_ip = 1014; continue _fun70883 }
 1011:
                    report = variable94;
 1014:
                    variable95 = r112.choices;
                    if(!(offset == variable95)) { _fun70883_ip = 1111; continue _fun70883 }
 1024:
                    variable96 = r112.autocomplete;
                    variable95 = undefined;
                    if(!variable96) { _fun70883_ip = 1146; continue _fun70883 }
 1035:
                    variable96 = oscar.autocomplete;
                    if(!(offset != variable96)) { _fun70883_ip = 1048; continue _fun70883 }
 1045:
                    if(r107) { _fun70883_ip = 1095; continue _fun70883 }
 1048:
                    variable97 = _closure1_slot0;
                    variable96 = _closure1_slot3;
                    variable96 = variable96[variable52];
                    variable99 = variable97.bind(foxtrot)(variable96);
                    variable98 = variable99.findAutocompleteChoiceStringValue;
                    variable96 = oscar.channel;
                    variable97 = variable96.id;
                    variable96 = r112.name;
                    variable96 = variable98.bind(variable99)(variable97, variable96, report);
                    _fun70883_ip = 1106; continue _fun70883;
 1095:
                    variable97 = oscar.autocomplete;
                    variable96 = variable97.query;
 1106:
                    variable95 = variable96;
                    _fun70883_ip = 1146; continue _fun70883;
 1111:
                    variable97 = _closure1_slot0;
                    variable96 = _closure1_slot3;
                    variable96 = variable96[variable52];
                    variable98 = variable97.bind(foxtrot)(variable96);
                    variable97 = variable98.findChoiceStringValue;
                    variable96 = r112.choices;
                    variable95 = variable97.bind(variable98)(variable96, report);
 1146:
                    if(!(offset == variable95)) { _fun70883_ip = 1153; continue _fun70883 }
 1150:
                    variable95 = report;
 1153:
                    if(!(variable62 === variable95)) { _fun70883_ip = 1242; continue _fun70883 }
 1157:
                    variable96 = oscar.autocomplete;
                    if(!(offset != variable96)) { _fun70883_ip = 1242; continue _fun70883 }
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
                    variable83 = equality;
                    variable82 = whiskey;
                    variable81 = lima;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papa;
                    variable76 = context;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = variable94;
                    variable71 = variable93;
                    variable70 = report;
                    if(!r107) { _fun70883_ip = 5524; continue _fun70883 }
 1242:
                    variable97 = _closure1_slot1;
                    variable96 = _closure1_slot3;
                    variable96 = variable96[variable63];
                    variable98 = variable97.bind(foxtrot)(variable96);
                    variable96 = oscar.autocomplete;
                    variable97 = offset != variable96;
                    if(variable97) { _fun70883_ip = 1276; continue _fun70883 }
 1272:
                    variable97 = offset != variable95;
 1276:
                    variable99 = r112.name;
                    variable96 = variable66.HermesInternal;
                    variable96 = variable96.concat;
                    variable96 = variable96.bind(variable48)(variable99, variable45);
                    variable96 = variable98.bind(foxtrot)(variable97, variable96);
                    variable97 = sequence.push;
                    variable96 = {};
                    variable98 = r112.type;
                    variable96['type'] = variable98;
                    variable98 = r112.name;
                    variable96['name'] = variable98;
                    variable96['value'] = variable95;
                    variable96['focused'] = r107;
                    variable96 = variable97.bind(sequence)(variable96);
                    variable92 = r109;
                    variable91 = variable42;
                    variable90 = r107;
                    variable89 = variable95;
                    variable88 = variable39;
                    variable87 = variable38;
                    variable86 = variable37;
                    variable85 = variable36;
                    variable84 = quebec;
                    variable83 = equality;
                    variable82 = whiskey;
                    variable81 = lima;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papa;
                    variable76 = context;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = variable94;
                    variable71 = variable93;
                    variable70 = report;
                    _fun70883_ip = 5524; continue _fun70883;
 1417:
                    variable93 = r112.type;
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtrot)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.ATTACHMENT;
                    if(!(variable93 === report)) { _fun70883_ip = 1779; continue _fun70883 }
 1458:
                    report = oscar.autocomplete;
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
                    variable83 = equality;
                    variable82 = whiskey;
                    variable81 = lima;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papa;
                    variable76 = context;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = control;
                    variable71 = source;
                    variable70 = verify;
                    if(report) { _fun70883_ip = 5524; continue _fun70883 }
 1542:
                    variable95 = _closure1_slot8;
                    variable94 = variable95.getUpload;
                    report = oscar.channel;
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
                    variable83 = equality;
                    variable82 = whiskey;
                    variable81 = lima;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papa;
                    variable76 = context;
                    variable75 = record;
                    variable74 = config;
                    variable73 = report;
                    variable72 = control;
                    variable71 = source;
                    variable70 = verify;
                    if(variable93) { _fun70883_ip = 5524; continue _fun70883 }
 1652:
                    variable95 = result.length;
                    variable93 = result.push;
                    variable93 = variable93.bind(result)(report);
                    variable94 = sequence.push;
                    variable93 = {};
                    variable96 = r112.type;
                    variable93['type'] = variable96;
                    variable96 = r112.name;
                    variable93['name'] = variable96;
                    variable93['value'] = variable95;
                    variable93['focused'] = r107;
                    variable93 = variable94.bind(sequence)(variable93);
                    variable92 = r109;
                    variable91 = variable42;
                    variable90 = r107;
                    variable89 = undefined;
                    variable88 = variable39;
                    variable87 = variable38;
                    variable86 = variable37;
                    variable85 = variable36;
                    variable84 = quebec;
                    variable83 = equality;
                    variable82 = whiskey;
                    variable81 = lima;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papa;
                    variable76 = context;
                    variable75 = record;
                    variable74 = config;
                    variable73 = report;
                    variable72 = control;
                    variable71 = source;
                    variable70 = verify;
                    _fun70883_ip = 5524; continue _fun70883;
 1779:
                    variable94 = _closure1_slot2;
                    report = _closure1_slot3;
                    variable93 = report[variable51];
                    variable95 = variable94.bind(foxtrot)(variable93);
                    variable94 = variable95.filterEmpty;
                    variable93 = r112.name;
                    variable93 = variable69[variable93];
                    r105 = variable94.bind(variable95)(variable93);
                    variable93 = _closure1_slot1;
                    report = report[variable63];
                    variable94 = variable93.bind(foxtrot)(report);
                    report = oscar.autocomplete;
                    variable93 = offset != report;
                    if(variable93) { _fun70883_ip = 1851; continue _fun70883 }
 1842:
                    report = r105.length;
                    variable93 = variable46 === report;
 1851:
                    variable95 = r112.name;
                    report = variable66.HermesInternal;
                    report = report.concat;
                    report = report.bind(variable48)(variable95, variable47);
                    report = variable94.bind(foxtrot)(variable93, report);
                    report = r105[variable49];
                    if(!(offset == report)) { _fun70883_ip = 1961; continue _fun70883 }
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
                    variable83 = equality;
                    variable82 = whiskey;
                    variable81 = lima;
                    variable80 = sierra;
                    variable79 = status;
                    variable78 = target;
                    variable77 = papa;
                    variable76 = context;
                    variable75 = record;
                    variable74 = config;
                    variable73 = vacuum;
                    variable72 = control;
                    variable71 = source;
                    variable70 = verify;
                    if(!r107) { _fun70883_ip = 5524; continue _fun70883 }
 1961:
                    r108 = r105[variable49];
                    r104 = r108;
                    if(!(offset == r108)) { _fun70883_ip = 1986; continue _fun70883 }
 1972:
                    r104 = {'type': 'text', 'text': ''};
 1986:
                    variable93 = r112.type;
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtrot)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.CHANNEL;
                    if(!(report !== variable93)) { _fun70883_ip = 4807; continue _fun70883 }
 2027:
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtrot)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.ROLE;
                    if(!(report !== variable93)) { _fun70883_ip = 4271; continue _fun70883 }
 2063:
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtrot)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.USER;
                    if(!(report !== variable93)) { _fun70883_ip = 3868; continue _fun70883 }
 2099:
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtrot)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.MENTIONABLE;
                    if(!(report !== variable93)) { _fun70883_ip = 3119; continue _fun70883 }
 2135:
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtrot)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.BOOLEAN;
                    if(!(report !== variable93)) { _fun70883_ip = 2979; continue _fun70883 }
 2171:
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtrot)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.INTEGER;
                    if(!(report !== variable93)) { _fun70883_ip = 2637; continue _fun70883 }
 2207:
                    variable94 = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[variable50];
                    report = variable94.bind(foxtrot)(report);
                    report = report.ApplicationCommandOptionType;
                    report = report.NUMBER;
                    if(!(report !== variable93)) { _fun70883_ip = 2295; continue _fun70883 }
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
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    if(!(variable58 === r110)) { _fun70883_ip = 5183; continue _fun70883 }
 2348:
                    r111 = r104.text;
                    r110 = r111.trim;
                    r110 = r110.bind(r111)();
                    r111 = r112.choices;
                    if(!(offset == r111)) { _fun70883_ip = 2460; continue _fun70883 }
 2373:
                    r113 = r112.autocomplete;
                    r111 = undefined;
                    if(!r113) { _fun70883_ip = 2495; continue _fun70883 }
 2384:
                    r113 = oscar.autocomplete;
                    if(!(offset != r113)) { _fun70883_ip = 2397; continue _fun70883 }
 2394:
                    if(r107) { _fun70883_ip = 2444; continue _fun70883 }
 2397:
                    r114 = _closure1_slot0;
                    r113 = _closure1_slot3;
                    r113 = r113[variable52];
                    r116 = r114.bind(foxtrot)(r113);
                    r115 = r116.findAutocompleteChoiceNumberValue;
                    r113 = oscar.channel;
                    r114 = r113.id;
                    r113 = r112.name;
                    r113 = r115.bind(r116)(r114, r113, r110);
                    _fun70883_ip = 2455; continue _fun70883;
 2444:
                    r114 = oscar.autocomplete;
                    r113 = r114.query;
 2455:
                    r111 = r113;
                    _fun70883_ip = 2495; continue _fun70883;
 2460:
                    r114 = _closure1_slot0;
                    r113 = _closure1_slot3;
                    r113 = r113[variable52];
                    r115 = r114.bind(foxtrot)(r113);
                    r114 = r115.findChoiceNumberValue;
                    r113 = r112.choices;
                    r111 = r114.bind(r115)(r113, r110);
 2495:
                    r106 = r111;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = r110;
                    if(!(offset == r106)) { _fun70883_ip = 5183; continue _fun70883 }
 2544:
                    r113 = variable66.Number;
                    r114 = _closure1_slot2;
                    r111 = _closure1_slot3;
                    r111 = r111[variable51];
                    r115 = r114.bind(foxtrot)(r111);
                    r114 = r115.normalizeNumericString;
                    r111 = _closure1_slot6;
                    r111 = r111.locale;
                    r111 = r114.bind(r115)(r111, r110);
                    r106 = r113.bind(foxtrot)(r111);
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = r110;
                    _fun70883_ip = 5183; continue _fun70883;
 2637:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    if(!(variable58 === r110)) { _fun70883_ip = 5183; continue _fun70883 }
 2690:
                    r111 = r104.text;
                    r110 = r111.trim;
                    r110 = r110.bind(r111)();
                    r111 = r112.choices;
                    if(!(offset == r111)) { _fun70883_ip = 2802; continue _fun70883 }
 2715:
                    r113 = r112.autocomplete;
                    r111 = undefined;
                    if(!r113) { _fun70883_ip = 2837; continue _fun70883 }
 2726:
                    r113 = oscar.autocomplete;
                    if(!(offset != r113)) { _fun70883_ip = 2739; continue _fun70883 }
 2736:
                    if(r107) { _fun70883_ip = 2786; continue _fun70883 }
 2739:
                    r114 = _closure1_slot0;
                    r113 = _closure1_slot3;
                    r113 = r113[variable52];
                    r116 = r114.bind(foxtrot)(r113);
                    r115 = r116.findAutocompleteChoiceNumberValue;
                    r113 = oscar.channel;
                    r114 = r113.id;
                    r113 = r112.name;
                    r113 = r115.bind(r116)(r114, r113, r110);
                    _fun70883_ip = 2797; continue _fun70883;
 2786:
                    r114 = oscar.autocomplete;
                    r113 = r114.query;
 2797:
                    r111 = r113;
                    _fun70883_ip = 2837; continue _fun70883;
 2802:
                    r114 = _closure1_slot0;
                    r113 = _closure1_slot3;
                    r113 = r113[variable52];
                    r115 = r114.bind(foxtrot)(r113);
                    r114 = r115.findChoiceNumberValue;
                    r113 = r112.choices;
                    r111 = r114.bind(r115)(r113, r110);
 2837:
                    r106 = r111;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = r110;
                    report = config;
                    if(!(offset == r106)) { _fun70883_ip = 5183; continue _fun70883 }
 2886:
                    r113 = variable66.Number;
                    r114 = _closure1_slot2;
                    r111 = _closure1_slot3;
                    r111 = r111[variable51];
                    r115 = r114.bind(foxtrot)(r111);
                    r114 = r115.normalizeNumericString;
                    r111 = _closure1_slot6;
                    r111 = r111.locale;
                    r111 = r114.bind(r115)(r111, r110);
                    r106 = r113.bind(foxtrot)(r111);
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = r110;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 2979:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    if(!(variable58 === r110)) { _fun70883_ip = 5183; continue _fun70883 }
 3032:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable52];
                    r113 = r111.bind(foxtrot)(r110);
                    r111 = r113.toChoiceBooleanValue;
                    r114 = r104.text;
                    r110 = r114.trim;
                    r110 = r110.bind(r114)();
                    r106 = r111.bind(r113)(r110);
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 3119:
                    r110 = r104.type;
                    if(!(variable53 !== r110)) { _fun70883_ip = 3819; continue _fun70883 }
 3131:
                    r110 = r104.type;
                    if(!(variable57 !== r110)) { _fun70883_ip = 3769; continue _fun70883 }
 3143:
                    r110 = r104.type;
                    if(!(variable54 === r110)) { _fun70883_ip = 3164; continue _fun70883 }
 3152:
                    r110 = r104.text;
                    if(!(variable55 !== r110)) { _fun70883_ip = 3703; continue _fun70883 }
 3164:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    if(!(variable58 === r110)) { _fun70883_ip = 5183; continue _fun70883 }
 3217:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable68];
                    r113 = r111.bind(foxtrot)(r110);
                    r111 = r113.isSnowflake;
                    r110 = r104.text;
                    r110 = r111.bind(r113)(r110);
                    if(r110) { _fun70883_ip = 3644; continue _fun70883 }
 3256:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable59];
                    r116 = r111.bind(foxtrot)(r110);
                    r115 = r116.resolveApplicationCommandOption;
                    r114 = r104.text;
                    r111 = oscar.guild;
                    r110 = offset == r111;
                    r113 = undefined;
                    if(r110) { _fun70883_ip = 3303; continue _fun70883 }
 3298:
                    r113 = r111.id;
 3303:
                    r110 = oscar.channel;
                    r110 = r110.id;
                    r110 = r115.bind(r116)(r114, r113, r110);
                    r114 = offset == r110;
                    r113 = undefined;
                    if(r114) { _fun70883_ip = 3334; continue _fun70883 }
 3329:
                    r113 = r110.type;
 3334:
                    if(!(variable53 !== r113)) { _fun70883_ip = 3595; continue _fun70883 }
 3341:
                    r114 = offset == r110;
                    r113 = undefined;
                    if(r114) { _fun70883_ip = 3355; continue _fun70883 }
 3350:
                    r113 = r110.type;
 3355:
                    if(!(variable57 !== r113)) { _fun70883_ip = 3545; continue _fun70883 }
 3362:
                    r114 = offset == r110;
                    r113 = undefined;
                    if(r114) { _fun70883_ip = 3376; continue _fun70883 }
 3371:
                    r113 = r110.type;
 3376:
                    if(!(variable54 === r113)) { _fun70883_ip = 3389; continue _fun70883 }
 3380:
                    r113 = r110.text;
                    if(!(variable55 !== r113)) { _fun70883_ip = 3479; continue _fun70883 }
 3389:
                    r114 = _closure1_slot1;
                    r113 = _closure1_slot3;
                    r113 = r113[variable63];
                    r114 = r114.bind(foxtrot)(r113);
                    r115 = r104.text;
                    r113 = variable66.HermesInternal;
                    r113 = r113.concat;
                    r113 = r113.bind(variable61)(r115);
                    r113 = r114.bind(foxtrot)(variable56, r113);
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = r111;
                    variable95 = r110;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 3479:
                    r113 = oscar.guild;
                    r115 = offset == r113;
                    r114 = undefined;
                    if(r115) { _fun70883_ip = 3498; continue _fun70883 }
 3493:
                    r114 = r113.id;
 3498:
                    r106 = r114;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = r111;
                    variable95 = r110;
                    variable94 = r113;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 3545:
                    r106 = r110.roleId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = r111;
                    variable95 = r110;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 3595:
                    r106 = r110.userId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = r111;
                    variable95 = r110;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 3644:
                    r111 = r104.text;
                    r110 = r111.trim;
                    r106 = r110.bind(r111)();
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 3703:
                    r110 = oscar.guild;
                    r113 = offset == r110;
                    r111 = undefined;
                    if(r113) { _fun70883_ip = 3722; continue _fun70883 }
 3717:
                    r111 = r110.id;
 3722:
                    r106 = r111;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = r110;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 3769:
                    r106 = r104.roleId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 3819:
                    r106 = r104.userId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 3868:
                    r110 = r104.type;
                    if(!(variable53 !== r110)) { _fun70883_ip = 4222; continue _fun70883 }
 3880:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    if(!(variable58 === r110)) { _fun70883_ip = 5183; continue _fun70883 }
 3933:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable68];
                    r113 = r111.bind(foxtrot)(r110);
                    r111 = r113.isSnowflake;
                    r110 = r104.text;
                    r110 = r111.bind(r113)(r110);
                    if(r110) { _fun70883_ip = 4163; continue _fun70883 }
 3972:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable59];
                    r117 = r111.bind(foxtrot)(r110);
                    r116 = r117.resolveApplicationCommandOption;
                    r115 = r104.text;
                    r111 = oscar.guild;
                    r110 = offset == r111;
                    r114 = undefined;
                    if(r110) { _fun70883_ip = 4019; continue _fun70883 }
 4014:
                    r114 = r111.id;
 4019:
                    r110 = oscar.channel;
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
                    r115 = r114.bind(foxtrot)(r113);
                    r114 = offset == r110;
                    r113 = undefined;
                    if(r114) { _fun70883_ip = 4083; continue _fun70883 }
 4078:
                    r113 = r110.type;
 4083:
                    r116 = r104.text;
                    r114 = variable66.HermesInternal;
                    r114 = r114.concat;
                    r114 = r114.bind(variable61)(r116);
                    r113 = variable53 === r113;
                    r113 = r115.bind(foxtrot)(r113, r114);
                    r106 = r110.userId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = r111;
                    variable98 = r110;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 4163:
                    r111 = r104.text;
                    r110 = r111.trim;
                    r106 = r110.bind(r111)();
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 4222:
                    r106 = r104.userId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 4271:
                    r110 = r104.type;
                    if(!(variable57 !== r110)) { _fun70883_ip = 4757; continue _fun70883 }
 4283:
                    r110 = r104.type;
                    if(!(variable58 !== r110)) { _fun70883_ip = 4467; continue _fun70883 }
 4295:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    if(!(variable54 === r110)) { _fun70883_ip = 5183; continue _fun70883 }
 4348:
                    r110 = r104.text;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    if(!(variable55 === r110)) { _fun70883_ip = 5183; continue _fun70883 }
 4401:
                    r110 = oscar.guild;
                    r113 = offset == r110;
                    r111 = undefined;
                    if(r113) { _fun70883_ip = 4420; continue _fun70883 }
 4415:
                    r111 = r110.id;
 4420:
                    r106 = r111;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = r110;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 4467:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable68];
                    r113 = r111.bind(foxtrot)(r110);
                    r111 = r113.isSnowflake;
                    r110 = r104.text;
                    r110 = r111.bind(r113)(r110);
                    if(r110) { _fun70883_ip = 4698; continue _fun70883 }
 4506:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable59];
                    r117 = r111.bind(foxtrot)(r110);
                    r116 = r117.resolveApplicationCommandOption;
                    r115 = r104.text;
                    r111 = oscar.guild;
                    r110 = offset == r111;
                    r114 = undefined;
                    if(r110) { _fun70883_ip = 4553; continue _fun70883 }
 4548:
                    r114 = r111.id;
 4553:
                    r110 = oscar.channel;
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
                    r115 = r114.bind(foxtrot)(r113);
                    r114 = offset == r110;
                    r113 = undefined;
                    if(r114) { _fun70883_ip = 4617; continue _fun70883 }
 4612:
                    r113 = r110.type;
 4617:
                    r116 = r104.text;
                    r114 = variable66.HermesInternal;
                    r114 = r114.concat;
                    r114 = r114.bind(variable61)(r116);
                    r113 = variable57 === r113;
                    r113 = r115.bind(foxtrot)(r113, r114);
                    r106 = r110.roleId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = r111;
                    r100 = r110;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 4698:
                    r111 = r104.text;
                    r110 = r111.trim;
                    r106 = r110.bind(r111)();
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 4757:
                    r106 = r104.roleId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 4807:
                    r110 = r104.type;
                    if(!(variable60 !== r110)) { _fun70883_ip = 5139; continue _fun70883 }
 4819:
                    r110 = r104.type;
                    r106 = undefined;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    if(!(variable58 === r110)) { _fun70883_ip = 5183; continue _fun70883 }
 4872:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable68];
                    r113 = r111.bind(foxtrot)(r110);
                    r111 = r113.isSnowflake;
                    r110 = r104.text;
                    r110 = r111.bind(r113)(r110);
                    if(r110) { _fun70883_ip = 5083; continue _fun70883 }
 4911:
                    r111 = _closure1_slot0;
                    r110 = _closure1_slot3;
                    r110 = r110[variable59];
                    r116 = r111.bind(foxtrot)(r110);
                    r115 = r116.resolveApplicationCommandOption;
                    r114 = r104.text;
                    r111 = oscar.guild;
                    r110 = offset == r111;
                    r113 = undefined;
                    if(r110) { _fun70883_ip = 4958; continue _fun70883 }
 4953:
                    r113 = r111.id;
 4958:
                    r110 = oscar.channel;
                    r110 = r110.id;
                    r110 = r115.bind(r116)(r114, r113, r110);
                    r114 = _closure1_slot1;
                    r113 = _closure1_slot3;
                    r113 = r113[variable63];
                    r115 = r114.bind(foxtrot)(r113);
                    r114 = offset == r110;
                    r113 = undefined;
                    if(r114) { _fun70883_ip = 5006; continue _fun70883 }
 5001:
                    r113 = r110.type;
 5006:
                    r116 = r104.text;
                    r114 = variable66.HermesInternal;
                    r114 = r114.concat;
                    r114 = r114.bind(variable61)(r116);
                    r113 = variable60 === r113;
                    r113 = r115.bind(foxtrot)(r113, r114);
                    r106 = r110.channelId;
                    r103 = r111;
                    r102 = r110;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 5083:
                    r111 = r104.text;
                    r110 = r111.trim;
                    r106 = r110.bind(r111)();
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
                    _fun70883_ip = 5183; continue _fun70883;
 5139:
                    r106 = r104.channelId;
                    r103 = variable37;
                    r102 = variable36;
                    r101 = quebec;
                    r100 = equality;
                    variable100 = whiskey;
                    variable99 = lima;
                    variable98 = sierra;
                    variable97 = status;
                    variable96 = target;
                    variable95 = papa;
                    variable94 = context;
                    variable93 = record;
                    report = config;
 5183:
                    r110 = variable62 !== r106;
                    if(r110) { _fun70883_ip = 5200; continue _fun70883 }
 5190:
                    r111 = oscar.autocomplete;
                    r110 = offset == r111;
 5200:
                    if(r110) { _fun70883_ip = 5206; continue _fun70883 }
 5203:
                    r110 = r107;
 5206:
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
                    variable72 = control;
                    variable71 = source;
                    variable70 = verify;
                    if(!r110) { _fun70883_ip = 5524; continue _fun70883 }
 5281:
                    r111 = _closure1_slot1;
                    r110 = _closure1_slot3;
                    r110 = r110[variable63];
                    r113 = r111.bind(foxtrot)(r110);
                    r110 = oscar.autocomplete;
                    r111 = offset != r110;
                    if(r111) { _fun70883_ip = 5315; continue _fun70883 }
 5311:
                    r111 = offset != r106;
 5315:
                    r114 = r112.name;
                    r110 = variable66.HermesInternal;
                    r110 = r110.concat;
                    r110 = r110.bind(variable65)(r114, variable64);
                    r110 = r113.bind(foxtrot)(r111, r110);
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
                    variable72 = control;
                    variable71 = source;
                    variable70 = verify;
                    if(!(offset != r106)) { _fun70883_ip = 5524; continue _fun70883 }
 5416:
                    r111 = sequence.push;
                    r110 = {};
                    r113 = r112.type;
                    r110['type'] = r113;
                    r112 = r112.name;
                    r110['name'] = r112;
                    r110['value'] = r106;
                    r110['focused'] = r107;
                    r110 = r111.bind(sequence)(r110);
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
                    variable72 = control;
                    variable71 = source;
                    variable70 = verify;
 5524:
                    variable93 = variable67.bind(foxtrot)();
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
                    equality = variable83;
                    whiskey = variable82;
                    lima = variable81;
                    sierra = variable80;
                    status = variable79;
                    target = variable78;
                    papa = variable77;
                    context = variable76;
                    record = variable75;
                    config = variable74;
                    vacuum = variable73;
                    control = variable72;
                    source = variable71;
                    verify = variable70;
                    variable44 = variable93;
                    if(!report) { _fun70883_ip = 564; continue _fun70883 }
 5611:
                    verify = golf.subCommandPath;
                    report = sequence;
                    if(!(offset != verify)) { _fun70883_ip = 5710; continue _fun70883 }
 5624:
                    verify = golf.subCommandPath;
                    verify = verify.length;
                    vacuum = 1;
                    control = verify - vacuum;
                    source = 0;
                    verify = sequence;
                    report = verify;
                    if(!(control >= source)) { _fun70883_ip = 5710; continue _fun70883 }
 5654:
                    sequence = golf.subCommandPath;
                    record = sequence[control];
                    sequence = record.name;
                    config = {};
                    record = record.type;
                    config['type'] = record;
                    config['name'] = sequence;
                    config['options'] = verify;
                    sequence = new Array(1);
                    sequence[0] = config;
                    control = control - vacuum;
                    verify = sequence;
                    report = verify;
                    if(control >= source) { _fun70883_ip = 5654; continue _fun70883 }
 5710:
                    verify = golf.execute;
                    if(!(offset == verify)) { _fun70883_ip = 6179; continue _fun70883 }
 5723:
                    source = golf.inputType;
                    control = _closure1_slot0;
                    verify = _closure1_slot3;
                    vacuum = 9;
                    verify = verify[vacuum];
                    verify = control.bind(foxtrot)(verify);
                    verify = verify.ApplicationCommandInputType;
                    verify = verify.BUILT_IN;
                    if(!(source !== verify)) { _fun70883_ip = 6176; continue _fun70883 }
 5768:
                    source = golf.inputType;
                    control = _closure1_slot0;
                    verify = _closure1_slot3;
                    verify = verify[vacuum];
                    verify = control.bind(foxtrot)(verify);
                    verify = verify.ApplicationCommandInputType;
                    verify = verify.BUILT_IN_TEXT;
                    if(!(source !== verify)) { _fun70883_ip = 6176; continue _fun70883 }
 5810:
                    source = golf.inputType;
                    control = _closure1_slot0;
                    verify = _closure1_slot3;
                    verify = verify[vacuum];
                    verify = control.bind(foxtrot)(verify);
                    verify = verify.ApplicationCommandInputType;
                    verify = verify.BUILT_IN_INTEGRATION;
                    if(!(source !== verify)) { _fun70883_ip = 6176; continue _fun70883 }
 5852:
                    verify = {};
                    source = golf.version;
                    verify['version'] = source;
                    control = golf.rootCommand;
                    vacuum = offset == control;
                    source = undefined;
                    if(vacuum) { _fun70883_ip = 5885; continue _fun70883 }
 5880:
                    source = control.id;
 5885:
                    if(!(offset == source)) { _fun70883_ip = 5894; continue _fun70883 }
 5889:
                    source = golf.id;
 5894:
                    verify['id'] = source;
                    source = golf.guildId;
                    verify['guild_id'] = source;
                    control = golf.rootCommand;
                    vacuum = offset == control;
                    source = undefined;
                    if(vacuum) { _fun70883_ip = 5927; continue _fun70883 }
 5922:
                    source = control.name;
 5927:
                    if(!(offset == source)) { _fun70883_ip = 5937; continue _fun70883 }
 5931:
                    source = golf.untranslatedName;
 5937:
                    verify['name'] = source;
                    source = golf.type;
                    verify['type'] = source;
                    verify['options'] = report;
                    source = golf.rootCommand;
                    verify['application_command'] = source;
                    if(!(offset != echo)) { _fun70883_ip = 5975; continue _fun70883 }
 5969:
                    verify['target_id'] = echo;
 5975:
                    if(!options) { _fun70883_ip = 5988; continue _fun70883 }
 5978:
                    options = true;
                    verify['client_supports_contextless_activity_launch'] = options;
 5988:
                    options = oscar.autocomplete;
                    if(!(offset == options)) { _fun70883_ip = 6143; continue _fun70883 }
 6001:
                    offset = _closure1_slot1;
                    echo = _closure1_slot3;
                    options = 20;
                    options = echo[options];
                    echo = offset.bind(foxtrot)(options);
                    offset = echo.clearAll;
                    options = oscar.channel;
                    options = options.id;
                    options = offset.bind(echo)(options, update);
                    offset = _closure1_slot17;
                    options = {};
                    echo = golf.applicationId;
                    options['applicationId'] = echo;
                    options['data'] = verify;
                    options['context'] = oscar;
                    options['attachments'] = result;
                    options['maxSizeCallback'] = output;
                    sizing = function() { // Original name: onMessageSuccess
                        zulu = _closure1_slot16;
                        mike = _closure4_slot0;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    options['onMessageSuccess'] = sizing;
                    sizing = _closure1_slot24;
                    sizing = sizing.bind(foxtrot)(backup);
                    options['analytics_location'] = sizing;
                    options['sectionName'] = kilo;
                    options['source'] = yankee;
                    tango = tango.bind(foxtrot)(golf, oscar, verify);
                    SaveGenerator(address=6122);
 6120:
                    return tango;
 6122:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=14);
                    if(kilo) { _fun70883_ip = 6140; continue _fun70883 }
 6128:
                    options['interactionLifecycleOptions'] = tango;
                    options = offset.bind(foxtrot)(options);
                    _fun70883_ip = 6176; continue _fun70883;
 6140:
                    return tango;
 6143:
                    options = _closure1_slot0;
                    offset = _closure1_slot3;
                    tango = 19;
                    tango = offset[tango];
                    options = options.bind(foxtrot)(tango);
                    tango = options.performAutocomplete;
                    tango = tango.bind(options)(golf, oscar, verify);
 6176:
                    return foxtrot;
 6179:
                    options = _closure1_slot1;
                    verify = _closure1_slot3;
                    tango = 18;
                    tango = verify[tango];
                    offset = options.bind(foxtrot)(tango);
                    verify = offset.trackWithMetadata;
                    tango = _closure1_slot12;
                    options = tango.APPLICATION_COMMAND_USED;
                    tango = {};
                    kilo = golf.id;
                    tango['command_id'] = kilo;
                    kilo = golf.applicationId;
                    tango['application_id'] = kilo;
                    kilo = golf.type;
                    tango['command_type'] = kilo;
                    romeo = _closure1_slot24;
                    romeo = romeo.bind(foxtrot)(backup);
                    tango['location'] = romeo;
                    tango['source'] = yankee;
                    tango = verify.bind(offset)(options, tango);
                    tango = golf.execute;
                    tango = tango.bind(golf)(report, oscar);
                    return tango;
 6285:
                    return zulu;
 6288:
                    return mike;
 6291:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot20 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: queueCommand
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        entity = argBar;
        var _closure2_slot1 = entity;
        tango = _closure1_slot1;
        verify = _closure1_slot3;
        golf = 26;
        zulu = verify[golf];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.enqueue;
        zulu = {};
        options = _closure1_slot0;
        golf = verify[golf];
        golf = options.bind(entity)(golf);
        golf = golf.MessageDataType;
        golf = golf.COMMAND;
        zulu['type'] = golf;
        zulu['message'] = oscar;
        mike = function(argFoo) {
            _fun70886: for(var _fun70886_ip = 0; ; ) switch(_fun70886_ip) {
 0:
                zulu = argFoo;
                tango = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 27;
                mike = mike[entity];
                entity = undefined;
                offset = tango.bind(entity)(mike);
                verify = offset.handleInteractionResponse;
                tango = _closure2_slot0;
                options = tango.nonce;
                golf = tango.applicationId;
                oscar = tango.channelId;
                yankee = tango.guildId;
                report = null;
                romeo = report != yankee;
                tango = null;
                if(!romeo) { _fun70886_ip = 76; continue _fun70886 }
 73:
                tango = yankee;
 76:
                result = offset;
                output = options;
                sizing = zulu;
                kilo = golf;
                backup = oscar;
                foxtrot = tango;
                tango = result[verify](output, sizing, kilo, backup, foxtrot, romeo);
                zulu = zulu.ok;
                if(!zulu) { _fun70886_ip = 115; continue _fun70886 }
 107:
                tango = _closure2_slot1;
                zulu = report != tango;
 115:
                if(!zulu) { _fun70886_ip = 126; continue _fun70886 }
 118:
                mike = _closure2_slot1;
                mike = mike.bind(entity)();
 126:
                return entity;
            }
        };
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: displayInteractionLifecycleInChat
        entity = undefined;
        tango = _closure1_slot23;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _displayInteractionLifecycleInChat
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun70890: for(var _fun70890_ip = 0; ; ) switch(_fun70890_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    tango = argBar;
                    offset = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(report) { _fun70890_ip = 684; continue _fun70890 }
 21:
                    var _closure4_slot0 = mike;
                    var _closure4_slot1 = tango;
                    oscar = undefined;
                    options = undefined;
                    var _closure4_slot2 = oscar;
                    report = tango.channel;
                    sizing = null;
                    if(!(sizing != report)) { _fun70890_ip = 679; continue _fun70890 }
 51:
                    verify = _closure1_slot2;
                    yankee = _closure1_slot3;
                    golf = 28;
                    golf = yankee[golf];
                    foxtrot = verify.bind(oscar)(golf);
                    romeo = foxtrot.getCachedApplicationSection;
                    yankee = {};
                    golf = tango.channel;
                    yankee['channel'] = golf;
                    golf = 'channel';
                    yankee['type'] = golf;
                    verify = offset.type;
                    golf = mike.applicationId;
                    golf = romeo.bind(foxtrot)(yankee, verify, golf);
                    options = golf;
                    if(!(sizing != golf)) { _fun70890_ip = 674; continue _fun70890 }
 126:
                    golf = options;
                    golf = golf.application;
                    verify = sizing == golf;
                    backup = undefined;
                    if(verify) { _fun70890_ip = 149; continue _fun70890 }
 143:
                    backup = golf.bot;
 149:
                    if(!(sizing == backup)) { _fun70890_ip = 223; continue _fun70890 }
 153:
                    golf = options;
                    golf = golf.botId;
                    if(!(sizing != golf)) { _fun70890_ip = 223; continue _fun70890 }
 166: // try_start_0
                    verify = _closure1_slot2;
                    yankee = _closure1_slot3;
                    golf = 29;
                    golf = yankee[golf];
                    yankee = verify.bind(oscar)(golf);
                    verify = yankee.getUser;
                    golf = options;
                    golf = golf.botId;
                    golf = verify.bind(yankee)(golf);
                    SaveGenerator(address=210);
 208:
                    return golf;
 210:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(verify) { _fun70890_ip = 218; continue _fun70890 }
 216: // try_end0
                    _fun70890_ip = 223; continue _fun70890;
 218:
                    return golf;
 221: // catch_target0
                    CatchBlockStart(arg_register=6);
 223:
                    verify = {};
                    romeo = _closure1_slot1;
                    kilo = _closure1_slot3;
                    golf = 30;
                    yankee = kilo[golf];
                    romeo = romeo.bind(oscar)(yankee);
                    yankee = {};
                    foxtrot = tango.channel;
                    foxtrot = foxtrot.id;
                    yankee['channelId'] = foxtrot;
                    foxtrot = '';
                    yankee['content'] = foxtrot;
                    output = offset.type;
                    result = _closure1_slot0;
                    foxtrot = 13;
                    kilo = kilo[foxtrot];
                    kilo = result.bind(oscar)(kilo);
                    kilo = kilo.ApplicationCommandType;
                    kilo = kilo.CHAT;
                    if(!(output !== kilo)) { _fun70890_ip = 318; continue _fun70890 }
 306:
                    kilo = _closure1_slot13;
                    kilo = kilo.CONTEXT_MENU_COMMAND;
                    _fun70890_ip = 328; continue _fun70890;
 318:
                    output = _closure1_slot13;
                    kilo = output.CHAT_INPUT_COMMAND;
 328:
                    yankee['type'] = kilo;
                    if(!(sizing == backup)) { _fun70890_ip = 383; continue _fun70890 }
 336:
                    kilo = {};
                    output = options;
                    result = output.id;
                    kilo['id'] = result;
                    output = output.name;
                    kilo['username'] = output;
                    output = _closure1_slot14;
                    kilo['discriminator'] = output;
                    kilo['avatar'] = sizing;
                    sizing = true;
                    kilo['bot'] = sizing;
                    backup = kilo;
 383:
                    yankee['author'] = backup;
                    source = romeo.bind(oscar)(yankee);
                    control = verify;
                    yankee = copyDataProperties(control, source);
                    yankee = options.application;
                    options = 'application';
                    verify[options] = yankee;
                    yankee = {};
                    options = offset.id;
                    yankee['id'] = options;
                    options = offset.name;
                    yankee['name'] = options;
                    options = mike.displayName;
                    yankee['name_localized'] = options;
                    romeo = _closure1_slot0;
                    options = _closure1_slot3;
                    foxtrot = options[foxtrot];
                    foxtrot = romeo.bind(oscar)(foxtrot);
                    foxtrot = foxtrot.InteractionTypes;
                    foxtrot = foxtrot.APPLICATION_COMMAND;
                    yankee['type'] = foxtrot;
                    golf = options[golf];
                    foxtrot = romeo.bind(oscar)(golf);
                    romeo = foxtrot.userRecordToServer;
                    backup = _closure1_slot9;
                    golf = backup.getCurrentUser;
                    golf = golf.bind(backup)();
                    golf = romeo.bind(foxtrot)(golf);
                    yankee['user'] = golf;
                    golf = 'interaction';
                    verify[golf] = yankee;
                    golf = 'interaction_data';
                    verify[golf] = offset;
                    _closure4_slot2 = verify;
                    golf = _closure1_slot1;
                    report = 31;
                    report = options[report];
                    options = golf.bind(oscar)(report);
                    golf = options.receiveMessage;
                    tango = tango.channel;
                    control = tango.id;
                    tango = {};
                    offset = mike.applicationId;
                    tango['applicationId'] = offset;
                    tango['command'] = mike;
                    update = true;
                    vacuum = options;
                    source = verify;
                    echo = tango;
                    mike = vacuum[golf](control, source, update, echo, result);
                    mike = {};
                    report = function() { // Original name: get messageId
                        entity = _closure4_slot2;
                        entity = entity.id;
                        return entity;
                    };
                    tango = 'messageId';
                    Object.defineProperty(mike, tango, {get: report, set: oscar, enumerable: true});
                    report = function() { // Original name: get nonce
                        entity = _closure4_slot2;
                        entity = entity.id;
                        return entity;
                    };
                    tango = 'nonce';
                    Object.defineProperty(mike, tango, {get: report, set: oscar, enumerable: true});
                    tango = function(argFoo) { // Original name: onCreate
                        _fun70893: for(var _fun70893_ip = 0; ; ) switch(_fun70893_ip) {
 0:
                            mike = _closure4_slot2;
                            zulu = mike.interaction;
                            mike = null;
                            if(!(mike != zulu)) { _fun70893_ip = 38; continue _fun70893 }
 19:
                            entity = _closure4_slot2;
                            mike = entity.interaction;
                            entity = argFoo;
                            mike['id'] = entity;
 38:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike['onCreate'] = tango;
                    tango = function() { // Original name: onSuccess
                        entity = undefined;
                        return entity;
                    };
                    mike['onSuccess'] = tango;
                    zulu = function(argFoo, argBar, argBaz, argCorge) { // Original name: onFailure
                        _fun70895: for(var _fun70895_ip = 0; ; ) switch(_fun70895_ip) {
 0:
                            options = argFoo;
                            tango = argBar;
                            oscar = argCorge;
                            entity = _closure4_slot1;
                            entity = entity.channel;
                            mike = null;
                            if(!(mike != entity)) { _fun70895_ip = 236; continue _fun70895 }
 30:
                            entity = mike == tango;
                            if(!entity) { _fun70895_ip = 41; continue _fun70895 }
 37:
                            entity = mike != options;
 41:
                            if(!entity) { _fun70895_ip = 95; continue _fun70895 }
 44:
                            golf = _closure1_slot1;
                            zulu = _closure1_slot3;
                            entity = 31;
                            zulu = zulu[entity];
                            entity = undefined;
                            golf = golf.bind(entity)(zulu);
                            zulu = golf.sendClydeError;
                            entity = _closure4_slot1;
                            entity = entity.channel;
                            entity = entity.id;
                            entity = zulu.bind(golf)(entity, options);
 95:
                            entity = mike == tango;
                            if(!entity) { _fun70895_ip = 106; continue _fun70895 }
 102:
                            entity = mike != oscar;
 106:
                            if(!entity) { _fun70895_ip = 155; continue _fun70895 }
 109:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot3;
                            entity = 27;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.interactionCallbackErrorReason;
                            entity = _closure4_slot0;
                            entity = entity.applicationId;
                            tango = mike.bind(zulu)(oscar, entity);
 155:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot3;
                            entity = 10;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.dispatch;
                            entity = {};
                            oscar = 'MESSAGE_SEND_FAILED';
                            entity['type'] = oscar;
                            oscar = _closure4_slot2;
                            oscar = oscar.id;
                            entity['messageId'] = oscar;
                            report = _closure4_slot1;
                            report = report.channel;
                            report = report.id;
                            entity['channelId'] = report;
                            entity['reason'] = tango;
                            entity = mike.bind(zulu)(entity);
 236:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike['onFailure'] = zulu;
                    return mike;
 674:
                    mike = {};
                    return mike;
 679:
                    mike = {};
                    return mike;
 684:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot23 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: getAnalyticsLocationFromCommandOrigin
        _fun70896: for(var _fun70896_ip = 0; ; ) switch(_fun70896_ip) {
 0:
            report = argFoo;
            oscar = _closure1_slot0;
            mike = _closure1_slot3;
            tango = 9;
            mike = mike[tango];
            zulu = undefined;
            mike = oscar.bind(zulu)(mike);
            mike = mike.CommandOrigin;
            mike = mike.APPLICATION_LAUNCHER;
            if(!(mike !== report)) { _fun70896_ip = 608; continue _fun70896 }
 47:
            oscar = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = oscar.bind(zulu)(mike);
            mike = mike.CommandOrigin;
            mike = mike.APP_LAUNCHER_APPLICATION_VIEW;
            if(!(mike !== report)) { _fun70896_ip = 577; continue _fun70896 }
 83:
            oscar = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = oscar.bind(zulu)(mike);
            mike = mike.CommandOrigin;
            mike = mike.IMAGE_RECS_MENU;
            if(!(mike !== report)) { _fun70896_ip = 546; continue _fun70896 }
 119:
            oscar = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = oscar.bind(zulu)(mike);
            mike = mike.CommandOrigin;
            mike = mike.IMAGE_RECS_SUBMENU;
            if(!(mike !== report)) { _fun70896_ip = 515; continue _fun70896 }
 155:
            oscar = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = oscar.bind(zulu)(mike);
            mike = mike.CommandOrigin;
            mike = mike.ACTIVITY_INSTANCE_EMBED;
            if(!(mike !== report)) { _fun70896_ip = 484; continue _fun70896 }
 191:
            oscar = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = oscar.bind(zulu)(mike);
            mike = mike.CommandOrigin;
            mike = mike.ACTIVITY_BOOKMARK_EMBED;
            if(!(mike !== report)) { _fun70896_ip = 453; continue _fun70896 }
 227:
            oscar = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = oscar.bind(zulu)(mike);
            mike = mike.CommandOrigin;
            mike = mike.MINI_SHELF;
            if(!(mike !== report)) { _fun70896_ip = 422; continue _fun70896 }
 263:
            oscar = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = oscar.bind(zulu)(mike);
            mike = mike.CommandOrigin;
            mike = mike.VOICE_TILE_ACTIVITY_SUGGESTIONS;
            if(!(mike !== report)) { _fun70896_ip = 391; continue _fun70896 }
 296:
            oscar = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = oscar.bind(zulu)(mike);
            mike = mike.CommandOrigin;
            mike = mike.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            if(!(mike !== report)) { _fun70896_ip = 360; continue _fun70896 }
 329:
            report = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = report.bind(zulu)(mike);
            mike = mike.ApplicationCommandTriggerLocations;
            mike = mike.SLASH_UI;
            return mike;
 360:
            report = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = report.bind(zulu)(mike);
            mike = mike.ApplicationCommandTriggerLocations;
            mike = mike.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            return mike;
 391:
            report = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = report.bind(zulu)(mike);
            mike = mike.ApplicationCommandTriggerLocations;
            mike = mike.VC_TILE_ACTIVITY_SUGGESTION;
            return mike;
 422:
            report = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = report.bind(zulu)(mike);
            mike = mike.ApplicationCommandTriggerLocations;
            mike = mike.ACTIVITIES_MINI_SHELF;
            return mike;
 453:
            report = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = report.bind(zulu)(mike);
            mike = mike.ApplicationCommandTriggerLocations;
            mike = mike.ACTIVITY_BOOKMARK_EMBED;
            return mike;
 484:
            report = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = report.bind(zulu)(mike);
            mike = mike.ApplicationCommandTriggerLocations;
            mike = mike.ACTIVITY_INSTANCE_EMBED;
            return mike;
 515:
            report = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = report.bind(zulu)(mike);
            mike = mike.ApplicationCommandTriggerLocations;
            mike = mike.IMAGE_RECS_SUBMENU;
            return mike;
 546:
            report = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = report.bind(zulu)(mike);
            mike = mike.ApplicationCommandTriggerLocations;
            mike = mike.IMAGE_RECS_MENU;
            return mike;
 577:
            report = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            mike = report.bind(zulu)(mike);
            mike = mike.ApplicationCommandTriggerLocations;
            mike = mike.APP_LAUNCHER_APPLICATION_VIEW;
            return mike;
 608:
            mike = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[tango];
            entity = mike.bind(zulu)(entity);
            entity = entity.ApplicationCommandTriggerLocations;
            entity = entity.APP_LAUNCHER;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: getMaxAndTotalFileSize
        entity = undefined;
        tango = _closure1_slot26;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _getMaxAndTotalFileSize
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun70900: for(var _fun70900_ip = 0; ; ) switch(_fun70900_ip) {
 0:
                    StartGenerator();
                    foxtrot = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun70900_ip = 165; continue _fun70900 }
 13:
                    zulu = _closure1_slot18;
                    romeo = undefined;
                    mike = argFoo;
                    yankee = zulu.bind(romeo)(mike);
                    zulu = yankee.bind(romeo)();
                    mike = zulu.done;
                    verify = null;
                    options = zulu;
                    golf = 0;
                    oscar = 0;
                    report = undefined;
                    tango = 0;
                    zulu = 0;
                    if(mike) { _fun70900_ip = 150; continue _fun70900 }
 57:
                    backup = options.value;
                    if(foxtrot) { _fun70900_ip = 94; continue _fun70900 }
 65:
                    mike = backup.getSize;
                    kilo = mike.bind(backup)();
                    SaveGenerator(address=79);
 77:
                    return kilo;
 79:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=1);
                    sizing = mike;
                    mike = kilo;
                    if(!sizing) { _fun70900_ip = 118; continue _fun70900 }
 91:
                    return kilo;
 94:
                    kilo = backup.currentSize;
                    sizing = verify != kilo;
                    backup = 0;
                    if(!sizing) { _fun70900_ip = 112; continue _fun70900 }
 109:
                    backup = kilo;
 112:
                    mike = backup;
                    report = kilo;
 118:
                    if(!(mike > oscar)) { _fun70900_ip = 125; continue _fun70900 }
 122:
                    oscar = mike;
 125:
                    golf = golf + mike;
                    sizing = yankee.bind(romeo)();
                    mike = sizing.done;
                    options = sizing;
                    tango = golf;
                    zulu = oscar;
                    if(!mike) { _fun70900_ip = 57; continue _fun70900 }
 150:
                    mike = {};
                    mike['totalSize'] = tango;
                    mike['largestUploadedFileSize'] = zulu;
                    return mike;
 165:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot26 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _stageAttachments
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar, argBaz, argCorge) {
            entity = function* (argFoo, argBar, argBaz, argCorge) { // Original name: ?anon_0_
                _fun70903: for(var _fun70903_ip = 0; ; ) switch(_fun70903_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    mike = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun70903_ip = 484; continue _fun70903 }
 18:
                    golf = mike;
                    var _closure4_slot0 = mike;
                    mike = argCorge;
                    var _closure4_slot1 = mike;
                    oscar = undefined;
                    var _closure4_slot2 = oscar;
                    report = undefined;
                    yankee = undefined;
                    tango = undefined;
                    backup = options;
                    zulu = _closure1_slot0;
                    verify = _closure1_slot3;
                    mike = 32;
                    mike = verify[mike];
                    verify = zulu.bind(oscar)(mike);
                    zulu = verify.maxFileSize;
                    mike = argBaz;
                    sizing = zulu.bind(verify)(mike);
                    _closure4_slot2 = sizing;
                    report = function(argFoo) { // Original name: handleUploadsTooLarge
                        _fun70904: for(var _fun70904_ip = 0; ; ) switch(_fun70904_ip) {
 0:
                            mike = _closure4_slot1;
                            entity = null;
                            if(!(entity != mike)) { _fun70904_ip = 32; continue _fun70904 }
 13:
                            tango = _closure4_slot1;
                            zulu = _closure4_slot2;
                            mike = undefined;
                            entity = argFoo;
                            entity = tango.bind(mike)(zulu, entity);
 32:
                            tango = _closure1_slot2;
                            foxtrot = _closure1_slot3;
                            entity = 25;
                            zulu = foxtrot[entity];
                            entity = undefined;
                            oscar = tango.bind(entity)(zulu);
                            report = oscar.setFailed;
                            tango = _closure4_slot0;
                            zulu = _closure1_slot11;
                            zulu = zulu.ENTITY_TOO_LARGE;
                            romeo = _closure1_slot0;
                            mike = 33;
                            golf = foxtrot[mike];
                            golf = romeo.bind(entity)(golf);
                            verify = golf.intl;
                            options = verify.formatToPlainString;
                            mike = foxtrot[mike];
                            mike = romeo.bind(entity)(mike);
                            mike = mike.t;
                            golf = mike.fxEKdX;
                            mike = {};
                            yankee = 32;
                            yankee = foxtrot[yankee];
                            romeo = romeo.bind(entity)(yankee);
                            yankee = romeo.sizeString;
                            offset = _closure4_slot2;
                            offset = yankee.bind(romeo)(offset);
                            mike['maxSize'] = offset;
                            mike = options.bind(verify)(golf, mike);
                            mike = report.bind(oscar)(tango, zulu, mike);
                            return entity;
                        }
                    };
                    mike = _closure1_slot25;
                    zulu = false;
                    mike = mike.bind(oscar)(options, zulu);
                    SaveGenerator(address=111);
 109:
                    return mike;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(options) { _fun70903_ip = 481; continue _fun70903 }
 120:
                    yankee = mike.totalSize;
                    verify = mike.largestUploadedFileSize;
                    tango = verify;
                    options = global;
                    kilo = options.Math;
                    foxtrot = kilo.max;
                    options = _closure1_slot15;
                    options = foxtrot.bind(kilo)(sizing, options);
                    if(!(!(verify > options))) { _fun70903_ip = 473; continue _fun70903 }
 165:
                    verify = yankee;
                    kilo = _closure1_slot0;
                    options = _closure1_slot3;
                    foxtrot = 34;
                    options = options[foxtrot];
                    options = kilo.bind(oscar)(options);
                    options = options.MAX_TOTAL_ATTACHMENT_SIZE;
                    if(!(!(verify > options))) { _fun70903_ip = 473; continue _fun70903 }
 201: // try_start_0
                    verify = _closure1_slot0;
                    kilo = _closure1_slot3;
                    options = 35;
                    options = kilo[options];
                    kilo = verify.bind(oscar)(options);
                    verify = kilo.stageAttachmentFiles;
                    options = backup;
                    options = verify.bind(kilo)(options);
                    SaveGenerator(address=239);
 237:
                    return options;
 239:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun70903_ip = 247; continue _fun70903 }
 245: // try_end0
                    _fun70903_ip = 354; continue _fun70903;
 247:
                    return options;
 250: // catch_target0
                    CatchBlockStart(arg_register=7);
                    verify = _closure1_slot2;
                    echo = _closure1_slot3;
                    options = 25;
                    options = echo[options];
                    kilo = verify.bind(oscar)(options);
                    verify = kilo.setFailed;
                    options = golf;
                    sizing = _closure1_slot0;
                    golf = 33;
                    output = echo[golf];
                    output = sizing.bind(oscar)(output);
                    result = output.intl;
                    output = result.formatToPlainString;
                    golf = echo[golf];
                    golf = sizing.bind(oscar)(golf);
                    golf = golf.t;
                    sizing = golf.9h1/1t;
                    golf = {};
                    echo = backup;
                    echo = echo.length;
                    golf['count'] = echo;
                    golf = output.bind(result)(sizing, golf);
                    golf = verify.bind(kilo)(options, oscar, golf);
 354:
                    verify = _closure1_slot25;
                    options = backup;
                    golf = true;
                    golf = verify.bind(oscar)(options, golf);
                    SaveGenerator(address=373);
 371:
                    return golf;
 373:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(options) { _fun70903_ip = 470; continue _fun70903 }
 379:
                    yankee = golf.totalSize;
                    tango = golf.largestUploadedFileSize;
                    kilo = backup;
                    backup = kilo.some;
                    romeo = function(argFoo) {
                        entity = argFoo;
                        mike = entity.error;
                        entity = _closure1_slot11;
                        entity = entity.ENTITY_TOO_LARGE;
                        entity = mike === entity;
                        return entity;
                    };
                    romeo = backup.bind(kilo)(romeo);
                    verify = romeo;
                    if(romeo) { _fun70903_ip = 445; continue _fun70903 }
 418:
                    romeo = _closure1_slot0;
                    offset = _closure1_slot3;
                    offset = offset[foxtrot];
                    offset = romeo.bind(oscar)(offset);
                    offset = offset.MAX_TOTAL_ATTACHMENT_SIZE;
                    verify = yankee > offset;
 445:
                    verify = !verify;
                    options = verify;
                    if(verify) { _fun70903_ip = 467; continue _fun70903 }
 454:
                    offset = report;
                    verify = tango;
                    verify = offset.bind(oscar)(verify);
                    options = false;
 467:
                    return options;
 470:
                    return golf;
 473:
                    tango = report.bind(oscar)(tango);
                    return zulu;
 481:
                    return mike;
 484:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot27 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot27 = entity;
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
    var _closure1_slot4 = mike;
    mike = 1;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 4;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 5;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 6;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 7;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    report = mike.AbortCodes;
    var _closure1_slot11 = report;
    report = mike.AnalyticEvents;
    var _closure1_slot12 = report;
    report = mike.MessageTypes;
    var _closure1_slot13 = report;
    mike = mike.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot14 = mike;
    mike = 8;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE;
    var _closure1_slot15 = mike;
    mike = function(argFoo) { // Original name: trackEmojiUsage
        _fun70906: for(var _fun70906_ip = 0; ; ) switch(_fun70906_ip) {
 0:
            entity = global;
            zulu = entity.Object;
            mike = zulu.values;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.flatMap;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = zulu.map;
                entity = function(argFoo) {
                    _fun70908: for(var _fun70908_ip = 0; ; ) switch(_fun70908_ip) {
 0:
                        zulu = argFoo;
                        mike = zulu.type;
                        entity = 'emoji';
                        if(!(entity !== mike)) { _fun70908_ip = 60; continue _fun70908 }
 16:
                        tango = zulu.type;
                        mike = 'customEmoji';
                        entity = null;
                        if(!(mike === tango)) { _fun70908_ip = 55; continue _fun70908 }
 31:
                        report = _closure1_slot5;
                        tango = report.getCustomEmojiById;
                        mike = zulu.emojiId;
                        entity = tango.bind(report)(mike);
 55:
                        _fun70908_ip = 185; continue _fun70908;
 60:
                        golf = _closure1_slot0;
                        options = _closure1_slot3;
                        mike = 21;
                        mike = options[mike];
                        oscar = undefined;
                        mike = golf.bind(oscar)(mike);
                        tango = mike.Emoji;
                        mike = {};
                        report = 22;
                        report = options[report];
                        report = golf.bind(oscar)(report);
                        report = report.EmojiTypes;
                        report = report.UNICODE;
                        mike['type'] = report;
                        golf = zulu.name;
                        oscar = golf.replaceAll;
                        report = ':';
                        zulu = '';
                        oscar = oscar.bind(golf)(report, zulu);
                        report = new Array(1);
                        report[0] = oscar;
                        mike['names'] = report;
                        mike['surrogates'] = zulu;
                        zulu = tango.prototype;
                        zulu = Object.create(zulu, {constructor: {value: tango}});
                        yankee = zulu;
                        offset = mike;
                        mike = new yankee[tango](offset, verify);
                        entity = mike instanceof Object ? mike : zulu;
 185:
                        return entity;
                    }
                };
                zulu = mike.bind(zulu)(entity);
                mike = zulu.filter;
                report = _closure1_slot0;
                tango = _closure1_slot3;
                entity = 23;
                tango = tango[entity];
                entity = undefined;
                entity = report.bind(entity)(tango);
                entity = entity.isNotNullish;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = mike.bind(zulu)(entity);
            mike = tango.length;
            entity = 0;
            if(!(mike > entity)) { _fun70906_ip = 104; continue _fun70906 }
 52:
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            report = 'EMOJI_TRACK_USAGE';
            entity['type'] = report;
            entity['emojiUsed'] = tango;
            entity = mike.bind(zulu)(entity);
 104:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = mike;
    mike = function() {
        tango = _closure1_slot4;
        zulu = undefined;
        mike = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun70911: for(var _fun70911_ip = 0; ; ) switch(_fun70911_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    report = argBar;
                    zulu = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun70911_ip = 200; continue _fun70911 }
 19:
                    tango = mike.isCommandType;
                    tango = tango.bind(mike)();
                    if(!tango) { _fun70911_ip = 192; continue _fun70911 }
 35:
                    oscar = mike.interactionData;
                    tango = null;
                    if(!(tango != oscar)) { _fun70911_ip = 192; continue _fun70911 }
 50:
                    oscar = zulu.command;
                    if(!(tango != oscar)) { _fun70911_ip = 192; continue _fun70911 }
 63:
                    options = {};
                    options['channel'] = report;
                    oscar = report.guild_id;
                    oscar = tango != oscar;
                    tango = null;
                    if(!oscar) { _fun70911_ip = 105; continue _fun70911 }
 83:
                    golf = _closure1_slot7;
                    oscar = golf.getGuild;
                    report = report.guild_id;
                    tango = oscar.bind(golf)(report);
 105:
                    options['guild'] = tango;
                    report = _closure1_slot17;
                    tango = {};
                    golf = zulu.command;
                    golf = golf.applicationId;
                    tango['applicationId'] = golf;
                    golf = mike.interactionData;
                    tango['data'] = golf;
                    tango['context'] = options;
                    golf = _closure1_slot22;
                    oscar = zulu.command;
                    mike = mike.interactionData;
                    zulu = undefined;
                    mike = golf.bind(zulu)(oscar, options, mike);
                    SaveGenerator(address=176);
 174:
                    return mike;
 176:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscar) { _fun70911_ip = 197; continue _fun70911 }
 182:
                    tango['interactionLifecycleOptions'] = mike;
                    zulu = report.bind(zulu)(tango);
 192:
                    zulu = undefined;
                    return zulu;
 197:
                    return mike;
 200:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    mike = mike.bind(entity)();
    report = function(argFoo) { // Original name: enqueueCommandInteraction
        _fun70913: for(var _fun70913_ip = 0; ; ) switch(_fun70913_ip) {
 0:
            entity = argFoo;
            sizing = entity.applicationId;
            romeo = entity.data;
            zulu = entity.context;
            golf = entity.attachments;
            oscar = entity.maxSizeCallback;
            options = entity.onMessageSuccess;
            var _closure2_slot0 = options;
            yankee = entity.analytics_location;
            offset = entity.sectionName;
            tango = entity.source;
            backup = entity.interactionLifecycleOptions;
            entity = undefined;
            var _closure2_slot1 = entity;
            report = zulu.channel;
            verify = null;
            if(!(verify != report)) { _fun70913_ip = 412; continue _fun70913 }
 85:
            report = zulu.channel;
            zulu = zulu.guild;
            kilo = report.id;
            foxtrot = verify == zulu;
            report = undefined;
            if(foxtrot) { _fun70913_ip = 114; continue _fun70913 }
 109:
            report = zulu.id;
 114:
            zulu = {};
            zulu['applicationId'] = sizing;
            zulu['channelId'] = kilo;
            zulu['guildId'] = report;
            zulu['data'] = romeo;
            romeo = backup.nonce;
            if(!(verify == romeo)) { _fun70913_ip = 175; continue _fun70913 }
 142:
            output = _closure1_slot0;
            result = _closure1_slot3;
            foxtrot = 24;
            foxtrot = result[foxtrot];
            output = output.bind(entity)(foxtrot);
            foxtrot = output.createNonce;
            romeo = foxtrot.bind(output)();
 175:
            zulu['nonce'] = romeo;
            zulu['attachments'] = golf;
            zulu['maxSizeCallback'] = oscar;
            zulu['analytics_location'] = yankee;
            zulu['sectionName'] = offset;
            zulu['source'] = tango;
            _closure2_slot1 = zulu;
            yankee = _closure1_slot2;
            echo = _closure1_slot3;
            offset = 25;
            offset = echo[offset];
            foxtrot = yankee.bind(entity)(offset);
            romeo = foxtrot.addQueued;
            yankee = zulu.nonce;
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
            output = echo[output];
            output = result.bind(entity)(output);
            output = output.InteractionTypes;
            output = output.APPLICATION_COMMAND;
            backup['interactionType'] = output;
            backup['applicationId'] = sizing;
            backup['channelId'] = kilo;
            offset['data'] = backup;
            offset = romeo.bind(foxtrot)(yankee, offset);
            if(!(verify != golf)) { _fun70913_ip = 355; continue _fun70913 }
 344:
            offset = golf.length;
            verify = 0;
            if(!(!(offset > verify))) { _fun70913_ip = 367; continue _fun70913 }
 355:
            tango = _closure1_slot21;
            tango = tango.bind(entity)(zulu, options);
            _fun70913_ip = 412; continue _fun70913;
 367:
            control = zulu.nonce;
            zulu = function() { // Original name: stageAttachments
                entity = undefined;
                tango = _closure1_slot27;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            sequence = undefined;
            vacuum = golf;
            source = report;
            update = oscar;
            tango = sequence[zulu](vacuum, control, source, update, echo);
            zulu = tango.then;
            mike = function(argFoo) {
                _fun70915: for(var _fun70915_ip = 0; ; ) switch(_fun70915_ip) {
 0:
                    entity = argFoo;
                    if(!entity) { _fun70915_ip = 32; continue _fun70915 }
 6:
                    tango = _closure1_slot21;
                    zulu = _closure2_slot1;
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
 32:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
 412:
            return entity;
        }
    };
    var _closure1_slot17 = report;
    report = 36;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/application_commands/executeCommand.tsx';
    report = oscar.bind(golf)(report);
    tango = function() { // Original name: executeCommand
        entity = undefined;
        tango = _closure1_slot20;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    zulu['retryCommandMessage'] = mike;
    return entity;
})();