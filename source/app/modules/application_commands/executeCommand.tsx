// app/modules/application_commands/executeCommand.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot19;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot19;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function _executeCommand() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 6272; continue _fun0004 }
 15:
                    var7 = var2.command;
                    var68 = var2.optionValues;
                    var _closure4_slot0 = var68;
                    var6 = var2.context;
                    var8 = var2.commandTargetId;
                    var17 = var2.maxSizeCallback;
                    var14 = var2.commandOrigin;
                    var13 = undefined;
                    if(!(var14 === var13)) { _fun0004_ip = 95; continue _fun0004 }
 60:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 9;
                    var4 = var9[var4];
                    var4 = var5.bind(var13)(var4);
                    var4 = var4.CommandOrigin;
                    var14 = var4.CHAT;
 95:
                    var15 = var2.sectionName;
                    var4 = var2.interactionLifecycleOptionsFactory;
                    if(!(var4 === var13)) { _fun0004_ip = 118; continue _fun0004 }
 111:
                    var4 = _closure1_slot22;
 118:
                    var11 = var2.source;
                    SaveGenerator(address=127);
 125:
                    return var13;
 127:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 6269; continue _fun0004 }
 136:
                    var3 = var6.channel;
                    var10 = null;
                    if(!(var10 != var3)) { _fun0004_ip = 6157; continue _fun0004 }
 150:
                    var9 = _closure1_slot10;
                    var5 = var9.getSource;
                    var3 = var6.channel;
                    var3 = var3.id;
                    var3 = var5.bind(var9)(var3);
                    if(!(var10 != var3)) { _fun0004_ip = 185; continue _fun0004 }
 182:
                    var11 = var3;
 185:
                    var9 = _closure1_slot10;
                    var5 = var9.getCommandOrigin;
                    var3 = var6.channel;
                    var3 = var3.id;
                    var3 = var5.bind(var9)(var3);
                    if(!(var10 != var3)) { _fun0004_ip = 219; continue _fun0004 }
 216:
                    var14 = var3;
 219:
                    var3 = var6.autocomplete;
                    if(!(var10 == var3)) { _fun0004_ip = 283; continue _fun0004 }
 229:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var3 = 10;
                    var3 = var9[var3];
                    var9 = var5.bind(var13)(var3);
                    var5 = var9.dispatch;
                    var3 = {};
                    var18 = 'APPLICATION_COMMAND_USED';
                    var3['type'] = var18;
                    var3['context'] = var6;
                    var3['command'] = var7;
                    var3['commandOrigin'] = var14;
                    var3 = var5.bind(var9)(var3);
 283:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var3 = 11;
                    var3 = var9[var3];
                    var9 = var5.bind(var13)(var3);
                    var5 = var9.unarchiveThreadIfNecessary;
                    var3 = var6.channel;
                    var3 = var3.id;
                    var3 = var5.bind(var9)(var3);
                    SaveGenerator(address=328);
 326:
                    return var3;
 328:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 6266; continue _fun0004 }
 337:
                    var23 = new Array(0);
                    var18 = new Array(0);
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var67 = 12;
                    var5 = var5[var67];
                    var9 = var9.bind(var13)(var5);
                    var5 = var9.getCommandAttachmentDraftType;
                    var20 = var5.bind(var9)(var14);
                    var5 = var7.options;
                    if(!(var10 != var5)) { _fun0004_ip = 5607; continue _fun0004 }
 388:
                    var9 = _closure1_slot18;
                    var5 = var7.options;
                    var66 = var9.bind(var13)(var5);
                    var9 = var66.bind(var13)();
                    var5 = var9.done;
                    var65 = global;
                    var64 = 'Unexpected value for option "';
                    var63 = '"';
                    var62 = 16;
                    var61 = '';
                    var60 = 'Failed to resolve ';
                    var59 = 'channelMention';
                    var58 = 17;
                    var57 = 'text';
                    var56 = 'roleMention';
                    var55 = false;
                    var54 = '@everyone';
                    var53 = 'textMention';
                    var52 = 'userMention';
                    var51 = 15;
                    var50 = 14;
                    var49 = 13;
                    var48 = 0;
                    var47 = 'Option "';
                    var46 = '" expects a single option type';
                    var45 = 1;
                    var44 = '" expects a value';
                    var43 = var9;
                    var42 = undefined;
                    var41 = undefined;
                    var40 = undefined;
                    var39 = undefined;
                    var38 = undefined;
                    var37 = undefined;
                    var36 = undefined;
                    var35 = undefined;
                    var34 = undefined;
                    var33 = undefined;
                    var32 = undefined;
                    var31 = undefined;
                    var30 = undefined;
                    var29 = undefined;
                    var28 = undefined;
                    var27 = undefined;
                    var26 = undefined;
                    var25 = undefined;
                    var24 = undefined;
                    var22 = undefined;
                    var21 = undefined;
                    var19 = undefined;
                    var9 = undefined;
                    if(var5) { _fun0004_ip = 5607; continue _fun0004 }
 558:
                    r111 = var43.value;
                    var92 = r111.type;
                    var69 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var49];
                    var5 = var69.bind(var13)(var5);
                    var5 = var5.ApplicationCommandOptionType;
                    var5 = var5.SUB_COMMAND;
                    var91 = var42;
                    var90 = var41;
                    var89 = var40;
                    var88 = var39;
                    var87 = var38;
                    var86 = var37;
                    var85 = var36;
                    var84 = var35;
                    var83 = var34;
                    var82 = var33;
                    var81 = var32;
                    var80 = var31;
                    var79 = var30;
                    var78 = var29;
                    var77 = var28;
                    var76 = var27;
                    var75 = var26;
                    var74 = var25;
                    var73 = var24;
                    var72 = var22;
                    var71 = var21;
                    var70 = var19;
                    var69 = var9;
                    if(!(var92 !== var5)) { _fun0004_ip = 5520; continue _fun0004 }
 673:
                    var92 = r111.type;
                    var93 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var49];
                    var5 = var93.bind(var13)(var5);
                    var5 = var5.ApplicationCommandOptionType;
                    var5 = var5.SUB_COMMAND_GROUP;
                    var91 = var42;
                    var90 = var41;
                    var89 = var40;
                    var88 = var39;
                    var87 = var38;
                    var86 = var37;
                    var85 = var36;
                    var84 = var35;
                    var83 = var34;
                    var82 = var33;
                    var81 = var32;
                    var80 = var31;
                    var79 = var30;
                    var78 = var29;
                    var77 = var28;
                    var76 = var27;
                    var75 = var26;
                    var74 = var25;
                    var73 = var24;
                    var72 = var22;
                    var71 = var21;
                    var70 = var19;
                    var69 = var9;
                    if(!(var92 !== var5)) { _fun0004_ip = 5520; continue _fun0004 }
 783:
                    var5 = r111.name;
                    var5 = var5 in var68;
                    var91 = var42;
                    var90 = var41;
                    var89 = var40;
                    var88 = var39;
                    var87 = var38;
                    var86 = var37;
                    var85 = var36;
                    var84 = var35;
                    var83 = var34;
                    var82 = var33;
                    var81 = var32;
                    var80 = var31;
                    var79 = var30;
                    var78 = var29;
                    var77 = var28;
                    var76 = var27;
                    var75 = var26;
                    var74 = var25;
                    var73 = var24;
                    var72 = var22;
                    var71 = var21;
                    var70 = var19;
                    var69 = var9;
                    if(!var5) { _fun0004_ip = 5520; continue _fun0004 }
 867:
                    r108 = var6.autocomplete;
                    var5 = var10 == r108;
                    var92 = undefined;
                    if(var5) { _fun0004_ip = 887; continue _fun0004 }
 882:
                    var92 = r108.name;
 887:
                    var5 = r111.name;
                    r106 = var92 === var5;
                    if(r106) { _fun0004_ip = 901; continue _fun0004 }
 899:
                    r106 = undefined;
 901:
                    var92 = r111.type;
                    var93 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var49];
                    var5 = var93.bind(var13)(var5);
                    var5 = var5.ApplicationCommandOptionType;
                    var5 = var5.STRING;
                    if(!(var92 === var5)) { _fun0004_ip = 1411; continue _fun0004 }
 942:
                    var92 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var5 = var5[var50];
                    var93 = var92.bind(var13)(var5);
                    var92 = var93.getOptionalString;
                    var5 = r111.name;
                    var92 = var92.bind(var93)(var68, var5);
                    var5 = var10 == var92;
                    var93 = undefined;
                    if(var5) { _fun0004_ip = 995; continue _fun0004 }
 985:
                    var5 = var92.trim;
                    var93 = var5.bind(var92)();
 995:
                    var94 = var10 != var93;
                    var5 = var61;
                    if(!var94) { _fun0004_ip = 1008; continue _fun0004 }
 1005:
                    var5 = var93;
 1008:
                    var94 = r111.choices;
                    if(!(var10 == var94)) { _fun0004_ip = 1105; continue _fun0004 }
 1018:
                    var95 = r111.autocomplete;
                    var94 = undefined;
                    if(!var95) { _fun0004_ip = 1140; continue _fun0004 }
 1029:
                    var95 = var6.autocomplete;
                    if(!(var10 != var95)) { _fun0004_ip = 1042; continue _fun0004 }
 1039:
                    if(r106) { _fun0004_ip = 1089; continue _fun0004 }
 1042:
                    var96 = _closure1_slot0;
                    var95 = _closure1_slot3;
                    var95 = var95[var51];
                    var98 = var96.bind(var13)(var95);
                    var97 = var98.findAutocompleteChoiceStringValue;
                    var95 = var6.channel;
                    var96 = var95.id;
                    var95 = r111.name;
                    var95 = var97.bind(var98)(var96, var95, var5);
                    _fun0004_ip = 1100; continue _fun0004;
 1089:
                    var96 = var6.autocomplete;
                    var95 = var96.query;
 1100:
                    var94 = var95;
                    _fun0004_ip = 1140; continue _fun0004;
 1105:
                    var96 = _closure1_slot0;
                    var95 = _closure1_slot3;
                    var95 = var95[var51];
                    var97 = var96.bind(var13)(var95);
                    var96 = var97.findChoiceStringValue;
                    var95 = r111.choices;
                    var94 = var96.bind(var97)(var95, var5);
 1140:
                    if(!(var10 == var94)) { _fun0004_ip = 1147; continue _fun0004 }
 1144:
                    var94 = var5;
 1147:
                    if(!(var61 === var94)) { _fun0004_ip = 1236; continue _fun0004 }
 1151:
                    var95 = var6.autocomplete;
                    if(!(var10 != var95)) { _fun0004_ip = 1236; continue _fun0004 }
 1161:
                    var91 = r108;
                    var90 = var41;
                    var89 = r106;
                    var88 = var94;
                    var87 = var38;
                    var86 = var37;
                    var85 = var36;
                    var84 = var35;
                    var83 = var34;
                    var82 = var33;
                    var81 = var32;
                    var80 = var31;
                    var79 = var30;
                    var78 = var29;
                    var77 = var28;
                    var76 = var27;
                    var75 = var26;
                    var74 = var25;
                    var73 = var24;
                    var72 = var22;
                    var71 = var93;
                    var70 = var92;
                    var69 = var5;
                    if(!r106) { _fun0004_ip = 5520; continue _fun0004 }
 1236:
                    var96 = _closure1_slot1;
                    var95 = _closure1_slot3;
                    var95 = var95[var62];
                    var97 = var96.bind(var13)(var95);
                    var95 = var6.autocomplete;
                    var96 = var10 != var95;
                    if(var96) { _fun0004_ip = 1270; continue _fun0004 }
 1266:
                    var96 = var10 != var94;
 1270:
                    var98 = r111.name;
                    var95 = var65.HermesInternal;
                    var95 = var95.concat;
                    var95 = var95.bind(var47)(var98, var44);
                    var95 = var97.bind(var13)(var96, var95);
                    var96 = var23.push;
                    var95 = {};
                    var97 = r111.type;
                    var95['type'] = var97;
                    var97 = r111.name;
                    var95['name'] = var97;
                    var95['value'] = var94;
                    var95['focused'] = r106;
                    var95 = var96.bind(var23)(var95);
                    var91 = r108;
                    var90 = var41;
                    var89 = r106;
                    var88 = var94;
                    var87 = var38;
                    var86 = var37;
                    var85 = var36;
                    var84 = var35;
                    var83 = var34;
                    var82 = var33;
                    var81 = var32;
                    var80 = var31;
                    var79 = var30;
                    var78 = var29;
                    var77 = var28;
                    var76 = var27;
                    var75 = var26;
                    var74 = var25;
                    var73 = var24;
                    var72 = var22;
                    var71 = var93;
                    var70 = var92;
                    var69 = var5;
                    _fun0004_ip = 5520; continue _fun0004;
 1411:
                    var92 = r111.type;
                    var93 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var49];
                    var5 = var93.bind(var13)(var5);
                    var5 = var5.ApplicationCommandOptionType;
                    var5 = var5.ATTACHMENT;
                    if(!(var92 === var5)) { _fun0004_ip = 1773; continue _fun0004 }
 1452:
                    var5 = var6.autocomplete;
                    var5 = var10 != var5;
                    var91 = r108;
                    var90 = var41;
                    var89 = r106;
                    var88 = undefined;
                    var87 = var38;
                    var86 = var37;
                    var85 = var36;
                    var84 = var35;
                    var83 = var34;
                    var82 = var33;
                    var81 = var32;
                    var80 = var31;
                    var79 = var30;
                    var78 = var29;
                    var77 = var28;
                    var76 = var27;
                    var75 = var26;
                    var74 = var25;
                    var73 = var24;
                    var72 = var22;
                    var71 = var21;
                    var70 = var19;
                    var69 = var9;
                    if(var5) { _fun0004_ip = 5520; continue _fun0004 }
 1536:
                    var94 = _closure1_slot8;
                    var93 = var94.getUpload;
                    var5 = var6.channel;
                    var92 = var5.id;
                    var5 = r111.name;
                    var5 = var93.bind(var94)(var92, var5, var20);
                    var92 = var10 == var5;
                    var91 = r108;
                    var90 = var41;
                    var89 = r106;
                    var88 = undefined;
                    var87 = var38;
                    var86 = var37;
                    var85 = var36;
                    var84 = var35;
                    var83 = var34;
                    var82 = var33;
                    var81 = var32;
                    var80 = var31;
                    var79 = var30;
                    var78 = var29;
                    var77 = var28;
                    var76 = var27;
                    var75 = var26;
                    var74 = var25;
                    var73 = var24;
                    var72 = var5;
                    var71 = var21;
                    var70 = var19;
                    var69 = var9;
                    if(var92) { _fun0004_ip = 5520; continue _fun0004 }
 1646:
                    var94 = var18.length;
                    var92 = var18.push;
                    var92 = var92.bind(var18)(var5);
                    var93 = var23.push;
                    var92 = {};
                    var95 = r111.type;
                    var92['type'] = var95;
                    var95 = r111.name;
                    var92['name'] = var95;
                    var92['value'] = var94;
                    var92['focused'] = r106;
                    var92 = var93.bind(var23)(var92);
                    var91 = r108;
                    var90 = var41;
                    var89 = r106;
                    var88 = undefined;
                    var87 = var38;
                    var86 = var37;
                    var85 = var36;
                    var84 = var35;
                    var83 = var34;
                    var82 = var33;
                    var81 = var32;
                    var80 = var31;
                    var79 = var30;
                    var78 = var29;
                    var77 = var28;
                    var76 = var27;
                    var75 = var26;
                    var74 = var25;
                    var73 = var24;
                    var72 = var5;
                    var71 = var21;
                    var70 = var19;
                    var69 = var9;
                    _fun0004_ip = 5520; continue _fun0004;
 1773:
                    var93 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var92 = var5[var50];
                    var94 = var93.bind(var13)(var92);
                    var93 = var94.filterEmpty;
                    var92 = r111.name;
                    var92 = var68[var92];
                    r104 = var93.bind(var94)(var92);
                    var92 = _closure1_slot1;
                    var5 = var5[var62];
                    var93 = var92.bind(var13)(var5);
                    var5 = var6.autocomplete;
                    var92 = var10 != var5;
                    if(var92) { _fun0004_ip = 1845; continue _fun0004 }
 1836:
                    var5 = r104.length;
                    var92 = var45 === var5;
 1845:
                    var94 = r111.name;
                    var5 = var65.HermesInternal;
                    var5 = var5.concat;
                    var5 = var5.bind(var47)(var94, var46);
                    var5 = var93.bind(var13)(var92, var5);
                    var5 = r104[var48];
                    if(!(var10 == var5)) { _fun0004_ip = 1955; continue _fun0004 }
 1881:
                    var91 = r108;
                    var90 = var41;
                    var89 = r106;
                    var88 = undefined;
                    var87 = r104;
                    var86 = var37;
                    var85 = var36;
                    var84 = var35;
                    var83 = var34;
                    var82 = var33;
                    var81 = var32;
                    var80 = var31;
                    var79 = var30;
                    var78 = var29;
                    var77 = var28;
                    var76 = var27;
                    var75 = var26;
                    var74 = var25;
                    var73 = var24;
                    var72 = var22;
                    var71 = var21;
                    var70 = var19;
                    var69 = var9;
                    if(!r106) { _fun0004_ip = 5520; continue _fun0004 }
 1955:
                    r107 = r104[var48];
                    r103 = r107;
                    if(!(var10 == r107)) { _fun0004_ip = 1980; continue _fun0004 }
 1966:
                    r103 = {'type': 'text', 'text': ''};
 1980:
                    var92 = r111.type;
                    var93 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var49];
                    var5 = var93.bind(var13)(var5);
                    var5 = var5.ApplicationCommandOptionType;
                    var5 = var5.CHANNEL;
                    if(!(var5 !== var92)) { _fun0004_ip = 4803; continue _fun0004 }
 2021:
                    var93 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var49];
                    var5 = var93.bind(var13)(var5);
                    var5 = var5.ApplicationCommandOptionType;
                    var5 = var5.ROLE;
                    if(!(var5 !== var92)) { _fun0004_ip = 4267; continue _fun0004 }
 2057:
                    var93 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var49];
                    var5 = var93.bind(var13)(var5);
                    var5 = var5.ApplicationCommandOptionType;
                    var5 = var5.USER;
                    if(!(var5 !== var92)) { _fun0004_ip = 3864; continue _fun0004 }
 2093:
                    var93 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var49];
                    var5 = var93.bind(var13)(var5);
                    var5 = var5.ApplicationCommandOptionType;
                    var5 = var5.MENTIONABLE;
                    if(!(var5 !== var92)) { _fun0004_ip = 3115; continue _fun0004 }
 2129:
                    var93 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var49];
                    var5 = var93.bind(var13)(var5);
                    var5 = var5.ApplicationCommandOptionType;
                    var5 = var5.BOOLEAN;
                    if(!(var5 !== var92)) { _fun0004_ip = 2975; continue _fun0004 }
 2165:
                    var93 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var49];
                    var5 = var93.bind(var13)(var5);
                    var5 = var5.ApplicationCommandOptionType;
                    var5 = var5.INTEGER;
                    if(!(var5 !== var92)) { _fun0004_ip = 2632; continue _fun0004 }
 2201:
                    var93 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var49];
                    var5 = var93.bind(var13)(var5);
                    var5 = var5.ApplicationCommandOptionType;
                    var5 = var5.NUMBER;
                    if(!(var5 !== var92)) { _fun0004_ip = 2289; continue _fun0004 }
 2234:
                    var93 = var65.Error;
                    var94 = r111.type;
                    var5 = var65.HermesInternal;
                    var92 = var5.concat;
                    var5 = 'Unsupported option type: ';
                    r121 = var92.bind(var5)(var94);
                    var92 = var93.prototype;
                    var92 = Object.create(var92, {constructor: {value: var93}});
                    r122 = var92;
                    var5 = new r122[var93](r121, r120);
                    var5 = var5 instanceof Object ? var5 : var92;
                    throw var5;
 2289:
                    r109 = r103.type;
                    r105 = undefined;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    if(!(var57 === r109)) { _fun0004_ip = 5179; continue _fun0004 }
 2342:
                    r110 = r103.text;
                    r109 = r110.trim;
                    r109 = r109.bind(r110)();
                    r110 = r111.choices;
                    if(!(var10 == r110)) { _fun0004_ip = 2454; continue _fun0004 }
 2367:
                    r112 = r111.autocomplete;
                    r110 = undefined;
                    if(!r112) { _fun0004_ip = 2489; continue _fun0004 }
 2378:
                    r112 = var6.autocomplete;
                    if(!(var10 != r112)) { _fun0004_ip = 2391; continue _fun0004 }
 2388:
                    if(r106) { _fun0004_ip = 2438; continue _fun0004 }
 2391:
                    r113 = _closure1_slot0;
                    r112 = _closure1_slot3;
                    r112 = r112[var51];
                    r115 = r113.bind(var13)(r112);
                    r114 = r115.findAutocompleteChoiceNumberValue;
                    r112 = var6.channel;
                    r113 = r112.id;
                    r112 = r111.name;
                    r112 = r114.bind(r115)(r113, r112, r109);
                    _fun0004_ip = 2449; continue _fun0004;
 2438:
                    r113 = var6.autocomplete;
                    r112 = r113.query;
 2449:
                    r110 = r112;
                    _fun0004_ip = 2489; continue _fun0004;
 2454:
                    r113 = _closure1_slot0;
                    r112 = _closure1_slot3;
                    r112 = r112[var51];
                    r114 = r113.bind(var13)(r112);
                    r113 = r114.findChoiceNumberValue;
                    r112 = r111.choices;
                    r110 = r113.bind(r114)(r112, r109);
 2489:
                    r105 = r110;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = r109;
                    if(!(var10 == r105)) { _fun0004_ip = 5179; continue _fun0004 }
 2538:
                    r112 = var65.Number;
                    r113 = _closure1_slot2;
                    r110 = _closure1_slot3;
                    r110 = r110[var50];
                    r114 = r113.bind(var13)(r110);
                    r113 = r114.normalizeNumericString;
                    r110 = _closure1_slot6;
                    r110 = r110.locale;
                    r110 = r113.bind(r114)(r110, r109);
                    r105 = r112.bind(var13)(r110);
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = r109;
                    _fun0004_ip = 5179; continue _fun0004;
 2632:
                    r109 = r103.type;
                    r105 = undefined;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    if(!(var57 === r109)) { _fun0004_ip = 5179; continue _fun0004 }
 2685:
                    r110 = r103.text;
                    r109 = r110.trim;
                    r109 = r109.bind(r110)();
                    r110 = r111.choices;
                    if(!(var10 == r110)) { _fun0004_ip = 2797; continue _fun0004 }
 2710:
                    r112 = r111.autocomplete;
                    r110 = undefined;
                    if(!r112) { _fun0004_ip = 2832; continue _fun0004 }
 2721:
                    r112 = var6.autocomplete;
                    if(!(var10 != r112)) { _fun0004_ip = 2734; continue _fun0004 }
 2731:
                    if(r106) { _fun0004_ip = 2781; continue _fun0004 }
 2734:
                    r113 = _closure1_slot0;
                    r112 = _closure1_slot3;
                    r112 = r112[var51];
                    r115 = r113.bind(var13)(r112);
                    r114 = r115.findAutocompleteChoiceNumberValue;
                    r112 = var6.channel;
                    r113 = r112.id;
                    r112 = r111.name;
                    r112 = r114.bind(r115)(r113, r112, r109);
                    _fun0004_ip = 2792; continue _fun0004;
 2781:
                    r113 = var6.autocomplete;
                    r112 = r113.query;
 2792:
                    r110 = r112;
                    _fun0004_ip = 2832; continue _fun0004;
 2797:
                    r113 = _closure1_slot0;
                    r112 = _closure1_slot3;
                    r112 = r112[var51];
                    r114 = r113.bind(var13)(r112);
                    r113 = r114.findChoiceNumberValue;
                    r112 = r111.choices;
                    r110 = r113.bind(r114)(r112, r109);
 2832:
                    r105 = r110;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = r109;
                    var5 = var24;
                    if(!(var10 == r105)) { _fun0004_ip = 5179; continue _fun0004 }
 2881:
                    r112 = var65.Number;
                    r113 = _closure1_slot2;
                    r110 = _closure1_slot3;
                    r110 = r110[var50];
                    r114 = r113.bind(var13)(r110);
                    r113 = r114.normalizeNumericString;
                    r110 = _closure1_slot6;
                    r110 = r110.locale;
                    r110 = r113.bind(r114)(r110, r109);
                    r105 = r112.bind(var13)(r110);
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = r109;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 2975:
                    r109 = r103.type;
                    r105 = undefined;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    if(!(var57 === r109)) { _fun0004_ip = 5179; continue _fun0004 }
 3028:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[var51];
                    r112 = r110.bind(var13)(r109);
                    r110 = r112.toChoiceBooleanValue;
                    r113 = r103.text;
                    r109 = r113.trim;
                    r109 = r109.bind(r113)();
                    r105 = r110.bind(r112)(r109);
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 3115:
                    r109 = r103.type;
                    if(!(var52 !== r109)) { _fun0004_ip = 3815; continue _fun0004 }
 3127:
                    r109 = r103.type;
                    if(!(var56 !== r109)) { _fun0004_ip = 3765; continue _fun0004 }
 3139:
                    r109 = r103.type;
                    if(!(var53 === r109)) { _fun0004_ip = 3160; continue _fun0004 }
 3148:
                    r109 = r103.text;
                    if(!(var54 !== r109)) { _fun0004_ip = 3699; continue _fun0004 }
 3160:
                    r109 = r103.type;
                    r105 = undefined;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    if(!(var57 === r109)) { _fun0004_ip = 5179; continue _fun0004 }
 3213:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[var67];
                    r112 = r110.bind(var13)(r109);
                    r110 = r112.isSnowflake;
                    r109 = r103.text;
                    r109 = r110.bind(r112)(r109);
                    if(r109) { _fun0004_ip = 3640; continue _fun0004 }
 3252:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[var58];
                    r115 = r110.bind(var13)(r109);
                    r114 = r115.resolveApplicationCommandOption;
                    r113 = r103.text;
                    r110 = var6.guild;
                    r109 = var10 == r110;
                    r112 = undefined;
                    if(r109) { _fun0004_ip = 3299; continue _fun0004 }
 3294:
                    r112 = r110.id;
 3299:
                    r109 = var6.channel;
                    r109 = r109.id;
                    r109 = r114.bind(r115)(r113, r112, r109);
                    r113 = var10 == r109;
                    r112 = undefined;
                    if(r113) { _fun0004_ip = 3330; continue _fun0004 }
 3325:
                    r112 = r109.type;
 3330:
                    if(!(var52 !== r112)) { _fun0004_ip = 3591; continue _fun0004 }
 3337:
                    r113 = var10 == r109;
                    r112 = undefined;
                    if(r113) { _fun0004_ip = 3351; continue _fun0004 }
 3346:
                    r112 = r109.type;
 3351:
                    if(!(var56 !== r112)) { _fun0004_ip = 3541; continue _fun0004 }
 3358:
                    r113 = var10 == r109;
                    r112 = undefined;
                    if(r113) { _fun0004_ip = 3372; continue _fun0004 }
 3367:
                    r112 = r109.type;
 3372:
                    if(!(var53 === r112)) { _fun0004_ip = 3385; continue _fun0004 }
 3376:
                    r112 = r109.text;
                    if(!(var54 !== r112)) { _fun0004_ip = 3475; continue _fun0004 }
 3385:
                    r113 = _closure1_slot1;
                    r112 = _closure1_slot3;
                    r112 = r112[var62];
                    r113 = r113.bind(var13)(r112);
                    r114 = r103.text;
                    r112 = var65.HermesInternal;
                    r112 = r112.concat;
                    r112 = r112.bind(var60)(r114);
                    r112 = r113.bind(var13)(var55, r112);
                    r105 = undefined;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = r110;
                    var94 = r109;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 3475:
                    r112 = var6.guild;
                    r114 = var10 == r112;
                    r113 = undefined;
                    if(r114) { _fun0004_ip = 3494; continue _fun0004 }
 3489:
                    r113 = r112.id;
 3494:
                    r105 = r113;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = r110;
                    var94 = r109;
                    var93 = r112;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 3541:
                    r105 = r109.roleId;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = r110;
                    var94 = r109;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 3591:
                    r105 = r109.userId;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = r110;
                    var94 = r109;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 3640:
                    r110 = r103.text;
                    r109 = r110.trim;
                    r105 = r109.bind(r110)();
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 3699:
                    r109 = var6.guild;
                    r112 = var10 == r109;
                    r110 = undefined;
                    if(r112) { _fun0004_ip = 3718; continue _fun0004 }
 3713:
                    r110 = r109.id;
 3718:
                    r105 = r110;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = r109;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 3765:
                    r105 = r103.roleId;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 3815:
                    r105 = r103.userId;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 3864:
                    r109 = r103.type;
                    if(!(var52 !== r109)) { _fun0004_ip = 4218; continue _fun0004 }
 3876:
                    r109 = r103.type;
                    r105 = undefined;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    if(!(var57 === r109)) { _fun0004_ip = 5179; continue _fun0004 }
 3929:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[var67];
                    r112 = r110.bind(var13)(r109);
                    r110 = r112.isSnowflake;
                    r109 = r103.text;
                    r109 = r110.bind(r112)(r109);
                    if(r109) { _fun0004_ip = 4159; continue _fun0004 }
 3968:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[var58];
                    r116 = r110.bind(var13)(r109);
                    r115 = r116.resolveApplicationCommandOption;
                    r114 = r103.text;
                    r110 = var6.guild;
                    r109 = var10 == r110;
                    r113 = undefined;
                    if(r109) { _fun0004_ip = 4015; continue _fun0004 }
 4010:
                    r113 = r110.id;
 4015:
                    r109 = var6.channel;
                    r119 = r109.id;
                    r109 = {};
                    r109['allowRoles'] = var55;
                    r122 = r116;
                    r121 = r114;
                    r120 = r113;
                    r118 = r109;
                    r109 = r122[r115](r121, r120, r119, r118, r117);
                    r113 = _closure1_slot1;
                    r112 = _closure1_slot3;
                    r112 = r112[var62];
                    r114 = r113.bind(var13)(r112);
                    r113 = var10 == r109;
                    r112 = undefined;
                    if(r113) { _fun0004_ip = 4079; continue _fun0004 }
 4074:
                    r112 = r109.type;
 4079:
                    r115 = r103.text;
                    r113 = var65.HermesInternal;
                    r113 = r113.concat;
                    r113 = r113.bind(var60)(r115);
                    r112 = var52 === r112;
                    r112 = r114.bind(var13)(r112, r113);
                    r105 = r109.userId;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = r110;
                    var97 = r109;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 4159:
                    r110 = r103.text;
                    r109 = r110.trim;
                    r105 = r109.bind(r110)();
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 4218:
                    r105 = r103.userId;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 4267:
                    r109 = r103.type;
                    if(!(var56 !== r109)) { _fun0004_ip = 4753; continue _fun0004 }
 4279:
                    r109 = r103.type;
                    if(!(var57 !== r109)) { _fun0004_ip = 4463; continue _fun0004 }
 4291:
                    r109 = r103.type;
                    r105 = undefined;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    if(!(var53 === r109)) { _fun0004_ip = 5179; continue _fun0004 }
 4344:
                    r109 = r103.text;
                    r105 = undefined;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    if(!(var54 === r109)) { _fun0004_ip = 5179; continue _fun0004 }
 4397:
                    r109 = var6.guild;
                    r112 = var10 == r109;
                    r110 = undefined;
                    if(r112) { _fun0004_ip = 4416; continue _fun0004 }
 4411:
                    r110 = r109.id;
 4416:
                    r105 = r110;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = r109;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 4463:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[var67];
                    r112 = r110.bind(var13)(r109);
                    r110 = r112.isSnowflake;
                    r109 = r103.text;
                    r109 = r110.bind(r112)(r109);
                    if(r109) { _fun0004_ip = 4694; continue _fun0004 }
 4502:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[var58];
                    r116 = r110.bind(var13)(r109);
                    r115 = r116.resolveApplicationCommandOption;
                    r114 = r103.text;
                    r110 = var6.guild;
                    r109 = var10 == r110;
                    r113 = undefined;
                    if(r109) { _fun0004_ip = 4549; continue _fun0004 }
 4544:
                    r113 = r110.id;
 4549:
                    r109 = var6.channel;
                    r119 = r109.id;
                    r109 = {};
                    r109['allowUsers'] = var55;
                    r122 = r116;
                    r121 = r114;
                    r120 = r113;
                    r118 = r109;
                    r109 = r122[r115](r121, r120, r119, r118, r117);
                    r113 = _closure1_slot1;
                    r112 = _closure1_slot3;
                    r112 = r112[var62];
                    r114 = r113.bind(var13)(r112);
                    r113 = var10 == r109;
                    r112 = undefined;
                    if(r113) { _fun0004_ip = 4613; continue _fun0004 }
 4608:
                    r112 = r109.type;
 4613:
                    r115 = r103.text;
                    r113 = var65.HermesInternal;
                    r113 = r113.concat;
                    r113 = r113.bind(var60)(r115);
                    r112 = var56 === r112;
                    r112 = r114.bind(var13)(r112, r113);
                    r105 = r109.roleId;
                    r102 = var36;
                    r101 = var35;
                    r100 = r110;
                    var100 = r109;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 4694:
                    r110 = r103.text;
                    r109 = r110.trim;
                    r105 = r109.bind(r110)();
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 4753:
                    r105 = r103.roleId;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 4803:
                    r109 = r103.type;
                    if(!(var59 !== r109)) { _fun0004_ip = 5135; continue _fun0004 }
 4815:
                    r109 = r103.type;
                    r105 = undefined;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    if(!(var57 === r109)) { _fun0004_ip = 5179; continue _fun0004 }
 4868:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[var67];
                    r112 = r110.bind(var13)(r109);
                    r110 = r112.isSnowflake;
                    r109 = r103.text;
                    r109 = r110.bind(r112)(r109);
                    if(r109) { _fun0004_ip = 5079; continue _fun0004 }
 4907:
                    r110 = _closure1_slot0;
                    r109 = _closure1_slot3;
                    r109 = r109[var58];
                    r115 = r110.bind(var13)(r109);
                    r114 = r115.resolveApplicationCommandOption;
                    r113 = r103.text;
                    r110 = var6.guild;
                    r109 = var10 == r110;
                    r112 = undefined;
                    if(r109) { _fun0004_ip = 4954; continue _fun0004 }
 4949:
                    r112 = r110.id;
 4954:
                    r109 = var6.channel;
                    r109 = r109.id;
                    r109 = r114.bind(r115)(r113, r112, r109);
                    r113 = _closure1_slot1;
                    r112 = _closure1_slot3;
                    r112 = r112[var62];
                    r114 = r113.bind(var13)(r112);
                    r113 = var10 == r109;
                    r112 = undefined;
                    if(r113) { _fun0004_ip = 5002; continue _fun0004 }
 4997:
                    r112 = r109.type;
 5002:
                    r115 = r103.text;
                    r113 = var65.HermesInternal;
                    r113 = r113.concat;
                    r113 = r113.bind(var60)(r115);
                    r112 = var59 === r112;
                    r112 = r114.bind(var13)(r112, r113);
                    r105 = r109.channelId;
                    r102 = r110;
                    r101 = r109;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 5079:
                    r110 = r103.text;
                    r109 = r110.trim;
                    r105 = r109.bind(r110)();
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
                    _fun0004_ip = 5179; continue _fun0004;
 5135:
                    r105 = r103.channelId;
                    r102 = var36;
                    r101 = var35;
                    r100 = var34;
                    var100 = var33;
                    var99 = var32;
                    var98 = var31;
                    var97 = var30;
                    var96 = var29;
                    var95 = var28;
                    var94 = var27;
                    var93 = var26;
                    var92 = var25;
                    var5 = var24;
 5179:
                    r109 = var61 !== r105;
                    if(r109) { _fun0004_ip = 5196; continue _fun0004 }
 5186:
                    r110 = var6.autocomplete;
                    r109 = var10 == r110;
 5196:
                    if(r109) { _fun0004_ip = 5202; continue _fun0004 }
 5199:
                    r109 = r106;
 5202:
                    var91 = r108;
                    var90 = r107;
                    var89 = r106;
                    var88 = r105;
                    var87 = r104;
                    var86 = r103;
                    var85 = r102;
                    var84 = r101;
                    var83 = r100;
                    var82 = var100;
                    var81 = var99;
                    var80 = var98;
                    var79 = var97;
                    var78 = var96;
                    var77 = var95;
                    var76 = var94;
                    var75 = var93;
                    var74 = var92;
                    var73 = var5;
                    var72 = var22;
                    var71 = var21;
                    var70 = var19;
                    var69 = var9;
                    if(!r109) { _fun0004_ip = 5520; continue _fun0004 }
 5277:
                    r110 = _closure1_slot1;
                    r109 = _closure1_slot3;
                    r109 = r109[var62];
                    r112 = r110.bind(var13)(r109);
                    r109 = var6.autocomplete;
                    r110 = var10 != r109;
                    if(r110) { _fun0004_ip = 5311; continue _fun0004 }
 5307:
                    r110 = var10 != r105;
 5311:
                    r113 = r111.name;
                    r109 = var65.HermesInternal;
                    r109 = r109.concat;
                    r109 = r109.bind(var64)(r113, var63);
                    r109 = r112.bind(var13)(r110, r109);
                    var91 = r108;
                    var90 = r107;
                    var89 = r106;
                    var88 = r105;
                    var87 = r104;
                    var86 = r103;
                    var85 = r102;
                    var84 = r101;
                    var83 = r100;
                    var82 = var100;
                    var81 = var99;
                    var80 = var98;
                    var79 = var97;
                    var78 = var96;
                    var77 = var95;
                    var76 = var94;
                    var75 = var93;
                    var74 = var92;
                    var73 = var5;
                    var72 = var22;
                    var71 = var21;
                    var70 = var19;
                    var69 = var9;
                    if(!(var10 != r105)) { _fun0004_ip = 5520; continue _fun0004 }
 5412:
                    r110 = var23.push;
                    r109 = {};
                    r112 = r111.type;
                    r109['type'] = r112;
                    r111 = r111.name;
                    r109['name'] = r111;
                    r109['value'] = r105;
                    r109['focused'] = r106;
                    r109 = r110.bind(var23)(r109);
                    var91 = r108;
                    var90 = r107;
                    var89 = r106;
                    var88 = r105;
                    var87 = r104;
                    var86 = r103;
                    var85 = r102;
                    var84 = r101;
                    var83 = r100;
                    var82 = var100;
                    var81 = var99;
                    var80 = var98;
                    var79 = var97;
                    var78 = var96;
                    var77 = var95;
                    var76 = var94;
                    var75 = var93;
                    var74 = var92;
                    var73 = var5;
                    var72 = var22;
                    var71 = var21;
                    var70 = var19;
                    var69 = var9;
 5520:
                    var92 = var66.bind(var13)();
                    var5 = var92.done;
                    var42 = var91;
                    var41 = var90;
                    var40 = var89;
                    var39 = var88;
                    var38 = var87;
                    var37 = var86;
                    var36 = var85;
                    var35 = var84;
                    var34 = var83;
                    var33 = var82;
                    var32 = var81;
                    var31 = var80;
                    var30 = var79;
                    var29 = var78;
                    var28 = var77;
                    var27 = var76;
                    var26 = var75;
                    var25 = var74;
                    var24 = var73;
                    var22 = var72;
                    var21 = var71;
                    var19 = var70;
                    var9 = var69;
                    var43 = var92;
                    if(!var5) { _fun0004_ip = 558; continue _fun0004 }
 5607:
                    var9 = var7.subCommandPath;
                    var5 = var23;
                    if(!(var10 != var9)) { _fun0004_ip = 5706; continue _fun0004 }
 5620:
                    var9 = var7.subCommandPath;
                    var9 = var9.length;
                    var22 = 1;
                    var21 = var9 - var22;
                    var19 = 0;
                    var9 = var23;
                    var5 = var9;
                    if(!(var21 >= var19)) { _fun0004_ip = 5706; continue _fun0004 }
 5650:
                    var23 = var7.subCommandPath;
                    var25 = var23[var21];
                    var23 = var25.name;
                    var24 = {};
                    var25 = var25.type;
                    var24['type'] = var25;
                    var24['name'] = var23;
                    var24['options'] = var9;
                    var23 = new Array(1);
                    var23[0] = var24;
                    var21 = var21 - var22;
                    var9 = var23;
                    var5 = var9;
                    if(var21 >= var19) { _fun0004_ip = 5650; continue _fun0004 }
 5706:
                    var9 = var7.execute;
                    if(!(var10 == var9)) { _fun0004_ip = 6160; continue _fun0004 }
 5719:
                    var19 = var7.inputType;
                    var21 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var22 = 9;
                    var9 = var9[var22];
                    var9 = var21.bind(var13)(var9);
                    var9 = var9.ApplicationCommandInputType;
                    var9 = var9.BUILT_IN;
                    if(!(var19 !== var9)) { _fun0004_ip = 6157; continue _fun0004 }
 5764:
                    var19 = var7.inputType;
                    var21 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var9 = var9[var22];
                    var9 = var21.bind(var13)(var9);
                    var9 = var9.ApplicationCommandInputType;
                    var9 = var9.BUILT_IN_TEXT;
                    if(!(var19 !== var9)) { _fun0004_ip = 6157; continue _fun0004 }
 5806:
                    var19 = var7.inputType;
                    var21 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var9 = var9[var22];
                    var9 = var21.bind(var13)(var9);
                    var9 = var9.ApplicationCommandInputType;
                    var9 = var9.BUILT_IN_INTEGRATION;
                    if(!(var19 !== var9)) { _fun0004_ip = 6157; continue _fun0004 }
 5848:
                    var9 = {};
                    var19 = var7.version;
                    var9['version'] = var19;
                    var21 = var7.rootCommand;
                    var22 = var10 == var21;
                    var19 = undefined;
                    if(var22) { _fun0004_ip = 5881; continue _fun0004 }
 5876:
                    var19 = var21.id;
 5881:
                    if(!(var10 == var19)) { _fun0004_ip = 5890; continue _fun0004 }
 5885:
                    var19 = var7.id;
 5890:
                    var9['id'] = var19;
                    var19 = var7.guildId;
                    var9['guild_id'] = var19;
                    var21 = var7.rootCommand;
                    var22 = var10 == var21;
                    var19 = undefined;
                    if(var22) { _fun0004_ip = 5923; continue _fun0004 }
 5918:
                    var19 = var21.name;
 5923:
                    if(!(var10 == var19)) { _fun0004_ip = 5933; continue _fun0004 }
 5927:
                    var19 = var7.untranslatedName;
 5933:
                    var9['name'] = var19;
                    var19 = var7.type;
                    var9['type'] = var19;
                    var9['options'] = var5;
                    var19 = var7.rootCommand;
                    var9['application_command'] = var19;
                    if(!(var10 != var8)) { _fun0004_ip = 5971; continue _fun0004 }
 5965:
                    var9['target_id'] = var8;
 5971:
                    var8 = var6.autocomplete;
                    if(!(var10 == var8)) { _fun0004_ip = 6124; continue _fun0004 }
 5984:
                    var10 = _closure1_slot1;
                    var19 = _closure1_slot3;
                    var8 = 20;
                    var8 = var19[var8];
                    var19 = var10.bind(var13)(var8);
                    var10 = var19.clearAll;
                    var8 = var6.channel;
                    var8 = var8.id;
                    var8 = var10.bind(var19)(var8, var20);
                    var10 = _closure1_slot17;
                    var8 = {};
                    var19 = var7.applicationId;
                    var8['applicationId'] = var19;
                    var8['data'] = var9;
                    var8['context'] = var6;
                    var8['attachments'] = var18;
                    var8['maxSizeCallback'] = var17;
                    var16 = function onMessageSuccess() {
                        var3 = _closure1_slot16;
                        var2 = _closure4_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8['onMessageSuccess'] = var16;
                    var16 = _closure1_slot24;
                    var16 = var16.bind(var13)(var14);
                    var8['analytics_location'] = var16;
                    var8['sectionName'] = var15;
                    var8['source'] = var11;
                    var4 = var4.bind(var13)(var7, var6, var9);
                    SaveGenerator(address=6103);
 6101:
                    return var4;
 6103:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=14);
                    if(var15) { _fun0004_ip = 6121; continue _fun0004 }
 6109:
                    var8['interactionLifecycleOptions'] = var4;
                    var8 = var10.bind(var13)(var8);
                    _fun0004_ip = 6157; continue _fun0004;
 6121:
                    return var4;
 6124:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var4 = 19;
                    var4 = var10[var4];
                    var8 = var8.bind(var13)(var4);
                    var4 = var8.performAutocomplete;
                    var4 = var4.bind(var8)(var7, var6, var9);
 6157:
                    return var13;
 6160:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var4 = 18;
                    var4 = var9[var4];
                    var10 = var8.bind(var13)(var4);
                    var9 = var10.trackWithMetadata;
                    var4 = _closure1_slot12;
                    var8 = var4.APPLICATION_COMMAND_USED;
                    var4 = {};
                    var15 = var7.id;
                    var4['command_id'] = var15;
                    var15 = var7.applicationId;
                    var4['application_id'] = var15;
                    var15 = var7.type;
                    var4['command_type'] = var15;
                    var12 = _closure1_slot24;
                    var12 = var12.bind(var13)(var14);
                    var4['location'] = var12;
                    var4['source'] = var11;
                    var4 = var9.bind(var10)(var8, var4);
                    var4 = var7.execute;
                    var4 = var4.bind(var7)(var5, var6);
                    return var4;
 6266:
                    return var3;
 6269:
                    return var2;
 6272:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function queueCommand(arg1, arg2) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot1;
        var9 = _closure1_slot3;
        var7 = 25;
        var3 = var9[var7];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.enqueue;
        var3 = {};
        var8 = _closure1_slot0;
        var7 = var9[var7];
        var7 = var8.bind(var1)(var7);
        var7 = var7.MessageDataType;
        var7 = var7.COMMAND;
        var3['type'] = var7;
        var3['message'] = var6;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var10 = var4.bind(var1)(var2);
                var9 = var10.handleInteractionResponse;
                var4 = _closure2_slot0;
                var8 = var4.nonce;
                var7 = var4.applicationId;
                var6 = var4.channelId;
                var11 = var4.guildId;
                var5 = null;
                var12 = var5 != var11;
                var4 = null;
                if(!var12) { _fun0005_ip = 76; continue _fun0005 }
 73:
                var4 = var11;
 76:
                var18 = var10;
                var17 = var8;
                var16 = var3;
                var15 = var7;
                var14 = var6;
                var13 = var4;
                var4 = var18[var9](var17, var16, var15, var14, var13, var12);
                var3 = var3.ok;
                if(!var3) { _fun0005_ip = 115; continue _fun0005 }
 107:
                var4 = _closure2_slot1;
                var3 = var5 != var4;
 115:
                if(!var3) { _fun0005_ip = 126; continue _fun0005 }
 118:
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
 126:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function displayInteractionLifecycleInChat() {
        var1 = undefined;
        var4 = _closure1_slot23;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function _displayInteractionLifecycleInChat() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    var4 = arg2;
                    var10 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 674; continue _fun0006 }
 21:
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var4;
                    var6 = undefined;
                    var8 = undefined;
                    var _closure4_slot2 = var6;
                    var5 = var4.channel;
                    var16 = null;
                    if(!(var16 != var5)) { _fun0006_ip = 669; continue _fun0006 }
 51:
                    var9 = _closure1_slot2;
                    var11 = _closure1_slot3;
                    var7 = 27;
                    var7 = var11[var7];
                    var13 = var9.bind(var6)(var7);
                    var12 = var13.getCachedApplicationSection;
                    var11 = {};
                    var7 = var4.channel;
                    var11['channel'] = var7;
                    var7 = 'channel';
                    var11['type'] = var7;
                    var9 = var10.type;
                    var7 = var2.applicationId;
                    var7 = var12.bind(var13)(var11, var9, var7);
                    var8 = var7;
                    if(!(var16 != var7)) { _fun0006_ip = 664; continue _fun0006 }
 126:
                    var7 = var8;
                    var7 = var7.application;
                    var9 = var16 == var7;
                    var14 = undefined;
                    if(var9) { _fun0006_ip = 149; continue _fun0006 }
 143:
                    var14 = var7.bot;
 149:
                    if(!(var16 == var14)) { _fun0006_ip = 223; continue _fun0006 }
 153:
                    var7 = var8;
                    var7 = var7.botId;
                    if(!(var16 != var7)) { _fun0006_ip = 223; continue _fun0006 }
 166: // try_start_0
                    var9 = _closure1_slot2;
                    var11 = _closure1_slot3;
                    var7 = 28;
                    var7 = var11[var7];
                    var11 = var9.bind(var6)(var7);
                    var9 = var11.getUser;
                    var7 = var8;
                    var7 = var7.botId;
                    var7 = var9.bind(var11)(var7);
                    SaveGenerator(address=210);
 208:
                    return var7;
 210:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(var9) { _fun0006_ip = 218; continue _fun0006 }
 216: // try_end0
                    _fun0006_ip = 223; continue _fun0006;
 218:
                    return var7;
 221: // catch_target0
                    CatchBlockStart(arg_register=6);
 223:
                    var9 = {};
                    var12 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var7 = 29;
                    var11 = var15[var7];
                    var12 = var12.bind(var6)(var11);
                    var11 = {};
                    var13 = var4.channel;
                    var13 = var13.id;
                    var11['channelId'] = var13;
                    var13 = '';
                    var11['content'] = var13;
                    var17 = var10.type;
                    var18 = _closure1_slot0;
                    var13 = 13;
                    var15 = var15[var13];
                    var15 = var18.bind(var6)(var15);
                    var15 = var15.ApplicationCommandType;
                    var15 = var15.CHAT;
                    if(!(var17 !== var15)) { _fun0006_ip = 318; continue _fun0006 }
 306:
                    var15 = _closure1_slot13;
                    var15 = var15.CONTEXT_MENU_COMMAND;
                    _fun0006_ip = 328; continue _fun0006;
 318:
                    var17 = _closure1_slot13;
                    var15 = var17.CHAT_INPUT_COMMAND;
 328:
                    var11['type'] = var15;
                    if(!(var16 == var14)) { _fun0006_ip = 383; continue _fun0006 }
 336:
                    var15 = {};
                    var17 = var8;
                    var18 = var17.id;
                    var15['id'] = var18;
                    var17 = var17.name;
                    var15['username'] = var17;
                    var17 = _closure1_slot14;
                    var15['discriminator'] = var17;
                    var15['avatar'] = var16;
                    var16 = true;
                    var15['bot'] = var16;
                    var14 = var15;
 383:
                    var11['author'] = var14;
                    var21 = var12.bind(var6)(var11);
                    var22 = var9;
                    var11 = copyDataProperties(var22, var21);
                    var11 = var8.application;
                    var8 = 'application';
                    var9[var8] = var11;
                    var11 = {};
                    var8 = var10.id;
                    var11['id'] = var8;
                    var8 = var10.name;
                    var11['name'] = var8;
                    var8 = var2.displayName;
                    var11['name_localized'] = var8;
                    var12 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var13 = var8[var13];
                    var13 = var12.bind(var6)(var13);
                    var13 = var13.InteractionTypes;
                    var13 = var13.APPLICATION_COMMAND;
                    var11['type'] = var13;
                    var7 = var8[var7];
                    var13 = var12.bind(var6)(var7);
                    var12 = var13.userRecordToServer;
                    var14 = _closure1_slot9;
                    var7 = var14.getCurrentUser;
                    var7 = var7.bind(var14)();
                    var7 = var12.bind(var13)(var7);
                    var11['user'] = var7;
                    var7 = 'interaction';
                    var9[var7] = var11;
                    var7 = 'interaction_data';
                    var9[var7] = var10;
                    _closure4_slot2 = var9;
                    var7 = _closure1_slot1;
                    var5 = 30;
                    var5 = var8[var5];
                    var8 = var7.bind(var6)(var5);
                    var7 = var8.receiveMessage;
                    var4 = var4.channel;
                    var22 = var4.id;
                    var4 = {};
                    var10 = var2.applicationId;
                    var4['applicationId'] = var10;
                    var4['command'] = var2;
                    var20 = true;
                    var23 = var8;
                    var21 = var9;
                    var19 = var4;
                    var2 = var23[var7](var22, var21, var20, var19, var18);
                    var2 = {};
                    var5 = function get messageId() {
                        var1 = _closure4_slot2;
                        var1 = var1.id;
                        return var1;
                    };
                    var4 = 'messageId';
                    Object.defineProperty(var2, var4, {get: var5, set: var6, enumerable: true});
                    var5 = function get nonce() {
                        var1 = _closure4_slot2;
                        var1 = var1.id;
                        return var1;
                    };
                    var4 = 'nonce';
                    Object.defineProperty(var2, var4, {get: var5, set: var6, enumerable: true});
                    var4 = function onCreate(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var2 = _closure4_slot2;
                            var3 = var2.interaction;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0007_ip = 38; continue _fun0007 }
 19:
                            var1 = _closure4_slot2;
                            var2 = var1.interaction;
                            var1 = arg1;
                            var2['id'] = var1;
 38:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['onCreate'] = var4;
                    var4 = function onSuccess() {
                        var1 = undefined;
                        return var1;
                    };
                    var2['onSuccess'] = var4;
                    var3 = function onFailure(arg1, arg2, arg3, arg4) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var8 = arg1;
                            var4 = arg2;
                            var6 = arg4;
                            var1 = _closure4_slot1;
                            var1 = var1.channel;
                            var2 = null;
                            if(!(var2 != var1)) { _fun0008_ip = 236; continue _fun0008 }
 30:
                            var1 = var2 == var4;
                            if(!var1) { _fun0008_ip = 41; continue _fun0008 }
 37:
                            var1 = var2 != var8;
 41:
                            if(!var1) { _fun0008_ip = 95; continue _fun0008 }
 44:
                            var7 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 30;
                            var3 = var3[var1];
                            var1 = undefined;
                            var7 = var7.bind(var1)(var3);
                            var3 = var7.sendClydeError;
                            var1 = _closure4_slot1;
                            var1 = var1.channel;
                            var1 = var1.id;
                            var1 = var3.bind(var7)(var1, var8);
 95:
                            var1 = var2 == var4;
                            if(!var1) { _fun0008_ip = 106; continue _fun0008 }
 102:
                            var1 = var2 != var6;
 106:
                            if(!var1) { _fun0008_ip = 155; continue _fun0008 }
 109:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 26;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.interactionCallbackErrorReason;
                            var1 = _closure4_slot0;
                            var1 = var1.applicationId;
                            var4 = var2.bind(var3)(var6, var1);
 155:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var6 = 'MESSAGE_SEND_FAILED';
                            var1['type'] = var6;
                            var6 = _closure4_slot2;
                            var6 = var6.id;
                            var1['messageId'] = var6;
                            var5 = _closure4_slot1;
                            var5 = var5.channel;
                            var5 = var5.id;
                            var1['channelId'] = var5;
                            var1['reason'] = var4;
                            var1 = var2.bind(var3)(var1);
 236:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['onFailure'] = var3;
                    return var2;
 664:
                    var2 = {};
                    return var2;
 669:
                    var2 = {};
                    return var2;
 674:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot23 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function getAnalyticsLocationFromCommandOrigin(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var4 = 9;
            var2 = var2[var4];
            var3 = undefined;
            var2 = var6.bind(var3)(var2);
            var2 = var2.CommandOrigin;
            var2 = var2.APPLICATION_LAUNCHER;
            if(!(var2 !== var5)) { _fun0009_ip = 608; continue _fun0009 }
 47:
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var6.bind(var3)(var2);
            var2 = var2.CommandOrigin;
            var2 = var2.APP_LAUNCHER_APPLICATION_VIEW;
            if(!(var2 !== var5)) { _fun0009_ip = 577; continue _fun0009 }
 83:
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var6.bind(var3)(var2);
            var2 = var2.CommandOrigin;
            var2 = var2.IMAGE_RECS_MENU;
            if(!(var2 !== var5)) { _fun0009_ip = 546; continue _fun0009 }
 119:
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var6.bind(var3)(var2);
            var2 = var2.CommandOrigin;
            var2 = var2.IMAGE_RECS_SUBMENU;
            if(!(var2 !== var5)) { _fun0009_ip = 515; continue _fun0009 }
 155:
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var6.bind(var3)(var2);
            var2 = var2.CommandOrigin;
            var2 = var2.ACTIVITY_INSTANCE_EMBED;
            if(!(var2 !== var5)) { _fun0009_ip = 484; continue _fun0009 }
 191:
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var6.bind(var3)(var2);
            var2 = var2.CommandOrigin;
            var2 = var2.ACTIVITY_BOOKMARK_EMBED;
            if(!(var2 !== var5)) { _fun0009_ip = 453; continue _fun0009 }
 227:
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var6.bind(var3)(var2);
            var2 = var2.CommandOrigin;
            var2 = var2.MINI_SHELF;
            if(!(var2 !== var5)) { _fun0009_ip = 422; continue _fun0009 }
 263:
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var6.bind(var3)(var2);
            var2 = var2.CommandOrigin;
            var2 = var2.VOICE_TILE_ACTIVITY_SUGGESTIONS;
            if(!(var2 !== var5)) { _fun0009_ip = 391; continue _fun0009 }
 296:
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var6.bind(var3)(var2);
            var2 = var2.CommandOrigin;
            var2 = var2.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            if(!(var2 !== var5)) { _fun0009_ip = 360; continue _fun0009 }
 329:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ApplicationCommandTriggerLocations;
            var2 = var2.SLASH_UI;
            return var2;
 360:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ApplicationCommandTriggerLocations;
            var2 = var2.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            return var2;
 391:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ApplicationCommandTriggerLocations;
            var2 = var2.VC_TILE_ACTIVITY_SUGGESTION;
            return var2;
 422:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ApplicationCommandTriggerLocations;
            var2 = var2.ACTIVITIES_MINI_SHELF;
            return var2;
 453:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ApplicationCommandTriggerLocations;
            var2 = var2.ACTIVITY_BOOKMARK_EMBED;
            return var2;
 484:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ApplicationCommandTriggerLocations;
            var2 = var2.ACTIVITY_INSTANCE_EMBED;
            return var2;
 515:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ApplicationCommandTriggerLocations;
            var2 = var2.IMAGE_RECS_SUBMENU;
            return var2;
 546:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ApplicationCommandTriggerLocations;
            var2 = var2.IMAGE_RECS_MENU;
            return var2;
 577:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var2 = var5.bind(var3)(var2);
            var2 = var2.ApplicationCommandTriggerLocations;
            var2 = var2.APP_LAUNCHER_APPLICATION_VIEW;
            return var2;
 608:
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var4];
            var1 = var2.bind(var3)(var1);
            var1 = var1.ApplicationCommandTriggerLocations;
            var1 = var1.APP_LAUNCHER;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function getMaxAndTotalFileSize() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _getMaxAndTotalFileSize() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    StartGenerator();
                    var13 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 165; continue _fun0010 }
 13:
                    var3 = _closure1_slot18;
                    var12 = undefined;
                    var2 = arg1;
                    var11 = var3.bind(var12)(var2);
                    var3 = var11.bind(var12)();
                    var2 = var3.done;
                    var9 = null;
                    var8 = var3;
                    var7 = 0;
                    var6 = 0;
                    var5 = undefined;
                    var4 = 0;
                    var3 = 0;
                    if(var2) { _fun0010_ip = 150; continue _fun0010 }
 57:
                    var14 = var8.value;
                    if(var13) { _fun0010_ip = 94; continue _fun0010 }
 65:
                    var2 = var14.getSize;
                    var15 = var2.bind(var14)();
                    SaveGenerator(address=79);
 77:
                    return var15;
 79:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=1);
                    var16 = var2;
                    var2 = var15;
                    if(!var16) { _fun0010_ip = 118; continue _fun0010 }
 91:
                    return var15;
 94:
                    var15 = var14.currentSize;
                    var16 = var9 != var15;
                    var14 = 0;
                    if(!var16) { _fun0010_ip = 112; continue _fun0010 }
 109:
                    var14 = var15;
 112:
                    var2 = var14;
                    var5 = var15;
 118:
                    if(!(var2 > var6)) { _fun0010_ip = 125; continue _fun0010 }
 122:
                    var6 = var2;
 125:
                    var7 = var7 + var2;
                    var16 = var11.bind(var12)();
                    var2 = var16.done;
                    var8 = var16;
                    var4 = var7;
                    var3 = var6;
                    if(!var2) { _fun0010_ip = 57; continue _fun0010 }
 150:
                    var2 = {};
                    var2['totalSize'] = var4;
                    var2['largestUploadedFileSize'] = var3;
                    return var2;
 165:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function _stageAttachments() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 476; continue _fun0011 }
 18:
                    var14 = var8;
                    var7 = var2;
                    var _closure4_slot0 = var2;
                    var2 = arg4;
                    var _closure4_slot1 = var2;
                    var6 = undefined;
                    var _closure4_slot2 = var6;
                    var5 = undefined;
                    var11 = undefined;
                    var4 = undefined;
                    var3 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 31;
                    var2 = var9[var2];
                    var9 = var3.bind(var6)(var2);
                    var3 = var9.maxFileSize;
                    var2 = arg3;
                    var16 = var3.bind(var9)(var2);
                    _closure4_slot2 = var16;
                    var5 = function handleUploadsTooLarge(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var2 = _closure4_slot1;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0012_ip = 32; continue _fun0012 }
 13:
                            var4 = _closure4_slot1;
                            var3 = _closure4_slot2;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var3, var1);
 32:
                            var4 = _closure1_slot2;
                            var13 = _closure1_slot3;
                            var1 = 24;
                            var3 = var13[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var3);
                            var5 = var6.setFailed;
                            var4 = _closure4_slot0;
                            var3 = _closure1_slot11;
                            var3 = var3.ENTITY_TOO_LARGE;
                            var12 = _closure1_slot0;
                            var2 = 32;
                            var7 = var13[var2];
                            var7 = var12.bind(var1)(var7);
                            var9 = var7.intl;
                            var8 = var9.formatToPlainString;
                            var2 = var13[var2];
                            var2 = var12.bind(var1)(var2);
                            var2 = var2.t;
                            var7 = var2.fxEKdX;
                            var2 = {};
                            var11 = 31;
                            var11 = var13[var11];
                            var12 = var12.bind(var1)(var11);
                            var11 = var12.sizeString;
                            var10 = _closure4_slot2;
                            var10 = var11.bind(var12)(var10);
                            var2['maxSize'] = var10;
                            var2 = var8.bind(var9)(var7, var2);
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var1;
                        }
                    };
                    var2 = _closure1_slot25;
                    var3 = false;
                    var2 = var2.bind(var6)(var8, var3);
                    SaveGenerator(address=109);
 107:
                    return var2;
 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0011_ip = 473; continue _fun0011 }
 118:
                    var11 = var2.totalSize;
                    var9 = var2.largestUploadedFileSize;
                    var4 = var9;
                    var8 = global;
                    var15 = var8.Math;
                    var13 = var15.max;
                    var8 = _closure1_slot15;
                    var8 = var13.bind(var15)(var16, var8);
                    if(!(!(var9 > var8))) { _fun0011_ip = 465; continue _fun0011 }
 163:
                    var9 = var11;
                    var15 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var13 = 33;
                    var8 = var8[var13];
                    var8 = var15.bind(var6)(var8);
                    var8 = var8.MAX_TOTAL_ATTACHMENT_SIZE;
                    if(!(!(var9 > var8))) { _fun0011_ip = 465; continue _fun0011 }
 199: // try_start_0
                    var9 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var8 = 34;
                    var8 = var15[var8];
                    var9 = var9.bind(var6)(var8);
                    var8 = var14;
                    var8 = var9.bind(var6)(var8);
                    SaveGenerator(address=231);
 229:
                    return var8;
 231:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0011_ip = 239; continue _fun0011 }
 237: // try_end0
                    _fun0011_ip = 348; continue _fun0011;
 239:
                    return var8;
 242: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var9 = _closure1_slot2;
                    var19 = _closure1_slot3;
                    var8 = 24;
                    var8 = var19[var8];
                    var15 = var9.bind(var6)(var8);
                    var9 = var15.setFailed;
                    var8 = var7;
                    var16 = _closure1_slot0;
                    var7 = 32;
                    var17 = var19[var7];
                    var17 = var16.bind(var6)(var17);
                    var18 = var17.intl;
                    var17 = var18.formatToPlainString;
                    var7 = var19[var7];
                    var7 = var16.bind(var6)(var7);
                    var7 = var7.t;
                    var16 = var7.9h1/1t;
                    var7 = {};
                    var19 = var14;
                    var19 = var19.length;
                    var7['count'] = var19;
                    var7 = var17.bind(var18)(var16, var7);
                    var7 = var9.bind(var15)(var8, var6, var7);
 348:
                    var9 = _closure1_slot25;
                    var8 = var14;
                    var7 = true;
                    var7 = var9.bind(var6)(var8, var7);
                    SaveGenerator(address=367);
 365:
                    return var7;
 367:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0011_ip = 462; continue _fun0011 }
 373:
                    var11 = var7.totalSize;
                    var4 = var7.largestUploadedFileSize;
                    var15 = var14;
                    var14 = var15.some;
                    var12 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.error;
                        var1 = _closure1_slot11;
                        var1 = var1.ENTITY_TOO_LARGE;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var12 = var14.bind(var15)(var12);
                    var9 = var12;
                    if(var12) { _fun0011_ip = 437; continue _fun0011 }
 410:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var10 = var10[var13];
                    var10 = var12.bind(var6)(var10);
                    var10 = var10.MAX_TOTAL_ATTACHMENT_SIZE;
                    var9 = var11 > var10;
 437:
                    var9 = !var9;
                    var8 = var9;
                    if(var9) { _fun0011_ip = 459; continue _fun0011 }
 446:
                    var10 = var5;
                    var9 = var4;
                    var9 = var10.bind(var6)(var9);
                    var8 = false;
 459:
                    return var8;
 462:
                    return var7;
 465:
                    var4 = var5.bind(var6)(var4);
                    return var3;
 473:
                    return var2;
 476:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.AbortCodes;
    var _closure1_slot11 = var5;
    var5 = var2.AnalyticEvents;
    var _closure1_slot12 = var5;
    var5 = var2.MessageTypes;
    var _closure1_slot13 = var5;
    var2 = var2.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot14 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE;
    var _closure1_slot15 = var2;
    var2 = function trackEmojiUsage(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.flatMap;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var3 = arg1;
                        var2 = var3.type;
                        var1 = 'emoji';
                        if(!(var1 !== var2)) { _fun0014_ip = 57; continue _fun0014 }
 16:
                        var4 = var3.type;
                        var2 = 'customEmoji';
                        var1 = null;
                        if(!(var2 === var4)) { _fun0014_ip = 55; continue _fun0014 }
 31:
                        var5 = _closure1_slot5;
                        var4 = var5.getCustomEmojiById;
                        var2 = var3.emojiId;
                        var1 = var4.bind(var5)(var2);
 55:
                        _fun0014_ip = 164; continue _fun0014;
 57:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 21;
                        var4 = var4[var2];
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                        var4 = var2.Emoji;
                        var2 = {'names': null, 'surrogates': '', 'unicodeVersion': 6};
                        var7 = var3.name;
                        var6 = var7.replaceAll;
                        var5 = ':';
                        var3 = '';
                        var5 = var6.bind(var7)(var5, var3);
                        var3 = new Array(1);
                        var3[0] = var5;
                        var2['names'] = var3;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {constructor: {value: var4}});
                        var10 = var3;
                        var9 = var2;
                        var2 = new var10[var4](var9, var8);
                        var1 = var2 instanceof Object ? var2 : var3;
 164:
                        return var1;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 22;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var2.bind(var3)(var1);
            var2 = var4.length;
            var1 = 0;
            if(!(var2 > var1)) { _fun0013_ip = 102; continue _fun0013 }
 50:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'EMOJI_TRACK_USAGE';
            var1['type'] = var5;
            var1['emojiUsed'] = var4;
            var1 = var2.bind(var3)(var1);
 102:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot16 = var2;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    var5 = arg2;
                    var3 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0015_ip = 200; continue _fun0015 }
 19:
                    var4 = var2.isCommandType;
                    var4 = var4.bind(var2)();
                    if(!var4) { _fun0015_ip = 192; continue _fun0015 }
 35:
                    var6 = var2.interactionData;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0015_ip = 192; continue _fun0015 }
 50:
                    var6 = var3.command;
                    if(!(var4 != var6)) { _fun0015_ip = 192; continue _fun0015 }
 63:
                    var8 = {};
                    var8['channel'] = var5;
                    var6 = var5.guild_id;
                    var6 = var4 != var6;
                    var4 = null;
                    if(!var6) { _fun0015_ip = 105; continue _fun0015 }
 83:
                    var7 = _closure1_slot7;
                    var6 = var7.getGuild;
                    var5 = var5.guild_id;
                    var4 = var6.bind(var7)(var5);
 105:
                    var8['guild'] = var4;
                    var5 = _closure1_slot17;
                    var4 = {};
                    var7 = var3.command;
                    var7 = var7.applicationId;
                    var4['applicationId'] = var7;
                    var7 = var2.interactionData;
                    var4['data'] = var7;
                    var4['context'] = var8;
                    var7 = _closure1_slot22;
                    var6 = var3.command;
                    var2 = var2.interactionData;
                    var3 = undefined;
                    var2 = var7.bind(var3)(var6, var8, var2);
                    SaveGenerator(address=176);
 174:
                    return var2;
 176:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0015_ip = 197; continue _fun0015 }
 182:
                    var4['interactionLifecycleOptions'] = var2;
                    var3 = var5.bind(var3)(var4);
 192:
                    var3 = undefined;
                    return var3;
 197:
                    return var2;
 200:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = function enqueueCommandInteraction(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var16 = var1.applicationId;
            var12 = var1.data;
            var3 = var1.context;
            var7 = var1.attachments;
            var6 = var1.maxSizeCallback;
            var8 = var1.onMessageSuccess;
            var _closure2_slot0 = var8;
            var11 = var1.analytics_location;
            var10 = var1.sectionName;
            var4 = var1.source;
            var14 = var1.interactionLifecycleOptions;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var5 = var3.channel;
            var9 = null;
            if(!(var9 != var5)) { _fun0016_ip = 408; continue _fun0016 }
 85:
            var5 = var3.channel;
            var3 = var3.guild;
            var15 = var5.id;
            var13 = var9 == var3;
            var5 = undefined;
            if(var13) { _fun0016_ip = 114; continue _fun0016 }
 109:
            var5 = var3.id;
 114:
            var3 = {};
            var3['applicationId'] = var16;
            var3['channelId'] = var15;
            var3['guildId'] = var5;
            var3['data'] = var12;
            var12 = var14.nonce;
            if(!(var9 == var12)) { _fun0016_ip = 175; continue _fun0016 }
 142:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var13 = 23;
            var13 = var18[var13];
            var17 = var17.bind(var1)(var13);
            var13 = var17.createNonce;
            var12 = var13.bind(var17)();
 175:
            var3['nonce'] = var12;
            var3['attachments'] = var7;
            var3['maxSizeCallback'] = var6;
            var3['analytics_location'] = var11;
            var3['sectionName'] = var10;
            var3['source'] = var4;
            _closure2_slot1 = var3;
            var11 = _closure1_slot2;
            var19 = _closure1_slot3;
            var10 = 24;
            var10 = var19[var10];
            var13 = var11.bind(var1)(var10);
            var12 = var13.addQueued;
            var11 = var3.nonce;
            var10 = {};
            var17 = var14.messageId;
            var10['messageId'] = var17;
            var17 = var14.onCreate;
            var10['onCreate'] = var17;
            var17 = var14.onSuccess;
            var10['onSuccess'] = var17;
            var14 = var14.onFailure;
            var10['onFailure'] = var14;
            var14 = {};
            var18 = _closure1_slot0;
            var17 = 13;
            var17 = var19[var17];
            var17 = var18.bind(var1)(var17);
            var17 = var17.InteractionTypes;
            var17 = var17.APPLICATION_COMMAND;
            var14['interactionType'] = var17;
            var14['applicationId'] = var16;
            var14['channelId'] = var15;
            var10['data'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            if(!(var9 != var7)) { _fun0016_ip = 355; continue _fun0016 }
 344:
            var10 = var7.length;
            var9 = 0;
            if(!(!(var10 > var9))) { _fun0016_ip = 367; continue _fun0016 }
 355:
            var4 = _closure1_slot21;
            var4 = var4.bind(var1)(var3, var8);
            _fun0016_ip = 408; continue _fun0016;
 367:
            var22 = var3.nonce;
            var3 = function stageAttachments() {
                var1 = undefined;
                var4 = _closure1_slot27;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var24 = undefined;
            var23 = var7;
            var21 = var5;
            var20 = var6;
            var4 = var24[var3](var23, var22, var21, var20, var19);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = arg1;
                    if(!var1) { _fun0017_ip = 32; continue _fun0017 }
 6:
                    var4 = _closure1_slot21;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 408:
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var5 = 35;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_commands/executeCommand.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function executeCommand() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['retryCommandMessage'] = var2;
    return var1;
})();