# ========================================
# PRODUCTION Environment
# ========================================

environment  = "prd"
project_name = "terraform-ansible"

aws_region = "ap-south-1"

instance_type = "t3.small"   # slightly better for prod
key_name      = "terra-key"

vpc_cidr = "10.2.0.0/16"

public_subnet_cidrs = [
  "10.2.1.0/24",
  "10.2.2.0/24"
]

app_port = 80
