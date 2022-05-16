import time
import json


d = dict()

personal_domain = "armagansalman.one"

d["personal_domain"] = personal_domain

id_tags = [(0, "id_tag_tuples.json"),\
            (1, "example.file")
]

d["id_tag_tuple_list"] = id_tags

id_refs = [(0, '/'.join([personal_domain, "local_files", "id_tag_tuples.json"])) \
        , (1, '/'.join([personal_domain, "local_files", "example.file"]))
]

d["id_ref_tuple_list"] = id_refs

with open("json-out.json", "a") as fp:
    json.dump(d, fp, indent = 4)
    fp.write(str(time.time()))
    fp.write('\n\n')
