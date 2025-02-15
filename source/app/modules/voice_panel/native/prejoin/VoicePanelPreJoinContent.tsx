// app/modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun122196: for(var _fun122196_ip = 0; ; ) switch(_fun122196_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun122196_ip = 46; continue _fun122196 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun122196_ip = 55; continue _fun122196 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun122196_ip = 345; continue _fun122196 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun122196_ip = 323; continue _fun122196 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun122196_ip = 283; continue _fun122196 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun122196_ip = 270; continue _fun122196 }
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
            if(!golf) { _fun122196_ip = 163; continue _fun122196 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun122196_ip = 179; continue _fun122196 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun122196_ip = 249; continue _fun122196 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun122196_ip = 249; continue _fun122196 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun122196_ip = 234; continue _fun122196 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun122196_ip = 247; continue _fun122196 }
 234:
            verify = _closure1_slot37;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun122196_ip = 265; continue _fun122196;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun122196_ip = 283; continue _fun122196;
 270:
            golf = _closure1_slot37;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun122196_ip = 323; continue _fun122196 }
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
            if(!tango) { _fun122196_ip = 330; continue _fun122196 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun122197: for(var _fun122197_ip = 0; ; ) switch(_fun122197_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun122197_ip = 56; continue _fun122197 }
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
                    _fun122197_ip = 67; continue _fun122197;
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
    var _closure1_slot36 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun122198: for(var _fun122198_ip = 0; ; ) switch(_fun122198_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun122198_ip = 23; continue _fun122198 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun122198_ip = 33; continue _fun122198 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun122198_ip = 70; continue _fun122198 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun122198_ip = 55; continue _fun122198 }
 70:
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: StreamPreview
        _fun122199: for(var _fun122199_ip = 0; ; ) switch(_fun122199_ip) {
 0:
            mike = argFoo;
            update = mike.voiceState;
            foxtrot = mike.stream;
            var _closure2_slot0 = foxtrot;
            options = mike.channelId;
            var _closure2_slot1 = options;
            mike = _closure1_slot26;
            tango = undefined;
            offset = mike.bind(tango)();
            oscar = _closure1_slot5;
            report = oscar.useContext;
            mike = _closure1_slot1;
            echo = _closure1_slot2;
            zulu = 23;
            zulu = echo[zulu];
            zulu = mike.bind(tango)(zulu);
            zulu = report.bind(oscar)(zulu);
            kilo = zulu.mode;
            zulu = zulu.setFocused;
            var _closure2_slot2 = zulu;
            golf = _closure1_slot5;
            oscar = golf.useCallback;
            report = new Array(3);
            report[0] = options;
            report[1] = foxtrot;
            report[2] = zulu;
            zulu = function() {
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 24;
                mike = oscar[entity];
                entity = undefined;
                golf = tango.bind(entity)(mike);
                report = golf.selectVoiceChannel;
                tango = _closure2_slot1;
                tango = report.bind(golf)(tango);
                tango = _closure1_slot0;
                zulu = 25;
                zulu = oscar[zulu];
                options = tango.bind(entity)(zulu);
                golf = options.watchStream;
                report = _closure2_slot0;
                zulu = {};
                verify = true;
                zulu['forceMultiple'] = verify;
                zulu = golf.bind(options)(report, zulu);
                zulu = _closure2_slot2;
                mike = 26;
                mike = oscar[mike];
                tango = tango.bind(entity)(mike);
                mike = tango.encodeStreamKey;
                mike = mike.bind(tango)(report);
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            romeo = oscar.bind(golf)(zulu, report);
            sizing = _closure1_slot0;
            zulu = 27;
            report = echo[zulu];
            options = sizing.bind(tango)(report);
            golf = options.useStateFromStores;
            report = _closure1_slot11;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                zulu = _closure1_slot11;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = golf.bind(options)(oscar, report);
            var _closure2_slot3 = report;
            zulu = echo[zulu];
            oscar = sizing.bind(tango)(zulu);
            report = oscar.useStateFromStores;
            golf = _closure1_slot12;
            zulu = new Array(1);
            zulu[0] = golf;
            entity = function() {
                tango = _closure1_slot12;
                zulu = tango.can;
                entity = _closure1_slot21;
                mike = entity.CONNECT;
                entity = _closure2_slot3;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            backup = report.bind(oscar)(zulu, entity);
            zulu = _closure1_slot24;
            oscar = 28;
            entity = echo[oscar];
            mike = mike.bind(tango)(entity);
            entity = {};
            report = offset.activityInfoWrapper;
            entity['style'] = report;
            options = _closure1_slot23;
            report = 29;
            report = echo[report];
            report = sizing.bind(tango)(report);
            golf = report.Text;
            report = {'variant': 'text-sm/semibold', 'style': null, 'color': 'header-secondary'};
            yankee = offset.activityInfoHeader;
            report['style'] = yankee;
            yankee = 30;
            output = echo[yankee];
            output = sizing.bind(tango)(output);
            result = output.intl;
            output = result.format;
            yankee = echo[yankee];
            yankee = sizing.bind(tango)(yankee);
            yankee = yankee.t;
            sizing = yankee.I0mOAg;
            yankee = {};
            echo = update.nick;
            source = null;
            if(!(source == echo)) { _fun122199_ip = 361; continue _fun122199 }
 351:
            update = update.user;
            echo = update.username;
 361:
            yankee['username'] = echo;
            yankee = output.bind(result)(sizing, yankee);
            report['children'] = yankee;
            golf = options.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot23;
            golf = _closure1_slot1;
            sizing = _closure1_slot2;
            oscar = sizing[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            offset = offset.previewImageWrapper;
            oscar['style'] = offset;
            yankee = _closure1_slot23;
            offset = _closure1_slot0;
            verify = 31;
            verify = sizing[verify];
            verify = offset.bind(tango)(verify);
            offset = verify.VoicePanelStreamPreview;
            verify = {};
            verify['mode'] = kilo;
            backup = !backup;
            verify['disabled'] = backup;
            verify['stream'] = foxtrot;
            verify['onPress'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: ActivityInfo
        _fun122203: for(var _fun122203_ip = 0; ; ) switch(_fun122203_ip) {
 0:
            mike = argFoo;
            tango = mike.activity;
            var _closure2_slot0 = tango;
            foxtrot = mike.analyticsLocations;
            var _closure2_slot1 = foxtrot;
            mike = _closure1_slot26;
            report = undefined;
            backup = mike.bind(report)();
            mike = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 32;
            zulu = oscar[zulu];
            golf = mike.bind(report)(zulu);
            options = tango.applicationId;
            zulu = new Array(1);
            zulu[0] = options;
            golf = golf.bind(report)(zulu);
            zulu = _closure1_slot4;
            verify = 1;
            golf = zulu.bind(report)(golf, verify);
            zulu = 0;
            config = golf[zulu];
            var _closure2_slot2 = config;
            options = _closure1_slot0;
            golf = 33;
            golf = oscar[golf];
            yankee = options.bind(report)(golf);
            offset = yankee.getEmbeddedActivityLocationChannelId;
            golf = tango.location;
            yankee = offset.bind(yankee)(golf);
            golf = 34;
            golf = oscar[golf];
            offset = mike.bind(report)(golf);
            golf = tango.applicationId;
            sizing = offset.bind(report)(golf, yankee);
            yankee = _closure1_slot5;
            offset = yankee.useContext;
            golf = 23;
            golf = oscar[golf];
            golf = mike.bind(report)(golf);
            golf = offset.bind(yankee)(golf);
            yankee = golf.channelId;
            var _closure2_slot3 = yankee;
            kilo = golf.windowDimensions;
            var _closure2_slot4 = kilo;
            romeo = _closure1_slot5;
            offset = romeo.useState;
            golf = function() {
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 35;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.getWindowDimensions;
                mike = mike.bind(zulu)();
                mike = mike.width;
                zulu = _closure1_slot18;
                entity = 16;
                zulu = zulu + entity;
                entity = 2;
                entity = entity * zulu;
                entity = mike - entity;
                return entity;
            };
            romeo = offset.bind(romeo)(golf);
            offset = _closure1_slot4;
            golf = 2;
            golf = offset.bind(report)(romeo, golf);
            zulu = golf[zulu];
            output = golf[verify];
            var _closure2_slot5 = output;
            result = 36;
            golf = oscar[result];
            romeo = options.bind(report)(golf);
            offset = romeo.useAnimatedReaction;
            verify = function() { // Original name: l
                mike = _closure2_slot4;
                entity = mike.get;
                entity = entity.bind(mike)();
                entity = entity.width;
                return entity;
            };
            golf = {};
            golf['windowDimensions'] = kilo;
            verify['__closure'] = golf;
            golf = 16837592262556.0;
            verify['__workletHash'] = golf;
            golf = _closure1_slot28;
            verify['__initData'] = golf;
            golf = function(argFoo, argBar) { // Original name: s
                _fun122206: for(var _fun122206_ip = 0; ; ) switch(_fun122206_ip) {
 0:
                    tango = argFoo;
                    entity = argBar;
                    if(!(tango !== entity)) { _fun122206_ip = 79; continue _fun122206 }
 10:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 36;
                    mike = zulu[mike];
                    zulu = undefined;
                    oscar = report.bind(zulu)(mike);
                    report = oscar.runOnJS;
                    mike = _closure2_slot5;
                    mike = report.bind(oscar)(mike);
                    report = _closure1_slot18;
                    entity = 16;
                    report = report + entity;
                    entity = 2;
                    entity = entity * report;
                    entity = tango - entity;
                    entity = mike.bind(zulu)(entity);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            kilo = {};
            result = oscar[result];
            result = options.bind(report)(result);
            result = result.runOnJS;
            kilo['runOnJS'] = result;
            kilo['setActivityPreviewWidth'] = output;
            output = _closure1_slot18;
            kilo['EDGE_GUTTER'] = output;
            golf['__closure'] = kilo;
            kilo = 1481130207412.0;
            golf['__workletHash'] = kilo;
            kilo = _closure1_slot29;
            golf['__initData'] = kilo;
            golf = offset.bind(romeo)(verify, golf);
            golf = 37;
            verify = oscar[golf];
            romeo = options.bind(report)(verify);
            offset = romeo.useEmbeddedActivityJoinability;
            verify = {};
            output = _closure1_slot10;
            kilo = output.getId;
            kilo = kilo.bind(output)();
            verify['userId'] = kilo;
            verify['channelId'] = yankee;
            verify['application'] = config;
            offset = offset.bind(romeo)(verify);
            var _closure2_slot6 = offset;
            golf = oscar[golf];
            golf = options.bind(report)(golf);
            golf = golf.EmbeddedActivityJoinability;
            golf = golf.CAN_JOIN;
            romeo = offset === golf;
            var _closure2_slot7 = romeo;
            verify = _closure1_slot5;
            options = verify.useCallback;
            kilo = tango.launchId;
            golf = new Array(6);
            golf[0] = kilo;
            golf[1] = foxtrot;
            golf[2] = config;
            golf[3] = romeo;
            golf[4] = yankee;
            golf[5] = offset;
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 38;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = {};
                oscar = _closure2_slot6;
                mike['embeddedActivityJoinability'] = oscar;
                oscar = _closure1_slot3;
                report = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun122209: for(var _fun122209_ip = 0; ; ) switch(_fun122209_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun122209_ip = 178; continue _fun122209 }
 10:
                            mike = _closure2_slot7;
                            if(mike) { _fun122209_ip = 62; continue _fun122209 }
 20:
                            tango = _closure1_slot1;
                            zulu = _closure1_slot2;
                            mike = 24;
                            zulu = zulu[mike];
                            mike = undefined;
                            tango = tango.bind(mike)(zulu);
                            zulu = tango.selectVoiceChannel;
                            mike = _closure2_slot3;
                            mike = zulu.bind(tango)(mike);
                            _fun122209_ip = 170; continue _fun122209;
 62:
                            zulu = _closure2_slot2;
                            mike = null;
                            if(!(mike != zulu)) { _fun122209_ip = 170; continue _fun122209 }
 72:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 38;
                            zulu = zulu[mike];
                            mike = undefined;
                            tango = tango.bind(mike)(zulu);
                            zulu = tango.maybeJoinEmbeddedActivity;
                            mike = {};
                            oscar = _closure2_slot3;
                            mike['channelId'] = oscar;
                            oscar = _closure2_slot2;
                            golf = oscar.id;
                            mike['applicationId'] = golf;
                            golf = _closure2_slot0;
                            golf = golf.launchId;
                            mike['launchId'] = golf;
                            mike['inputApplication'] = oscar;
                            report = _closure2_slot1;
                            mike['analyticsLocations'] = report;
                            mike = zulu.bind(tango)(mike);
                            SaveGenerator(address=164);
 162:
                            return mike;
 164:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(zulu) { _fun122209_ip = 175; continue _fun122209 }
 170:
                            zulu = undefined;
                            return zulu;
 175:
                            return mike;
 178:
                            return entity;
                        }
                    };
                    return entity;
                };
                report = oscar.bind(entity)(report);
                var _closure3_slot0 = report;
                tango = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                mike['handleCanJoin'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            output = options.bind(verify)(entity, golf);
            entity = 39;
            entity = oscar[entity];
            mike = mike.bind(report)(entity);
            entity = {};
            tango = tango.applicationId;
            entity['applicationId'] = tango;
            entity['size'] = zulu;
            zulu = ['embedded_background'];
            entity['names'] = zulu;
            record = mike.bind(report)(entity);
            control = null;
            mike = control == config;
            entity = null;
            if(mike) { _fun122203_ip = 1171; continue _fun122203 }
 591:
            tango = _closure1_slot24;
            romeo = _closure1_slot1;
            source = _closure1_slot2;
            yankee = 28;
            mike = source[yankee];
            zulu = romeo.bind(report)(mike);
            mike = {};
            oscar = backup.activityInfoWrapper;
            mike['style'] = oscar;
            options = _closure1_slot23;
            echo = _closure1_slot0;
            oscar = 29;
            oscar = source[oscar];
            oscar = echo.bind(report)(oscar);
            golf = oscar.Text;
            oscar = {'variant': 'text-sm/semibold', 'style': null, 'color': 'header-secondary'};
            verify = backup.activityInfoHeader;
            oscar['style'] = verify;
            vacuum = 30;
            verify = source[vacuum];
            verify = echo.bind(report)(verify);
            kilo = verify.intl;
            foxtrot = kilo.format;
            verify = source[vacuum];
            verify = echo.bind(report)(verify);
            verify = verify.t;
            offset = verify.n/IJ6e;
            verify = {};
            sizing = sizing.length;
            verify['n'] = sizing;
            verify = foxtrot.bind(kilo)(offset, verify);
            oscar['children'] = verify;
            golf = options.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            verify = _closure1_slot24;
            golf = 40;
            golf = source[golf];
            golf = echo.bind(report)(golf);
            options = golf.PressableOpacity;
            golf = {};
            offset = 0.7;
            golf['activeOpacity'] = offset;
            golf['onPress'] = output;
            offset = backup.previewImageWrapper;
            golf['style'] = offset;
            offset = false;
            golf['accessible'] = offset;
            kilo = _closure1_slot23;
            offset = source[yankee];
            foxtrot = romeo.bind(report)(offset);
            offset = {};
            sizing = backup.previewImage;
            offset['style'] = sizing;
            sequence = _closure1_slot23;
            sizing = 41;
            sizing = source[sizing];
            result = romeo.bind(report)(sizing);
            sizing = {};
            sizing['imageBackground'] = record;
            record = 1.7777777777777777;
            sizing['aspectRatio'] = record;
            sizing = sequence.bind(report)(result, sizing);
            offset['children'] = sizing;
            foxtrot = kilo.bind(report)(foxtrot, offset);
            offset = new Array(2);
            offset[0] = foxtrot;
            foxtrot = _closure1_slot23;
            yankee = source[yankee];
            romeo = romeo.bind(report)(yankee);
            yankee = {};
            backup = backup.joinButtonWrapper;
            yankee['style'] = backup;
            sizing = _closure1_slot23;
            result = 42;
            backup = source[result];
            backup = echo.bind(report)(backup);
            kilo = backup.Button;
            backup = {'text': null, 'size': 'sm', 'iconPosition': 'start', 'variant': 'primary-overlay'};
            sequence = source[vacuum];
            sequence = echo.bind(report)(sequence);
            context = sequence.intl;
            record = context.formatToPlainString;
            vacuum = source[vacuum];
            vacuum = echo.bind(report)(vacuum);
            vacuum = vacuum.t;
            sequence = vacuum.YV/hEx;
            vacuum = {};
            papa = config.name;
            vacuum['name'] = papa;
            vacuum = record.bind(context)(sequence, vacuum);
            backup['text'] = vacuum;
            update = _closure1_slot23;
            result = source[result];
            result = echo.bind(report)(result);
            result = result.Button;
            echo = result.Icon;
            result = {};
            source = 'entity';
            result['variant'] = source;
            source = {'uri': null, 'width': 20, 'height': 20};
            sequence = config.getIconURL;
            vacuum = 20;
            vacuum = sequence.bind(config)(vacuum);
            sequence = control != vacuum;
            control = undefined;
            if(!sequence) { _fun122203_ip = 1103; continue _fun122203 }
 1100:
            control = vacuum;
 1103:
            source['uri'] = control;
            result['source'] = source;
            result = update.bind(report)(echo, result);
            backup['icon'] = result;
            backup['onPress'] = output;
            backup = sizing.bind(report)(kilo, backup);
            yankee['children'] = backup;
            yankee = foxtrot.bind(report)(romeo, yankee);
            offset[1] = yankee;
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1171:
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function(argFoo) { // Original name: RoomMembersSection
        _fun122211: for(var _fun122211_ip = 0; ; ) switch(_fun122211_ip) {
 0:
            entity = argFoo;
            report = entity.title;
            golf = entity.members;
            backup = entity.channelId;
            foxtrot = entity.guildId;
            tango = _closure1_slot23;
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            yankee = 47;
            entity = entity[yankee];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.VoicePanelFormSection;
            entity = {};
            entity['title'] = report;
            report = new Array(0);
            oscar = _closure1_slot36;
            offset = oscar.bind(zulu)(golf);
            golf = offset.bind(zulu)();
            oscar = golf.done;
            verify = 48;
            options = null;
            if(oscar) { _fun122211_ip = 226; continue _fun122211 }
 98:
            result = golf.value;
            kilo = _closure1_slot14;
            oscar = kilo.getUser;
            source = oscar.bind(kilo)(result);
            if(!(options != source)) { _fun122211_ip = 211; continue _fun122211 }
 122:
            kilo = report.push;
            output = _closure1_slot23;
            sizing = _closure1_slot0;
            echo = _closure1_slot2;
            oscar = echo[yankee];
            oscar = sizing.bind(zulu)(oscar);
            sizing = oscar.MemberRowItem;
            oscar = {};
            oscar['user'] = source;
            oscar['channelId'] = backup;
            oscar['guildId'] = foxtrot;
            update = _closure1_slot1;
            echo = echo[verify];
            update = update.bind(zulu)(echo);
            echo = update.getName;
            echo = echo.bind(update)(foxtrot, backup, source);
            oscar['nick'] = echo;
            oscar = output.bind(zulu)(sizing, oscar, result);
            oscar = kilo.bind(report)(oscar);
 211:
            kilo = offset.bind(zulu)();
            oscar = kilo.done;
            golf = kilo;
            if(!oscar) { _fun122211_ip = 98; continue _fun122211 }
 226:
            entity['children'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: RoomMembers
        _fun122212: for(var _fun122212_ip = 0; ; ) switch(_fun122212_ip) {
 0:
            entity = argFoo;
            sizing = entity.members;
            options = entity.streamingMembers;
            vacuum = entity.blockedMembers;
            control = entity.ignoredMembers;
            report = _closure1_slot5;
            mike = report.useContext;
            oscar = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 23;
            entity = zulu[entity];
            tango = undefined;
            entity = oscar.bind(tango)(entity);
            entity = mike.bind(report)(entity);
            source = entity.channelId;
            var _closure2_slot0 = source;
            update = entity.guildId;
            report = _closure1_slot5;
            mike = report.useState;
            entity = _closure1_slot30;
            report = mike.bind(report)(entity);
            mike = _closure1_slot4;
            entity = 2;
            mike = mike.bind(tango)(report, entity);
            backup = 0;
            foxtrot = mike[backup];
            var _closure2_slot1 = foxtrot;
            entity = 1;
            entity = mike[entity];
            var _closure2_slot2 = entity;
            mike = vacuum.size;
            entity = control.size;
            offset = mike + entity;
            entity = sizing.length;
            yankee = entity - offset;
            mike = _closure1_slot0;
            entity = 43;
            entity = zulu[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.useIsStealthRemediationEnabled;
            entity = {};
            report = 'voice_panel_pre_join_members';
            entity['location'] = report;
            result = mike.bind(zulu)(entity);
            zulu = _closure1_slot24;
            mike = _closure1_slot25;
            entity = {};
            oscar = offset > backup;
            if(!oscar) { _fun122212_ip = 244; continue _fun122212 }
 214:
            verify = _closure1_slot23;
            golf = _closure1_slot31;
            report = {};
            report['channelId'] = source;
            report['blockedUserIds'] = vacuum;
            report['ignoredUserIds'] = control;
            oscar = verify.bind(tango)(golf, report);
 244:
            report = new Array(5);
            report[0] = oscar;
            golf = options.map;
            oscar = function(argFoo) {
                _fun122213: for(var _fun122213_ip = 0; ; ) switch(_fun122213_ip) {
 0:
                    tango = argFoo;
                    mike = tango[Symbol.iterator];
                    tango = mike().next;
                    entity = tango().value;
                    zulu = mike;
                    report = undefined;
                    zulu = zulu === report;
                    oscar = undefined;
                    if(zulu) { _fun122213_ip = 27; continue _fun122213 }
 24:
                    oscar = entity;
 27:
                    entity = undefined;
                    if(zulu) { _fun122213_ip = 57; continue _fun122213 }
 32:
                    golf = tango().value;
                    tango = mike;
                    tango = tango === report;
                    entity = undefined;
                    zulu = tango;
                    if(tango) { _fun122213_ip = 57; continue _fun122213 }
 51:
                    entity = golf;
                    zulu = tango;
 57:
                    if(zulu) { _fun122213_ip = 63; continue _fun122213 }
 60:
                    mike.return();
 63:
                    tango = _closure1_slot23;
                    zulu = _closure1_slot38;
                    mike = {};
                    golf = _closure2_slot0;
                    mike['channelId'] = golf;
                    mike['voiceState'] = oscar;
                    mike['stream'] = entity;
                    entity = entity.ownerId;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                }
            };
            oscar = golf.bind(options)(oscar);
            report[1] = oscar;
            oscar = vacuum.size;
            oscar = oscar > backup;
            if(!oscar) { _fun122212_ip = 405; continue _fun122212 }
 285:
            verify = _closure1_slot23;
            options = _closure1_slot40;
            golf = {};
            echo = _closure1_slot0;
            output = _closure1_slot2;
            record = 30;
            output = output[record];
            output = echo.bind(tango)(output);
            sequence = output.intl;
            echo = sequence.formatToPlainString;
            config = _closure1_slot0;
            output = _closure1_slot2;
            output = output[record];
            output = config.bind(tango)(output);
            output = output.t;
            if(result) { _fun122212_ip = 358; continue _fun122212 }
 350:
            result = output.ToYK3N;
            _fun122212_ip = 364; continue _fun122212;
 358:
            result = output.pGJ1Q0;
 364:
            output = {};
            config = vacuum.size;
            output['n'] = config;
            output = echo.bind(sequence)(result, output);
            golf['title'] = output;
            golf['members'] = vacuum;
            golf['channelId'] = source;
            golf['guildId'] = update;
            oscar = verify.bind(tango)(options, golf);
 405:
            report[2] = oscar;
            oscar = control.size;
            oscar = oscar > backup;
            if(!oscar) { _fun122212_ip = 522; continue _fun122212 }
 421:
            verify = _closure1_slot23;
            options = _closure1_slot40;
            golf = {};
            result = _closure1_slot0;
            config = _closure1_slot2;
            output = 30;
            echo = config[output];
            echo = result.bind(tango)(echo);
            sequence = echo.intl;
            echo = sequence.formatToPlainString;
            output = config[output];
            output = result.bind(tango)(output);
            output = output.t;
            result = output./pXOCA;
            output = {};
            config = control.size;
            output['n'] = config;
            output = echo.bind(sequence)(result, output);
            golf['title'] = output;
            golf['members'] = control;
            golf['channelId'] = source;
            golf['guildId'] = update;
            oscar = verify.bind(tango)(options, golf);
 522:
            report[3] = oscar;
            oscar = yankee > backup;
            if(!oscar) { _fun122212_ip = 1059; continue _fun122212 }
 536:
            verify = _closure1_slot24;
            options = _closure1_slot0;
            golf = _closure1_slot2;
            echo = 47;
            golf = golf[echo];
            golf = options.bind(tango)(golf);
            options = golf.VoicePanelFormSection;
            golf = {};
            if(!(backup !== offset)) { _fun122212_ip = 637; continue _fun122212 }
 572:
            backup = _closure1_slot0;
            sequence = _closure1_slot2;
            offset = 30;
            output = sequence[offset];
            output = backup.bind(tango)(output);
            result = output.intl;
            output = result.formatToPlainString;
            offset = sequence[offset];
            offset = backup.bind(tango)(offset);
            offset = offset.t;
            backup = offset.R0h4pK;
            offset = {};
            offset['n'] = yankee;
            offset = output.bind(result)(backup, offset);
            _fun122212_ip = 705; continue _fun122212;
 637:
            output = _closure1_slot0;
            config = _closure1_slot2;
            backup = 30;
            result = config[backup];
            result = output.bind(tango)(result);
            sequence = result.intl;
            result = sequence.formatToPlainString;
            backup = config[backup];
            backup = output.bind(tango)(backup);
            backup = backup.t;
            output = backup.vloEU1;
            backup = {};
            config = sizing.length;
            backup['n'] = config;
            offset = result.bind(sequence)(output, backup);
 705:
            golf['title'] = offset;
            backup = new Array(0);
            offset = _closure1_slot36;
            result = offset.bind(tango)(sizing);
            sizing = result.bind(tango)();
            offset = sizing.done;
            output = 48;
            if(offset) { _fun122212_ip = 930; continue _fun122212 }
 740:
            offset = sizing.value;
            sequence = backup.length;
            if(!(!(sequence >= foxtrot))) { _fun122212_ip = 930; continue _fun122212 }
 757:
            config = vacuum.has;
            sequence = offset.user;
            sequence = sequence.id;
            sequence = config.bind(vacuum)(sequence);
            if(sequence) { _fun122212_ip = 800; continue _fun122212 }
 780:
            record = control.has;
            config = offset.user;
            config = config.id;
            sequence = record.bind(control)(config);
 800:
            if(sequence) { _fun122212_ip = 912; continue _fun122212 }
 803:
            sequence = backup.push;
            context = _closure1_slot23;
            record = _closure1_slot0;
            papa = _closure1_slot2;
            config = papa[echo];
            config = record.bind(tango)(config);
            record = config.MemberRowItem;
            config = {};
            target = offset.user;
            config['user'] = target;
            config['channelId'] = source;
            config['guildId'] = update;
            target = _closure1_slot1;
            papa = papa[output];
            status = target.bind(tango)(papa);
            target = status.getName;
            papa = offset.user;
            papa = target.bind(status)(update, source, papa);
            config['nick'] = papa;
            offset = offset.user;
            offset = offset.id;
            offset = context.bind(tango)(record, config, offset);
            offset = sequence.bind(backup)(offset);
 912:
            sequence = result.bind(tango)();
            offset = sequence.done;
            sizing = sequence;
            if(!offset) { _fun122212_ip = 740; continue _fun122212 }
 930:
            offset = new Array(2);
            offset[0] = backup;
            yankee = yankee > foxtrot;
            if(!yankee) { _fun122212_ip = 1045; continue _fun122212 }
 945:
            backup = _closure1_slot23;
            echo = _closure1_slot0;
            update = _closure1_slot2;
            romeo = 49;
            romeo = update[romeo];
            romeo = echo.bind(tango)(romeo);
            foxtrot = romeo.TableRow;
            romeo = {};
            sizing = 30;
            output = update[sizing];
            output = echo.bind(tango)(output);
            result = output.intl;
            output = result.string;
            sizing = update[sizing];
            sizing = echo.bind(tango)(sizing);
            sizing = sizing.t;
            sizing = sizing.F4MCUF;
            sizing = output.bind(result)(sizing);
            romeo['label'] = sizing;
            kilo = function() { // Original name: onPress
                zulu = _closure2_slot2;
                mike = _closure2_slot1;
                entity = _closure1_slot30;
                mike = mike + entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            romeo['onPress'] = kilo;
            yankee = backup.bind(tango)(foxtrot, romeo);
 1045:
            offset[1] = yankee;
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 1059:
            report[4] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo) { // Original name: PreJoinTransitioner
        tango = argFoo;
        output = tango.transitionState;
        var _closure2_slot0 = output;
        romeo = tango.transitionCleanUp;
        var _closure2_slot1 = romeo;
        mike = null;
        zulu = Object.create(mike);
        mike = 0;
        zulu['transitionState'] = mike;
        zulu['transitionCleanUp'] = mike;
        vacuum = {};
        control = tango;
        source = zulu;
        yankee = copyDataProperties(vacuum, control, source);
        mike = _closure1_slot26;
        tango = undefined;
        verify = mike.bind(tango)();
        report = _closure1_slot5;
        zulu = report.useContext;
        oscar = _closure1_slot1;
        foxtrot = _closure1_slot2;
        mike = 23;
        mike = foxtrot[mike];
        mike = oscar.bind(tango)(mike);
        mike = zulu.bind(report)(mike);
        update = mike.windowDimensions;
        var _closure2_slot2 = update;
        echo = mike.controlsSpecs;
        var _closure2_slot3 = echo;
        result = mike.safeArea;
        var _closure2_slot4 = result;
        offset = mike.preJoinContentSize;
        var _closure2_slot5 = offset;
        sizing = mike.useReducedMotion;
        var _closure2_slot6 = sizing;
        kilo = _closure1_slot0;
        backup = 36;
        mike = foxtrot[backup];
        report = kilo.bind(tango)(mike);
        zulu = report.useAnimatedStyle;
        mike = function() { // Original name: o
            _fun122216: for(var _fun122216_ip = 0; ; ) switch(_fun122216_ip) {
 0:
                mike = _closure2_slot2;
                entity = mike.get;
                entity = entity.bind(mike)();
                report = entity.height;
                entity = {};
                oscar = _closure1_slot1;
                zulu = _closure1_slot2;
                tango = 50;
                tango = zulu[tango];
                foxtrot = undefined;
                oscar = oscar.bind(foxtrot)(tango);
                tango = 0.8;
                tango = tango * report;
                tango = oscar.bind(foxtrot)(tango);
                report = report - tango;
                oscar = _closure2_slot3;
                tango = oscar.get;
                tango = tango.bind(oscar)();
                tango = tango.height;
                report = report + tango;
                oscar = _closure2_slot4;
                tango = oscar.get;
                tango = tango.bind(oscar)();
                tango = tango.bottom;
                tango = report + tango;
                entity['paddingBottom'] = tango;
                golf = _closure1_slot0;
                oscar = 56;
                tango = zulu[oscar];
                report = golf.bind(foxtrot)(tango);
                tango = report.withSpring;
                options = _closure2_slot0;
                kilo = 57;
                zulu = zulu[kilo];
                zulu = golf.bind(foxtrot)(zulu);
                zulu = zulu.TransitionStates;
                golf = zulu.YEETED;
                yankee = 1;
                zulu = yankee;
                if(!(options === golf)) { _fun122216_ip = 181; continue _fun122216 }
 179:
                zulu = 0;
 181:
                zulu = tango.bind(report)(zulu);
                entity['opacity'] = zulu;
                zulu = {};
                report = _closure1_slot0;
                tango = _closure1_slot2;
                oscar = tango[oscar];
                options = report.bind(foxtrot)(oscar);
                golf = options.withSpring;
                backup = 36;
                tango = tango[backup];
                verify = report.bind(foxtrot)(tango);
                oscar = verify.interpolate;
                report = _closure2_slot6;
                tango = report.get;
                tango = tango.bind(report)();
                if(tango) { _fun122216_ip = 285; continue _fun122216 }
 248:
                report = _closure2_slot0;
                romeo = _closure1_slot0;
                tango = _closure1_slot2;
                tango = tango[kilo];
                tango = romeo.bind(foxtrot)(tango);
                tango = tango.TransitionStates;
                tango = tango.YEETED;
                if(!(report !== tango)) { _fun122216_ip = 287; continue _fun122216 }
 285:
                yankee = 0;
 287:
                report = [0, 1];
                tango = [0, 400];
                oscar = oscar.bind(verify)(yankee, report, tango);
                result = _closure1_slot17;
                tango = function() { // Original name: n
                    _fun122217: for(var _fun122217_ip = 0; ; ) switch(_fun122217_ip) {
 0:
                        mike = arguments[0];
                        entity = undefined;
                        if(!(mike === entity)) { _fun122217_ip = 11; continue _fun122217 }
 9:
                        mike = false;
 11:
                        if(!mike) { _fun122217_ip = 60; continue _fun122217 }
 14:
                        tango = _closure2_slot0;
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        zulu = 57;
                        zulu = oscar[zulu];
                        zulu = report.bind(entity)(zulu);
                        zulu = zulu.TransitionStates;
                        zulu = zulu.YEETED;
                        mike = tango === zulu;
 60:
                        if(!mike) { _fun122217_ip = 107; continue _fun122217 }
 63:
                        zulu = _closure1_slot0;
                        tango = _closure1_slot2;
                        mike = 36;
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.runOnJS;
                        mike = _closure2_slot1;
                        mike = zulu.bind(tango)(mike);
                        mike = mike.bind(entity)();
 107:
                        return entity;
                    }
                };
                verify = {};
                yankee = _closure2_slot0;
                verify['transitionState'] = yankee;
                romeo = _closure1_slot0;
                yankee = _closure1_slot2;
                kilo = yankee[kilo];
                kilo = romeo.bind(foxtrot)(kilo);
                kilo = kilo.TransitionStates;
                verify['TransitionStates'] = kilo;
                yankee = yankee[backup];
                yankee = romeo.bind(foxtrot)(yankee);
                yankee = yankee.runOnJS;
                verify['runOnJS'] = yankee;
                offset = _closure2_slot1;
                verify['transitionCleanUp'] = offset;
                tango['__closure'] = verify;
                verify = 2541522666097.0;
                tango['__workletHash'] = verify;
                mike = _closure1_slot35;
                tango['__initData'] = mike;
                output = 'respect-motion-settings';
                update = options;
                echo = oscar;
                sizing = tango;
                mike = update[golf](echo, result, output, sizing, kilo);
                zulu['translateY'] = mike;
                mike = new Array(1);
                mike[0] = zulu;
                entity['transform'] = mike;
                return entity;
            }
        };
        golf = {};
        golf['windowDimensions'] = update;
        update = 50;
        update = foxtrot[update];
        update = oscar.bind(tango)(update);
        golf['roundToNearestPixel'] = update;
        golf['controlsSpecs'] = echo;
        golf['safeArea'] = result;
        result = 56;
        result = foxtrot[result];
        result = kilo.bind(tango)(result);
        result = result.withSpring;
        golf['withSpring'] = result;
        golf['transitionState'] = output;
        output = 57;
        output = foxtrot[output];
        output = kilo.bind(tango)(output);
        output = output.TransitionStates;
        golf['TransitionStates'] = output;
        output = foxtrot[backup];
        output = kilo.bind(tango)(output);
        output = output.interpolate;
        golf['interpolate'] = output;
        golf['useReducedMotion'] = sizing;
        sizing = _closure1_slot17;
        golf['MODE_CHANGE_PHYSICS'] = sizing;
        backup = foxtrot[backup];
        backup = kilo.bind(tango)(backup);
        backup = backup.runOnJS;
        golf['runOnJS'] = backup;
        golf['transitionCleanUp'] = romeo;
        mike['__closure'] = golf;
        golf = 16643118377748.0;
        mike['__workletHash'] = golf;
        golf = _closure1_slot34;
        mike['__initData'] = golf;
        report = zulu.bind(report)(mike);
        golf = _closure1_slot5;
        zulu = golf.useCallback;
        mike = new Array(1);
        mike[0] = offset;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.nativeEvent;
            entity = entity.layout;
            report = entity.height;
            tango = _closure2_slot5;
            zulu = tango.set;
            oscar = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 50;
            mike = mike[entity];
            entity = undefined;
            mike = oscar.bind(entity)(mike);
            mike = mike.bind(entity)(report);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        romeo = zulu.bind(golf)(entity, mike);
        zulu = _closure1_slot23;
        entity = 58;
        entity = foxtrot[entity];
        mike = oscar.bind(tango)(entity);
        entity = {};
        entity['style'] = report;
        offset = false;
        entity['collapsable'] = offset;
        golf = _closure1_slot23;
        report = 28;
        report = foxtrot[report];
        oscar = oscar.bind(tango)(report);
        report = {};
        report['onLayout'] = romeo;
        report['collapsable'] = offset;
        verify = verify.contentWrapper;
        report['style'] = verify;
        offset = _closure1_slot23;
        verify = _closure1_slot33;
        options = {};
        vacuum = options;
        control = yankee;
        yankee = copyDataProperties(vacuum, control);
        options = offset.bind(tango)(verify, options);
        report['children'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot42 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: renderItem
        report = _closure1_slot23;
        tango = _closure1_slot42;
        zulu = {};
        entity = argBaz;
        zulu['transitionState'] = entity;
        entity = argCorge;
        zulu['transitionCleanUp'] = entity;
        golf = argBar;
        options = zulu;
        entity = copyDataProperties(options, golf);
        mike = undefined;
        entity = argFoo;
        entity = report.bind(mike)(tango, zulu, entity);
        return entity;
    };
    var _closure1_slot43 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot3 = tango;
    backup = 1;
    tango = oscar[backup];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot5 = golf;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    sizing = tango.StyleSheet;
    tango = 4;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot9 = tango;
    result = 8;
    tango = oscar[result];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot16 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MODE_CHANGE_PHYSICS;
    var _closure1_slot17 = tango;
    kilo = 16;
    tango = oscar[kilo];
    tango = report.bind(entity)(tango);
    output = tango.EDGE_GUTTER;
    var _closure1_slot18 = output;
    tango = 17;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.AnalyticEvents;
    var _closure1_slot19 = options;
    options = tango.AnalyticsSections;
    var _closure1_slot20 = options;
    tango = tango.Permissions;
    var _closure1_slot21 = tango;
    tango = 18;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VoiceChannelWarningSurfaces;
    var _closure1_slot22 = tango;
    tango = 19;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot23 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot24 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot25 = tango;
    tango = 20;
    options = oscar[tango];
    offset = report.bind(entity)(options);
    verify = offset.createStyles;
    options = {};
    yankee = {'paddingTop': null, 'gap': 24, 'paddingBottom': 16};
    romeo = 21;
    romeo = oscar[romeo];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.BASE_VOICE_PANEL_HEADER_HEIGHT;
    romeo = output + romeo;
    romeo = romeo + output;
    yankee['paddingTop'] = romeo;
    options['contentWrapper'] = yankee;
    yankee = {};
    yankee['paddingHorizontal'] = kilo;
    options['channelInfoWrapper'] = yankee;
    output = 'center';
    yankee = {'textAlign': 'center', 'paddingTop': 16, 'paddingBottom': 16};
    options['subheading'] = yankee;
    yankee = {'position': 'relative', 'width': '100%', 'aspectRatio': 1.7777777777777777, 'borderRadius': null, 'overflow': 'hidden', 'justifyContent': 'center'};
    romeo = 22;
    echo = oscar[romeo];
    echo = foxtrot.bind(entity)(echo);
    echo = echo.radii;
    echo = echo.lg;
    yankee['borderRadius'] = echo;
    echo = oscar[romeo];
    echo = foxtrot.bind(entity)(echo);
    echo = echo.colors;
    echo = echo.BLACK;
    yankee['backgroundColor'] = echo;
    options['previewImageWrapper'] = yankee;
    yankee = {};
    control = sizing.absoluteFillObject;
    vacuum = yankee;
    echo = copyDataProperties(vacuum, control);
    update = 0.5;
    echo = 'opacity';
    yankee[echo] = update;
    options['previewImage'] = yankee;
    yankee = {};
    yankee['paddingHorizontal'] = kilo;
    options['activityInfoWrapper'] = yankee;
    yankee = {};
    yankee['marginBottom'] = result;
    options['activityInfoHeader'] = yankee;
    yankee = {'borderRadius': null, 'width': '100%', 'aspectRatio': 1.7777777777777777};
    result = oscar[romeo];
    result = foxtrot.bind(entity)(result);
    result = result.radii;
    result = result.lg;
    yankee['borderRadius'] = result;
    options['activityImage'] = yankee;
    yankee = {};
    control = sizing.absoluteFillObject;
    vacuum = yankee;
    sizing = copyDataProperties(vacuum, control);
    result = 'flex';
    sizing = 'display';
    yankee[sizing] = result;
    sizing = 'alignItems';
    yankee[sizing] = output;
    sizing = 'justifyContent';
    yankee[sizing] = output;
    options['joinButtonWrapper'] = yankee;
    yankee = {};
    yankee['marginHorizontal'] = kilo;
    options['optInChannelsContainer'] = yankee;
    yankee = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_8;
    yankee['gap'] = kilo;
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_8;
    yankee['padding'] = kilo;
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.xs;
    yankee['borderRadius'] = kilo;
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.INFO_WARNING_FOREGROUND;
    yankee['borderColor'] = kilo;
    yankee['borderWidth'] = backup;
    backup = oscar[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.INFO_WARNING_BACKGROUND;
    yankee['backgroundColor'] = backup;
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    yankee['marginHorizontal'] = romeo;
    options['blockedMemberWarning'] = yankee;
    yankee = {};
    romeo = 36;
    yankee['height'] = romeo;
    options['consolePreJoinPadding'] = yankee;
    options = verify.bind(offset)(options);
    var _closure1_slot26 = options;
    verify = golf.memo;
    options = function(argFoo) {
        _fun122220: for(var _fun122220_ip = 0; ; ) switch(_fun122220_ip) {
 0:
            entity = argFoo;
            mike = entity.hasMembers;
            entity = _closure1_slot26;
            report = undefined;
            verify = entity.bind(report)();
            entity = null;
            if(mike) { _fun122220_ip = 182; continue _fun122220 }
 30:
            tango = _closure1_slot23;
            zulu = _closure1_slot1;
            foxtrot = _closure1_slot2;
            mike = 28;
            mike = foxtrot[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            golf = verify.channelInfoWrapper;
            mike['style'] = golf;
            options = _closure1_slot23;
            romeo = _closure1_slot0;
            oscar = 29;
            oscar = foxtrot[oscar];
            oscar = romeo.bind(report)(oscar);
            golf = oscar.Text;
            oscar = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            verify = verify.subheading;
            oscar['style'] = verify;
            verify = 30;
            offset = foxtrot[verify];
            offset = romeo.bind(report)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtrot[verify];
            verify = romeo.bind(report)(verify);
            verify = verify.t;
            verify = verify.sS2J0N;
            verify = offset.bind(yankee)(verify);
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 182:
            return entity;
        }
    };
    options = verify.bind(golf)(options);
    var _closure1_slot27 = options;
    options = {};
    verify = 'function VoicePanelPreJoinContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}';
    options['code'] = verify;
    var _closure1_slot28 = options;
    options = {};
    verify = 'function VoicePanelPreJoinContentTsx2(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous)return;runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}';
    options['code'] = verify;
    var _closure1_slot29 = options;
    var _closure1_slot30 = tango;
    options = golf.memo;
    tango = function(argFoo) {
        _fun122221: for(var _fun122221_ip = 0; ; ) switch(_fun122221_ip) {
 0:
            entity = argFoo;
            offset = entity.channelId;
            mike = entity.blockedUserIds;
            zulu = entity.ignoredUserIds;
            entity = _closure1_slot26;
            tango = undefined;
            report = entity.bind(tango)();
            oscar = _closure1_slot0;
            entity = _closure1_slot2;
            golf = 43;
            golf = entity[golf];
            verify = oscar.bind(tango)(golf);
            options = verify.useIsStealthRemediationEnabled;
            golf = {};
            romeo = 'voice_panel_pre_join_members_warning';
            golf['location'] = romeo;
            romeo = options.bind(verify)(golf);
            options = _closure1_slot1;
            golf = 44;
            golf = entity[golf];
            options = options.bind(tango)(golf);
            golf = {};
            verify = 45;
            verify = entity[verify];
            verify = oscar.bind(tango)(verify);
            verify = verify.ImpressionNames;
            verify = verify.VOICE_CHANNEL_BLOCKED_USER_WARNING;
            golf['name'] = verify;
            verify = {};
            verify['channel_id'] = offset;
            offset = global;
            foxtrot = offset.Array;
            offset = foxtrot.from;
            offset = offset.bind(foxtrot)(mike);
            verify['blocked_user_ids'] = offset;
            offset = _closure1_slot22;
            offset = offset.PRE_JOIN_SHEET;
            verify['warning_surface'] = offset;
            golf['properties'] = verify;
            golf = options.bind(tango)(golf);
            verify = zulu.size;
            foxtrot = mike.size;
            options = 30;
            mike = entity[options];
            mike = oscar.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = entity[options];
            entity = oscar.bind(tango)(entity);
            entity = entity.t;
            entity = entity.CjrALS;
            entity = mike.bind(zulu)(entity);
            mike = 0;
            if(!(foxtrot > mike)) { _fun122221_ip = 246; continue _fun122221 }
 239:
            if(!(!(verify > mike))) { _fun122221_ip = 409; continue _fun122221 }
 246:
            if(!(!(verify > mike))) { _fun122221_ip = 344; continue _fun122221 }
 250:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            oscar = mike[options];
            oscar = zulu.bind(tango)(oscar);
            golf = oscar.intl;
            oscar = golf.format;
            mike = mike[options];
            mike = zulu.bind(tango)(mike);
            mike = mike.t;
            if(romeo) { _fun122221_ip = 320; continue _fun122221 }
 294:
            offset = mike.aP6jaG;
            zulu = {};
            zulu['n'] = foxtrot;
            offset = oscar.bind(golf)(offset, zulu);
            backup = null;
            _fun122221_ip = 464; continue _fun122221;
 320:
            zulu = mike.6X29zc;
            mike = {};
            mike['n'] = foxtrot;
            offset = oscar.bind(golf)(zulu, mike);
            backup = entity;
            _fun122221_ip = 464; continue _fun122221;
 344:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            oscar = mike[options];
            oscar = zulu.bind(tango)(oscar);
            golf = oscar.intl;
            oscar = golf.format;
            mike = mike[options];
            mike = zulu.bind(tango)(mike);
            mike = mike.t;
            zulu = mike.u9trAQ;
            mike = {};
            mike['n'] = verify;
            offset = oscar.bind(golf)(zulu, mike);
            backup = entity;
            _fun122221_ip = 464; continue _fun122221;
 409:
            golf = _closure1_slot0;
            mike = _closure1_slot2;
            zulu = mike[options];
            zulu = golf.bind(tango)(zulu);
            oscar = zulu.intl;
            zulu = oscar.string;
            mike = mike[options];
            mike = golf.bind(tango)(mike);
            mike = mike.t;
            mike = mike.MpRfpK;
            offset = zulu.bind(oscar)(mike);
            backup = entity;
 464:
            zulu = _closure1_slot24;
            mike = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 28;
            entity = oscar[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            report = report.blockedMemberWarning;
            entity['style'] = report;
            verify = _closure1_slot23;
            golf = _closure1_slot0;
            report = 46;
            report = oscar[report];
            report = golf.bind(tango)(report);
            options = report.CircleWarningIcon;
            report = {};
            foxtrot = 'text-warning';
            report['color'] = foxtrot;
            options = verify.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            options = _closure1_slot24;
            sizing = 29;
            oscar = oscar[sizing];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {};
            kilo = 'heading-sm/semibold';
            verify = kilo;
            if(!romeo) { _fun122221_ip = 593; continue _fun122221 }
 587:
            verify = 'text-sm/bold';
 593:
            oscar['variant'] = verify;
            verify = undefined;
            if(!romeo) { _fun122221_ip = 608; continue _fun122221 }
 602:
            verify = 'interactive-active';
 608:
            oscar['color'] = verify;
            verify = {};
            romeo = 1;
            verify['flexShrink'] = romeo;
            oscar['style'] = verify;
            verify = new Array(3);
            verify[0] = offset;
            offset = ' ';
            verify[1] = offset;
            offset = null;
            romeo = offset != backup;
            if(!romeo) { _fun122221_ip = 693; continue _fun122221 }
 651:
            foxtrot = _closure1_slot23;
            romeo = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[sizing];
            yankee = romeo.bind(tango)(yankee);
            romeo = yankee.Text;
            yankee = {};
            yankee['variant'] = kilo;
            yankee['children'] = backup;
            offset = foxtrot.bind(tango)(romeo, yankee);
 693:
            verify[2] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = options.bind(golf)(tango);
    var _closure1_slot31 = tango;
    options = golf.memo;
    tango = function(argFoo) {
        _fun122222: for(var _fun122222_ip = 0; ; ) switch(_fun122222_ip) {
 0:
            mike = argFoo;
            verify = mike.channelId;
            var _closure2_slot0 = verify;
            zulu = _closure1_slot26;
            report = undefined;
            oscar = zulu.bind(report)();
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 27;
            zulu = golf[zulu];
            options = tango.bind(report)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot10;
            tango = new Array(4);
            tango[0] = zulu;
            zulu = _closure1_slot7;
            tango[1] = zulu;
            zulu = _closure1_slot15;
            tango[2] = zulu;
            zulu = _closure1_slot13;
            tango[3] = zulu;
            zulu = new Array(1);
            zulu[0] = verify;
            entity = function() {
                _fun122223: for(var _fun122223_ip = 0; ; ) switch(_fun122223_ip) {
 0:
                    mike = _closure1_slot10;
                    entity = mike.getId;
                    tango = entity.bind(mike)();
                    zulu = _closure1_slot15;
                    mike = zulu.getVoiceStateForSession;
                    oscar = _closure1_slot7;
                    entity = oscar.getRemoteSessionId;
                    entity = entity.bind(oscar)();
                    entity = mike.bind(zulu)(tango, entity);
                    tango = null;
                    mike = tango != entity;
                    zulu = undefined;
                    if(!mike) { _fun122223_ip = 61; continue _fun122223 }
 58:
                    zulu = entity;
 61:
                    mike = _closure1_slot7;
                    entity = mike.getAwaitingRemoteSessionInfo;
                    entity = entity.bind(mike)();
                    mike = tango == entity;
                    oscar = undefined;
                    if(mike) { _fun122223_ip = 89; continue _fun122223 }
 84:
                    oscar = entity.channelId;
 89:
                    entity = _closure2_slot0;
                    entity = oscar === entity;
                    if(entity) { _fun122223_ip = 179; continue _fun122223 }
 103:
                    options = tango == zulu;
                    oscar = undefined;
                    if(options) { _fun122223_ip = 117; continue _fun122223 }
 112:
                    oscar = zulu.channelId;
 117:
                    mike = _closure2_slot0;
                    mike = oscar === mike;
                    if(!mike) { _fun122223_ip = 176; continue _fun122223 }
 128:
                    oscar = _closure1_slot13;
                    report = oscar.getSessionById;
                    options = tango == zulu;
                    golf = undefined;
                    if(options) { _fun122223_ip = 153; continue _fun122223 }
 147:
                    golf = zulu.sessionId;
 153:
                    options = tango != golf;
                    zulu = '';
                    if(!options) { _fun122223_ip = 167; continue _fun122223 }
 164:
                    zulu = golf;
 167:
                    zulu = report.bind(oscar)(zulu);
                    mike = tango != zulu;
 176:
                    entity = mike;
 179:
                    return entity;
                }
            };
            zulu = golf.bind(options)(tango, entity, zulu);
            entity = null;
            if(!zulu) { _fun122222_ip = 157; continue _fun122222 }
 115:
            tango = _closure1_slot23;
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 28;
            mike = golf[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            oscar = oscar.consolePreJoinPadding;
            mike['style'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 157:
            return entity;
        }
    };
    tango = options.bind(golf)(tango);
    var _closure1_slot32 = tango;
    options = golf.memo;
    tango = function(argFoo) { // Original name: VoicePanelPreJoinContentInner
        _fun122224: for(var _fun122224_ip = 0; ; ) switch(_fun122224_ip) {
 0:
            entity = argFoo;
            kilo = entity.members;
            backup = entity.streamingMembers;
            foxtrot = entity.blockedMembers;
            romeo = entity.ignoredMembers;
            yankee = entity.activities;
            entity = _closure1_slot26;
            tango = undefined;
            update = entity.bind(tango)();
            options = _closure1_slot5;
            mike = options.useContext;
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            entity = 23;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            entity = mike.bind(options)(entity);
            verify = entity.channelId;
            var _closure2_slot0 = verify;
            options = entity.guildId;
            var _closure2_slot1 = options;
            mike = _closure1_slot0;
            entity = 27;
            entity = report[entity];
            sizing = mike.bind(tango)(entity);
            offset = sizing.useStateFromStores;
            entity = _closure1_slot11;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                zulu = _closure1_slot11;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            echo = offset.bind(sizing)(mike, entity);
            entity = 51;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            sizing = entity.bind(tango)(echo);
            entity = 52;
            entity = report[entity];
            mike = zulu.bind(tango)(entity);
            entity = 53;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.VOICE_PANEL_PRE_JOIN;
            entity = mike.bind(tango)(entity);
            entity = entity.analyticsLocations;
            var _closure2_slot2 = entity;
            report = _closure1_slot5;
            zulu = report.useEffect;
            mike = new Array(3);
            mike[0] = verify;
            mike[1] = options;
            mike[2] = entity;
            entity = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 54;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.track;
                mike = _closure1_slot19;
                zulu = mike.VIEW_VOICE_CHANNEL;
                mike = {};
                golf = _closure2_slot1;
                mike['guild_id'] = golf;
                golf = _closure2_slot0;
                mike['channel_id'] = golf;
                oscar = _closure2_slot2;
                mike['location_stack'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot24;
            mike = _closure1_slot25;
            entity = {};
            output = _closure1_slot23;
            options = _closure1_slot27;
            report = {};
            result = kilo.length;
            offset = 0;
            result = result > offset;
            report['hasMembers'] = result;
            options = output.bind(tango)(options, report);
            report = new Array(5);
            report[0] = options;
            options = null;
            if(!sizing) { _fun122224_ip = 363; continue _fun122224 }
 302:
            result = _closure1_slot23;
            output = _closure1_slot1;
            source = _closure1_slot2;
            sizing = 55;
            sizing = source[sizing];
            output = output.bind(tango)(sizing);
            sizing = {};
            update = update.optInChannelsContainer;
            sizing['style'] = update;
            sizing['channel'] = echo;
            echo = _closure1_slot20;
            echo = echo.CHANNEL;
            sizing['analyticsSection'] = echo;
            options = result.bind(tango)(output, sizing);
 363:
            report[1] = options;
            options = yankee.map;
            golf = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot23;
                tango = _closure1_slot39;
                zulu = {};
                zulu['activity'] = entity;
                mike = _closure2_slot2;
                zulu['analyticsLocations'] = mike;
                mike = entity.launchId;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            golf = options.bind(yankee)(golf);
            report[2] = golf;
            golf = kilo.length;
            golf = golf > offset;
            if(golf) { _fun122224_ip = 409; continue _fun122224 }
 400:
            options = foxtrot.size;
            golf = options > offset;
 409:
            if(golf) { _fun122224_ip = 421; continue _fun122224 }
 412:
            options = romeo.size;
            golf = options > offset;
 421:
            if(!golf) { _fun122224_ip = 460; continue _fun122224 }
 424:
            yankee = _closure1_slot23;
            offset = _closure1_slot41;
            options = {};
            options['members'] = kilo;
            options['streamingMembers'] = backup;
            options['blockedMembers'] = foxtrot;
            options['ignoredMembers'] = romeo;
            golf = yankee.bind(tango)(offset, options);
 460:
            report[3] = golf;
            options = _closure1_slot23;
            golf = _closure1_slot32;
            oscar = {};
            oscar['channelId'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[4] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = options.bind(golf)(tango);
    var _closure1_slot33 = tango;
    tango = {};
    options = "function VoicePanelPreJoinContentTsx3(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished=false){finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}";
    tango['code'] = options;
    var _closure1_slot34 = tango;
    tango = {};
    options = 'function VoicePanelPreJoinContentTsx4(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}';
    tango['code'] = options;
    var _closure1_slot35 = tango;
    tango = golf.memo;
    mike = function() { // Original name: VoicePanelPreJoinWrapper
        options = _closure1_slot5;
        zulu = options.useContext;
        oscar = _closure1_slot1;
        golf = _closure1_slot2;
        mike = 23;
        mike = golf[mike];
        tango = undefined;
        mike = oscar.bind(tango)(mike);
        mike = zulu.bind(options)(mike);
        yankee = mike.channelId;
        var _closure2_slot0 = yankee;
        zulu = mike.guildId;
        var _closure2_slot1 = zulu;
        mike = 59;
        mike = golf[mike];
        mike = oscar.bind(tango)(mike);
        romeo = mike.bind(tango)(yankee);
        var _closure2_slot2 = romeo;
        mike = _closure1_slot0;
        oscar = 27;
        oscar = golf[oscar];
        offset = mike.bind(tango)(oscar);
        verify = offset.useStateFromStores;
        oscar = _closure1_slot16;
        options = new Array(4);
        options[0] = oscar;
        oscar = _closure1_slot8;
        options[1] = oscar;
        oscar = _closure1_slot6;
        options[2] = oscar;
        oscar = _closure1_slot9;
        options[3] = oscar;
        oscar = new Array(3);
        oscar[0] = romeo;
        oscar[1] = yankee;
        oscar[2] = zulu;
        zulu = 60;
        zulu = golf[zulu];
        zulu = mike.bind(tango)(zulu);
        foxtrot = zulu.areVoicePanelPreJoinContentPropsEqual;
        kilo = function() {
            _fun122229: for(var _fun122229_ip = 0; ; ) switch(_fun122229_ip) {
 0:
                entity = _closure2_slot2;
                if(entity) { _fun122229_ip = 258; continue _fun122229 }
 13:
                tango = _closure1_slot16;
                zulu = tango.getVoiceStatesForChannelAlt;
                mike = _closure2_slot0;
                entity = _closure2_slot1;
                yankee = null;
                report = yankee != entity;
                offset = undefined;
                entity = undefined;
                if(!report) { _fun122229_ip = 51; continue _fun122229 }
 47:
                entity = _closure2_slot1;
 51:
                oscar = zulu.bind(tango)(mike, entity);
                mike = _closure1_slot8;
                entity = mike.getBlockedUsersForVoiceChannel;
                report = _closure2_slot0;
                zulu = entity.bind(mike)(report);
                entity = mike.getIgnoredUsersForVoiceChannel;
                mike = entity.bind(mike)(report);
                tango = _closure1_slot6;
                entity = tango.getEmbeddedActivitiesForChannel;
                report = entity.bind(tango)(report);
                tango = new Array(0);
                entity = _closure1_slot36;
                verify = entity.bind(offset)(oscar);
                golf = verify.bind(offset)();
                entity = golf.done;
                options = golf;
                golf = undefined;
                if(entity) { _fun122229_ip = 229; continue _fun122229 }
 132:
                sizing = options.value;
                entity = sizing.voiceState;
                entity = entity.selfStream;
                if(!entity) { _fun122229_ip = 214; continue _fun122229 }
 152:
                output = _closure1_slot9;
                kilo = output.getStreamForUser;
                entity = sizing.user;
                backup = entity.id;
                entity = _closure2_slot1;
                entity = kilo.bind(output)(backup, entity);
                golf = entity;
                if(!(yankee != entity)) { _fun122229_ip = 214; continue _fun122229 }
 189:
                kilo = tango.push;
                backup = new Array(2);
                backup[0] = sizing;
                backup[1] = entity;
                backup = kilo.bind(tango)(backup);
                golf = entity;
 214:
                backup = verify.bind(offset)();
                entity = backup.done;
                options = backup;
                if(!entity) { _fun122229_ip = 132; continue _fun122229 }
 229:
                entity = {};
                entity['members'] = oscar;
                entity['activities'] = report;
                entity['streamingMembers'] = tango;
                entity['blockedMembers'] = zulu;
                entity['ignoredMembers'] = mike;
                return entity;
 258:
                entity = undefined;
                return entity;
            }
        };
        output = offset;
        sizing = options;
        backup = oscar;
        oscar = output[verify](sizing, kilo, backup, foxtrot, romeo);
        zulu = _closure1_slot23;
        entity = 57;
        entity = golf[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.TransitionItem;
        entity = {};
        entity['item'] = oscar;
        report = _closure1_slot43;
        entity['renderItem'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 61;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();