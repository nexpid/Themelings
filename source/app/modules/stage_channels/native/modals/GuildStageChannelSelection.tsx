// app/modules/stage_channels/native/modals/GuildStageChannelSelection.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'marginTop': 8, 'flexDirection': 'row'};
    tango['channelText'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/native/modals/GuildStageChannelSelection.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildStageChannelSelection
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.guild;
            zulu = entity.channel;
            var _closure2_slot0 = zulu;
            entity = entity.onChangeChannel;
            var _closure2_slot1 = entity;
            tango = undefined;
            var _closure2_slot2 = tango;
            entity = function() { // Original name: handleSelectChannel
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot2;
                    foxtrot = _closure1_slot3;
                    entity = 7;
                    tango = foxtrot[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.dismissGlobalKeyboard;
                    tango = tango.bind(report)();
                    oscar = _closure2_slot2;
                    report = oscar.map;
                    tango = function(argFoo) {
                        golf = argFoo;
                        entity = {};
                        mike = golf.id;
                        entity['value'] = mike;
                        report = _closure1_slot0;
                        tango = _closure1_slot3;
                        zulu = 6;
                        tango = tango[zulu];
                        zulu = undefined;
                        oscar = report.bind(zulu)(tango);
                        report = oscar.computeChannelName;
                        offset = _closure1_slot5;
                        verify = _closure1_slot4;
                        options = true;
                        romeo = oscar;
                        yankee = golf;
                        mike = romeo[report](yankee, offset, verify, options, golf);
                        entity['label'] = mike;
                        return entity;
                    };
                    golf = report.bind(oscar)(tango);
                    report = _closure1_slot1;
                    tango = 8;
                    tango = foxtrot[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.openLazy;
                    romeo = _closure1_slot0;
                    zulu = 10;
                    zulu = foxtrot[zulu];
                    verify = romeo.bind(entity)(zulu);
                    zulu = 9;
                    tango = foxtrot[zulu];
                    zulu = foxtrot.paths;
                    tango = verify.bind(entity)(tango, zulu);
                    zulu = {};
                    verify = 11;
                    offset = foxtrot[verify];
                    offset = romeo.bind(entity)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = foxtrot[verify];
                    verify = romeo.bind(entity)(verify);
                    verify = verify.t;
                    verify = verify.bxw/f3;
                    verify = offset.bind(yankee)(verify);
                    zulu['title'] = verify;
                    zulu['items'] = golf;
                    mike = function(argFoo) { // Original name: onItemSelect
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = argFoo;
                            var _closure4_slot0 = entity;
                            tango = _closure2_slot2;
                            zulu = tango.find;
                            mike = function(argFoo) {
                                entity = argFoo;
                                mike = entity.id;
                                entity = _closure4_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            zulu = zulu.bind(tango)(mike);
                            mike = null;
                            if(!(mike != zulu)) { _fun00006_ip = 50; continue _fun00005 }
 39:
                            mike = _closure2_slot1;
                            entity = undefined;
                            entity = mike.bind(entity)(zulu);
 50:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot3;
                            entity = 8;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.hideActionSheet;
                            mike = mike.bind(zulu)();
                            return entity;
                        }
                    };
                    zulu['onItemSelect'] = mike;
                    golf = _closure2_slot0;
                    mike = null;
                    verify = mike == golf;
                    golf = undefined;
                    if(verify) { _fun00004_ip = 211; continue _fun00003 }
 202:
                    options = _closure2_slot0;
                    golf = options.id;
 211:
                    options = mike != golf;
                    mike = undefined;
                    if(!options) { _fun00004_ip = 223; continue _fun00003 }
 220:
                    mike = golf;
 223:
                    zulu['selectedItem'] = mike;
                    mike = 'SelectUpdatesChannel';
                    mike = report.bind(oscar)(tango, mike, zulu);
                    return entity;
                }
            };
            var _closure2_slot3 = entity;
            yankee = function(argFoo, argBar) { // Original name: renderChannelHook
                report = _closure1_slot6;
                mike = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 12;
                entity = zulu[entity];
                tango = undefined;
                entity = mike.bind(tango)(entity);
                zulu = entity.Text;
                mike = {'variant': 'text-sm/bold', 'color': 'header-primary'};
                entity = argFoo;
                mike['children'] = entity;
                entity = argBar;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            entity = _closure1_slot7;
            golf = entity.bind(tango)();
            report = _closure1_slot0;
            options = _closure1_slot3;
            entity = 5;
            entity = options[entity];
            mike = report.bind(tango)(entity);
            entity = mike.useChannelsUserCanStartStageIn;
            entity = entity.bind(mike)(verify);
            _closure2_slot2 = entity;
            mike = entity.length;
            entity = 1;
            entity = mike > entity;
            verify = _closure1_slot1;
            mike = 6;
            mike = options[mike];
            mike = verify.bind(tango)(mike);
            romeo = mike.bind(tango)(zulu);
            zulu = _closure1_slot6;
            mike = 12;
            mike = options[mike];
            mike = report.bind(tango)(mike);
            mike = mike.Text;
            report = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            golf = golf.channelText;
            report['style'] = golf;
            golf = _closure1_slot0;
            foxtrot = _closure1_slot3;
            oscar = 11;
            options = foxtrot[oscar];
            options = golf.bind(tango)(options);
            verify = options.intl;
            options = verify.format;
            oscar = foxtrot[oscar];
            oscar = golf.bind(tango)(oscar);
            oscar = oscar.t;
            if(entity) { _fun00002_ip = 259; continue _fun00001 }
 226:
            golf = oscar.S+9O7u;
            entity = {};
            entity['stageName'] = romeo;
            entity['stageHook'] = yankee;
            entity = options.bind(verify)(golf, entity);
            report['children'] = entity;
            entity = report;
            _fun00002_ip = 304; continue _fun00001;
 259:
            golf = oscar.AkzLcX;
            oscar = {};
            oscar['stageName'] = romeo;
            oscar['stageHook'] = yankee;
            offset = function(argFoo, argBar) { // Original name: changeHook
                report = _closure1_slot6;
                mike = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 12;
                entity = zulu[entity];
                tango = undefined;
                entity = mike.bind(tango)(entity);
                zulu = entity.Text;
                mike = {'onPress': null, 'variant': 'text-xs/medium', 'color': 'text-link'};
                entity = _closure2_slot3;
                mike['onPress'] = entity;
                entity = argFoo;
                mike['children'] = entity;
                entity = argBar;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            oscar['changeHook'] = offset;
            oscar = options.bind(verify)(golf, oscar);
            report['children'] = oscar;
            entity = report;
 304:
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();