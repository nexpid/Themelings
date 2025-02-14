// app/modules/media_channel/useShouldHideMediaOptions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelFlags;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_channel/useShouldHideMediaOptions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useShouldHideMediaOptions
        _fun90838: for(var _fun90838_ip = 0; ; ) switch(_fun90838_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 2;
            tango = tango[mike];
            mike = undefined;
            oscar = report.bind(mike)(tango);
            report = oscar.useStateFromStores;
            golf = _closure1_slot2;
            tango = new Array(1);
            tango[0] = golf;
            zulu = function() {
                _fun90839: for(var _fun90839_ip = 0; ; ) switch(_fun90839_ip) {
 0:
                    tango = _closure1_slot2;
                    zulu = tango.getChannel;
                    entity = _closure2_slot0;
                    report = zulu.bind(tango)(entity);
                    oscar = null;
                    zulu = oscar == report;
                    entity = undefined;
                    if(zulu) { _fun90839_ip = 41; continue _fun90839 }
 35:
                    entity = report.parent_id;
 41:
                    zulu = oscar != entity;
                    entity = null;
                    if(!zulu) { _fun90839_ip = 94; continue _fun90839 }
 50:
                    zulu = report.isForumPost;
                    zulu = zulu.bind(report)();
                    entity = null;
                    if(!zulu) { _fun90839_ip = 94; continue _fun90839 }
 65:
                    zulu = _closure1_slot2;
                    mike = zulu.getChannel;
                    oscar = oscar == report;
                    tango = undefined;
                    if(oscar) { _fun90839_ip = 89; continue _fun90839 }
 83:
                    tango = report.parent_id;
 89:
                    entity = mike.bind(zulu)(tango);
 94:
                    return entity;
                }
            };
            tango = report.bind(oscar)(tango, zulu);
            zulu = null;
            zulu = zulu == tango;
            if(zulu) { _fun90838_ip = 94; continue _fun90838 }
 73:
            zulu = tango.hasFlag;
            entity = _closure1_slot3;
            entity = entity.HIDE_MEDIA_DOWNLOAD_OPTIONS;
            mike = zulu.bind(tango)(entity);
 94:
            entity = true;
            entity = entity === mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();