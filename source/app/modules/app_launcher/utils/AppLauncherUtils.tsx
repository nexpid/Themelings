// app/modules/app_launcher/utils/AppLauncherUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    options = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = options;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun70828: for(var _fun70828_ip = 0; ; ) switch(_fun70828_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun70828_ip = 46; continue _fun70828 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun70828_ip = 55; continue _fun70828 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun70828_ip = 345; continue _fun70828 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun70828_ip = 323; continue _fun70828 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun70828_ip = 283; continue _fun70828 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun70828_ip = 270; continue _fun70828 }
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
            if(!golf) { _fun70828_ip = 163; continue _fun70828 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun70828_ip = 179; continue _fun70828 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun70828_ip = 249; continue _fun70828 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun70828_ip = 249; continue _fun70828 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun70828_ip = 234; continue _fun70828 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun70828_ip = 247; continue _fun70828 }
 234:
            verify = _closure1_slot12;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun70828_ip = 265; continue _fun70828;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun70828_ip = 283; continue _fun70828;
 270:
            golf = _closure1_slot12;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun70828_ip = 323; continue _fun70828 }
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
            if(!tango) { _fun70828_ip = 330; continue _fun70828 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun70829: for(var _fun70829_ip = 0; ; ) switch(_fun70829_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun70829_ip = 56; continue _fun70829 }
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
                    _fun70829_ip = 67; continue _fun70829;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun70830: for(var _fun70830_ip = 0; ; ) switch(_fun70830_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun70830_ip = 23; continue _fun70830 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun70830_ip = 33; continue _fun70830 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun70830_ip = 70; continue _fun70830 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun70830_ip = 55; continue _fun70830 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    oscar = function(argFoo) { // Original name: isRealApplication
        entity = argFoo;
        mike = entity.id;
        entity = _closure1_slot10;
        entity = entity.BUILT_IN;
        entity = mike !== entity;
        return entity;
    };
    var _closure1_slot13 = oscar;
    report = function(argFoo) { // Original name: isEmbeddedApp
        _fun70832: for(var _fun70832_ip = 0; ; ) switch(_fun70832_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot13;
            oscar = undefined;
            entity = entity.bind(oscar)(zulu);
            if(!entity) { _fun70832_ip = 81; continue _fun70832 }
 20:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 7;
            tango = golf[tango];
            report = report.bind(oscar)(tango);
            tango = report.hasFlag;
            oscar = zulu.flags;
            zulu = null;
            golf = zulu != oscar;
            zulu = 0;
            if(!golf) { _fun70832_ip = 65; continue _fun70832 }
 62:
            zulu = oscar;
 65:
            mike = _closure1_slot8;
            mike = mike.EMBEDDED;
            entity = tango.bind(report)(zulu, mike);
 81:
            return entity;
        }
    };
    var _closure1_slot14 = report;
    tango = function(argFoo) { // Original name: getEmbeddedActivityConfig
        _fun70833: for(var _fun70833_ip = 0; ; ) switch(_fun70833_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot13;
            oscar = undefined;
            tango = entity.bind(oscar)(zulu);
            entity = null;
            if(!tango) { _fun70833_ip = 64; continue _fun70833 }
 22:
            tango = _closure1_slot14;
            tango = tango.bind(oscar)(zulu);
            entity = null;
            if(!tango) { _fun70833_ip = 64; continue _fun70833 }
 36:
            mike = _closure1_slot6;
            mike = zulu instanceof mike;
            if(mike) { _fun70833_ip = 55; continue _fun70833 }
 47:
            mike = zulu.embedded_activity_config;
            _fun70833_ip = 61; continue _fun70833;
 55:
            mike = zulu.embeddedActivityConfig;
 61:
            entity = mike;
 64:
            return entity;
        }
    };
    var _closure1_slot15 = tango;
    entity = ['fakeAppIconURL'];
    var _closure1_slot3 = entity;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = offset[entity];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 1;
    golf = offset[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 2;
    golf = offset[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 3;
    golf = offset[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 4;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    options = golf.ApplicationFlags;
    var _closure1_slot8 = options;
    golf = golf.ComponentActions;
    var _closure1_slot9 = golf;
    golf = 5;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    options = golf.BuiltInSectionId;
    var _closure1_slot10 = options;
    golf = {};
    options = options.BUILT_IN;
    golf['id'] = options;
    options = 17;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/app_launcher/utils/AppLauncherUtils.tsx';
    options = verify.bind(offset)(options);
    zulu['FAKE_BUILT_IN_APP'] = golf;
    zulu['isRealApplication'] = oscar;
    oscar = function(argFoo) { // Original name: getSectionName
        _fun70834: for(var _fun70834_ip = 0; ; ) switch(_fun70834_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot13;
            oscar = undefined;
            zulu = zulu.bind(oscar)(mike);
            if(zulu) { _fun70834_ip = 77; continue _fun70834 }
 20:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 6;
            zulu = golf[entity];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            entity = golf[entity];
            entity = report.bind(oscar)(entity);
            entity = entity.t;
            entity = entity.UB2gGx;
            entity = zulu.bind(tango)(entity);
            _fun70834_ip = 82; continue _fun70834;
 77:
            entity = mike.name;
 82:
            return entity;
        }
    };
    zulu['getSectionName'] = oscar;
    oscar = function(argFoo) { // Original name: getSectionDescription
        _fun70835: for(var _fun70835_ip = 0; ; ) switch(_fun70835_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot13;
            oscar = undefined;
            zulu = zulu.bind(oscar)(mike);
            if(zulu) { _fun70835_ip = 77; continue _fun70835 }
 20:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 6;
            zulu = golf[entity];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            entity = golf[entity];
            entity = report.bind(oscar)(entity);
            entity = entity.t;
            entity = entity.X9fusr;
            entity = zulu.bind(tango)(entity);
            _fun70835_ip = 82; continue _fun70835;
 77:
            entity = mike.description;
 82:
            return entity;
        }
    };
    zulu['getSectionDescription'] = oscar;
    zulu['isEmbeddedApp'] = report;
    report = function(argFoo) { // Original name: isPartnerApplication
        _fun70836: for(var _fun70836_ip = 0; ; ) switch(_fun70836_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot13;
            oscar = undefined;
            entity = entity.bind(oscar)(zulu);
            if(!entity) { _fun70836_ip = 81; continue _fun70836 }
 20:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 7;
            tango = golf[tango];
            report = report.bind(oscar)(tango);
            tango = report.hasFlag;
            oscar = zulu.flags;
            zulu = null;
            golf = zulu != oscar;
            zulu = 0;
            if(!golf) { _fun70836_ip = 65; continue _fun70836 }
 62:
            zulu = oscar;
 65:
            mike = _closure1_slot8;
            mike = mike.PARTNER;
            entity = tango.bind(report)(zulu, mike);
 81:
            return entity;
        }
    };
    zulu['isPartnerApplication'] = report;
    report = function(argFoo) { // Original name: isPromotedApplication
        _fun70837: for(var _fun70837_ip = 0; ; ) switch(_fun70837_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot13;
            oscar = undefined;
            entity = entity.bind(oscar)(zulu);
            if(!entity) { _fun70837_ip = 81; continue _fun70837 }
 20:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 7;
            tango = golf[tango];
            report = report.bind(oscar)(tango);
            tango = report.hasFlag;
            oscar = zulu.flags;
            zulu = null;
            golf = zulu != oscar;
            zulu = 0;
            if(!golf) { _fun70837_ip = 65; continue _fun70837 }
 62:
            zulu = oscar;
 65:
            mike = _closure1_slot8;
            mike = mike.PROMOTED;
            entity = tango.bind(report)(zulu, mike);
 81:
            return entity;
        }
    };
    zulu['isPromotedApplication'] = report;
    zulu['getEmbeddedActivityConfig'] = tango;
    tango = function(argFoo) { // Original name: executeAppLauncherCommand
        _fun70838: for(var _fun70838_ip = 0; ; ) switch(_fun70838_ip) {
 0:
            mike = argFoo;
            entity = mike.command;
            var _closure2_slot0 = entity;
            entity = mike.optionValues;
            var _closure2_slot1 = entity;
            entity = mike.context;
            var _closure2_slot2 = entity;
            tango = mike.commandTargetId;
            var _closure2_slot3 = tango;
            tango = mike.maxSizeCallback;
            var _closure2_slot4 = tango;
            tango = mike.sectionName;
            var _closure2_slot5 = tango;
            tango = mike.commandOrigin;
            mike = undefined;
            if(!(tango === mike)) { _fun70838_ip = 111; continue _fun70838 }
 76:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 8;
            report = golf[report];
            report = oscar.bind(mike)(report);
            report = report.CommandOrigin;
            tango = report.APPLICATION_LAUNCHER;
 111:
            var _closure2_slot6 = tango;
            var _closure2_slot7 = mike;
            var _closure2_slot8 = mike;
            entity = entity.channel;
            _closure2_slot7 = entity;
            entity = function() {
                tango = _closure1_slot5;
                zulu = undefined;
                mike = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun70841: for(var _fun70841_ip = 0; ; ) switch(_fun70841_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun70841_ip = 557; continue _fun70841 }
 10:
                            offset = undefined;
                            oscar = undefined;
                            options = undefined;
                            zulu = undefined;
 18: // try_start_0
                            tango = _closure1_slot1;
                            golf = _closure1_slot2;
                            mike = 9;
                            mike = golf[mike];
                            golf = tango.bind(offset)(mike);
                            mike = {};
                            verify = _closure2_slot0;
                            mike['command'] = verify;
                            verify = _closure2_slot1;
                            mike['optionValues'] = verify;
                            verify = _closure2_slot2;
                            mike['context'] = verify;
                            verify = _closure2_slot3;
                            mike['commandTargetId'] = verify;
                            verify = _closure2_slot4;
                            mike['maxSizeCallback'] = verify;
                            verify = _closure2_slot6;
                            mike['commandOrigin'] = verify;
                            verify = _closure2_slot5;
                            mike['sectionName'] = verify;
                            yankee = _closure1_slot7;
                            verify = yankee.entrypoint;
                            verify = verify.bind(yankee)();
                            mike['source'] = verify;
                            mike = golf.bind(offset)(mike);
                            SaveGenerator(address=135);
 133:
                            return mike;
 135:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                            if(golf) { _fun70841_ip = 348; continue _fun70841 }
 144:
                            oscar = mike;
                            golf = _closure2_slot0;
                            verify = golf.inputType;
                            yankee = _closure1_slot0;
                            romeo = _closure1_slot2;
                            golf = 8;
                            golf = romeo[golf];
                            golf = yankee.bind(offset)(golf);
                            golf = golf.ApplicationCommandInputType;
                            golf = golf.BUILT_IN_TEXT;
                            if(!(verify === golf)) { _fun70841_ip = 345; continue _fun70841 }
 196:
                            golf = oscar;
                            yankee = null;
                            if(!(yankee != golf)) { _fun70841_ip = 345; continue _fun70841 }
 208:
                            golf = _closure2_slot2;
                            golf = golf.channel;
                            if(!(yankee != golf)) { _fun70841_ip = 345; continue _fun70841 }
 224:
                            verify = _closure1_slot1;
                            romeo = _closure1_slot2;
                            golf = 10;
                            golf = romeo[golf];
                            foxtrot = verify.bind(offset)(golf);
                            romeo = foxtrot.parse;
                            golf = _closure2_slot7;
                            verify = oscar;
                            oscar = verify.content;
                            golf = romeo.bind(foxtrot)(golf, oscar);
                            zulu = golf;
                            verify = verify.tts;
                            options = verify;
                            verify = yankee != verify;
                            oscar = verify;
                            if(!verify) { _fun70841_ip = 293; continue _fun70841 }
 290:
                            oscar = options;
 293:
                            golf['tts'] = oscar;
                            oscar = _closure1_slot1;
                            golf = _closure1_slot2;
                            report = 11;
                            report = golf[report];
                            oscar = oscar.bind(offset)(report);
                            report = oscar.sendMessage;
                            tango = _closure2_slot2;
                            tango = tango.channel;
                            tango = tango.id;
                            zulu = report.bind(oscar)(tango, zulu);
 345: // try_end0
                            return offset;
 348:
                            return mike;
 351: // catch_target0
                            CatchBlockStart(arg_register=1);
                            tango = _closure1_slot1;
                            yankee = _closure1_slot2;
                            zulu = 12;
                            zulu = yankee[zulu];
                            report = tango.bind(offset)(zulu);
                            tango = report.show;
                            zulu = {};
                            verify = _closure1_slot0;
                            oscar = 6;
                            golf = yankee[oscar];
                            golf = verify.bind(offset)(golf);
                            romeo = golf.intl;
                            options = romeo.string;
                            golf = yankee[oscar];
                            golf = verify.bind(offset)(golf);
                            golf = golf.t;
                            golf = golf.aHO//v;
                            golf = options.bind(romeo)(golf);
                            zulu['title'] = golf;
                            golf = yankee[oscar];
                            golf = verify.bind(offset)(golf);
                            romeo = golf.intl;
                            options = romeo.string;
                            golf = yankee[oscar];
                            golf = verify.bind(offset)(golf);
                            golf = golf.t;
                            golf = golf.kuzKHB;
                            golf = options.bind(romeo)(golf);
                            zulu['body'] = golf;
                            golf = yankee[oscar];
                            golf = verify.bind(offset)(golf);
                            options = golf.intl;
                            golf = options.string;
                            oscar = yankee[oscar];
                            oscar = verify.bind(offset)(oscar);
                            oscar = oscar.t;
                            oscar = oscar.5911LS;
                            oscar = golf.bind(options)(oscar);
                            zulu['confirmText'] = oscar;
                            oscar = function() { // Original name: onConfirm
                                mike = _closure2_slot8;
                                entity = undefined;
                                entity = mike.bind(entity)();
                                return entity;
                            };
                            zulu['onConfirm'] = oscar;
                            zulu = tango.bind(report)(zulu);
                            throw mike;
 557:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            entity = entity.bind(mike)();
            _closure2_slot8 = entity;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    zulu['executeAppLauncherCommand'] = tango;
    tango = function(argFoo) { // Original name: getApplicationDetails
        _fun70844: for(var _fun70844_ip = 0; ; ) switch(_fun70844_ip) {
 0:
            zulu = argFoo;
            golf = arguments[1];
            oscar = undefined;
            if(!(golf === oscar)) { _fun70844_ip = 14; continue _fun70844 }
 12:
            golf = {};
 14:
            report = golf.fakeAppIconURL;
            mike = _closure1_slot4;
            entity = _closure1_slot3;
            golf = mike.bind(oscar)(golf, entity);
            entity = _closure1_slot13;
            entity = entity.bind(oscar)(zulu);
            mike = {};
            if(entity) { _fun70844_ip = 185; continue _fun70844 }
 56:
            entity = null;
            options = entity != report;
            if(!options) { _fun70844_ip = 68; continue _fun70844 }
 65:
            entity = report;
 68:
            mike['iconURL'] = entity;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 6;
            report = offset[entity];
            report = verify.bind(oscar)(report);
            yankee = report.intl;
            options = yankee.string;
            report = offset[entity];
            report = verify.bind(oscar)(report);
            report = report.t;
            report = report.UB2gGx;
            report = options.bind(yankee)(report);
            mike['name'] = report;
            report = offset[entity];
            report = verify.bind(oscar)(report);
            options = report.intl;
            report = options.string;
            entity = offset[entity];
            entity = verify.bind(oscar)(entity);
            entity = entity.t;
            entity = entity.X9fusr;
            entity = report.bind(options)(entity);
            mike['description'] = entity;
            entity = mike;
            _fun70844_ip = 282; continue _fun70844;
 185:
            report = _closure1_slot1;
            options = _closure1_slot2;
            tango = 13;
            tango = options[tango];
            oscar = report.bind(oscar)(tango);
            report = oscar.getApplicationIconURL;
            tango = {};
            foxtrot = tango;
            romeo = golf;
            golf = copyDataProperties(foxtrot, romeo);
            options = zulu.id;
            golf = 'id';
            tango[golf] = options;
            options = zulu.icon;
            golf = 'icon';
            tango[golf] = options;
            tango = report.bind(oscar)(tango);
            mike['iconURL'] = tango;
            tango = zulu.name;
            mike['name'] = tango;
            zulu = zulu.description;
            mike['description'] = zulu;
            entity = mike;
 282:
            return entity;
        }
    };
    zulu['getApplicationDetails'] = tango;
    tango = function(argFoo) { // Original name: isApplicationMonetizedWithIAP
        _fun70845: for(var _fun70845_ip = 0; ; ) switch(_fun70845_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot13;
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            entity = !tango;
            entity = !entity;
            if(!tango) { _fun70845_ip = 54; continue _fun70845 }
 26:
            mike = _closure1_slot6;
            mike = zulu instanceof mike;
            if(mike) { _fun70845_ip = 45; continue _fun70845 }
 37:
            mike = zulu.is_monetized;
            _fun70845_ip = 51; continue _fun70845;
 45:
            mike = zulu.isMonetized;
 51:
            entity = mike;
 54:
            return entity;
        }
    };
    zulu['isApplicationMonetizedWithIAP'] = tango;
    tango = function(argFoo) { // Original name: isApplicationAdSupported
        _fun70846: for(var _fun70846_ip = 0; ; ) switch(_fun70846_ip) {
 0:
            zulu = _closure1_slot15;
            mike = undefined;
            entity = argFoo;
            mike = zulu.bind(mike)(entity);
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun70846_ip = 32; continue _fun70846 }
 26:
            entity = mike.displays_advertisements;
 32:
            return entity;
        }
    };
    zulu['isApplicationAdSupported'] = tango;
    tango = function(argFoo) { // Original name: appLauncherShowsRecommendations
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        entity = entity.AppLauncherEntrypoint;
        mike = entity.TEXT;
        entity = argFoo;
        entity = entity === mike;
        return entity;
    };
    zulu['appLauncherShowsRecommendations'] = tango;
    tango = function(argFoo) { // Original name: formatPrimaryEntryPointCommandName
        _fun70848: for(var _fun70848_ip = 0; ; ) switch(_fun70848_ip) {
 0:
            report = argFoo;
            entity = null;
            mike = entity == report;
            entity = '';
            if(mike) { _fun70848_ip = 76; continue _fun70848 }
 16:
            zulu = report.charAt;
            mike = 0;
            zulu = zulu.bind(report)(mike);
            mike = zulu.toLocaleUpperCase;
            zulu = mike.bind(zulu)();
            tango = report.slice;
            mike = 1;
            mike = tango.bind(report)(mike);
            report = zulu + mike;
            tango = report.replaceAll;
            zulu = '_';
            mike = ' ';
            entity = tango.bind(report)(zulu, mike);
 76:
            return entity;
        }
    };
    zulu['formatPrimaryEntryPointCommandName'] = tango;
    tango = function(argFoo) { // Original name: ensureRecommendationSectionsOnlyContainActivities
        _fun70849: for(var _fun70849_ip = 0; ; ) switch(_fun70849_ip) {
 0:
            entity = new Array(0);
            zulu = _closure1_slot11;
            golf = undefined;
            mike = argFoo;
            oscar = zulu.bind(golf)(mike);
            zulu = oscar.bind(golf)();
            mike = zulu.done;
            report = 'application_directory_collection_items';
            tango = 0;
            if(mike) { _fun70849_ip = 120; continue _fun70849 }
 41:
            yankee = zulu.value;
            offset = yankee.application_directory_collection_items;
            verify = offset.filter;
            mike = function(argFoo) {
                _fun70850: for(var _fun70850_ip = 0; ; ) switch(_fun70850_ip) {
 0:
                    mike = argFoo;
                    report = mike.type;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 15;
                    entity = tango[entity];
                    tango = undefined;
                    entity = oscar.bind(tango)(entity);
                    entity = entity.ApplicationDirectoryCollectionItemType;
                    entity = entity.APPLICATION;
                    entity = report === entity;
                    if(!entity) { _fun70850_ip = 66; continue _fun70850 }
 52:
                    zulu = _closure1_slot14;
                    mike = mike.application;
                    entity = zulu.bind(tango)(mike);
 66:
                    return entity;
                }
            };
            offset = verify.bind(offset)(mike);
            mike = offset.length;
            if(!(tango !== mike)) { _fun70849_ip = 105; continue _fun70849 }
 78:
            verify = entity.push;
            mike = {};
            foxtrot = mike;
            romeo = yankee;
            yankee = copyDataProperties(foxtrot, romeo);
            mike[report] = offset;
            mike = verify.bind(entity)(mike);
 105:
            verify = oscar.bind(golf)();
            mike = verify.done;
            zulu = verify;
            if(!mike) { _fun70849_ip = 41; continue _fun70849 }
 120:
            return entity;
        }
    };
    zulu['ensureRecommendationSectionsOnlyContainActivities'] = tango;
    tango = function(argFoo) { // Original name: getInstallAppPropsFromProfileApplication
        mike = argFoo;
        entity = {};
        zulu = mike.id;
        entity['applicationId'] = zulu;
        zulu = mike.customInstallUrl;
        entity['customInstallUrl'] = zulu;
        zulu = mike.installParams;
        entity['installParams'] = zulu;
        mike = mike.integrationTypesConfig;
        entity['integrationTypesConfig'] = mike;
        return entity;
    };
    zulu['getInstallAppPropsFromProfileApplication'] = tango;
    tango = function(argFoo) { // Original name: getInstallAppProps
        _fun70852: for(var _fun70852_ip = 0; ; ) switch(_fun70852_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot6;
            entity = zulu instanceof entity;
            mike = {};
            tango = zulu.id;
            mike['applicationId'] = tango;
            if(entity) { _fun70852_ip = 66; continue _fun70852 }
 28:
            entity = zulu.custom_install_url;
            mike['customInstallUrl'] = entity;
            entity = zulu.install_params;
            mike['installParams'] = entity;
            entity = zulu.integration_types_config;
            mike['integrationTypesConfig'] = entity;
            entity = mike;
            _fun70852_ip = 102; continue _fun70852;
 66:
            tango = zulu.customInstallUrl;
            mike['customInstallUrl'] = tango;
            tango = zulu.installParams;
            mike['installParams'] = tango;
            zulu = zulu.integrationTypesConfig;
            mike['integrationTypesConfig'] = zulu;
            entity = mike;
 102:
            return entity;
        }
    };
    zulu['getInstallAppProps'] = tango;
    mike = function(argFoo) { // Original name: openAppLauncherDetail
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 16;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        report = zulu.ComponentDispatch;
        tango = report.dispatchToLastSubscribed;
        mike = _closure1_slot9;
        zulu = mike.OPEN_APP_LAUNCHER;
        mike = {};
        oscar = argFoo;
        mike['applicationId'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['openAppLauncherDetail'] = mike;
    return entity;
})();